import {  NavLink } from "react-router-dom";
import logo from "../assets/online.svg";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import {  FaOpencart, FaUser } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

 import { useNavigate } from 'react-router-dom'
const Header = () => {

  const {islogin} = useContext(ShopContext);
 
  const navigate = useNavigate()
  // const [islogin , setisLogin] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  // const [login, setLogin] = useState(true);
  
  const togglemenu =()=>{
    setMenuOpened(!menuOpened);
  }
  const toggleMe=()=>{
    setMenuOpened(!menuOpened); 
  }
  return (
    <header
      className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white
      z-10  "
    >
      <div className="px-4 flex justify-between py-3 max-xs:px-2 outline-none ">
        {/* logo */}
        <div>
          <NavLink to={'/'}>
            <img src={logo} alt="" width={97} height={97} className="outline-none" />
          </NavLink>
        </div>

        {/* Navbar Desktop*/}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10  medium-15 "}
        />
        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "md:hidden flex item-start flex-col gap-y-12 fixed  top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 font-bold ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed  top-20  p-12 bg-white rounded-3xl shadow-md w-64 font-bold ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />

        {/* buttons */}
        <div className="flex gap-x-6  ">{!menuOpened ? <MdMenu className=" md:hidden h-7 w-7  cursor-pointer hover:text-secondary ring-1 rounded-3xl p-1 ring-slate-800 hover:ring-secondary"
        onClick={togglemenu} /> : <MdClose className=" md:hidden h-7 w-7 cursor-pointer hover:text-secondary  " onClick={toggleMe}/>}
        <div className="flex justify-between  sm:gap-x-6">
            <NavLink to={'cart-page'} className={"flex"}><FaOpencart className=" p-1 h-7 w-7 ring-1 ring-slate-800  rounded-3xl hover:ring-secondary hover:text-secondary"/> <span className="relative flex justify-center w-5 h-5 rounded-xl bg-secondary text-white font-semi-bold -top-2 ">7</span> </NavLink> 
            {!islogin ? ( <NavLink to={'login'} className={'btn bg-secondary rounded-full pl-3 pr-3 pt-1 pb-1.5  ml-3 -mr-4 flex flex-row justify-center items-center text-white text-semibold  gap-x-2  '}>< FaUser  /> Login</NavLink>
      
            ):(  <NavLink to={'profile'} className={'btn bg-secondary rounded-full pl-3 pr-3 pt-1 pb-1.5  ml-3 -mr-4 flex flex-row justify-center items-center text-white text-semibold  gap-x-2  '}>< FaUser  /></NavLink>          
            )}

        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
