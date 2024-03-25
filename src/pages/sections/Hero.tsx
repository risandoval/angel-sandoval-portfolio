import { useRef } from "react";
import { portfolioData } from "../../assets/portfolioData";
import { useScroll, useTransform, motion } from "framer-motion";
import { NavbarMenu } from "../components/NavbarMenu";

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-40%"]);

    return (
        <section ref={targetRef} id="hero-container" className="relative h-[150vh] text-brown-100">
            <NavbarMenu />
            <div id="heroText" className="sticky top-0 flex items-center h-screen overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 text-nowrap">
                    <div className="font-bold font-firaSans text-9xl">
                        MARY ANGEL SANDOVAL
                    </div>
                    <div className="flex flex-col w-2/5 gap-2">
                        <div className="text-4xl font-medium"> { portfolioData.hero.title } </div>
                        <div className="text-2xl text-pretty"> {portfolioData.hero.titleDescription} </div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export { Hero };