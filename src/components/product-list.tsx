import { Product } from "@/types/product";
import { ProductItem } from "./product-item";

type Props = {
    list: Product[]
}

export const ProductList = ({list}:Props) => {
  return (
    <div className="mt-9 grid grid-cols-1 md:grid-cols-4 gap-8">
        {list.map(item => (
            <ProductItem key={item.id} data={item}/>
        ))}
    </div>
  );
};
