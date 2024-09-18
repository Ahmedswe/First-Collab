function Card({color,img,img_size,name,title,content,}) {
    return (
        <>
            <section
                style={{
                    backgroundImage: `${color}`,
                }}
                className="w-[40%] max-lg:w-[65%] max-md:w-[80%] flex flex-col justify-center items-center gap-2 p-6 rounded-lg mb-10"
            >
                <div className="flex justify-center items-center text-white font-semibold gap-5 mb-4 ">
                    <img src={img} alt="" width={img_size} className={`rounded-full `} />
                    <span className="text-center lg:text-left">{name}</span>
                </div>
                <h1 className="font-poppins font-bold text-2xl whitespace-nowrap pr-5">{title}</h1>
                <p className="w-full text-center ">{content}</p>
            </section>
        </>
    );
}

export default Card;
