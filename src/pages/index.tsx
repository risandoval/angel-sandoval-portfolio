import { Hero } from "./sections/Hero"

const Landing = () => {
    return (
        // <div className="relative flex flex-col justify-center w-full min-h-screen overflow-x-hidden tablet:gap-12 laptop:gap-28">
        //     <Hero />
        // </div>
        <div className="bg-neutral-800">
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                Scroll down
                </span>
            </div>
            <Hero />
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                Scroll up
                </span>
            </div>
        </div>
    )
}

export { Landing}