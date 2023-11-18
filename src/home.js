import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { BiSolidTruck } from 'react-icons/bi';
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { PiPercentFill } from 'react-icons/pi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { BsEmojiHeartEyes } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaWindowClose } from 'react-icons/fa'
import './home.css'
import Homeproduct from './homeproduct';
const Home = ({detail, view, close, setClose, addtocart}) => {
    const [homeproduct, setHomeproduct] = useState(Homeproduct)
  return (
    <>
    {
        close ?

    <div className='product_detail'>
        <div className='container'>
            <button onClick={()=>setClose(false)} className='closebtn'><FaWindowClose/></button>
            {
                detail.map((curElm)=>
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}/>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>Food That Satisfies You But Still Leaves You Craving More</p>
                                <h3>ksh.{curElm.Price}</h3>
                                <button>Add to Cart</button>
                                </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div> :null
}
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>Everybody Deserves to Eat</h2>
                <Link to='/Product' className='link'>Order Now<BsFillArrowRightSquareFill/></Link>
            </div>
            <div className='img_box'>
            <img src={process.env.PUBLIC_URL + '/img/logo2.jpeg'} width={160} height={200} alt='logo'></img>
            <img src={process.env.PUBLIC_URL + '/img/logo3.jpeg'} width={160} height={200} alt='logo'></img>
            <img src={process.env.PUBLIC_URL + '/img/platter.jpeg'} width={170} height={200} alt='logo'></img>
            </div>
        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <BiSolidTruck/>
                </div>
                <div className='detail'>
                    <h3> free shipping</h3>
                    <p> For orders above ksh.1500</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <FaHandHoldingDollar/>
                </div>
                <div className='detail'>
                    <h3> Return and Refund</h3>
                    <p>Money Back Guarantee</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <PiPercentFill/>
                </div>
                <div className='detail'>
                    <h3> Member discount</h3>
                    <p>On Every Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <TfiHeadphoneAlt/>
                </div>
                <div className='detail'>
                    <h3> Customer Support</h3>
                    <p>Get the help you need</p>
                </div>
            </div>
        </div>
    </div>
    <div className='product'>
        <h2>TOP PRODUCTS</h2>
        <div className='container'>
            {
                homeproduct.map((curElm)=>
                {
                    return(
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                <li onClick={() => addtocart(curElm)}><BsFillCartCheckFill/></li>
                                <li onClick={() => view(curElm)}><BsEmojiHeartEyes/></li>
                                <li><AiOutlineHeart/></li>
                                </div>
                            </div>
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>ksh.{curElm.Price}</h4>
                                </div>
                        </div>
                        
                    )
                })
            }

        </div>
    </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h3>LATEST FOOD ADDED</h3>
            <h2>RABBIT SHAWARMA </h2>
            <p><FaHandHoldingDollar/> KSH.1000</p>
            <Link to='/product' className='link'>Order Now <BsFillArrowRightSquareFill/> </Link>
        </div>
        <div className='img_box'>
            <img src={process.env.PUBLIC_URL + '/img/shawarma1.webp'} alt='shawarma'></img>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Home
