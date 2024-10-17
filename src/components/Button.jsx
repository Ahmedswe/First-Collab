

function Button(props){




    return <>
      <a className="hover:no-underline hover:text-purple-100" onClick={(e) => {
              e.preventDefault(); 
              document.querySelector('#contactus').scrollIntoView({
                behavior: 'smooth'
              });
            }}><button
            className="flex items-center border-2 border-white rounded-full px-2 py-2 bg-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-[#10054d] hover:to-[#45108a] hover:border-transparent">
            {props.icon}
            {props.text}
        </button>
        </a>
    </>
}

export default Button