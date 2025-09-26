import { MdOutlineShoppingCart } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import NavBar from './NavBar';
import Button from '../Button';
import { IoIosSend } from "react-icons/io";
import Icon from '../Icon';
import Profile from './Profile';
import logo from '../../assets/icon3.png';

function Header() {
    return (
        <div className="2xl:w-[17%] sm:w-full xl:w-[20%] lg:w-[25%] bg-whiteGray lg:h-screen lg:fixed lg:flex">
           
            <div className="lg:w-[18%] sm:w-[100%] h-auto md:flex hidden lg:h-screen lg:py-5 sm:px-7 sm:py-4  lg:flex-col sm:flex-row lg:items-center lg:gap-y-3">
                <div className="icon bg-lightGreen w-8 h-8 p-1 rounded-full flex justify-center items-center">
                    <img
                        src={logo}
                        alt=""
                        className="w-5 h-5"
                    />
                </div>
    
                <div>
                    <Icon iconName={<MdOutlineShoppingCart />} bgtrue={true} />
                </div>
                <div>
                    <Icon iconName={<FaMoon />} bgtrue={true} />
                </div>
           
            </div>


            <div className="lg:w-[95%] lg:block hidden px-6 bg-lightWhite relative">
                <div className="profile py-8">
                    <Profile />
                </div>
                <div className="relative w-full h-full flex flex-col gap-y-7">
                    <div className="w-full h-[1px] bg-lightGreen"></div>
                    <div>
                        <NavBar />
                    </div>
                    <div className="absolute bottom-[33%] button w-full h-auto flex justify-center">
                        <div className="xl:w-[70%] lg:w-[80%]">
                            <Button buttonText={"Hire Me"} buttonIcon={<IoIosSend />} />
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full bg-white h-auto lg:hidden block px-7 fixed py-4 bottom-0 z-30'>
                <NavBar />
            </div>
        </div>
    );
}

export default Header;
