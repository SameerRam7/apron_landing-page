import React from 'react'

const Header = () => {
  return (
    <section>
        <nav className='flex justify-between items-center'>
            {/* Alternative way for setting the LOGO */}
        {/* <h1 className='font-semibold font-body text-2xl'>apron.</h1> */}
        <img src="/apron-logo.svg" alt="" />
            <ul className='flex gap-9 font-body1'>
                <li className='hover:underline hover:font-bold'><a href="">Business</a></li>
                <li className='hover:underline hover:font-bold'><a href="">Finance Professionals</a></li>
                <li className='hover:underline hover:font-bold'><a href="">Payroll</a></li>
                <li className='hover:underline hover:font-bold'><a href="">Pay by card</a></li>
                <li className='hover:underline hover:font-bold'><a href="">Pay global</a></li>
                <li className='hover:underline hover:font-bold'><a href="">Pricing</a></li>
                <li className='hover:underline hover:font-bold'><a href="">About</a></li>
            </ul>

            <div className='flex gap-4 font-body1'>
            <button className='border-[3px] border-black rounded-2xl px-4 py-2 hover:bg-slate-700 hover:text-white hover:font-medium hover:ring-4 ring-yellow-400'>Log in</button>
            
            <button className='border-[3px] border-black rounded-2xl px-4 py-2 hover:bg-slate-700 hover:text-white hover:font-medium hover:ring-4 ring-yellow-400'>Start now</button>
            </div>
            
        </nav>
        <div className='grid grid-flow-col'>
            <div className='font-body1 relative'>
                <p className='font-semibold mb-7'>Apron for business owners</p>
                <p className='text-6xl font-bold font-body2 w-3/4'>FLIP PAYMENTS FROM A BARRIER TO A BOOSTER.</p>
                <p className='mt-2 mb-9'>Sort,pay and reconcile your invoices in seconds.</p>
                <button className='border-[3px] bg-black text-white border-black rounded-3xl px-24 py-2 hover:bg-slate-700 hover:font-medium hover:ring-4 ring-yellow-400'>START NOW</button>
                <hr className='border-dotted border-t-[3px]  border-black '/>
            </div>
            <div>
                <img src="/coffee_girl.jpg" alt="" />
            </div>
        </div>
        
    </section>
  )
}

export default Header