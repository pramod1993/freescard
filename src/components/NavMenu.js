import React from 'react'
import * as Styled from './NavMenuStyled';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import {FiShoppingBag} from 'react-icons/fi';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MyAccount from './MyAccount';
const NavMenu = () => {
  return (
    <>
    <Router>
    <div className="container">
        <div className="flex justify-center items-center my-3">
            <div className='w-1/3 sm:block hidden'>
                <h2 className=' '><b>FreesCard</b></h2>
            </div>
            <div className='sm:w-1/2'>
                <form action="">
                    <div className='w-full items-stretch flex relative'>
                        <input type="search" name="search" placeholder='Search ....' className='border  px-3 py-2 outline-none w-full rounded-full' />
                        <span className='absolute right-3 top-3'><BsSearch/></span>
                    </div>
                </form>
            </div>
            <div className='sm:w-2/12 w-1/3 pl-3'>
                <div className="flex md:gap-3 gap-0">
                    <span className='relative w-10'><AiOutlineHeart className='text-2xl'/><sup className='bg-green-700 rounded-full w-4 h-4 absolute right-2 text-white flex items-center  justify-center'>0</sup></span>
                    <span className=' w-10'><BiUser className='text-2xl'/></span>
                    <span className='relative  w-10'><FiShoppingBag className='text-2xl'/><sup className='bg-green-700 rounded-full w-4 h-4 absolute right-2 text-white flex items-center  justify-center'>1</sup></span>
                </div>
            </div>
        </div>
    </div>
    <Navbar expand="lg" className="bg-body-tertiary md:leading-5 leading-10 p-0">
      <div className='container'>
        <Navbar.Brand href="#home" className=' sm:hidden block'>FreesCard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div>
                <ul className='p-0 m-0'>
                    <Styled.drop>
                        <a href="#" className='no-underline text-white py-2 px-3 bg-orange-600 '>All Departments</a>
                        <ul className='submenu shadow-lg border' >
                            <li className='border-b'>
                                <a href="#" className='no-underline text-white hover:!text-yellow-300'>Dairy, Bread & Eggs</a>
                            </li>
                            <li className='border-b'>
                                <a href="#" className='no-underline text-white hover:!text-yellow-300'>Snacks & Munchies</a>
                            </li>
                            <li className='border-b'>
                                <a href="#" className='no-underline text-white hover:!text-yellow-300'>Fruits & Vegetables</a>
                            </li>
                            <li className='border-b'>
                                <a href="#" className='no-underline text-white hover:!text-yellow-300'>Cold Drinks & Juices</a>
                            </li>
                            <li className='border-b'>
                                <a href="#" className='no-underline text-white hover:!text-yellow-300'>Breakfast & Instant Food</a>
                            </li>
                            <li className='border-b'>
                                <a href="#" className='no-underline text-white hover:!text-yellow-300'>Bakery & Biscuits</a>
                            </li>
                            <li className=''>
                                <a href="#" className='no-underline text-white hover:!text-yellow-300'>Chicken, Meat & Fish</a>
                            </li>
                        </ul>
                    </Styled.drop>
                </ul>
            </div>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/">Shop</Nav.Link> 
            <Nav.Link as={Link} to="/">Pages</Nav.Link>
            <Nav.Link as={Link} to="/account">Account</Nav.Link> 
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/account' element={<MyAccount/>}/>
        </Routes>
    </div>
    </Router>
    </>
  )
}

export default NavMenu
