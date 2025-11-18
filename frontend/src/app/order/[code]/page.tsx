import { DishCategory, StringItem, Table } from '@/app/lib/types';
import DishBrowser from '@/components/Order/DishBrowser';
import OrderNavbar from '@/components/Order/OrderNavbar';
import { getLocale, getTranslations } from 'next-intl/server';

const BACKEND_TARGET = process.env.BACKEND_TARGET || "http://localhost:8000";

export async function generateMetadata() {
  // This automatically uses the locale resolved in getRequestConfig()
  const t = await getTranslations('Order');

  return {
    title: t('browserTitle')
  };
}


async function fetchTable(code: string): Promise<Table> {
  const url = `${BACKEND_TARGET}/api/table/?code=${encodeURIComponent(code)}`;

  const res = await fetch(url.toString(), {
    // method: GET is the default
    cache: 'no-store',
  });

  if (!res.ok) {
    // console.log(`Table fetch failed: ${res.text()}`);
    throw new Error(`Table not found: ${res.status}`);
  }
  return res.json();
}


async function fetchDishData(tableCode: string): Promise<DishCategory[]> {
  const url = `${BACKEND_TARGET}/api/dishes/?table_code=${encodeURIComponent(tableCode)}`;

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      // add auth headers here if needed, e.g. Authorization: `Bearer ${token}`
    },
  });

  // Handle non-2xx responses
  if (!res.ok) {
    let errorBody = null;
    try {
      errorBody = await res.json();
    } catch (e) {
      // ignore parse errors
    }
    const msg = (errorBody && errorBody.detail) || res.statusText || 'Unknown error';
    throw new Error(`Failed to fetch dishes: ${msg}`);
  }
  return res.json();
}


interface PageProps {
  params: Promise<{ code: string }>;
}


export default async function Page({ params }: PageProps) {
  const { code } = await params;

  const locale = await getLocale();

  // Fetch table data
  let table: Table;
  try {
    table = await fetchTable(code);
  } catch (error: unknown) {
    return <p className="text-center text-red-500 pt-8 font-bold h-full bg-body-1">{`Failed to fetch restaurant ${code}`}</p>;
  }

  // Fetch dish data
  let dishData: DishCategory[];
  try {
    dishData = await fetchDishData(code);
  } catch (error: unknown) {
    return <p className="text-center text-red-500 pt-8 font-bold h-full bg-body-1">{`Failed to fetch restaurant dishes ${code}`}</p>;
  }



  return (
    <>
    {/* <OrderNavbar name={table.restaurant.name[locale as keyof StringItem] ?? table.restaurant.name.en} table_number={table.table_number} logo_url={table.restaurant.logo_url}/> */}
    <main className='flex flex-col h-dvh'>
      <DishBrowser dishData={dishData} code={code} table={table}/>
    </main>
    </>
  )
}