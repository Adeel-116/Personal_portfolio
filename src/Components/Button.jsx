

function Button({ buttonText, buttonIcon}) {

  return (
    <>
      <div className="relative flex flex-row gap-2 justify-center items-center rounded-full py-[1rem] bg-lightGreen overflow-hidden group">
        {/* Background Animation */}
        <div className="absolute w-full h-[130%] top-[100%] bg-black overflow-hidden rounded-tl-[40%] rounded-tr-[40%] transition-all duration-300 ease-in-out group-hover:-top-3"></div>

        {/* Icon */}
        <div className="relative z-10 font-light flex items-center text-lightWhite text-[16px]">
          {buttonIcon}
        </div>

        {/* Text */}
        <div className="relative z-10">
          <p className="font-medium text-[1.1rem] text-white">{buttonText}</p>
        </div>
      </div>

    </>
  );
}

export default Button;
