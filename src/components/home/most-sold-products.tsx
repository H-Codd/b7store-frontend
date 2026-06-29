
import { ProductList } from "../product-list";
import { getProducts } from "@/actions/get-product";

export const MostSoldProducts = async () => {
   const products = await getProducts({
      orderBy: 'selling',
      limit: 4
    })
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center md:text-left">Produtos Mais Vendidos</h2>
      <p className="text-gray-500 text-center md:text-left">Campeões de vendas da nossa loja.</p>

        <div className="mt-9">
            <ProductList list={products} />
        </div>
    </div>
  );
};
