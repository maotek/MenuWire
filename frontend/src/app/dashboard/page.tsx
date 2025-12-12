import Dashboard from "@/components/Dashboard/Dashboard";
import OrderNavbar from "@/components/Order/OrderNavbar";
import { getTranslations } from "next-intl/server";


export async function generateMetadata() {
  // This automatically uses the locale resolved in getRequestConfig()
  const t = await getTranslations('Order');

  return {
    title: t('browserTitle')
  };
}


export default async function Page() {
  return (
    <>
      {/* <OrderNavbar name={t('title')} /> */}
      <main className="flex flex-col text-heading-1 h-screen">
        <div className="h-full">
          <Dashboard />
        </div>
      </main>
    </>
  )
}