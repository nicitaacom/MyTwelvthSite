import { useContext } from 'react'
import { formatCurrency } from '../utils/currencyFormater'
import { useShoppingCartContext } from '../context/ShoppingCartContext'

interface StoreItemProps {
  id: number
  name: string
  price: number
  imgUrl: string
}


export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCartContext()
  const quantity = getItemQuantity(id)

  return (
    <div>
      <div className='shadow-md border-[1px] border-solid border-gray-400 rounded-md overflow-hidden' key={id}>

        <img className='h-[200px] w-full object-cover' src={imgUrl} alt={name} />

        <div className='flex justify-between text-2xl mb-2 px-2'>
          <h1>{name}</h1>
          <h1 className='text-gray-500'>{formatCurrency(price)}</h1>
        </div>
        <div className='mt-auto'>
          {quantity === 0
            ? <div className='bg-green-600 px-4 py-2 text-xl text-center' onClick={() => increaseCartQuantity(id)}>+ Add to Cart</div>
            : <div>
              <div className='flex flex-col items-center gap-y-2 px-4 py-2'>
                <div className='flex flex-row gap-x-4 border-[1px] border-solid border-gray-400 rounded-md overflow-hidden'>
                  <button className='bg-green-500 w-8 h-8' onClick={() => increaseCartQuantity(id)}>+</button>
                  <h1 className='text-2xl text-gray-400'>{quantity}</h1>
                  <button className='bg-red-500 w-8 h-8' onClick={() => decreaseCartQuantity(id)} >-</button>
                </div>
                <div className='flex flex-row justify-center'>
                  <button className='bg-red-500 w-full px-4 py-2 rounded' onClick={() => removeFromCart(id)}>Remove</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>

  )
}