import DishBrowser from '@/components/Order/DishBrowser';
import { getTranslations } from 'next-intl/server';
import { fetchCategories } from '@/data/mockData';
import { DishCategory, Dish } from '@/app/lib/types';

/**
 * An item from the Openverse API response.
 */
type OpenverseItem = { url?: string; thumbnail?: string };

/**
 * Fetches an image URL from the Openverse API.
 * If the provided URL is not for Openverse, it's returned directly.
 * This allows using both direct image links and Openverse search results.
 * @param apiUrl The URL to resolve, which can be a direct image link or an Openverse API link.
 * @returns A direct URL to an image, or null if resolution fails.
 */
async function resolveOpenverseImage(apiUrl: string): Promise<string | null> {
  try {
    const u = new URL(apiUrl);
    // If it's already a direct image URL, just return it.
    if (u.hostname !== 'api.openverse.org') return apiUrl;

    const res = await fetch(apiUrl, {
      // Cache for 1 day so we don’t hammer the Openverse API.
      next: { revalidate: 60 * 60 * 24 },
      headers: { 'User-Agent': 'menuwire/1.0 (+https://example.com)' },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const first: OpenverseItem | undefined = data?.results?.[0];
    // Prefer the smaller thumbnail for performance; fall back to the full-size URL.
    return first?.thumbnail || first?.url || null;
  } catch {
    return null;
  }
}

/**
 * A simple promise-based concurrency limiter.
 * This prevents sending too many network requests at once when fetching images.
 * @param n The maximum number of concurrent promises.
 */
function pLimit(n: number) {
  const queue: Array<() => void> = [];
  let active = 0;
  const next = () => {
    active--;
    queue.shift()?.();
  };
  return function limit<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      const run = () => {
        active++;
        fn().then((v) => { resolve(v); next(); }, (e) => { reject(e); next(); });
      };
      active < n ? run() : queue.push(run);
    });
  };
}

/**
 * Fetches the dish categories and resolves all dish images from Openverse.
 * It uses a concurrency limiter to be polite to the external API.
 */
async function fetchCategoriesResolved(): Promise<DishCategory[]> {
  const categories = await fetchCategories();
  const limit = pLimit(8); // Limit to 8 concurrent image requests.

  const resolved = await Promise.all(
    categories.map(async (cat) => {
      const dishes = await Promise.all(
        cat.dishes.map((dish: Dish) =>
          limit(async () => {
            const real = await resolveOpenverseImage(dish.image);
            return {
              ...dish,
              image: real ?? '/assets/logo.png', // Use a local fallback image if resolution fails.
            };
          })
        )
      );
      return { ...cat, dishes };
    })
  );

  return resolved;
}

/**
 * Sets the page title using translated content.
 * This is a standard Next.js metadata function.
 */
export async function generateMetadata() {
  const t = await getTranslations('Order');
  return { title: t('browserTitle') };
}

/**
 * The main server component for the order demo page.
 * It fetches all necessary data and handles rendering of the DishBrowser.
 */
export default async function Page() {
  try {
    const dishData = await fetchCategoriesResolved();
    return (
      <>
        <main className="flex flex-col h-dvh">
          <DishBrowser dishData={dishData} code={""}/>
        </main>
      </>
    );
  } catch {
    return (
      <p className="text-center text-red-500 mt-8 font-bold">
        Failed to fetch restaurant dishes
      </p>
    );
  }
}