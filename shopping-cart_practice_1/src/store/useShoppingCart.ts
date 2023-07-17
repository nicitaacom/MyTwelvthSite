import { useState } from "react";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface ICartItem {
  id: number;
  quantity: number;
}

interface ShoppingCart {
  isOpenCart:boolean
  cartItems: ICartItem[]
  cartQuantity: number
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  // removeFromCart: (id: number) => void
}

export const shoppingCart = (set:any,get:any):ShoppingCart => ({
  isOpenCart:false,
  cartItems:[],
  cartQuantity:0,
openCart:() => {
  set(() => ({
    isOpenCart:true
  }))
},
closeCart:() => {
  set(() => ({
    isOpenCart:false
  }))
},
getItemQuantity:(id:number) => get((state:ShoppingCart) => 
  state.cartItems.find(item => item.id === id)?.quantity ?? 0
  ),
increaseCartQuantity:(id:number) => {
  set((state:ShoppingCart) => ({
    cartItems:state.cartItems.map((currItems:ICartItem) => 
    currItems.id === id ? {...currItems, quantity:currItems.quantity +1} : currItems
    )
  }))
},
decreaseCartQuantity:(id:number) => {
  set((state:ShoppingCart) => ({
    cartItems:state.cartItems.map((currItems:ICartItem) => 
    currItems.id === id ? {...currItems, quantity:currItems.quantity - 1} : currItems
    )
  }))
},
// removeFromCart:(id:number) => {
//   set((state:ShoppingCart) => ({
//     cartItems:state.cartItems.filter((item:ICartItem) => item.id !== id)
//   })
//   )
// }
}
)

const useShoppingCart = create(devtools(persist(shoppingCart,{name:"ShoppingCart"})))

export default useShoppingCart