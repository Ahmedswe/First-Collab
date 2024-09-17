import Card from "../components/Card_2";
import web_dev_img from "../assets/Webimg.jpeg";
import adds_img from "../assets/Adimg.jpeg";
import seo_img from "../assets/Seoimg.jpeg";
import email_marketing_img from "../assets/Emailimg.jpeg";
import copy_writing_img from "../assets/Copyimg.jpeg";
import marketing_img from "../assets/marketimg.jpeg";

function Services() {
    return (
        <>
            <section id="services" className="bg-slate-200 flex flex-col justify-center items-center w-full mx-auto py-8 mt-20 px-[10%] ">
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
                        content={"Transforming your digital ideas into reality with tailored web development solutions that make your business stand out online."}
                    ></Card>
                    <Card
                        img_size={100}
                        img={seo_img}
                        color={"transparent"}
                        title={"Seo Ranking"}
                        content={"Boosting your online visibility with expert SEO strategies that drive traffic and elevate your search rankings."}
                    ></Card>
                    <Card
                        img_size={100}
                        img={copy_writing_img}
                        color={"transparent"}
                        title={"CopyWriting"}
                        content={"Writing clear and engaging content that connects with your audience and helps grow your business."}
                    ></Card>
                    <Card
                        img_size={100}
                        img={email_marketing_img}
                        color={"transparent"}
                        title={"Email Marketing"}
                        content={"Connecting you with your audience through personalized email campaigns that boost engagement and drive growth."}
                    ></Card>
                    <Card
                        img_size={100}
                        img={adds_img}
                        color={"transparent"}
                        title={"Advertisement"}
                        content={"Designing ads that make a splash and generate results, putting your brand in the spotlight and boosting your business "}
                    ></Card>
                    <Card
                        img_size={100}
                        img={marketing_img}
                        color={"transparent"}
                        title={"Affiliate Marketing"}
                        content={"Maximizing your revenue with strategic affiliate marketing that connects you with top partners and boosts your growth."}
                    ></Card>
                </div>
            </section>
        </>
    );
}

export default Services;
