import Logo from "./logo";

// Footer.tsx
const Footer = () => {
    return (
        <div>
            <footer className="bg-white-800 text-black mt-4">
                <div className="border-t border-gray-300 py-4">         
                <div className="container mx-auto text-center">
                    <div className="pl-14">
                        <Logo/>
                    </div>
                </div>
                </div>
            </footer>
        </div>
  
    );
  };
  
  export default Footer;
  