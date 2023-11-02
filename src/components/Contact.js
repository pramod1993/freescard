import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {MdCall} from 'react-icons/md';
import {BiTimeFive} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import contact from '../img/contact.jpeg';
import { Link } from 'react-router-dom';
const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const submitForm = (e) =>{
      e.preventDefault();
      try{
        setSubmitted(true);
      } catch{
  
      }
    };
    const [data, setData] = useState ({
      leadName: "",
      leadLast: "",
      leadMobile: "",
      leadEmail: "",
      leadPassword: "", 
      leadCompany: "", 
      leadTitle: "", 
      leadComment: "", 
    }); 
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    if(submitted){
      return (
        <div  className=' py-4' style={{background:`url(${contact})`,backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
        <div className="max-w-2xl m-auto bg-[#ffffffd1] rounded-md py-12 relative text-center">
          <p className="font-semibold m-0">
            Thanks for your response,
            <span className="block">expect a call from us soon.</span>
          </p>
          <div className="grid grid-cols-3 text-center ">
            <hr className="m-5" />
            <span className="relative left-0 right-0 m-auto ">OR</span>
            <hr className="m-5" />
          </div>
          <p className="m-0 font-semibold">
            <Link to="/" className="link no-underline text-black ">
              <span className="text-primary">Click Here</span> to
               Call Us Now
            </Link>
          </p>
        </div>
        </div>
      )
    }
  return (
    <>
      <div className='bg-slate-500'>
        <div className="container">
            <div className='text-white  py-4'>
                <h2>Contact Us</h2>
                <ul className='flex gap-3 p-0'>
                    <li><a href="/" className='text-white no-underline'>Home</a></li>
                    <li>/</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
      </div>
      <div  style={{background:`url(${contact})`,backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment:'fixed'}}>
        <div className="max-w-4xl m-auto py-5">
            <div className="md:grid-cols-2 grid gap-3 bg-white">
                <div className='text-black p-3 '>
                    <div className='flex items-center gap-2 mt-2'>
                        <AiOutlineHome className='w-10 h-10 p-2 '/>  31A, Udyog Vihar, Sector 18, Gurugram, Haryana, 122015
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <AiOutlineMail className='w-10 h-10 p-2 '/> pramod@info.com
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <MdCall className='w-10 h-10 p-2 '/> +91 9898989898
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <BiTimeFive className='w-10 h-10 p-2 '/> 10:30 AM To 07:30 PM
                    </div>
                    
                </div>
                <div>
                <form action="" onSubmit={submitForm}>
                            <div className='bg-white p-4'>
                                <div className="md:grid-cols-2 grid gap-3">
                                    <div>
                                        <label htmlFor="name">First Name</label>
                                        <input type="text" required name='leadName'  onChange={handleInputChange}  value={data.leadName} placeholder='Enter Your First Name' className='block border px-3 py-2 w-full' />
                                    </div>
                                    <div>
                                        <label htmlFor="name">Last Name</label>
                                        <input type="text" required name='leadLast'  onChange={handleInputChange} value={data.leadLast} placeholder='Enter Your Last Name' className='block border px-3 py-2 w-full'/>
                                    </div>
                                    <div>
                                        <label htmlFor="Company">Company</label>
                                        <input type="text" required name='leadCompany'  onChange={handleInputChange}  value={data.leadCompany} placeholder='Enter Your Company' className='block border px-3 py-2 w-full'/>
                                    </div>
                                    <div>
                                        <label htmlFor="Title">Title</label>
                                        <input type="text" required name='leadTitle'  onChange={handleInputChange}  value={data.leadTitle} placeholder='Enter Your Title' className='block border px-3 py-2 w-full'/>
                                    </div>
                                    <div>
                                        <label htmlFor="Email">Your Email</label>
                                        <input type="Email" required name='leadEmail' onChange={handleInputChange} value={data.leadEmail} placeholder='Enter Your Email' className='block border px-3 py-2 w-full'/>
                                    </div>
                                    <div>
                                        <label htmlFor="Mobile">Your Mobile</label>
                                        <input type="text" required name='leadMobile' onChange={handleInputChange}  value={data.leadMobile} placeholder='Enter Your Mobile Number' className='block border px-3 py-2 w-full'/>
                                    </div>
                                    
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="Comment">Comment</label>
                                    <textarea name="leadComment" required cols="10" rows="5" placeholder='Comments' className='block border px-3 py-2 w-full'  onChange={handleInputChange}  value={data.leadComment} ></textarea>
                                </div>
                                <div className='text-center'>
                                    <input type="submit" value="Submit" className=' mt-3 py-2 px-3 bg-orange-600 text-white md:w-1/2 w-full' />
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
