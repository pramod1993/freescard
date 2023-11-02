import React from 'react'
import * as Styled from './HomeStyled';
import Carousel from 'react-bootstrap/Carousel';  
import slide1 from '../img/slide-1.jpg';
import slide2 from '../img/slider-2.jpg';
import Slider from 'react-slick';
import category from '../img/category.jpg';
import category1 from '../img/category1.jpg';
import category2 from '../img/category2.jpg';
import category3 from '../img/category3.jpg';
import category4 from '../img/category4.jpg';
import category5 from '../img/category5.jpg';
import category6 from '../img/category6.jpg';
import category7 from '../img/category7.jpg';
import category8 from '../img/category8.jpg';
import category9 from '../img/category9.jpg';
import grocery from '../img/grocery.png';
import grocery1 from '../img/grocery1.jpg';
import product from '../img/product.jpg';
import product1 from '../img/product1.jpg';
import product2 from '../img/product2.jpg';
import product3 from '../img/product3.jpg';
import product4 from '../img/product4.jpg';
import product5 from '../img/product5.jpg';
import product6 from '../img/product6.jpg';
import product7 from '../img/product7.jpg';
import product8 from '../img/product8.jpg';
import product9 from '../img/product9.jpg';
import {BsEye} from 'react-icons/bs';
import {BsHeart} from 'react-icons/bs';
import {PiArrowsLeftRight} from 'react-icons/pi';
import {AiFillStar} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';
import productImg from '../img/product-img.jpg';
import productImg1 from '../img/product-img1.jpg';
import productImg2 from '../img/product-img2.jpg';
import bannerDeal from '../img/banner-deal.jpg';
import {BiTimeFive} from 'react-icons/bi';
import {AiOutlineGift} from 'react-icons/ai';
import {FiPackage} from 'react-icons/fi';
import {BsArrowRepeat} from 'react-icons/bs';
const Home = () => {
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

  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "2028/10/10 00:00:00";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='w-full'>
        <Carousel fade>
        <Carousel.Item className='relative'>
        <div className="absolute left-[15%] md:top-1/3 top-5 md:w-2/6 w-full">
        <span className='bg-amber-500 px-3 py-2 rounded-full'>Opening Sale Discount 50%</span>
            <h1 className='md:text-4xl text-2xl mt-2'>SuperMarket <br /> For Fresh Grocery </h1>
            <p className='sm:block hidden'>Introduced a new model for online grocery shopping
                and convenient home delivery.</p> 
                <a href="#" className='bg-slate-700 text-white px-3 py-2 no-underline'>Shop Now </a>
        </div>
            <img src={slide1} alt="slide1"  className='w-full'/>
            
        </Carousel.Item>
        <Carousel.Item> 
        <div className="absolute left-[15%] md:top-1/3 top-5 md:w-2/6 w-full">
            <span className='bg-amber-500 px-3 py-2 rounded-full'>Free Shipping - orders over $100</span>
            <h1 className='md:text-4xl text-2xl mt-2'>Free Shipping on <br/> orders over <span className='text-lime-500'>$100</span> </h1>
            <p className='sm:block hidden'>Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
              </p> 
                <a href="#" className='bg-slate-700 text-white px-3 py-2 no-underline'>Shop Now </a>
        </div>
        <img src={slide2} alt="slide2" className='w-full' /> 
        </Carousel.Item>
        
        </Carousel>
      </div>

      <div className="container mt-5">
      <h2><strong>Featured Categories</strong></h2>
      <Slider {...settings}>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
              <img src={category} alt="category" />
              <div>
                <p className='font-semibold'>Dairy, Bread & Eggs</p>
              </div>
            </div>
          </div>
            <div>
              <div className='gap-3 grid border m-3 items-center justify-center text-center'>
              <img src={category1} alt="category1" />
                <div>
                  <p className='font-semibold'>Atta, Rice & Dal</p>
                </div>
              </div>
            </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
            <img src={category2} alt="category2" />
              <div>
                <p className='font-semibold'>Snack & Munchies</p>
              </div>
            </div>
          </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
            <img src={category3} alt="category3" />
              <div>
                <p className='font-semibold'>Bakery & Biscuits</p>
              </div>
            </div>
          </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
            <img src={category4} alt="category4" />
              <div>
                <p className='font-semibold'>Instant Food</p>
              </div>
            </div>
          </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
            <img src={category5} alt="category5" />
              <div>
                <p className='font-semibold'>Chicken, Meat & Fish</p>
              </div>
            </div>
          </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
              <img src={category6} alt="category6" />
              <div>
                <p className='font-semibold'>Baby Care</p>
              </div>
            </div>
          </div>
          <div>
            <div className='gap-3 grid border m-3 items-center justify-center text-center'>
            <img src={category7} alt="category7" />
              <div>
                <p className='font-semibold'>Cleaning Essentials</p>
              </div>
            </div>
          </div> 
          <div>
            <div className="gap-3  grid border m-3 items-center justify-center text-center">
              <img src={category8} alt="category8" />
              <div>
                <p className='font-semibold'>Tea, Coffee & Drinks</p>
              </div>
            </div>
          </div>
          <div>
            <div className="gap-3  grid border m-3 items-center justify-center text-center">
              <img src={category9} alt="category9" />
              <div>
                <p className='font-semibold'>Pet Care</p>
              </div>
            </div>
          </div>          
      </Slider>
      </div>

      <div className="container">
        <div className="md:grid-cols-2 grid gap-3 mt-3">
          <div className='relative'> 
            <div className='py-10 px-4' style={{background:`url(${grocery})`,backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
              <h2 className='text-2xl font-semibold'>Fruits & Vegetables</h2>
              <p>Get Upto 30% Off</p>
              <a href="#" className='bg-slate-700 text-white px-3 py-2 no-underline'>Shop Now</a>
            </div>
          </div>
          
          <div className='relative'> 
            <div className='py-10 px-4' style={{background:`url(${grocery1})`, backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
              <h2 className='text-2xl font-semibold'>Freshly Baked Buns</h2>
              <p>Get Upto 25% Off</p>
              <a href="#" className='bg-slate-700 text-white px-3 py-2 no-underline'>Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className='mt-3'>
          <h2>Popular Products</h2>
        </div>
        <div className="md:grid-cols-5 grid gap-3">
          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product1} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product2} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product3} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product4} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product5} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product6} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product7} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product8} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={product9} alt="product" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='flex gap-2 items-center justify-center'>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><AiFillStar/></a>
                <a href="#" className='text-amber-500'><BsStarHalf/></a>
                <span className='text-slate-400'>4.5(149)</span>
              </div>
              <div className='relative h-8 overflow-hidden  mt-2'>
                <div className='grid-cols-2 grid gap-3 buttonvew'>
                    <div>
                      <p className='text-xl'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div>
                      <a href="#" className='bg-emerald-500 py-1 px-3 text-white no-underline rounded'>+ Add</a>
                    </div>
                </div>
              </div>
            </div>
          </Styled.boxmin>
        </div>
      </div>

      <div className="container">
        <div className='mt-4'>
          <h2>Daily Best Sells</h2>
        </div> 
        <div className='md:grid-cols-4 grid gap-3'>
          <div  className='text-white  pt-8 px-6 px-xl-8 rounded ' style={{background:`url(${bannerDeal})`, backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <h2>100% Organic <br /> Coffee Beans.</h2>
              <p>Get the best deal before<br /> close.</p>
              <a href="#" className='bg-slate-700 text-white px-3 py-2 no-underline'>Shop Now </a>
          </div>
          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={productImg} alt="productImg" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              
              <div className='relative  mt-2'>
                <div className='grid-cols-2 grid gap-3 justify-center items-center'>
                    <div>
                      <p className='m-0'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><BsStarHalf/></a>
                      <span className='text-slate-400 pl-2'>4.5</span>
                    </div>
                </div>
                <a href="#" className='bg-emerald-500 py-2 mt-3 px-3 text-white no-underline rounded w-full block text-center'>+ Add To Card</a>                
              </div>
              <div className="grid-cols-4 grid gap-2 mt-3">
                <div className='border p-2 text-center rounded'>
                  <p id="day" className='m-0'>{days < 10 ? "0" + days : days}</p>
                  <span className="text-xs font-bold text-slate-400">Days</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="hour" className='m-0'>{hours < 10 ? "0" + hours : hours}</p>
                  <span className="text-xs font-bold text-slate-400">Hours</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="minute" className='m-0'>{minutes < 10 ? "0" + minutes : minutes}</p>
                  <span className="text-xs font-bold text-slate-400">Mins</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="second" className='m-0'>{seconds < 10 ? "0" + seconds : seconds}</p>
                  <span className="text-xs font-bold text-slate-400">Sec</span>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={productImg1} alt="productImg1" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
              <div className='relative  mt-2'>
                <div className='grid-cols-2 grid gap-3 justify-center items-center'>
                    <div>
                      <p className='m-0'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><BsStarHalf/></a>
                      <span className='text-slate-400 pl-2'>4.5</span>
                    </div>
                </div>
                <a href="#" className='bg-emerald-500 py-2 mt-3 px-3 text-white no-underline rounded w-full block text-center'>+ Add To Card</a>                
              </div>
              <div className="grid-cols-4 grid gap-1 mt-3">
                <div className='border p-1 text-center rounded'>
                  <p id="day" className='m-0'>{days < 10 ? "0" + days : days}</p>
                  <span className="text-xs font-bold text-slate-400">Days</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="hour" className='m-0'>{hours < 10 ? "0" + hours : hours}</p>
                  <span className="text-xs font-bold text-slate-400">Hours</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="minute" className='m-0'>{minutes < 10 ? "0" + minutes : minutes}</p>
                  <span className="text-xs font-bold text-slate-400">Mins</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="second" className='m-0'>{seconds < 10 ? "0" + seconds : seconds}</p>
                  <span className="text-xs font-bold text-slate-400">Sec</span>
                </div>
              </div>
            </div>
          </Styled.boxmin>

          <Styled.boxmin>
            <div className="relative overflow-hidden p-1 ">
              <img src={productImg2} alt="productImg2" />
              <span className='bg-red-600 text-white px-3 py-1 absolute top-5 left-4'>sale</span>
              <div className='over flex gap-3'>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsEye/> </a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><BsHeart/></a>
                <a href="#" className='border w-10 h-10 flex items-center justify-center bg-white text-black'><PiArrowsLeftRight/></a>
              </div>
            </div>
            <div className='p-3'>
              <span>Snack & Munchies</span>
              <p><strong>Haldiram's Sev Bhujia</strong></p>
               
              <div className='relative  mt-2'>
                <div className='grid-cols-2 grid gap-3 justify-center items-center'>
                    <div>
                      <p className='m-0'>$32 <span className='line-through text-zinc-300'>$35</span></p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><AiFillStar/></a>
                      <a href="#" className='text-amber-500'><BsStarHalf/></a>
                      <span className='text-slate-400 pl-2'>4.5</span>
                    </div>
                </div>
                <a href="#" className='bg-emerald-500 py-2 mt-3 px-3 text-white no-underline rounded w-full block text-center'>+ Add To Card</a>                
              </div>
              <div className="grid-cols-4 grid gap-1 mt-3">
                <div className='border p-1 text-center rounded'>
                  <p id="day" className='m-0'>{days < 10 ? "0" + days : days}</p>
                  <span className="text-xs font-bold text-slate-400">Days</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="hour" className='m-0'>{hours < 10 ? "0" + hours : hours}</p>
                  <span className="text-xs font-bold text-slate-400">Hours</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="minute" className='m-0'>{minutes < 10 ? "0" + minutes : minutes}</p>
                  <span className="text-xs font-bold text-slate-400">Mins</span>
                </div>
                <div className='border p-2 text-center rounded'>
                  <p id="second" className='m-0'>{seconds < 10 ? "0" + seconds : seconds}</p>
                  <span className="text-xs font-bold text-slate-400">Sec</span>
                </div>
              </div>
            </div>
          </Styled.boxmin>
          </div>
      </div> 

      <div className="container mt-3">
        <div className="md:grid-cols-4 grid gap-3">
          <div className='p-3'>
            <div className='text-center flex justify-center'>
              <BiTimeFive className=' text-emerald-500 text-5xl text-center ' />
            </div>
            <h3 className='text-lg font-semibold'>10 minute grocery now</h3>
            <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
          </div> 

          <div className='p-3'>
            <div className='text-center flex justify-center'>
              <AiOutlineGift className=' text-emerald-500 text-5xl text-center '/>
            </div>
            <h3 className='text-lg font-semibold'>Best Prices & Offers</h3>
            <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
          </div>

          <div className='p-3'>
            <div className='text-center flex justify-center'>
              <FiPackage className=' text-emerald-500 text-5xl text-center '/>
            </div>
            <h3 className='text-lg font-semibold'>Wide Assortment</h3>
            <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
          </div>

          <div className='p-3'>
            <div className='text-center flex justify-center'>
              <BsArrowRepeat className=' text-emerald-500 text-5xl text-center '/>
            </div>
            <h3 className='text-lg font-semibold'>Easy Returns</h3>
            <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
