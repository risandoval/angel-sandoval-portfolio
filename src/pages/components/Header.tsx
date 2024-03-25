import React from "react";

type HeaderProps = {
    text1: string,
    text2: string
}

const Header: React.FC<HeaderProps> = ({ text1, text2 }) => {
  return (
    <div className="">
        <div>{text1}</div>
        <div>{text2}</div>
    </div>
  )
}

export { Header }