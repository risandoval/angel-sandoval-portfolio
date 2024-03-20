import { Hero } from "./sections/Hero"

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center w-full min-h-screen tablet:gap-12 laptop:gap-28">
        <Hero />
    </div>
  )
}

export { Landing}