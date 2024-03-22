import { useEffect, useState } from "react";
import { portfolioData } from "../../assets/portfolioData";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTranslate = () => {
    const maxScroll = document.body.clientHeight - window.innerHeight;
    const translationRange = 50; // Range of translation in pixels
    const translate = (scrollPosition / maxScroll) * translationRange;
    return 50 - translate;
  };

  return (
    <div className="flex items-center justify-center w-full gap-10 h-[100vw] text-brown-100 text-nowrap overflow-x-hidden"
        style={{
            transform: `translateX(${calculateTranslate()}%)`,
        }}
    >
      <div className="font-bold font-firaSans text-9xl">
        MARY ANGEL SANDOVAL
      </div>
      <div className="flex flex-col w-2/5 gap-2">
        <div className="text-4xl font-medium">{portfolioData.hero.title}</div>
        <div className="text-2xl text-pretty">
          {portfolioData.hero.titleDescription}
        </div>
      </div>
    </div>
  );
};

export { Hero };
