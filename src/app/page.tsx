import Image from "next/image";
import Header from "./Components/Header";

import Details from "./Components/Details";

import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import TabForm from "./Components/TabForm";


export default function Home() {
  return (
    
  <main>
   <Hero/>
    <TabForm/>
    <Details/>
    
  </main>
  );
}
