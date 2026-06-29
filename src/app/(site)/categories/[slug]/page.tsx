import { ProductListFilter } from "@/components/categories/product-list-filter";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCategoryWithMetadata } from "@/actions/get-category-with-metadata";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const filters = await searchParams;

  const categoryWithMetadata = await getCategoryWithMetadata(slug);
  if(!categoryWithMetadata) {
    redirect('/')
    return
  }
  return (
    <div>
      <div className="text-gray-500">
        <Link href={"/"}>Home</Link>
        &gt; {categoryWithMetadata.category.name}
      </div>
      <ProductListFilter category={categoryWithMetadata.category} metadata={categoryWithMetadata.metadata} filters={filters}/>
    </div>
  );
}
