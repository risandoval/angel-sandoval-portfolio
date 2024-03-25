import React from 'react'
import { ScrollContainer, ScrollPage } from 'react-scroll-motion'
import { Header } from '../components/Header'

const About = () => {
  return (
    <ScrollContainer className='flex items-center justify-start h-screen rounded-lg bg-secondary-100'>
        <ScrollPage>
            <Header text1='About' text2='What I Do.' />
        </ScrollPage>
    </ScrollContainer>
  )
}

export { About }