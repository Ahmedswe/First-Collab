import img1 from "../assets/avatar-1.png";
import img2 from "../assets/avatar-2.png";
import Card from "../components/Card_2 copy";
import Button from "../components/Button";

function Testimonials() {
    return (
        <>
            <section id="testimonials"
                style={{
                    backgroundImage: `linear-gradient(135deg, #10054d 0%, #45108a 100%)`,
                }}
                className="flex flex-col lg:flex-row justify-evenly items-center py-20 px-4 lg:px-14 mt-20"
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
                <div className="flex flex-col lg:flex-row justify-end w-full  items-center text-white  gap-x-14 ">
                    <Card
                        img={img2}
                        pad={true}
                        name={"Yasmin"}
                        img_size={90}
                        color={"linear-gradient(135deg, rgba(16, 5, 77, 0.9) 0%, rgba(69, 16, 158, 0.9) 100%)"}
                        content={
                            `Was easy to work with! I would recommend him to any other folks looking for help with their website or design. `
                        }
                        
                    ></Card>
                        <Card
                            img={img1}
                            name={"Clark Kent"}
                            img_size={90}
                            color={"linear-gradient(135deg, rgba(16, 5, 77, 0.9) 0%, rgba(69, 16, 158, 0.9) 100%)"}
                            content={
                                "delivered work on time and were incredibly cooperative throughout the project. Highly recommended! "
                            }
                        ></Card>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
