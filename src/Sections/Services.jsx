import Card from "../components/Card_2";
import web_dev_img from "../assets/backend.png";
import adds_img from "../assets/ads.png";
import seo_img from "../assets/ranking.png";
import email_marketing_img from "../assets/email-marketing.png";
import copy_writing_img from "../assets/writing.png";

function Services() {
    return (
        <>
            <section className="bg-slate-200 flex flex-col justify-center items-center w-full mx-auto py-8 mt-20 px-[10%]">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-10">
                    We provide the best digital services
                </h1>
                
                {/* Cards Section */}
                <div className="flex flex-wrap justify-evenly gap-6 w-full">
                    <Card
                        img_size={100}
                        img={web_dev_img}
                        color={"transparent"}
                        title={"Web developement"}
                        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem optio a inventore obcaecati, ut cumque in debitis aperiam voluptatibus"}
                    ></Card>
                    <Card
                        img_size={100}
                        img={seo_img}
                        color={"transparent"}
                        title={"Seo Ranking"}
                        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem optio a inventore obcaecati, ut cumque in debitis aperiam voluptatibus "}
                    ></Card>
                    <Card
                        img_size={100}
                        img={copy_writing_img}
                        color={"transparent"}
                        title={"CopyWriting"}
                        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem optio a inventore obcaecati, ut cumque in debitis aperiam voluptatibus "}
                    ></Card>
                    <Card
                        img_size={100}
                        img={email_marketing_img}
                        color={"transparent"}
                        title={"Email Marketing"}
                        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem optio a inventore obcaecati, ut cumque in debitis aperiam voluptatibus "}
                    ></Card>
                    <Card
                        img_size={100}
                        img={adds_img}
                        color={"transparent"}
                        title={"Advertisement"}
                        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem optio a inventore obcaecati, ut cumque in debitis aperiam voluptatibus "}
                    ></Card>
                    <Card
                        img_size={100}
                        img={adds_img}
                        color={"transparent"}
                        title={"Advertisement"}
                        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem optio a inventore obcaecati, ut cumque in debitis aperiam voluptatibus "}
                    ></Card>
                </div>
            </section>
        </>
    );
}

export default Services;
