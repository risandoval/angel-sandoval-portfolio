import { Container } from '../components/Container'
import { Header } from '../components/Header'

const About = () => {
  return (
    <Container id='about' className='sticky top-0 flex items-center justify-center px-10 rounded-lg bg-secondary-100 text-dark-brown-100 drop-shadow-lg'>
        <div className=''>
            <Header text1='About Me' text2='What I Do.' />
            
            <div className='flex items-center'>
                <div className='font-extrabold text-8xl font-firaSans'>01</div>
                <div className='flex flex-col'>
                    <div> UI/UX Design </div>
                    <div>Turning your ideas into user-friendly, responsive designs is what I do best. I bridge the gap between imagination and functionality by crafting interfaces that are both visually captivating and seamlessly adaptable across all devices for a smooth and intuitive user experience for everyone.</div>
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export { About }