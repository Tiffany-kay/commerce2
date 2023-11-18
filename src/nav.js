import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { RiLoginBoxFill } from 'react-icons/ri';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'

const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
<div className='free'>
    
        <div className='icon'>
            <FaTruckMoving/>
        </div>
        <p>FREE SHIPPING FOR GOODS ABOVE KSH.1500</p>
</div>
<div className='main_header'>
    <div className='container'>
        <div className='logo'>
            <img src={process.env.PUBLIC_URL + '/img/foodlogo.jpeg'} width={50} height={50} alt='shopworth'></img>
            <h3>food that seduces you</h3>
        </div>
        <div className='search_box'>
            <input type='text' value={search}placeholder='Search your Product' autoComplete='off' onChange={(e)=> setSearch(e.target.value)}></input>
            <button onClick={() => searchbtn (search)}>Search</button>
        </div>
        <div className='icon'>
            {
                isAuthenticated &&
                (
                    <div className='account'>
                <div className='user_icon'>
                    <AiOutlineUser />
                </div>
                <p>Hello, {user.name}</p>
            </div>
                )
            }
            <div className='second_icon'>
            <Link to="/" className='link'><AiOutlineHeart/></Link>
            <Link to="/cart" className='link'><BsFillCartCheckFill /></Link>
            </div>
        </div>
    </div>
</div>
<div className='header'>
    <div className='container'>
        <div>
<ul>
    <li>
        <Link to="/ " className='link'>Home</Link>
    </li>
    <li>
        <Link to="/Product"className='link'>Product</Link>
    </li>
    <li>
        <Link to="/About"className='link'>About</Link>
    </li>
    <li>
        <Link to="/contact"className='link'>Contact</Link>
    </li>
</ul>
</div>
<div className='auth'>
    {
isAuthenticated?
<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><RiLogoutBoxFill/>log out</button>
:
<button onClick={()=> loginWithRedirect()}><RiLoginBoxFill/>log in</button>
    }
</div>

    </div>
</div>
    </>
  )
}

export default Nav