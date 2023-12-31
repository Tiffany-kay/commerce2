import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Contact from './contact'
const Rout = ({product, setProduct, detail, view,close, setClose, cart, setCart, addtocart,rating, setRating}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} 
         detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} rating={rating} setRating={setRating}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} rating={rating} setRating={setRating}/>}/>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default Rout