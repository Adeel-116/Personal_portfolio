

function Button({ buttonText, buttonIcon, onClick}) {

  return (
    <>
      <div className="relative flex flex-row 2xl:gap-x-3 md:gap-x-2 justify-center items-center rounded-full py-[0.9rem] bg-lightGreen overflow-hidden group"
      onClick={onClick}
      >
        {/* Background Animation */}
        <div className="absolute w-full h-[130%] top-[100%] bg-black overflow-hidden rounded-tl-[40%] rounded-tr-[40%] transition-all duration-300 ease-in-out group-hover:-top-3"></div>

        {/* Icon */}
        <div className="relative z-10 font-light flex items-center text-lightWhite 2xl:text-[15px] xl:text-[14px]">
          {buttonIcon}
        </div>

        {/* Text */}
        <div className="relative z-10">
          <p className="font-medium 2xl:text-[1rem] xl:text-[0.9rem] text-white">{buttonText}</p>
        </div>
      </div>

    </>
  );
}

export default Button;
