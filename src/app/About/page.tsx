import React from 'react'
import Image from 'next/image';

const About = () => {
  return (

    
  <div className=''>
    
    
    <div>
             <Image
          src="/assets/fox5.jpg"
           alt="portfolio-pic"
            width={500} 
            height={500}
             className="h-100
             bg-indigo-900 my-18 w-full"
             />
        </div>

        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4 */}

        <div className='flex flex-col w-full
        md:grid grid-cols-2 my-20'>
        
             
                  <div className='grid grid-cols-2 bg-image py-40 h-[80%] '>
              <div className='flex flex-col'>
              <div>
             <Image
          src="/assets/car.jpg"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            className='w-[70%] mx-10 rounded-[100%]'
              />
             </div>

             <div>
             <Image
          src="/assets/bi.jfif"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            className='w-[70%] mx-10 my-10 rounded-[100%]'
             />
             </div>
             </div>

             
             <div className='flex flex-col'>
              <div>
             <Image
          src="/assets/bo.jfif"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            className='w-[60%] mx-10 rounded-[100%]'
              />
             </div>

             <div>
             <Image
          src="/assets/tr.jfif"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            className='w-[60%] mx-10 my-10 rounded-[100%]'
             />
             </div>
             </div>
             </div>
            


             
        {/***col-2***************************************************************  */}
      
      <div className='flex flex-col mt-10'>
        <h5 className='text-red-700 text-lg text font-bold text-wrap text-center'>About FireWheel Reports Verifier</h5>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-wrap text-center">Generate a Truth <br/> Verification Report</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-wrap text-center">After extensive deliberation, my team and I have concluded that the National 
          Motor Vehicle Title Information System NMVTIS is the best solution for tracking down pre-owned vehicles. This invaluable resource
           grants us access to a vast database featuring millions of listings. NMVTIS is renowned for its reliability and frequent updates. Additionally, {`we've`} established a partnership with an exceptional company specializing in the swift and precise retrieval of lien data for a multitude of used cars. By leveraging
           these resources, we are fully prepared to offer our customers a diverse and trustworthy inventory of used vehicles.</p>
           
           <div className='grid grid-cols-2 items-center mx-40'>
           <div className='flex flex-row'>
             <Image
          src="/assets/ds.png"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            className='w-[40%] my-0 rounded-lg bg-sky-200 '
             />
             </div>

         <div className='my-16 text-5xl text-black font-extrabold'>1260+ <br/>
        <h3 className='text-black font-bold text-2xl'>Delivery<br/>
         Successful</h3></div>

         <div className='flex flex-row'>
             <Image
          src="/assets/cs.png"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            className='w-[40%] my-0 rounded-lg bg-sky-200 '
             />
             </div>

         <div className='my-16 text-5xl text-black font-extrabold'>100% <br/>
        <h3 className='text-black font-bold text-2xl'>Client<br/>
         Satisfaction</h3></div>
        </div>

        </div>

        

        


           
         

         {/* ************************************************************8 */}
          <div className='bg-image py-40'>
         <div className='flex flex-col
         md:grid-cols-2'>

          <div className='mx-5'>
            <h4 className='text-xl text-red-600 font-bold py-1'>0ur services</h4>
          <h1 className='text-5xl font-bolder text-black'>Firewheel provides a<br/> report service.</h1>
          </div>

          <div className="py-12 px-2">

            <p className='text-start text-white'>With our expert evaluation, you can drive away with confidence, knowing the true value and condition of
             your chosen vehicle. {`Don't`} take {`risks;`} get the peace of mind you deserve with our thorough vehicle inspection 
             reports.</p>
             </div>
         
         </div>
         </div>
        
         {/* ********************************** */}

         <div className='flex flex-col gap-8 mt-10'>
          <div className='flex flex-row gap-2'>
         <div>
             <Image
          src="/assets/carr.jpg"
           alt="portfolio-pic"
            width={300} 
            height={300}
            className='h-80 w-[100%] rounded-lg bg-sky-200 mb-0 '
             />
             </div>

             <div>
             <Image
          src="/assets/bikee.jpg"
           alt="portfolio-pic"
            width={300} 
            height={300}
            className='h-80 w-[100%] rounded-lg bg-sky-200 mb-0 '
             />
             </div>

             </div>




            <div className='flex flex-row gap-2'>

            
             <div>
             <Image
          src="/assets/truckk.jpg"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            className='h-80 w-[100%] rounded-lg bg-sky-200 mb-10 '
             />
             </div>

             <div>
             <Image
          src="/assets/bo.jfif"
           alt="portfolio-pic"
            width={1000} 
            height={1000}
            className='h-80 w-[100%] rounded-lg bg-sky-200 mb-10 '
             />
             </div>
             </div>

         </div>
         </div>
         
         
  
         {/* ********************************************************8 */}
               
         
         
         
         
      
         
         
         
                       
                       </div>
  )
}

export default About