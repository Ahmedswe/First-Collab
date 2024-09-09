import img1 from "../assets/avatar-1.png";
import img2 from "../assets/avatar-2.png";
import Card from "../components/Card_2";
import Button from "../components/Button";

function Testimonials() {
    return (
        <>
            <section
                style={{
                    backgroundImage: `linear-gradient(135deg, #10054d 0%, #45108a 100%)`,
                }}
                className="flex flex-col lg:flex-row justify-evenly items-center py-20 px-4 lg:px-20 mt-20"
            >
                {/* Text Section */}
                <div className="lg:w-[35%] text-white flex flex-col gap-3 mb-10 lg:mb-0">
                    <h1 className="font-poppins text-4xl lg:text-6xl font-bold text-center lg:text-left">
                        Customers love us
                    </h1>
                    <p className="text-center lg:text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
                        labore aspernatur dolor harum quaerat earum voluptatem incidunt vero
                        quos accusamus.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <Button
                            text={<span className="text-white font-semibold">Work with us</span>}
                        ></Button>
                    </div>
                </div>

                {/* Testimony Cards */}
                <div className="flex flex-col lg:flex-row justify-evenly w-full lg:w-auto items-center text-white gap-y-10 md:gap-y-0 ">
                    <Card
                        img={img1}
                        name={"Salman Hassan"}
                        img_size={100}
                        color={"linear-gradient(135deg, rgba(16, 5, 77, 0.9) 0%, rgba(69, 16, 138, 0.9) 100%)"}
                        content={
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, libero ipsam! Quasi sequi incidunt veritatis ea sed debitis libero illo."
                        }
                    ></Card>
                    <Card
                        img={img2}
                        name={"Yasmin"}
                        img_size={100}
                        color={"linear-gradient(135deg, rgba(16, 5, 77, 0.9) 0%, rgba(69, 16, 138, 0.9) 100%)"}
                        content={
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, libero ipsam! Quasi sequi incidunt veritatis ea sed debitis libero illo."
                        }
                    ></Card>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
