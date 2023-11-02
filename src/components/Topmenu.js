import React from 'react' 
const Topmenu = () => {
  return (
    <>
      <div className='bg-slate-500'>
        <div className="container">
            <div className="md:grid-cols-2 grid  justify-center items-center ">
                <div className=''>
                    <p className='m-0 text-white'>Super Value Deals - Save more with coupons</p>
                </div>
                <div className='text-right'>
                    <select name="contry" id="" className='me-auto sm:w-32 w-full px-3 py-2 outline-none'>
                        <option value="India"> Hindi</option>
                        <option value="United Kingdom">English</option>
                        <option value="geremani">Deutsch</option>
                    </select>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Topmenu
