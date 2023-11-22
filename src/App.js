import React, {useState} from 'react'
import Nav from './nav'
import Footer from './footer'
import {BrowserRouter} from 'react-router-dom'
import Rout from './rout'
import Productdetail from './produtdetail'
import Profile from './profile'


const App = () => {
  //add to cart
  const[cart,setCart] = useState([])
  //product detail
  const[close, setClose] =useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const [rating, setRating] = useState(0);
  const searchbtn = (product) =>
  {
    const change = Productdetail.filter((x) =>
    {return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }
  //add to cart
  const addtocart =(product) =>
  {
    const exist = cart.find((x)=>
    { 
      return x.id === product.id
    })
    if(exist)
    {
      alert("This Product is Already Added to Cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("Product is Added to Cart")
    }
      }
      console.log(cart)
        
  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} close={close} setClose={setClose} view={view} cart={cart} 
    setCart={setCart} addtocart={addtocart} rating={rating} setRating={setRating}/>
    <Footer />
    </BrowserRouter>
    <Profile></Profile>
    </>
  )
}

export default App