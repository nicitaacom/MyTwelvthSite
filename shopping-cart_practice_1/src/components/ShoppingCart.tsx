import { CSSProperties, useContext, useEffect, useRef, useState } from "react"

import { TapCallback, useSwipeable } from "react-swipeable";
import useShoppingCart from "../hooks/useShoppingCart"
import gsap from 'gsap'
import { motion } from "framer-motion";

import { CartItem } from "./CartItem";
import { useShoppingCartContext } from "../context/ShoppingCartContext";


export function ShoppingCart() {

  const { cartItems } = useShoppingCartContext()
  const shopptingCart = useShoppingCart()
  const sidebarRef = useRef(null)


  function hideSidebar() {
    const sidebar = sidebarRef.current
    gsap.to(sidebar, {
      duration: 0.2, x: 300,
      onComplete: () => shopptingCart.onClose(),
    },)
  }


  /* for sidebar swiping - start */
  const [touched, setTouched] = useState(false);
  const [delta, setDelta] = useState<number | null>(0);

  const onTouchEndOrOnMouseUp: TapCallback = () => {
    if (typeof delta === "number" && delta < -110) {
      hideSidebar();
    }
    setTouched(false);
  };

  useEffect(() => {
    if (!touched && typeof delta === "number" && delta < 0) {
      setTimeout(() => {
        setDelta(delta + 1);
      }, 0.2);
    }
    if (typeof delta === "number" && delta > 0) setDelta(null);
  }, [touched, delta]);

  const handlers = useSwipeable({
    onTouchStartOrOnMouseDown: () => {
      setTouched(true);
    },

    onTouchEndOrOnMouseUp,
    onSwiping: (e) => {
      const { deltaX } = e;

      setDelta(deltaX);
    },
    trackMouse: true
  });

  const sidebarStyle: CSSProperties = {};
  if (delta !== null) {
    if (delta <= 0) {
      sidebarStyle.marginLeft = delta;
    }
  } else {
    sidebarStyle.marginLeft = 0;
  }
  /* for sidebar swiping - end */



  return (
    <div>
      {shopptingCart.isOpen &&

        <div className={`fixed bg-black/[0.6] top-0 right-0 left-0 bottom-0 z-[99]`} onClick={() => hideSidebar()}
          {...handlers}
        >
          <motion.div className={`fixed top-0 bottom-0 right-0 w-[300px]
      flex px-6 py-2 bg-gray-300
      MobileM:px-10
      MobileL:px-12
      !right-[-${delta}px]`} ref={sidebarRef}
            animate={{ x: [300, 0] }}
            transition={{ duration: 0.4 }}
            style={sidebarStyle}>
            <ul className="flex flex-col gap-6" onClick={e => e.stopPropagation()}>
              <h1 className="text-white text-3xl mt-2">Cart</h1>
              {cartItems.map(item => <CartItem key={item.id} {...item} />)}
            </ul>
          </motion.div>

        </div>}
    </div >
  )
}