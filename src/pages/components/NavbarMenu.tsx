import { RxHamburgerMenu } from "react-icons/rx"

const NavbarMenu = () => {
    return (
        <div className='fixed top-0 z-20 flex flex-col items-end justify-start w-full px-4 pt-4'>
            <div className="flex-col hidden text-xl tracking-wider text-right lg:flex text-brown-100 font-radioCanada">
                <a href="#" className="font-light duration-300 transform hover:font-medium">Home</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">About</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">Works</a>
                <a href="#" className="font-light duration-300 transform hover:font-medium">Contact</a>
            </div>
            
            <div className="block p-3 lg:hidden rounded-3xl bg-secondary-100">
                <RxHamburgerMenu className="w-6 h-6"/>
            </div>
        </div>
    )
}

export {  NavbarMenu }