import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { useEffect, useRef } from "react";
import { Container } from "./components/Container";
import { NavbarMenu } from "./components/NavbarMenu";

const Landing = () => {
    const grainRef = useRef<HTMLDivElement>(null);

    useEffect( () => {
        const moveGradient = (event: MouseEvent) => {
            if (!grainRef.current) {
                return;
            }

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const mouseX = (event.pageX / windowWidth) * 100;
            const mouseY = (event.pageY / windowHeight) * 100;

            grainRef.current.style.setProperty("--mouseX", `${mouseX}%`);
            grainRef.current.style.setProperty("--mouseY", `${mouseY}%`);
        }

        window.addEventListener("mousemove", moveGradient);

        return () => {
            window.removeEventListener("mousemove", moveGradient);
        }
    });

    return (
        <div className="relative flex flex-col justify-center w-full min-h-screen py-4 tablet:gap-12 laptop:gap-28">
            <div ref={grainRef} className="grain"></div>
            <NavbarMenu />
            <div>
                <Hero />
                <About />
            </div>
            
            <Container id="sample" className="w-full p-10 h-[150vh]">
                <div>sample</div>
            </Container>
        </div>
    )
}

export { Landing }