import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({cart, setCart}) => {
    //increase quantity
    const incqty = (product) => {
        const exsit = cart.find((x) => x.id === product.id)
        setCart(cart.map((curElm) => curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm))
    }    
    //decrease quantity
    const decqty = (product) => {
        const exsit = cart.find((x) => x.id === product.id)
        if (exsit.qty > 1) {
            setCart(cart.map((curElm) => curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm))
        }
    }

    //remove cart product
    const removeproduct=(product) => {
        setCart(cart.filter((x) => x.id !== product.id))
    }

    // total price
    const totalPrice = cart.reduce((total, product) => {
        return total + (product.Price * product.qty);
    }, 0);


    return (
        <>
            <div className='cartcontainer'>
                {cart.length===0 &&  
                    <div className='emptycart'>
                        <h2 className='empty'>Cart is Empty</h2>
                        <Link to='/product' className='emptycartbutton'> Order Now</Link>
                    </div>
                }
                <div className='contant'>
                    {cart.map((curElm) => {
                        return(
                            <div className='cart_item' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                    <h4>{curElm.Cat}</h4>
                                    <h3>{curElm.Title}</h3>
                                    <p>Cost:ksh.{curElm.Price}</p>
                                    <div className='qty'>
                                        <button className='incqty' onClick={() => incqty(curElm)}>+</button>
                                        <input type='text' value={curElm.qty}></input>
                                        <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                    </div>
                                    <h4 className='subtotal'>sub total: ksh.{curElm.Price*curElm.qty}</h4>
                                    </div>
                                    <div className='close'>
                                    <button onClick={()=> removeproduct(curElm)}><FaWindowClose/></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            {cart.length > 0 && 
                <div className='total'>
                    <h2>Total Cost: ksh.{totalPrice}</h2>
                </div>
            }
            </div>    
        </>
    )
}

export default Cart
