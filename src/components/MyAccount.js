import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'; 
import Tab from 'react-bootstrap/Tab';
import login from '../img/login.png';
import loginbg from '../img/loginbg.jpg';
import { Link } from 'react-router-dom';
const MyAccount = () => {
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
    });
    console.log(data);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    if(submitted){
      return (
        <div  className=' py-4' style={{background:`url(${loginbg})`,backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment:'fixed'}}>
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
                <h2>My Account</h2>
                <ul className='flex gap-3 p-0'>
                    <li><a href="/" className='text-white no-underline'>Home</a></li>
                    <li>/</li>
                    <li>Account</li>
                </ul>
            </div>
        </div>
      </div>
      <div style={{background:`url(${loginbg})`, backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment:'fixed'}}>
        <div className='container'> 
            <div className="max-w-2xl m-auto py-5">
                <div className='bg-white'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                    <Nav variant="pills" className="grid-cols-2 !grid text-center bg-neutral-200">
                    <Nav.Item>
                    <Nav.Link eventKey="first" className='!rounded-none'>Logni</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second" className='!rounded-none'>Register</Nav.Link>
                    </Nav.Item>
                    </Nav>  
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <form action="" onSubmit={submitForm}>
                            <div className="md:grid-cols-2 grid gap-4 p-4">
                                <div>
                                    <img src={login} alt="login" />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="Email">Your Email</label>
                                        <input type="Email"  required name='leadEmail' placeholder='Enter Your Email' className='block border px-3 py-2 w-full'  value={data.leadEmail} onChange={handleInputChange} />
                                    </div>
                                    <div className='mt-3'>
                                        <label htmlFor="password">Your Password</label>
                                        <input type="password"  required name="leadPassword" value={data.leadPassword} onChange={handleInputChange} placeholder='Enter Your Password' className='block border px-3 py-2 w-full'/>
                                    </div>
                                    <input type="submit" value="Submit" className=' mt-3 py-2 px-3 bg-orange-600 text-white w-full'/>
                                </div>                        
                            </div>
                        </form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
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
                                <div className='text-center'>
                                    <input type="submit" value="Submit" className=' mt-3 py-2 px-3 bg-orange-600 text-white md:w-1/2 w-full' />
                                </div>
                            </div>
                        </form>
                    </Tab.Pane>
                    </Tab.Content> 
                    </Tab.Container>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MyAccount
