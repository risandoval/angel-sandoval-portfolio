import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const MobileNavbar = ({ onClose }: { onClose: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpen(true);
		}, 100);

		document.body.style.overflow = 'hidden';

		return () => {
			clearTimeout(timer)
			document.body.style.overflow = 'auto';
		};
	}, []);

	const closeNavbarMenu = () => {
		setIsOpen(false);
		setTimeout(() => {
			onClose();
		}, 1000);
	};

    return (
        <div className={`absolute block w-full h-screen p-0 bg-secondary-100 lg:hidden pl-4 pr-2.5 pt-2 text-4xl m:text-6xl drop-shadow-lg transform transition-transform duration-1000 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
			<div className="flex justify-end">
				<IoClose onClick={closeNavbarMenu} className="transition duration-500 ease-in-out transform hover:rotate-180 delay-2000" />
			</div>
			<div className='flex flex-col gap-6 px-4 pt-4 tracking-wider text-left font-radioCanada text-dark-brown-100'>
                <a href="#" onClick={closeNavbarMenu} className="font-light duration-300 transform hover:font-medium">Home</a>
                <a href="#" onClick={closeNavbarMenu} className="font-light duration-300 transform hover:font-medium">About</a>
                <a href="#" onClick={closeNavbarMenu} className="font-light duration-300 transform hover:font-medium">Works</a>
                <a href="#" onClick={closeNavbarMenu} className="font-light duration-300 transform hover:font-medium">Contact</a>
            </div>
		</div>
    )
}

export { MobileNavbar }