import { setCartState } from "@/actions/set-cart-state";
import { useCartStore } from "@/store/cart";
import { CartListItem } from "@/types/cart-list-item";
import Image from "next/image";

type Props = {
  item: CartListItem;
};

export const CartProductItem = ({ item }: Props) => {
    const cartStore = useCartStore(state => state)

    const updateCookie = async () => {
        const updatedCart = useCartStore.getState().cart
        await setCartState(updatedCart)
    }
    const handleMinus = async () => {
        if(item.quantity > 1){
            cartStore.updateQuantity(item.product.id, item.quantity -1)
            await updateCookie()
        }else {
            await handleRemove()
        }
    }
    const handlePlus = async () => {
        cartStore.updateQuantity(item.product.id, item.quantity + 1)
        await updateCookie()
    }
    const handleRemove = async () => {
        cartStore.removeItem(item.product.id)
        await updateCookie()
    }
  return (
    <div className="flex items-center p-6 gap-4 md:gap-8 border-0 md:border-b border-gray-200">
      <div className="border border-gray-200 p-1">
        <Image
          src={item.product.image}
          alt={item.product.label}
          width={96}
          height={96}
          unoptimized
          className="size-24 md:size-16"
        />
      </div>
      <div className="flex-1 flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <div className="text-sm mb-2">{item.product.label}</div>
          <div className="hidden md:block text-xs text-gray-500">Cod {item.product.id}</div>
        </div>
        <div>
            <div className="w-30 flex text-gray-500 border border-gray-200 rounded-sm text-center ">
                <div onClick={handleMinus} className="size-10 cursor-pointer p-2 text-2xl flex justify-center items-center">
                    -
                </div>
                <div className="size-10 flex text-lg justify-center items-center p-2 ">
                    {item.quantity}
                </div>
                <div onClick={handlePlus} className="size-10 text-2xl cursor-pointer p-2 flex justify-center items-center">
                    +
                </div>
            </div>
        </div>
      </div>
      <div className="w-24 md:w-40 flex md:items-center items-end flex-col md:flex-row justify-between">
        <div className="text-lg text-blue-600">R$ {item.product.price.toFixed(2)}</div>
      </div>
        <div>
            <div onClick={handleRemove} className="cursor-pointer size-12 border border-gray-200 flex justify-center items-center">
                <Image src={'/ui/trash.png'} alt="" width={24} height={24}/>
            </div>
        </div>
    </div>
  );
};
