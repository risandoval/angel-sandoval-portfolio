import { RxHamburgerMenu } from "react-icons/rx"

const NavbarMenu = () => {
    return (
        // border border-rose-500
        <div className='fixed z-10 flex flex-col items-end justify-start w-full px-4 pt-4 text-brown-100 font-radioCanada'>
            <div className="flex-col hidden text-right lg:flex">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Works</a>
                <a href="#">Contact</a>
            </div>
            
            <div className="block p-3 lg:hidden rounded-3xl bg-secondary-100">
                <RxHamburgerMenu className="w-6 h-6"/>
            </div>
        </div>
    )
}

export {  NavbarMenu }