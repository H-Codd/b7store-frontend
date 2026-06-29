import { ProductList } from "../product-list"
import { getRelatedProducts } from "@/actions/get-related-products"

type Props = {
    id:number
}

export const RelatedProduct = async ({id}:Props) => {
    const products = await getRelatedProducts(id)
    return(
       <div className="mt-10">
            <h3 className="text-2xl">Você também vai gostar</h3>
            <div className="mt-9">
                <ProductList list={products}/>
            </div>
       </div>
    )
}