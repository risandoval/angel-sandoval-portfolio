import { ScrollContainer, ScrollPage } from "react-scroll-motion"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"

const Landing = () => {
    return (
        <ScrollContainer className="relative flex flex-col justify-center w-full min-h-screen py-4 tablet:gap-12 laptop:gap-28">
            <Hero />

            <ScrollPage>
                <About />
            </ScrollPage>
        </ScrollContainer>
    )
}

export { Landing}