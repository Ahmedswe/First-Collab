import img from "../assets/content_thumb.png";
import { BiChevronsRight } from "react-icons/bi";
import { useMediaQuery } from 'react-responsive';

function About_Section() {
    
    const isBetween680And767 = useMediaQuery({ query: '(min-width: 620px) and (max-width: 767px)' });

    return (
        <>
            <section id="about"
                className={`flex flex-wrap bg-slate-200 mt-20 mx-auto justify-center items-center ${isBetween680And767 ? 'w-[90%]' : 'w-full'}`}
            >
                {/* Text Section */}
                <div className="my-8 mx-4 flex flex-col items-center md:items-start text-black w-full md:w-2/4">
                    <h1 className="text-3xl md:text-5xl font-poppins font-bold text-black text-center mb-6">
                        We help grow your business
                    </h1>

                    {/* Item 1 */}
                    <div className="flex flex-col justify-center mb-3">
                        <div className="flex items-center">
                            <BiChevronsRight className="text-purple-700 text-2xl" />
                            <h4 className="font-bold text-lg">Online Presence</h4>
                        </div>
                        <p className="pl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, similique.</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col justify-center mb-3">
                        <div className="flex items-center">
                            <BiChevronsRight className="text-purple-700 text-2xl" />
                            <h4 className="font-bold text-lg">Marketing Strategy</h4>
                        </div>
                        <p className="pl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, similique.</p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col justify-center mb-3">
                        <div className="flex items-center">
                            <BiChevronsRight className="text-purple-700 text-2xl" />
                            <h4 className="font-bold text-lg">Brand Identity</h4>
                        </div>
                        <p className="pl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, similique.</p>
                    </div>
                </div>

                {/* Image Section */}
                <img
                    src={img}
                    alt=""
                    className="w-[65%] md:w-[40%] transition duration-500 hover:scale-105 self-stretch"
                />
            </section>
        </>
    );
}

export default About_Section;
