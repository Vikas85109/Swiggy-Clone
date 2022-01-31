import React, { useState } from 'react';
import UserContext from './ContextCreateor';
import FilterContext from './FilterContext';
import CartContext from './CartContext';



export default function ContextWrapper({children}) {
    const [user, setUser] = useState(null);
    const [productArr, setproductArr] = useState([]);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState({
        search: "",
        cuisine: "",
    });

    const [cart, setCart] = useState([])
    function addToCart(id, name, price, image, cuisine, timing, rating) {
        
        let search = cart.find(item => item.id === id);
        if (search) {
            if (search.countInStock > search.countInCart + 1) {
                search.countInCart += 1;
                setCart([...cart]);
            }
        } else {
            cart.push({
                id,
                name,
                price,
                image,
                cuisine,
                rating,
                timing,
            })
            setCart([...cart]);
        }
        console.log(cart);
        // if the product is not in the cart, add it to the cart
    }

    function removeFromCart(id) {
        setCart(cart.filter(item => item.id !== id));
    }



  return (
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            <FilterContext.Provide value={{filter,setFilter}}>
                <UserContext.Provider value={{user,setUser,productArr,setproductArr,open,setOpen}}>
                    {children}
                </UserContext.Provider>
            </FilterContext.Provide>
        </CartContext.Provider>
  )
}
