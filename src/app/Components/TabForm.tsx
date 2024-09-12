'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

  

function TabForm() {
  
  return (
    <div className=" wrapper bg-white">


      
    {/* <div className="flex flex-col */}
    {/* md:grid grid-cols-2 justify-evenly"> */}


{/* <div data-aos="fade-right" data-aos-duration="3000">
             <Image
          src="/assets/fo2.jpg"
           alt="portfolio-pic"
            width={300} 
            height={700}
             className="md:hidden rounded-xl mr-10 my-0 my-18 md:h-80 h-40 w-40"
              // my-18 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110"
             />
        
                
            </div> */}

    <div data-aos="fade-right" className="mt-10 md:mx-60 mx-10">
    <Tabs defaultValue="account" className="w-full mx-auto md:w-[500px] ">
      <TabsList className="grid w-full grid-cols-2 text-white gap-3">
        <TabsTrigger className="bg-indigo-700 rounded-[20px] font-extrabold tracking-tighter" value="account">By VIN</TabsTrigger>
        <TabsTrigger className="bg-indigo-700 rounded-[20px] font-extrabold tracking-tighter" value="password">By US Licence Plate</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="bg-indigo-200 border-indigo-900">
          <CardHeader>
            <CardTitle>By VIN</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name"></Label>
              <Input placeholder="Email Address" id="name" defaultValue="" />
            </div>


            <div className="space-y-1">
              <Label htmlFor="name"></Label>
              <Input placeholder="Phone Number" id="name" defaultValue="" />
            </div>


            <div className="space-y-1">
              <Label htmlFor="username"> </Label>
              <Input placeholder="Enter VIN Number" id="username" defaultValue="" />
            </div>
          </CardContent>
          <CardFooter>
            <Button  className="bg-indigo-900">CHECK RECORDS</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className= "bg-indigo-200 border-indigo-900">
          <CardHeader>
            <CardTitle>By US LIcence Plate</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current"></Label>
              <Input placeholder="Email Address" id="current" type="" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="current"></Label>
              <Input placeholder="Phone Number" id="current" type="" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="current"></Label>
              <Input placeholder="Licence Plate" id="current" type="" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="current"></Label>
              <Input placeholder="Select State" id="current" type="" />
            </div>
            
          </CardContent>
          <CardFooter>
            <Button className="bg-indigo-900">CHECK RECORDS</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>

    
            {/* </div> */}




    </div>
  )
};




export default TabForm
