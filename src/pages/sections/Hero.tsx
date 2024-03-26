import { NavbarMenu } from '../components/NavbarMenu'
import { portfolioData } from '../../assets/portfolioData'

const Hero = () => {
    
  return (
    <section id="hero-container" className="relative flex flex-col min-h-screen text-brown-100"> 
        <NavbarMenu />
        <div id="heroText" className="flex flex-col items-start justify-center h-screen pl-44">
            <div className='text-2xl font-radioCanada font-light'>
                { portfolioData.hero.title }
            </div>
            <div className='text-8xl font-firaSans font-medium tracking-tighter'>
                { portfolioData.hero.name }
            </div>
            
        </div>
        <div className='flex items-center gap-3 text-wrap w-fit -rotate-90 absolute bottom-32 -right-16'>
            <hr className='w-32 bg-brown-100 text-brown-100 border border-brown-100' />
            <div className='text-xl font-radioCanada font-normal'>Scroll Up</div>
        </div>
    </section>
  )
}

export { Hero }