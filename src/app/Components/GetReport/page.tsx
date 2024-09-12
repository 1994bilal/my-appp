"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { Checkbox } from "@/components/ui/checkbox"





const GetReport = () => {
  return (
    <div className='wrapper my-10'>
    
<div className='flex flex-col
md:grid grid-cols-2'>
<div className=''>
    <div className='mx-10'><h3 className='font-bold'>Success! We found detailed information for VIN# JH4DA9370NS035336</h3>
<div className='grid grid-cols-2'>
    <div>
    <Image
          src="/assets/acura.png"
           alt="portfolio-pic"
            width={100} 
            height={100}
             className="h-[50%]
             bg-white my-10 mx-10 "
             />
    </div>
<h1 className='text-2xl font-extrabold my-16 text-start'>1992 Acura Integra</h1></div>
</div>
<div className='my-10'>
    <ul className='flex flex-col justify-around space-y-4 mx-10'>
        <li>Trim
            <input className='mx-4' type="text" />
        </li>
        <li>Engine
            <input className='mx-4' type="text" />
        </li>
        <li>Fuel Type
            <input className='mx-4' type="text" />
        </li>
        <li>Transmission
            <input className='mx-4' type="text" />
        </li>
        <li>
        Drive Type
            <input className='mx-4' type="text" />
        </li>
        <li>Doors
            <input className='mx-4' type="text" />
        </li>
        <li>MSRP
            <input className='mx-4' type="text" />
        </li>
        <li>Body Type
            <input className='mx-4' type="text" />
        </li>
        <li>Vehicle Type
            <input className='mx-4' type="text" />
        </li>
        <li>Manufacturer
            <input className='mx-4' type="text" />
        </li>

        
    </ul>
</div>
</div>
{/* grid col-2 */}

<div className='bg-indigo-600 rounded-xl'><h1 className='text-4xl text-white font-extrabold text-center my-8'>Purchase full report now and uncover more information.</h1>
<div className=''>
    <div className='grid grid-cols-2'>
<div className='bg-yellow-300 text-wrap text-center p-2 space-y-3 rounded-2xl m-5'>
   <h3 className='font-bold text-lg '>1 Report</h3>
   <h2 className='font-extrabold text-2xl'>$ 29.99<span className='text-sm font-bold'>/Report</span></h2>
   <p className='font-bold text-sm'>You pay $ 29.99 <br />
   You get 1 Report</p>
   <div className='bg-gray-500'>
   <Button className='bg-gray-400'>Selected</Button>
   </div>
   
</div>
<div>
<div className='bg-yellow-300 text-wrap text-center p-2 px-3 space-y-3 rounded-2xl m-5'>
   <h3 className='font-bold text-lg '>1 Report</h3>
   <h2 className='font-extrabold text-2xl'>$ 29.99<span className='text-sm font-bold'>/Report</span></h2>
   <p className='font-bold text-sm'>You pay $ 29.99 <br />
   You get 1 Report</p>
   <div className='bg-gray-500'>
   <Button className='bg-gray-400'>Selected</Button>
   </div>
</div>
</div>
</div>
<div className='grid grid-cols-2'>
<div>
<div className='bg-yellow-300 text-wrap text-center p-2 space-y-3 rounded-2xl m-5'>
   <h3 className='font-bold text-lg '>1 Report</h3>
   <h2 className='font-extrabold text-2xl'>$ 29.99<span className='text-sm font-bold'>/Report</span></h2>
   <p className='font-bold text-sm'>You pay $ 29.99 <br />
   You get 1 Report</p>
   <div className='bg-gray-500'>
   <Button className='bg-gray-400'>Selected</Button>
   </div>
</div>
</div>
<div>
<div className='bg-yellow-300 text-wrap text-center p-2 space-y-3 rounded-2xl m-5'>
   <h3 className='font-bold text-lg '>1 Report</h3>
   <h2 className='font-extrabold text-2xl'>$ 29.99<span className='text-sm font-bold'>/Report</span></h2>
   <p className='font-bold text-sm'>You pay $ 29.99 <br />
   You get 1 Report</p>
   <div className='bg-gray-500'>
   <Button className='bg-gray-400'>Selected</Button>
   </div>

   
</div>

</div>
</div>
</div>
<div className="flex items-start text-left space-x-2">
      <Checkbox className='m-3' id="terms" />
      <label
        htmlFor="terms"
        className="text-white text-md font-medium gap-y-2 px-4 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
     Order a Window Sticker and learn about factory options accurately including packages, MSRP, engine
         specifications, standard features and equipment, fuel economy, safety features and crash ratings. $15.00
      </label>
    </div>
    <div>
    <h4 className='ml-4 my-4'>View Sample Window Sticker</h4>
    </div>
    <div className="text-center my-10">
    <Button className='bg-yellow-400 runded-2xl m-auto px-20' >Proceed to Checkout</Button>
    <p className='text-sm text-white my-5'>By selecting {"Proceed to Checkout"} you are confirming that you have read and agree to {"detailedautodna's"} Terms of Use and Privacy Policy</p>
    </div>
</div>

</div>



    </div>
  )
}

export default GetReport