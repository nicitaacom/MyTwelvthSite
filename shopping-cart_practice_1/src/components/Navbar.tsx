import { NavLink } from "react-router-dom";

import { BiCart } from 'react-icons/bi'
import { useContext } from "react";
import useShoppingCart from "../hooks/useShoppingCart";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export function Navbar() {

  const { cartQuantity } = useShoppingCartContext()
  const shopptingCart = useShoppingCart()
  return (
    <div className="bg-[rgba(193,93,255,0.8)] shadow-md py-2 px-4
    flex justify-between">

      {/* LOGO */}
      <div>
        <h1 className="text-4xl text-green-400 font-bold">Logo</h1>
      </div>


      {/* LINKS */}
      <div className="flex justify-between items-center gap-x-4">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/store'}>Store</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </div>


      {/* CART/HAMBURGER */}
      <div className="flex items-center">
        <div className="relative cursor-pointer">
          <div className="before:w-4 before:h-4 before:bg-red-600 before:rounded-full 
        before:absolute before:bottom-0 before:right-0 before:translate-x-1/2 before:translate-y-1/2" onClick={shopptingCart.onOpen}>
            <BiCart size={26} />
            <div className="absolute flex justify-center items-center right-0 bottom-0 translate-x-1/2 translate-y-1/2
            text-sm font-bold">{cartQuantity}</div>
          </div>
        </div>
      </div>
    </div>
  )
}