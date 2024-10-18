import React from "react";
// import { NavLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import logo from "../assets/logo1.png";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const {setIsLogin} = useContext(ShopContext);
  function Logoutme(){
    localStorage.removeItem('token' , "")
    setIsLogin(false)
    navigate('/')
  }
  return (
    <section className="w-full h-screen flex justify-center items-center mt-[50px]">
      {/* Assuming your navbar height is 60px, you can adjust this value if different */}

      <div className="h-full w-full  bg-white ">
        <div className="h-auto w-full p-3 bg-white flex justify-between items-start ">
          <div className="flex flex-row justify-center items-center gap-5 pl-10">
            <img
              src={logo}
              alt=""
              width={45}
              height={45}
              className="rounded-full ring-1 ring-slate-950/10"
            />
            <h3 className="bold font-bold">Shahzad Ali</h3>
          </div>
          <button
            onClick={Logoutme}
            className={
              "w-24 h-14 bg-secondary rounded-xl pl-3 pr-3 pt-1 pb-1.5   flex flex-row justify-center items-center text-white text-semibold  gap-x-2  "
            }
          >
            <TbLogout2 />
            LogOut
          </button>
        </div>

        <hr className="border-t-2  from-transparent via-black to-transparent  w-2/3  mx-auto my-4" />
        <div className=" pl-20 flex justify-center items-start flex-col   " >
            <button className="font-bold  ">Orders</button>
            <hr  className="w-[60px] border-gray-900"/>
          </div>
        <div className="px-10 pt-5 pb-  flex justify-center items-center flex-col   ">
          
          <div className="w-[1200px] bg-slate-300 h-auto bg-green p-3">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
