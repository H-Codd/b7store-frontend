
import { ProductList } from "../product-list";
import { getProduct } from "../../../b7store-backend/src/services/product";
import { getProducts } from "@/actions/get-product";

export const MostViewedProducts = async () => {

  const products = await getProducts({
    orderBy: 'views',
    limit: 4
  })
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center md:text-left">Produtos Mais Vistos</h2>
      <p className="text-gray-500 text-center md:text-left">Campeões de visualização da nossa loja.</p>

        <div className="mt-9">
            <ProductList list={products} />
        </div>
    </div>
  );
};
