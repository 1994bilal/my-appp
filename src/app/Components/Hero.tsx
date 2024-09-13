'use client'
import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import GetReport from './GetReport/page';








const Hero = () => {



  useEffect(() =>{
    AOS.init({
      once:false
    });
  }, []);
  return (
    <div className='sm:container max-w-full md:wrapper'>

      {/* Parent Div of cols-2 */}
        <div className='md:grid grid-cols-2'>
          
        {/* Mobile Display */}
            <div className='flex flex-col md:my-18 p-4 text-center bg-indigo-900'>
              {/* *********** */}
              {/* Col-1  */}
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-yellow-200 mt-5 leading-none">
                  
                    An Option to Carfax for<br/>
                    Pre-Owned Car Records.< br/>
                    Access Used Auto History<br/>
                    Reports and Window<br/>
                    Labels for Vehicles.</h1>
                <p className=
                'w-full text-wrap md:text-xl text-white mt-10'>
                  Searching for an option other than Carfax to obtain used car reports?
                   Our VIN check and license plate lookup tool are at your service, providing 
                   comprehensive insights into a {`vehicle's`} history through a car history report.
                    Interested in delving deeper into a {`vehicle's`} factory-original options, packages
                    , and features? Explore by retrieving the window sticker details.</p>     
             </div>
             {/* **************** */}
                 
      {/* Col-2 Image  */}
         
        <div>
             <Image
          src="/assets/fox2.jpg"
           alt="portfolio-piccccc"
            width={700} 
            height={500}
             className="h-[100%]
             bg-indigo-900 my-18 "
             />
        
                
            </div>
               </div>
{/* ********************************* */}

<GetReport/>

        



                 </div>


          
          
    
  )
}


export default Hero;