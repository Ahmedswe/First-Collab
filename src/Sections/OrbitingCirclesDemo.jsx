import { useMediaQuery } from 'react-responsive';
import OrbitingCircles from "../components/MagicUi/OrbitingCircles";
import middle_img from "../assets/folders_2.png";
import icon_1 from "../assets/profile_icon_1.svg";
import icon_2 from "../assets/profile_icon_2.svg";
import icon_3 from "../assets/profile_icon_3.svg";
import icon_4 from "../assets/profile_icon_1.svg";

export function OrbitingCirclesDemo() {
  // Define media queries for responsiveness
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });

  // Set radius based on screen size
  const getRadius = (defaultRadius) => {
    if (isSmallScreen) return defaultRadius * 0.5; // Smaller screen radius
    if (isMediumScreen) return defaultRadius * 0.75; // Medium screen radius
    return defaultRadius; // Large screens use default radius
  };

  return (
    <div className="relative flex  h-[250px] md:h-[400px] flex-col items-center justify-center w-4/5 md:w-2/5">
      <span>
        <img src={middle_img} alt="" />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={25}
        delay={10}
        radius={getRadius(100)} // Responsive radius
      >
        <img src={icon_1} alt="" />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={25}
        delay={25}
        radius={getRadius(100)} // Responsive radius
        reverse
      >
        <img src={icon_2} alt="" />
      </OrbitingCircles>

      {/* Outer Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={getRadius(140)} // Responsive radius
        duration={20}
        reverse
      >
        <img src={icon_2} alt="" />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={getRadius(140)} // Responsive radius
        duration={20}
      >
        <img src={icon_3} alt="" />
      </OrbitingCircles>

      {/* Larger outer circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={15}
        delay={10}
        radius={getRadius(200)} // Responsive radius
      >
        <img src={icon_3} alt="" />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={15}
        delay={10}
        radius={getRadius(200)} // Responsive radius
        reverse
      >
        <img src={icon_4} alt="" />
      </OrbitingCircles>
    </div>
  );
}
