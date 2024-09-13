import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";


const Report = () => {
  return (
    
        <div className='max-w-full lg:wrapper'>

          <div className='my-20'>
            <h1  className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-indigo-600">Want to see detailedautodna in action?</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">Click the Sample Reports below for the complete analysis of our Vehicle History Reports.</p>
          </div>

          <div className='flex flex-col
          md:grid grid-cols-2  justify-center gap-4'>
            <div className='bg-blue-300 p-5 rounded-xl'>
            <Image
                alt=""
                src="/assets/s1.png"
                className="h-140 w-100"
                width={500}
                height={500}
                />
                <h1 className='text-center mt-3'>
 2015 Toyota Corolla <br />
<b>VIN:</b> 2T1BURHE0F<br />
<b>Style / Body:</b> Sedan 4D<br />
<b>Engine:</b> 1.8L I4 EFI<br />
<b>Country of Assembly:</b> Canada<br /></h1>
<Button className='bg-blue-600 w-full mt-3'>Click to View Sample</Button>
              </div>

              <div className='bg-blue-300 p-5 rounded-xl'>
             <Image
                alt=""
                src="/assets/s2.png"
                className="h-140 w-100"
                width={500}
                height={500}
                />
                <h1 className='text-center mt-3'>
                2007 Honda Civic <br />
                <b>VIN:</b> 1HGFA15547L116880<br />
<b>Style / Body:</b> Sedan 4D<br />
<b>Engine:</b> 1.8L I4 MPI<br />
<b>Country of Assembly:</b> United States<br />
                </h1>
                <Button className='bg-blue-600 w-full mt-3'>Click to View Sample</Button>
            </div>
            
          </div>

          <div className='flex flex-col
          md:grid grid-cols-2 justify-center gap-4 mt-20'>
          <div className='bg-blue-300 p-5 rounded-xl'>
            <Image
                alt=""
                src="/assets/s1.png"
                className="h-140 w-100"
                width={500}
                height={500}
                />
                <h1 className='text-center mt-3'>
 2015 Toyota Corolla <br />
<b>VIN:</b>2T1BURHE0F<br />
<b>Style / Body:</b> Sedan 4D<br />
<b>Engine:</b> 1.8L I4 EFI<br />
<b>Country of Assembly:</b> Canada<br /></h1>
<Button className='bg-blue-600 w-full mt-3'>Click to View Sample</Button>
              </div>

              <div className='bg-blue-300 p-5 rounded-xl'>
             <Image
                alt=""
                src="/assets/s2.png"
                className="h-140 w-100"
                width={500}
                height={50}
                />
                <h1 className='text-center mt-3'>
                2007 Honda Civic <br />
<b>VIN:</b> 1HGFA15547L116880<br />
<b>Style / Body:</b> Sedan 4D<br />
<b>Engine:</b> 1.8L I4 MPI<br />
<b>Country of Assembly:</b> United States<br />
                </h1>
                <Button className='bg-blue-600 w-full mt-3'>Click to View Sample</Button>
            </div>
            
          </div>


          {/* ******************************************************************** */}

<div className='text-center my-40 -rotate-0'>
        
         
        <div className='my-10'><h1 className='bg-purple-600 inline rounded-[20px] text-white text-xl md:text-2xl text-center py-4 px-10' >Sample Window Sticker</h1></div>
        <div className='mt-[-10px] mx-20'><h3 className='text-[16px]
        bg-blue-300 inline rounded-[20px] text-white md:text-[22px] font-extralight md:py-5 md:px-2 px-2 md:ml-40 my-0'>View Some of Our Window Stickers</h3></div>
       </div>
{/* ****************************************************************************8 */}

<div className='flex flex-col 
                 md:grid grid-cols-3 gap-4'>
 <div className='flex flex-col bg-blue-200 py-10 px-10 rounded-xl'>
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

 <div className='flex flex-col bg-blue-200 py-10 px-10 rounded-xl'>
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

 <div className='flex flex-col bg-blue-200 py-10 px-10 rounded-xl'>
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
        
            
          
        












        </div>

        
  )
}

export default Report