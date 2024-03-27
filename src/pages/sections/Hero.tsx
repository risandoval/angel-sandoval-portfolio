import { portfolioData } from '../../assets/portfolioData'
import { Container } from '../components/Container'

const Hero = () => {
    return (
        <Container id="hero" className="sticky top-0">
            <div id="heroText" className="flex flex-col items-start justify-center h-screen pl-4">
                <div className='text-sm font-light font-radioCanada lg:text-xl xl:text-2xl'>
                    { portfolioData.hero.title }
                </div>
                <div className='text-4xl font-medium tracking-tighter font-firaSans m:text-5xl lg:text-7xl xl:text-8xl'>
                    { portfolioData.hero.name }
                </div>
            </div>
            <div className='absolute flex items-center gap-3 -rotate-90 -right-12 text-wrap w-fit bottom-28 lg:bottom-32 lg:-right-16 xl:-right-16'>
                <hr className='w-16 border bg-brown-100 text-brown-100 border-brown-100 lg:w-24' />
                <div className='text-sm font-normal font-radioCanada lg:text-base'>Scroll Up</div>
            </div>
        </Container>
    )
}

export { Hero }