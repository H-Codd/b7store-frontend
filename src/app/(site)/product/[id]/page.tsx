
import { ImageSlider } from "@/components/product/image.slider";
import { ProductDescription } from "@/components/product/product-description";
import { ProductDetails } from "@/components/product/product-details";
import { RelatedProductSkeleton } from "@/components/product/related-product-skeleton";
import { RelatedProduct } from "@/components/product/related-products";
import { data } from "@/data";
import Link from "next/link";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};
export default async function Page({ params }: Props) {
  const { id } = await params;
  // Consulta do produto pelo ID

  return (
    <div>
      <div className="text-gray-500">
        <Link href={"/"}>Home</Link>&gt; 
        <Link href={'/'}>????</Link> &gt;
        {data.product.label} 
        
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-32">
        <ImageSlider images={data.product.images}/>
        <ProductDetails product={data.product} />
      </div>
        <ProductDescription text={data.product.description} />

        <Suspense fallback={<RelatedProductSkeleton/>}>
              <RelatedProduct id={data.product.id} />  
        </Suspense>
    </div>
  );
}
