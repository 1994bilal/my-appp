import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"






const Details = () => {
  return (
    <div className='wrapper text-xl text-indigo-500
     md:container mx-auto px-4 md:text-4xl font-bold text-center mt-10'>
        <h1 className='"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"'>What Details are Contained in a Vehicle History Report?</h1>
        <p className='text-black text-md text-opacity-100 mt-5 font-extralight
        md:text-black md:text-xl '>Using a VIN or license plate number provides comprehensive vehicle history, aiding informed decisions by revealing accidents, liens, theft, damage, title status, and usage details.</p>

    
        <div className='flex flex-col w-[100%]
        md:grid grid-cols-3 mt-10 justify-evenly'>
                      
                      <div>
                        <Image
                          src='/assets/fox2.jpg'
                          alt='Vehicle History Report'
                          width={5000}
                          height={5000}
                          layout='intrinsic'
                          objectFit='cover'
                          className='w-[90%] rounded-xl mx-auto'
                        />
                        <h3 className='mt-6 text-xl font-bold text-purple-600'>Vehicle History Report</h3>
                        <p className='text-black text-sm text-opacity-100 mt-3'>A vehicle history report provides detailed information about a {`vehicle's`} accidents, liens, theft, damage, title status, and usage details.</p
                     >
                      </div>

            <div data-aos="fade-up"
     data-aos-duration="2000" className='p-4 text-center bg-white border-x-8 hover:-translate-y-5 hover:scale-110'>
                <h2 className='text-2xl text-indigo-500 font-bold mt-10'>Auction Records featuring Images</h2>
                <p className="leading-2 [&:not(:first-child)]:mt-6 text-base px-3 text-black text-left">Our document presents details regarding auction data for a vehicle,
                     encompassing:<br/></p>
                      <ul className='list-none p-4 my-5 mx-5 text-left'>
                    <li className='text-black text-sm text-left m-4'> &#10003;     Auction condition and bidding amount</li>
                    <li className='text-black text-sm text-start m-4'>&#10003;     Whether the automobile possesses keys and whether the engine is operational.</li>
                    <li className='text-black text-sm text-start m-4'>&#10003;     Type of title or any primary or secondary damage present during the auction</li>
                    <li className='text-black text-sm text-start m-4'>&#10003;     Auction venue & type of seller {`(e.g. insurance company or third party)`} location</li>
                    <li className='text-black text-sm text-start m-4'>&#10003;     Up to a maximum of 10 vehicle photos captured during the auction {`(if accessible)`}.</li>
                     </ul>
                     <Button className='w-full
                     bg-indigo-700 md:mr-90 mt-5 md:w-60'>Check for auction records</Button>
            </div>


            <div>
             <Image
          src="/assets/details.png"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            objectFit='cover'
             className="mx-auto
             md:h-[100%] md:w-[80%] bg-white md:ml-20 "
             />
        
                
            </div>

            
        </div>

        <div className=' text-center  z-50'>
         <div className='my-5 mx-10' ><h1 className='bg-purple-600 inline rounded-[10px] text-white py-2 px-6' >!</h1></div>
         
         <div className='my-10'><h1 className='bg-purple-600 inline rounded-[20px] text-white py-5 px-6' >Find More Information</h1></div>
         <div className='mt-[-30px] mx-20'><h3 className='text-[16px]
         bg-blue-300 inline rounded-[20px] text-white md:text-[22px] font-extralight md:py-5 md:px-4'>What Does Our Website Contain</h3></div>
        </div>

        <div >
             <Image
          src="/assets/fox3.jpg"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            objectFit='cover'
             className="w-full rounded-xl my-20"
             
             />
        
                
            </div>

{/* ****************************************************************************88 */}

        <div className='my-14'>
          <p className='md:my-20  text-[18px] text-black font-light tracking-tight'>
            We care about you just like you care about your car! Just type in a VIN to get a complete vehicle 
            history report. When you buy a vehicle report, you can quickly see detailed info that you {`won't`} 
            find in AutoCheck or Carfax reports. Get more details at prices up to 33% cheaper than our competitors.</p>
        </div>

{/* ************************************************************************ */}

        <div data-aos="fade-up" className='grid grid-cols-2 mt-10
        md:flex flex-row md:justify-evenly '>
          
           {/* Image */}
         <div>
                        <Image
                          src='/assets/10.png'
                          alt='Vehicle History Report'
                          width={150}
                          height={150}
                          layout='intrinsic'
                          objectFit='cover'
                          className='justify-items-center'
                        />
          </div>
          
          
          
          
          
          
          
          {/* text */}
         
          <div className='my-10
          bg-gray-200 px-2 py-8 rounded-[20px] hover:-translate-y-5 hover:scale-110 md:my-0'>
           <h2 className='mb-8 text-xl'>Vehicle Specification</h2>
           <p className='text-[16px]  text-black font-light tracking-tighter'>
            Get detailed specifications such as body,
             engine,<br /> fuel, transmission, safety & added options<br /> 
             at the manufacturer.<br />
              Get a full detailed report on the options on any car.</p>
          </div>

        

        {/* text */}
          
          <div className='bg-gray-200 px-2 py-8 rounded-[20px] hover:-translate-y-5 hover:scale-110 md:my-0'>
           <h2 className='mb-8 text-xl'>Salvage Title Check</h2>
           <p className='text-[16px]  text-black font-light tracking-tighter'>
            Get detailed specifications such as body,
             engine,<br /> fuel, transmission, safety & added options<br /> 
             at the manufacturer.<br />
              Get a full detailed report on the options on any car.</p>
          </div>

         {/* Image */}
         <div>
                        <Image
                          src='/assets/10.png'
                          alt='Vehicle History Report'
                          width={150}
                          height={150}
                          layout='intrinsic'
                          objectFit='cover'
                          className='justify-items-center'
                        />
          </div>

          
        </div>

{/* *************************************************************************************** */}
        
        
<div data-aos="fade-up" className='grid grid-cols-2 mt-10
        md:flex flex-row md:justify-evenly '>
          
           {/* Image */}
         <div>
                        <Image
                          src='/assets/2.png'
                          alt='Vehicle History Report'
                          width={150}
                          height={150}
                          layout='intrinsic'
                          objectFit='cover'
                          className='justify-items-center'
                        />
          </div>
          
          
          
          
          
          
          
          {/* text */}
         
          <div className='my-10
          bg-gray-200 px-2 py-8 rounded-[20px] hover:-translate-y-5 hover:scale-110 md:my-0'>
           <h2 className='mb-8 text-xl'>Vehicle Specification</h2>
           <p className='text-[16px]  text-black font-light tracking-tighter'>
            Get detailed specifications such as body,
             engine,<br /> fuel, transmission, safety & added options<br /> 
             at the manufacturer.<br />
              Get a full detailed report on the options on any car.</p>
          </div>

        

        {/* text */}
          
          <div className='bg-gray-200 px-2 py-8 rounded-[20px] hover:-translate-y-5 hover:scale-110'>
           <h2 className='mb-8 text-xl'>Vehicle Specification</h2>
           <p className='text-[16px]  text-black font-light tracking-tighter'>
            Get detailed specifications such as body,
             engine,<br /> fuel, transmission, safety & added options<br /> 
             at the manufacturer.<br />
              Get a full detailed report on the options on any car.</p>
          </div>

         {/* Image */}
         <div>
                        <Image
                          src='/assets/10.png'
                          alt='Vehicle History Report'
                          width={150}
                          height={150}
                          layout='intrinsic'
                          objectFit='cover'
                          className='justify-items-center'
                        />
          </div>

          
        </div>

        
        
        <div data-aos="fade-up" className='grid grid-cols-2 mt-10
        md:flex flex-row md:justify-evenly '>
          
           {/* Image */}
         <div>
                        <Image
                          src='/assets/10.png'
                          alt='Vehicle History Report'
                          width={150}
                          height={150}
                          layout='intrinsic'
                          objectFit='cover'
                          className='justify-items-center'
                        />
          </div>
          
          
          
          
          
          
          
          {/* text */}
         
          <div className='my-10
          bg-gray-200 px-2 py-8 rounded-[20px] hover:-translate-y-5 hover:scale-110 md:my-0'>
           <h2 className='mb-8 text-xl'>Vehicle Specification</h2>
           <p className='text-[16px]  text-black font-light tracking-tighter'>
            Get detailed specifications such as body,
             engine,<br /> fuel, transmission, safety & added options<br /> 
             at the manufacturer.<br />
              Get a full detailed report on the options on any car.</p>
          </div>

        

        {/* text */}
          
          <div className='bg-gray-200 px-2 py-8 rounded-[20px] hover:-translate-y-5 hover:scale-110'>
           <h2 className='mb-8 text-xl'>Vehicle Specification</h2>
           <p className='text-[16px]  text-black font-light tracking-tighter'>
            Get detailed specifications such as body,
             engine,<br /> fuel, transmission, safety & added options<br /> 
             at the manufacturer.<br />
              Get a full detailed report on the options on any car.</p>
          </div>

         {/* Image */}
         <div>
                        <Image
                          src='/assets/10.png'
                          alt='Vehicle History Report'
                          width={150}
                          height={150}
                          layout='intrinsic'
                          objectFit='cover'
                          className='justify-items-center'
                        />
          </div>
         

         </div>

         {/* ***************************************** */}
         <div className='md:flex flex'>
          <div className='mx-auto my-8'>
          <Button className='px-10
          bg-indigo-700 md:mx-20 md:px-20'>
            Check Vehicle History</Button>
          <Button className='px-10 mx-10 my-5
          bg-indigo-700 md:mx-20 md:px-20'>
            View Sample Report</Button>
          </div>
        </div>

{/* **********************************************************8 */}
        <div className='mt-0 text-center'>
         <div className='my-5' ><h1 className='bg-purple-600 inline rounded-[10px] text-white py-2 px-6' >!</h1></div>
         
         <div className='my-10'><h1 className='bg-purple-600 inline rounded-[20px] text-white py-5 px-6' >Get Original Window Stickers</h1></div>
         <div className='mt-[-30px] md:mx-20 mx-12'><h3 className='text-[16px] font-extralight py-1 px-8
         bg-blue-300 inline rounded-[20px] text-white md:text-[16px] md:font-extralight md:py-3 md:px-6'>
         We Provide Detailed OEM Window Stickers for All Manufacturers.</h3></div>
         
        </div>


        <div className='my-20
         md:my-20'>
         <p className='text-[16px] text-black font-light tracking-tighter'>A window label is a mandatory tag that must be affixed to every new vehicle sold in the United States. Its purpose is to offer essential insights to potential buyers regarding the vehicle under their consideration for purchase. :</p>
         </div>


         <div className='flex flex-cols my-30 border-x-8
         md:flex flex-row md:justify-evenly md:border-y-8'>
          <div className='mt-[-30px] md:my-20'>
          <ul>
            <li className='text-[16px] md:text-[20px] text-black font-light tracking-tighter'>&#9745;VIN description, interior and exterior color of the vehicle</li>
            <li className='text-[16px] md:text-[20px] text-black font-light tracking-tighter'>&#9745;Provides detailed insights into features of the car</li>
            <li className='text-[16px] md:text-[20px] text-black font-light tracking-tighter'>&#9745;Details on factory installed equipment</li>
          </ul>
          </div>

          <div className='mt-[-30px] md:my-20'>
          <ul>
            <li className='text-[16px] md:text-[20px] text-black font-light tracking-tighter'>&#9745;VIN description, interior and exterior color of the vehicle</li>
            <li className='text-[16px] md:text-[20px] text-black font-light tracking-tighter'>&#9745;Provides detailed insights into features of the car</li>
            <li className='text-[16px] md:text-[20px] text-black font-light tracking-tighter'>&#9745;Details on factory installed equipment</li>
          </ul>
          </div>
         </div>

         <div>
         <div>
                        <Image
                          src='/assets/history.png'
                          alt='Vehicle History Report'
                          width={1000}
                          height={1000}
                          layout='intrinsic'
                          objectFit='cover'
                          className='mx-auto my-10'
                        />
          </div>
         </div>

         <div className='md:flex flex'>
          <div className='mx-auto my-8'>
          <Button className='px-10
          bg-indigo-700 md:mx-20 md:px-20'>
            Get a window sticker</Button>
          <Button className='px-10 mx-10 my-5
         bg-indigo-700 md:mx-20 md:px-20'>
            View sample window sticker</Button>
          </div>
        </div>

        <div>
          <div data-aos="flip-up" className='flex-flex-cols
          md:flex flex-row md:justify-evenly md:my-5'>
            <div>
                        <Image
                          src='/assets/mg1.png'
                          alt='Vehicle History Report'
                          width={200}
                          height={200}
                          layout='intrinsic'
                          objectFit='cover'
                          className='mx-auto my-auto'
                        />
          </div>

          <div>
                        <Image
                          src='/assets/mg3.png'
                          alt='Vehicle History Report'
                          width={200}
                          height={200}
                          layout='intrinsic'
                          objectFit='cover'
                          className='mx-auto my-auto'
                        />
          </div>

          <div>
                        <Image
                          src='/assets/mg2.png'
                          alt='Vehicle History Report'
                          width={200}
                          height={200}
                          layout='intrinsic'
                          objectFit='cover'
                          className='mx-auto my-auto'
                        />
          </div>
          </div>
        </div>




        


    </div>
    
  )
}

export default Details