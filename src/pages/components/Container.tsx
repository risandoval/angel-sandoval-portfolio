import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container= ( {children, id, className}:{children:React.ReactNode, id:string, className?:string} ) => {
    return (
        <section id={id} className={twMerge('flex flex-col min-h-screen text-brown-100 overflow-clip scroll-mt-40', className)}>
            {children}
        </section>
    )
}

export { Container }