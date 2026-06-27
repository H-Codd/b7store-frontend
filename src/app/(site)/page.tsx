import { InfoCard } from "@/components/home/infocard";
import { data } from "@/data";
import { Banners } from "@/components/home/banners";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { Suspense } from "react";
import { MostViewedProducts } from "@/components/home/most-viewed-products";
import { MostSoldProducts } from "@/components/home/most-sold-products";
import { FooterEmail } from "@/components/home/footer-email";

export default function Page() {
  return (
    <div className="">
      <Banners list={data.banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:12">
        <InfoCard
          icon="/ui/truck-line.png"
          title="Frete Grátis"
          description="Para todo o Nordeste"
        />
        <InfoCard
          icon="/ui/discount-percent-line.png"
          title="Muitas Ofertas"
          description="Ofertas Imbátiveis"
        />
        <InfoCard
          icon="/ui/arrow-left-right-line.png"
          title="Troca Fácil"
          description="No período de 30 dias"
        />
      </div>
      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProducts />
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProducts />
      </Suspense>
      <FooterEmail />
      
    </div>
  );
}
