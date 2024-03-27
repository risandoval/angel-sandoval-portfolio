import React from "react";

type HeaderProps = {
    text1: string,
    text2: string
}

const Header: React.FC<HeaderProps> = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col -gap-6">
        <div className="text-lg font-light font-radioCanada">{text1}</div>
        <div className="font-medium tracking-tight text-7xl">{text2}</div>
    </div>
  )
}

export { Header }