import { useMediaQuery } from 'react-responsive';
import NavBar from '../components/NavBar';
import bg_img from '../assets/inner_bg.jpg';
import img1 from '../assets/thumb_7.png';
import img2 from '../assets/thumb_8.png';
import img3 from '../assets/thumb_9.png';
import img4 from '../assets/thumb_10.png';

function Hero_Section() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 786px) and (min-width: 670px)' });
    const isMediumScreen2 = useMediaQuery({ query: '(max-width: 670px) and (min-width: 510px)' });


    const bg = {
        backgroundImage: `linear-gradient(135deg, rgba(16, 5, 77, 0.9) 0%, rgba(69, 16, 138, 0.9) 100%), url(${bg_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
    };

    return (
        <div style={bg} className="min-h-[80%] w-full relative">
            {/* NavBar stays at the top */}
            <div className="">
                <NavBar />
            </div>

            {/* Hero Section Content */}
            <section className={`flex items-center w-11/12 mx-auto relative ${isSmallScreen ? 'flex-col ' : 'flex-row justify-between'}`}>
                {/* Text content */}
                <div className={`flex flex-col text-white font-poppins justify-center ${isSmallScreen ? 'w-full text-center mb-4' : 'w-2/4'}`}>
                    <h1 className="font-bold text-4xl md:text-5xl">
                        Pen & Byte
                    </h1>
                    <p className="text-lg  md:text-xl mt-4 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.
                    </p>
                </div>
                
                {/* Stacked Images */}
                <div 
                    className={`relative flex justify-center items-center ${isSmallScreen ? 'h-[300px]' : 'h-[500px]'} `} 
                    style={{ width: isMediumScreen2 ? '75%' : isMediumScreen ? '60%' : '95%', maxWidth: '550px' }}
                >
                    <img src={img1} alt="Thumbnail 1" className="absolute w-full " style={{ zIndex: 1, bottom: '10%', width: '100%' }} />
                    <img src={img2} alt="Thumbnail 2" className="absolute animate-bounce" style={{ zIndex: 2, bottom: '20%', left: '0%', width: '55%', animation: 'bounce 8s infinite' }} />
                    <img src={img3} alt="Thumbnail 3" className="absolute animate-bounce" style={{ zIndex: 3, bottom: '30%', left: '20%', width: '55%', animation: 'bounce 5s infinite' }} />
                    <img src={img4} alt="Thumbnail 4" className="absolute animate-bounce" style={{ zIndex: 4, bottom: '40%', left: '40%', width: '55%', animation: 'bounce 6s infinite' }} />
                </div>
            </section>
        </div>
    );
}

export default Hero_Section;
