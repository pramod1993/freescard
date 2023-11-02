import React, { useState } from 'react';
import Slider from 'react-slick';
import about from '../img/about.jpg';
import abouticon from '../img/about-icons-1.svg';
import abouticon1 from '../img/about-icons-2.svg';
import abouticon2 from '../img/about-icons-3.svg';
import CountUp from 'react-countup';
import team from '../img/team-1.png';
import team1 from '../img/team-2.png';
import team2 from '../img/team-3.png';
import team3 from '../img/team-4.png';
import team4 from '../img/team-5.png';
const About = () => { 
    const settings = { 
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };
  return (
    <>
      <div className='bg-slate-500'>
        <div className="container">
            <div className='text-white  py-4'>
                <h2>About Us</h2>
                <ul className='flex gap-3 p-0'>
                    <li><a href="/" className='text-white no-underline'>Home</a></li>
                    <li>/</li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="md:grid-cols-2 grid gap-3">
            <div>
                <h1>The Future of Grocery Delivery:</h1>
                <p>By powering the future of grocery with our retail partners, 
                we give everyone access to the food they love and more 
                time to enjoy it together.</p>
            </div>
            <div>
                <img src={about} alt="about" />
            </div>
        </div>
      </div>

      <div className="container">
        <div className="md:grid-cols-3 grid gap-3 mt-4">
            <div className='bg-slate-100'>
                <div className='text-center flex justify-center'>
                    <img src={abouticon} alt="abouticon" />
                </div>
                <div className='p-4'>
                    <h3>Grow my business with Freshcart</h3>
                    <p>Duis placerat, urna ut dictum lobortis, erat libero 
                    feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
                    <a href="#" className='bg-slate-700 text-white px-3 py-2 no-underline'>FreshCart Platform</a>
                </div>
            </div>

            <div className='bg-slate-100'>
                <div className='text-center flex justify-center'>
                    <img src={abouticon1} alt="abouticon" />
                </div>
                <div className='p-4'>
                    <h3>Grow my business with Freshcart</h3>
                    <p>Duis placerat, urna ut dictum lobortis, erat libero 
                    feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
                    <a href="#" className='bg-slate-700 text-white px-3 py-2 no-underline'>FreshCart Platform</a>
                </div>
            </div>

            <div className='bg-slate-100'>
                <div className='text-center flex justify-center'>
                    <img src={abouticon2} alt="abouticon" />
                </div>
                <div className='p-4'>
                    <h3>Grow my business with Freshcart</h3>
                    <p>Duis placerat, urna ut dictum lobortis, erat libero 
                    feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
                    <a href="#" className='bg-slate-700 text-white px-3 py-2 no-underline'>FreshCart Platform</a>
                </div>
            </div>
        </div>
        <p className='mt-2'>For assistance using Freshcart services, please visit our Help Center</p>
      </div>
      <div className='bg-emerald-600 mt-4 py-5'>
        <div className="container">
            <div  className='text-center text-white'>
                <h3>Trusted by retailers. Loved by customers.</h3>
                <p>We give everyone access to the food they love and more time to enjoy it together.</p>
            </div>
            <div className="md:grid-cols-4 grid gap-3 mt-2">
                <div className='text-center text-white'>
                    <h2 className='text-5xl font-semibold font-sans'><CountUp start={0} end={500}/>K</h2>
                    <p>Shoppers</p>
                </div>
                <div className='text-center text-white'>
                    <h2 className='text-5xl font-semibold font-sans'><CountUp start={0} end={4500}/>+</h2>
                    <p>Cities</p>
                </div>
                <div className='text-center text-white'>
                    <h2 className='text-5xl font-semibold font-sans'><CountUp start={0} end={40}/>K+</h2>
                    <p>Stores</p>
                </div>
                <div className='text-center text-white'>
                    <h2 className='text-5xl font-semibold font-sans'><CountUp start={0} end={650}/>+</h2>
                    <p>Retail Brands</p>
                </div>
            </div>
        </div>
      </div>
      <div className="container">
        <h2>Our Leadership</h2>
        <Slider {...settings}>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
              <img src={team} alt="team" />
              <div>
                <p className='font-semibold'>Dairy, Bread & Eggs</p>
              </div>
            </div>
          </div>
            <div>
              <div className='gap-3 grid border m-3 items-center justify-center text-center'>
              <img src={team1} alt="team1" />
                <div>
                  <p className='font-semibold'>Atta, Rice & Dal</p>
                </div>
              </div>
            </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
            <img src={team2} alt="team2" />
              <div>
                <p className='font-semibold'>Snack & Munchies</p>
              </div>
            </div>
          </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
            <img src={team3} alt="team3" />
              <div>
                <p className='font-semibold'>Bakery & Biscuits</p>
              </div>
            </div>
          </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
            <img src={team4} alt="team4" />
              <div>
                <p className='font-semibold'>Instant Food</p>
              </div>
            </div>
          </div>
          
                    
      </Slider>
      </div>
    </>
  )
}

export default About

