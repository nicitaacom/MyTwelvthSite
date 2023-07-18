import { useContext } from "react"
import cartItems from '../data/items.json'
import { formatCurrency } from "../utils/currencyFormater"
import { useShoppingCartContext } from "../context/ShoppingCartContext"


interface ICartItem {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: ICartItem) {

  const { removeFromCart } = useShoppingCartContext()
  const item = cartItems.find(item => item.id === id)
  if (item == null) return null
  console.log(item)
  console.log(id)

  return (
    <div className="px-4 flex flex-row justify-between gap-x-2">
      <div>
        <img className="w-[250px] h-[140px]" src={item.imgUrl} alt={item.name} />
        <div className="flex flex-col gap-y-2">
          <h1>{item.name} <span>x{quantity}</span></h1>
          <p>{formatCurrency(item.price)}</p>
        </div>
      </div>

      <div className="flex flex-row">
        <h1 className="text-2xl text-gray-400">{item.price * quantity}</h1>
      </div>

    </div>
  )
}