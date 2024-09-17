import img1 from "../assets/a1.jpeg";
import img2 from "../assets/z1.jpeg";
import Card from "../components/Card_2 copy";
import Button from "../components/Button";

function Testimonials() {
    return (
        <>
            <section id="testimonials"
                style={{
                    backgroundImage: `linear-gradient(135deg, #10054d 0%, #45108a 100%)`,
                }}
                className="flex flex-col lg:flex-row justify-evenly items-center py-20 px-4 lg:px-20 mt-20"
            >
                {/* Text Section */}
                <div className="lg:w-[35%] text-white flex flex-col gap-3 mb-10 lg:mb-0">
                    <h1 className="font-poppins text-4xl lg:text-6xl font-bold text-center">
                        Customers love us
                    </h1>
                    <p className="text-center">
                    Customers love us because of our commitment to excellence and attention to detail. Our reliable solutions and top-notch service consistently exceed expectations.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            text={<span className="text-white font-semibold">Work with us</span>}
                        ></Button>
                    </div>
                </div>

                {/* Testimony Cards */}
                <div className="flex flex-col lg:flex-row justify-evenly w-full lg:w-auto items-center text-white gap-y-10 md:gap-y-0 ">
                    <Card
                        img={img1}
                        name={"Muhammad Ahmed"}
                        img_size={115}
                        color={"linear-gradient(135deg, rgba(16, 5, 77, 0.9) 0%, rgba(69, 16, 138, 0.9) 100%)"}
                        content={
                            "You bring the vision, and I bring the expertise. Our partnership is the ultimate blueprint for business success."
                        }
                    ></Card>
                    <Card
                        img={img2}
                        pad={true}
                        name={"Zartash Nabeel"}
                        img_size={115}
                        color={"linear-gradient(135deg, rgba(16, 5, 77, 0.9) 0%, rgba(69, 16, 138, 0.9) 100%)"}
                        content={
                            `                     Your journey isn’t just yours alone—it’s a part of my lifestyle too.           `
                        }
                        
                    ></Card>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
