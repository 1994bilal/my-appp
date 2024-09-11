'use client'
import React from 'react'
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import TabFrm from '../Components/TabForm'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Window = () => {
  useEffect(() =>{
    AOS.init({
      once:false
    });
  }, []);
  return (
    
       <div className='container'>

{/* Parent Div of cols-2 */}
  <div className='md:grid grid-cols-2'>
    
  {/* Mobile Display */}
      <div className='flex flex-col md:my-18 p-4 text-center bg-indigo-900'>
        {/* *********** */}
        {/* Col-1  */}
          <h1 className="text-wrap scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-yellow-200 mt-0 md:mt-20 leading-none">
            
          Get the details<br/> 
          of your Original<br/>
            Window Sticker.</h1>
          <p className=
          'w-full text-wrap md:text-xl text-white mt-10'>
           These details may be overlooked when you are selling or trading in your vehicle. Each window sticker 
           has been rigorously researched and tested to ensure authentic and accurate details..</p>     
       </div>
       {/* **************** */}
           
{/* Col-2 Image  */}
   
  <div >
       <Image
    src="./assets/fwindiw.jfif"
     alt="portfolio-pic"
      width={700} 
      height={500}
       className="h-[100%]
       bg-indigo-900 my-18 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110"
       />
  
          
      </div>
         </div>
{/* ****************************************************************** */}
    
    
      <TabFrm/>


         {/* *********************************************************8  */}



<div className='flex flex-col border-y-8
md:grid grid-cols-3 py-10 gap-1'>
<div className='flex flex-cols justify-evenly bg-indigo-100 rounded-xl py-10 hover:-translate-y-2 hover:scale-105'>
    <div>
    <Image
    src="/assets/sss.png"
     alt="portfolio-pic"
      width={70} 
      height={70}
       className="h-[30%]
       my-18"/>
      <h2 className='text-blue-600 text-2xl font-bold'>Standard Factory Features</h2>
      <h3 className='text-md'>Standard features usually include items like<br/>
       engine and transmission specifications,<br/>
       Standard installed equipment, interior & <br/>
       exterior color information.</h3></div>
  </div>

  <div className='flex flex-cols justify-evenly bg-indigo-100 rounded-xl py-10 hover:-translate-y-2 hover:scale-105'>
    <div>
    <Image
    src="/assets/svg2.png"
     alt="portfolio-pic"
      width={70} 
      height={70}
       className="h-[30%]
       my-18"/>
      <h2 className='text-blue-600 text-2xl font-bold'>Standard Factory Features</h2>
      <h3 className='text-lg'>Standard features usually include items like<br/>
       engine and transmission specifications,<br/>
       Standard installed equipment, interior & <br/>
       exterior color information.</h3></div>
  </div>

  <div className='flex flex-cols justify-evenly bg-indigo-100 rounded-xl py-10 hover:-translate-y-2 hover:scale-105'>
    <div>
    <Image
    src="/assets/svg3.png"
     alt="portfolio-pic"
      width={70} 
      height={70}
       className="h-[30%]
       my-18"/>
      <h2 className='text-blue-600 text-2xl font-bold'>Standard Factory Features</h2>
      <h3 className='text-lg'>Standard features usually include items like<br/>
       engine and transmission specifications,<br/>
       Standard installed equipment, interior & <br/>
       exterior color information.</h3></div>
  </div>
  
  
  
  </div>

  <div className='flex flex-col border-y-4
  md:grid grid-cols-3 py-10 gap-1'>
  <div className='flex flex-cols justify-evenly bg-indigo-100 rounded-xl py-10 hover:-translate-y-2 hover:scale-105'>
    <div>
    <Image
    src="/assets/svg4.png"
     alt="portfolio-pic"
      width={70} 
      height={70}
       className="h-[30%]
       my-18"/>
      <h2 className='text-blue-600 text-2xl font-bold'>Standard Factory Features</h2>
      <h3 className='text-lg'>Standard features usually include items like<br/>
       engine and transmission specifications,<br/>
       Standard installed equipment, interior & <br/>
       exterior color information.</h3></div>
  </div>

  <div className='flex flex-cols justify-evenly bg-indigo-100 rounded-xl py-10 hover:-translate-y-2 hover:scale-105'>
    <div>
    <Image
    src="/assets/svg5.png"
     alt="portfolio-pic"
      width={70} 
      height={70}
       className="h-[30%]
       my-18"/>
      <h2 className='text-blue-600 text-2xl font-bold'>Standard Factory Features</h2>
      <h3 className='text-lg'>Standard features usually include items like<br/>
       engine and transmission specifications,<br/>
       Standard installed equipment, interior & <br/>
       exterior color information.</h3></div>
  </div>

  <div className='flex flex-cols justify-evenly bg-indigo-100 rounded-xl py-10 hover:-translate-y-2 hover:scale-105'>
    <div>
    <Image
    src="/assets/svg6.png"
     alt="portfolio-pic"
      width={70} 
      height={70}
       className="h-[30%]
       my-18"/>
      <h2 className='text-blue-600 text-2xl font-bold'>Standard Factory Features</h2>
      <h3 className='text-lg'>Standard features usually include items like<br/>
       engine and transmission specifications,<br/>
       Standard installed equipment, interior & <br/>
       exterior color information.</h3></div>
  </div>  
  </div>  

  {/* ************************************************************************ */}

 <div className='grid grid-cols-2 bg-indigo-600 text-white font-extrabold justify-center text-center py-6'>
  <div>
  <ul className="">
    <li>&#10003; 100% Satisfaction Guarantee</li>
    <li>&#10003; 24/7 Access</li>
    </ul>
    </div>

    <div>
      <ul>
    <li>&#10003; Share Stickers</li>
    <li>&#10003; Unlimited Searches</li>
    </ul>
    </div>
 </div>

{/* ******************************************************************** */}

<div className='text-center my-20 -rotate-0'>
        
         
         <div className='my-10'><h1 className='bg-purple-600 inline rounded-[20px] text-white text-2xl text-center py-8 px-20' >Sample Window Sticker</h1></div>
         <div className='mt-[-10px] mx-20'><h3 className='text-[16px]
         bg-blue-300 inline rounded-[20px] text-white md:text-[22px] font-extralight md:py-5 md:px-2 ml-40 my-8'>View Some of Our Window Stickers</h3></div>
        </div>
{/* ****************************************************************************8 */}

<div className='
md:flex flex-row justify-evenly'>
  <div className='my-10 flex flex-col bg-blue-200 md:py-10 md:px-10 px-4 py-6 rounded-xl'>
  <Image
    src="/assets/temp.png"
     alt="portfolio-pic"
      width={710} 
      height={710}
       className="h-60 w-60"/>
       <h3>2017 Audi S6</h3>
<h2>VIN: WAUFFAFC5HN007408</h2>
<h2>Exterior: Brilliant Black</h2>
<h2>Interior: Black w/Valcona Leather<br/> Seating Surfaces</h2>
<Button className='mt-5 bg-indigo-600'>
          Click to View Sample</Button>
  </div>

  <div className='my-10  flex flex-col bg-blue-200 py-10 px-10 rounded-xl'>
  <Image
    src="/assets/temp.png"
     alt="portfolio-pic"
      width={710} 
      height={710}
       className="h-60 w-60"/>
       <h3>2017 Audi S6</h3>
<h2>VIN: WAUFFAFC5HN007408</h2>
<h2>Exterior: Brilliant Black</h2>
<h2>Interior: Black w/Valcona Leather<br/> Seating Surfaces</h2>
<Button className='mt-5 bg-indigo-600'>
Click to View Sample</Button>
  </div>

  <div className='my-10  flex flex-col bg-blue-200 py-10 px-10 rounded-xl'>
  <Image
    src="/assets/temp.png"
     alt="portfolio-pic"
      width={710} 
      height={710}
       className="h-60 w-60"/>
       <h3>2017 Audi S6</h3>
<h2>VIN: WAUFFAFC5HN007408</h2>
<h2>Exterior: Brilliant Black</h2>
<h2>Interior: Black w/Valcona Leather<br/> Seating Surfaces</h2>
<Button className='mt-5 bg-indigo-600'>
Click to View Sample</Button>
  </div>
  
</div>

{/* *************************************************************** */}

<div className='flex flex-col
md:grid grid-cols-2 bg-indigo-900 my-20 py-5'>
  <div>
    <h1 className='text-center text-4xl font-extrabold text-yellow-200 pt-2 my-2'>We are proud to be one of the pioneers<br/>  in providing Classic <br/>
      Window Stickers</h1>
    <h3 className='text-center text-lg text-white my-2'>a unique journey into the heritage of automobiles and a<br/>
     glimpse into the past of the automotive world.</h3>

<h2 className='text-center text-lg font-bold text-yellow-200 my-2'>What Are Classic Window Stickers?</h2>
<h3 className='text-center text-lg text-white'>Classic Window Stickers also known as Monroney Labels are more than just vintage window stickers;
   they are a window to the history of automobiles. Our carefully curated collection of labels takes
    you back in time to discover the original {`manufacturer's`} suggested retail price {`MSRP,`} specifications,
     and features of classic cars, offering an authentic connection to automotive history.</h3>
  </div>
  <div>
  <Image
    src="/assets/sticker2.png"
     alt="portfolio-pic"
      width={710} 
      height={710}
       />
  </div>
</div>
{/* ************************************************************************** */}

<div className='text-center my-20 -rotate-0'>
        
         
         <div className='my-10'><h1 className='bg-purple-600 inline rounded-[20px] text-white text-2xl text-center py-8 px-20' >Sell your Vehicle faster</h1></div>
         <div className='mt-[-10px] mx-20'><h3 className='text-[16px]
         bg-blue-300 inline rounded-[20px] text-white md:text-[22px] font-extralight md:py-5 md:px-2 ml-40 my-8'>How do Window Sticker Increase Sales Conversion?</h3></div>
        </div>

        {/* *****************************************************************8  */}


<div className='flex flex-col px-8
md:grid grid-cols-3 md:px-5 m-3 gap-5'>

  <div className='bg-blue-200 flex flex-col rounded-xl py-5'>
  <div>
  <Image
    src="/assets/mark.png"
     alt="portfolio-pic"
      width={1000} 
      height={1000}
       className="h-20 w-20 mx-40 my--20"/>
  </div>
    <h2 className='text-black font-bold text-3xl text-center mb-6'>Promotional Marketing</h2>
  <p className='text-black font-light text-lg text-center'>Window Stickers are an inexpensive way to market your car at
     all times of the day.
     Colorful Graphics express your vehicles key information</p></div>

 
     <div className='bg-blue-200 flex flex-col rounded-xl py-5'>
  <div>
  <Image
    src="/assets/mark2.png"
     alt="portfolio-pic"
      width={1000} 
      height={1000}
       className="h-20 w-20 mx-40 my--20"/>
  </div>
    <h2 className='text-black font-bold text-3xl text-center mb-6'>Drive Sales</h2>
  <p className='text-black font-light text-lg text-center'>Most people take decisions
     on graphics they consume visually. Having a attractive window space grabs the attention of potential customers walking by.
     Colorful Graphics express your vehicles key information</p></div>

   
  <div className='bg-blue-200 flex flex-col rounded-xl py-5'>
  <div>
  <Image
    src="/assets/mark3.png"
     alt="portfolio-pic"
      width={1000} 
      height={1000}
       className="h-20 w-20 mx-40 my--20"/>
  </div>
    <h2 className='text-black font-bold text-3xl text-center mb-6'>Stand Out Among the Competition</h2>
  <p className='text-black font-light text-lg text-center'>Since Images communicate
     the essential part of you vehicle, potential customers have the ability to compare your information to the competition.    Colorful Graphics express your vehicles key information</p></div>

     
  <div className='bg-blue-200 flex flex-col rounded-xl py-5'>
  <div>
  <Image
    src="/assets/mark4.png"
     alt="portfolio-pic"
      width={1000} 
      height={1000}
       className="h-20 w-20 mx-40 my--20"/>
  </div>
    <h2 className='text-black font-bold text-3xl text-center mb-6'>Save Money on Marketing</h2>
  <p className='text-black font-light text-lg text-center'>Marketing to your neighborhood demographic
     is a essential aspect when selling you vehicle. Use a Window sticker optimizes your overall marketing strategies.
     Colorful Graphics express your vehicles key information</p></div>

     
  <div className='bg-blue-200 flex flex-col rounded-xl py-5'>
  <div>
  <Image
    src="/assets/mark5.png"
     alt="portfolio-pic"
      width={1000} 
      height={1000}
       className="h-20 w-20 mx-40 my--20"/>
  </div>
    <h2 className='text-black font-bold text-3xl text-center mb-6'>Affordable Marketing</h2>
  <p className='text-black font-light text-lg text-center'>Our Window sticker designs are affordable enough
     to fit well within your budget. Whether you need single Window sticker or multiple, we will ensure the best rates.
     Colorful Graphics express your vehicles key information</p></div>

     
  <div className='bg-blue-200 flex flex-col rounded-xl py-5'>
  <div>
  <Image
    src="/assets/mark6.png"
     alt="portfolio-pic"
      width={1000} 
      height={1000}
       className="h-20 w-20 mx-40 my--20"/>
  </div>
    <h2 className='text-black font-bold text-3xl text-center mb-6'>Credibility</h2>
  <p className='text-black font-light text-lg text-center'>Using graphical 
    designs on your window improves business traffic, stands out against your competition and increases credibility.
     Colorful Graphics express your vehicles key information</p></div>      
</div>

{/* *****************************************************************************88 */}




<div className='flex flex-col items-center my-20'>
  <div><h1 className='text-indigo-600 text-2xl font-bold'>Ready to Get Started?</h1></div>
  <div>Get instant access immediately after payment</div>
  <div><Button className='mt-5 bg-indigo-600'>
GET access Today</Button></div>
</div>




    </div>
  )
}

export default Window