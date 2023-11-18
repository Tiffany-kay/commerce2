import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [users, setUser] = useState(
        {
            Name:'', Email:'', Subject:'', Message:''
        }
    )
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
        const{ Name, Email, Subject, Message} = users
        const options = {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                Name,Email,Subject,Message
            })
        }
        const res = await fetch('https://e-commerce-contact-c737b-default-rtdb.firebaseio.com/Message.json', options)
        console.log(res)
        if(res.ok)
        {
            alert("Your Message is sent")
        }
        else
        {
            alert("An error has occured")
        }
    }
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># contact us</h2>
            <div className='form'>
                <form>
                    <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}/>
                    <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}/>
                    <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject' autoComplete='off' onChange={data}/>
                    <textarea name='Message' value={users.Message} placeholder='Your Message'autoComplete='off' onChange={data}></textarea>
                    {
                        isAuthenticated ?
                        < button type='button' onClick={senddata}>send</button>
                        :
                        < button type='button' onClick={() => loginWithRedirect()}>login to send</button>
                    }
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
