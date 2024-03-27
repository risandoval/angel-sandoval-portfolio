import { useEffect, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"

const NavbarMenu = () => {
    const [showAbout, setShowAbout] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const { top, bottom } = aboutSection.getBoundingClientRect();
                setShowAbout(top < 0 && bottom > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const hamburgerMenuClass = `block p-3 rounded-full lg:hidden drop-shadow-md ${showAbout ? 'bg-main-100 text-brown-100' : 'bg-secondary-100'}`;
    
    
    return (
        <div className='fixed top-0 z-20 flex flex-col items-end justify-start w-full px-4 pt-4'>
            {/* <div className="flex-col hidden text-xl tracking-wider text-right lg:flex font-radioCanada ${showAbout ? 'text-dark-brown-100' : 'text-brown-100'}"> */}
            <div className={`flex-col hidden text-xl tracking-wider text-right lg:flex font-radioCanada ${showAbout ? 'text-dark-brown-100' : 'text-brown-100'}`}>
                <a href="#" className="font-light duration-300 transform hover:font-medium">Home</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">About</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">Works</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">Contact</a>
            </div>
            
            <div className={`block p-3 rounded-full lg:hidden drop-shadow-md ${showAbout ? 'bg-main-100 text-brown-100' : 'bg-secondary-100'}`}>
                <RxHamburgerMenu className="w-8 h-8"/>
            </div>
        </div>
    )
}

export {  NavbarMenu }