import { FooterShop } from "@/components/home/footershop";
import { Header } from "@/components/layout/header";
import { data } from "@/data";
import { StoreHydration } from "@/providers/store-hydratation";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <StoreHydration />
        <Header item={data.menu}/>
        <main className="w-full max-w-6xl bg-white mx-auto p-6">
            {children}
        </main>
        <FooterShop data={data.menu}/>
    </div>
  );
}
