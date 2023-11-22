import React, {useState} from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({cart, setCart, rating, setRating,}) => {
    const [reviews, setReviews] = useState({});
        const [users, setUser] = useState(
            {
                Name:'', Email:'', Subject:'', Review:''
            }
        )
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
    const updateQuantity = (e, product) => {
        const newQty = parseInt(e.target.value, 10);
        setCart((prevCart) =>
           prevCart.map((item) =>
              item.id === product.id ? { ...item, qty: newQty } : item
           )
        );
     };
    //remove cart product
    const removeproduct=(product) => {
        setCart(cart.filter((x) => x.id !== product.id))
    }

    // total price
    const totalPrice = cart.reduce((total, product) => {
        return total + (product.Price * product.qty);
    }, 0);

    const handleRatingClick = (productId, value) => {
        setReviews((prevReviews) => ({
            ...prevReviews,
            [productId]: value,
          }));
       };
        
        let name, value
        const data = (e) =>
        {
            name = e.target.name;
            value = e.target.value;
            setUser({...users, [name]: value})
        }
        const senddata = async (e) =>
        {
            e.preventDefault();
            const{ Name, Email, Subject, Review} = users
            const options = {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({
                    Name,Email,Subject,Review
                })
            }
            const res = await fetch('https://e-commerce-contact-c737b-default-rtdb.firebaseio.com/Review.json', options)
            console.log(res)
            if(res.ok)
            {
                alert("Your review is sent")
            }
            else
            {
                alert("An error has occured")
            }
        }
               
          const getReviewForProduct = (productId) => {
            return reviews[productId] || 0; // Default to 0 if no review is available
          };
          const handleCheckout = () => {
            alert("Checkout successful//CASH ON DELIVERY");
        }
        

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
                                    <div className='rating'>
                             {[...Array(5)].map((_, i) => (
                                 <AiOutlineStar  key={i}
                                 onClick={() => handleRatingClick(curElm.id, i + 1)}
                                 className={getReviewForProduct(curElm.id) >= i + 1 ? 'selected' : ''}
                               />
                             ))}
                           </div>
                                    <p>Cost:ksh.{curElm.Price}</p>
                                    <div className='qty'>
                                        <button className='incqty' onClick={() => incqty(curElm)}>+</button>
                                        <input type='text'value={curElm.qty} onChange={(e) => updateQuantity(e, curElm)}/>
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
                <div className='contact_container'>
            <div className='form'>
                <form>
                    <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}/>
                    <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}/>
                    <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Review' autoComplete='off' onChange={data}/>
                    <textarea name='Review' value={users.Review} placeholder='Your Review'autoComplete='off' onChange={data}></textarea>
                    
                        < button type='button' onClick={senddata}>send</button>
                </form>
            </div>
    </div>
            {cart.length > 0 && 
                <div className='total'>
                    <h2>Total Cost: ksh.{totalPrice}</h2>
                </div>
            }
            <div className='checkout-container'>
                    {cart.length > 0 &&
                        <button className='checkout' onClick={() => handleCheckout()}>Checkout</button>
                    }
                </div>
            </div>    
        </>
    )
}

export default Cart
