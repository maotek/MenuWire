import OrderNavbar from '@/components/Order/OrderNavbar';
import DishBrowser from '@/components/Order/DishBrowser';
import { getTranslations } from 'next-intl/server';
import { fetchCategories } from '@/data/mockData';
import { DishCategory, Dish } from '@/app/lib/types';

/** --- Openverse resolver (inline) --- */
type OpenverseItem = { url?: string; thumbnail?: string };
async function resolveOpenverseImage(apiUrl: string): Promise<string | null> {
  try {
    const u = new URL(apiUrl);
    // If it's already a direct image URL, just return it
    if (u.hostname !== 'api.openverse.org') return apiUrl;

    const res = await fetch(apiUrl, {
      // Cache for 1 day so we don’t hammer Openverse
      next: { revalidate: 60 * 60 * 24 },
      headers: { 'User-Agent': 'menuwire/1.0 (+https://example.com)' },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const first: OpenverseItem | undefined = data?.results?.[0];
    // Prefer smaller thumbnail for cards; fall back to original url
    return first?.thumbnail || first?.url || null;
  } catch {
    return null;
  }
}

/** --- Tiny concurrency limiter (inline) --- */
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

/** --- Fetch + resolve in one go (inline) --- */
async function fetchCategoriesResolved(): Promise<DishCategory[]> {
  const categories = await fetchCategories();
  const limit = pLimit(8); // be polite

  const resolved = await Promise.all(
    categories.map(async (cat) => {
      const dishes = await Promise.all(
        cat.dishes.map((dish: Dish) =>
          limit(async () => {
            const real = await resolveOpenverseImage(dish.image);
            return {
              ...dish,
              image: real ?? '/assets/logo.png', // fallback asset you ship
            };
          })
        )
      );
      return { ...cat, dishes };
    })
  );

  return resolved;
}

/** --- Next.js metadata --- */
export async function generateMetadata() {
  const t = await getTranslations('Order');
  return { title: t('browserTitle') };
}

/** --- Page component --- */
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