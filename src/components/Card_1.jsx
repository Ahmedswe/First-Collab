function Card({pad,heading,string, bool }) {
    return (
        <>
            <div className={`w-[95%] sm:w-5/12 lg:w-[30%] ${bool ? "bg-white text-black hover:bg-purple-800 hover:text-white":"bg-purple-800 text-white hover:bg-white hover:text-black"} flex flex-col justify-center items-center my-10 p-6 transition duration-300 transform hover:scale-105 shadow-2xl`}>
                <h1 className={`text-xl ${pad?"pt-1":""} font-bold mb-4`}>
                    {heading}
                </h1>
                <p className={`text-sm ${pad?"py-[10.5px]":""} text-center`}>
                    {string}
                </p>
            </div>

        </>
    );
}

export default Card;
