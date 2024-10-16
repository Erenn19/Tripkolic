'use client'
import { Aside } from "../components/Aside";
import Footer from "../components/Footer";
import FooterGround from "../components/FooterGround";
import FooterNav from "../components/FooterNav";
import HeaderNav from "../components/headerNav";
import Logo from "../components/logo";
import Profile from "../components/Profile";
import { SecondAside } from "../components/SecondAside";


export default function Home() {
  return (
  <div className="bg-white">
  <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white" aria-label="Global">
    <div className="flex lg:flex-1">
        <Logo/>
    </div>
    <div className="hidden lg:flex lg:gap-x-12 bg-white">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-500">Home</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-800">Tours</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <HeaderNav/>
    </div>
  </nav>
  </header>
  <div className="flex border-t border-gray-300 py-4">
   <div className="bg-white ">
      <Profile/>
   </div>
   <div className="bg-white">
    <div>
     <Aside
            initialName="John" 
            initialSurname="Doe" 
            initialCountry="America" 
            initialBirthday="2000-01-01" 
            initialPassportNumber="A1234567" 
            initialPhoneNumber="123456789"
      />
    </div>
     <div className="gap-2">
        <SecondAside
         initialName="John" 
         initialSurname="Doe" 
         initialCountry="America" 
         initialBirthday="2000-01-01" 
         initialPassportNumber="A1234567" 
         initialPhoneNumber="123456789"/>
      </div>
    </div>
    
  </div>
  <div>
  <Footer/>
  </div>
  <div className="text-black pl-14">
    <FooterNav/>
  </div>
  <div>
    <FooterGround/>
  </div>
  </div>
  );
}
