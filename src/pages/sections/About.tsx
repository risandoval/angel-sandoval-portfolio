import { portfolioData } from '../../assets/portfolioData'
import { Container } from '../components/Container'

const About = () => {
  return (
    <Container id='about' className='sticky top-0 flex items-center justify-center px-4 py-10 rounded-lg bg-secondary-100 text-dark-brown-100 drop-shadow-lg lg:px-10 xl:px-20'>
        <div className='flex flex-col gap-10'>
            {/* header */}
            <div className="flex flex-col">
                <div className="-mb-2 text-sm font-light font-radioCanada m:text-base lg:text-lg xl:text-xl"> About Me </div>
                <div className="text-5xl font-medium tracking-tight m:text-6xl lg:text-7xl xl:text-8xl"> What I Do.</div>
            </div>
            
            {/* desktop view */}
            <div className='flex-col hidden gap-8 lg:flex'>
                {portfolioData.about.map((skill, index) => (
                    <div key={index} className='flex items-center justify-center gap-4'>
                        <div className='font-bold opacity-50 text-9xl font-firaSans xl:text-[140px]'> {(index + 1).toString().padStart(2, '0')} </div>
                        <div className='flex flex-col gap-2'>
                            <div className='text-3xl font-medium font-firaSans'> {skill.skill} </div>
                            <div className='text-lg font-light leading-6 text-justify font-radioCanada xl:text-xl xl:leading-[27px]'> {skill.skillDescription} </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* mobile view */}
            <div className='flex flex-col gap-8 lg:hidden'>
                {portfolioData.about.map((skill, index) => (
                    <div key={index} className=''>
                        <div className='flex items-start gap-3 text-2xl font-medium m:text-3xl'>
                            <div className='opacity-50 font-firaSans'> {(index + 1).toString().padStart(2, '0')} </div>
                            <div className='font-firaSans'> {skill.skill} </div>
                        </div>
                        
                        <div className='text-base font-light leading-[22px] text-justify font-radioCanada m:text-lg m:leading-6'> {skill.skillDescription} </div>
                    </div>
                ))}
            </div>

            
        </div>
    </Container>
  )
}

export { About }