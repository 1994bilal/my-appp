'use client'
import React from 'react'
import { useState } from 'react'
import {
    Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'



        


// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true)

  return (
    <div className='container'>
    <div className='w-full z-50'>
    <div className='bg-yellow-600 h-20'>
      <div className="flex lg:flex-1 w-full">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="" 
            src="/assets/logo.png"
             className="ml-10 h-16 w-40"
            width={500}
            height={500} />
          </a>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5 ">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            
          <Button className='bg-gray-400 rounded-[20px] px-4 py-1 mx-10 mt-5 items-start'>Login</Button>
          </a>
        </div>
        </div>

        

    </div>
    <header className="bg-indigo-900 w-full">
      <nav aria-label="Global" className="mx-auto z-50 flex items-center justify-between bg-indigo-900 w-full h-20">
        
        <div className="flex lg:hidden">
        <Button className='bg-gray-400 rounded-[20px] px-4 py-1 mx-20 my-auto'>Login</Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            
            <Bars3Icon aria-hidden="true" className="h-8 w-6 text-black font-extrabold mx-60"/>
            
            
          </button>
          
        </div>

        
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 ml-16 text-center">

        
        <Link href={"/"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
             Home
          </Link>
          <Link href={"/About"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
             About Us
          </Link>
          <Link href={"/Window"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
             Window Sticker
          </Link>
          <Link href={"Report"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
            Sample Report
          </Link>

          <Link href={"/Car"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
             Car Report
          </Link>
          <Link href={"/Bike"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
            MotorBike Report
          </Link>

          <Link href={"/Truck"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
             Truck Report
          </Link>
          <Link href={"ATV"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
            ATV Report
          </Link>

          <Link href={"/Boat"} className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
             Boat Report
          </Link>
          
          
          <Link href="/Cont" className="text-[16px] font-medium leading-6 text-white opacity-35 hover:opacity-100">
            Contact us
          </Link>
          

          
          

        </PopoverGroup>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/Home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="/assets/logo.png"
                className="h-20 w-100"
                width={100}
                height={30}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 my-14" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
              
                  
              

                <Link href={"/"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
             Home
          </Link>
          <Link href={"/About"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
             About Us
          </Link>
          <Link href={"/Window"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
             Window Sticker
          </Link>
          <Link href={"Report"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
            Sample Report
          </Link>

          <Link href={"/Car"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
             Car Report
          </Link>
          <Link href={"/Bike"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
            MotorBike Report
          </Link>

          <Link href={"/Truck"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
             Truck Report
          </Link>
          <Link href={"ATV"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
            ATV Report
          </Link>

          <Link href={"/Boat"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
             Boat Report
          </Link>
          
          
          <Link href="/Cont" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black opacity-35 hover:opacity-100">
            Contact us
          </Link>
                <Button className='bg-gray-400 rounded-[20px] px-6 py-2 mx-0 my-auto text-black opacity-35 hover:opacity-100'>Login</Button>
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    </div>
    </div>
  );
};




export default Header;