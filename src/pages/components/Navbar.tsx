import { useEffect, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { MobileNavbar } from "./MobileNavbar";

const Navbar = () => {
    const [showAbout, setShowAbout] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    //toggle hamburger menu
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    //change navbar style on about
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

    return (
        <div className='fixed top-0 z-20 flex flex-col items-end justify-start w-full'>
            {/* desktop navbar */}
            <div className={`flex-col hidden text-xl tracking-wider text-right lg:flex font-radioCanada px-4 pt-4 ${showAbout ? 'text-dark-brown-100' : 'text-brown-100'}`}>
                <a href="#" className="font-light duration-300 transform hover:font-medium">Home</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">About</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">Works</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">Contact</a>
            </div>
            
            {/* mobile navbar icon */}
            {!openMenu &&
                <div className={`block p-3 rounded-full lg:hidden drop-shadow-md mx-4 mt-4 ${showAbout ? 'bg-main-100 text-brown-100' : 'bg-secondary-100'}`}>
                    <RxHamburgerMenu onClick={toggleMenu} className="w-8 h-8 transition duration-500 ease-in-out transform hover:rotate-180 delay-2000"/>
                </div>
            }

            {/* mobile navbar */}
            {openMenu && <MobileNavbar onClose={toggleMenu} />}
        </div>
    )
}

export { Navbar }