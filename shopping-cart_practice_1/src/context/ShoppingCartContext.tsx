import { createContext, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"


interface ICartItem {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  children: React.ReactNode
  cartQuantity: number
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartItems: ICartItem[]
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: { children: React.ReactNode }) {

  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity ?? 0
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      }
      else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity == 1) {
        return currItems.filter(item => item.id !== id)
      }
      else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          }
          else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }


  return (
    <ShoppingCartContext.Provider value={
      { children, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity }}>
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  )
}