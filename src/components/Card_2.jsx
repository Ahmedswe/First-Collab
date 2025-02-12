function Card(props) {
    return (
        <>
            <section
                style={{
                    backgroundImage: `${props.color}`,
                }}
                className=" max-lg:w-[45%] max-md:w-[80%] lg:w-[30%] flex flex-col justify-center items-center gap-2 p-8 rounded-lg "
            >
                <div className="flex justify-center items-center text-white font-semibold gap-5 ">
                    <img src={props.img} alt="" width={props.img_size} className="rounded-full" />
                    <span className="text-center lg:text-left">{props.name}</span>
                </div>
                <h1 className="font-poppins font-bold text-2xl whitespace-nowrap">{props.title}</h1>
                <p className="w-full text-center ">{props.content}</p>
            </section>
        </>
    );
}

export default Card;
