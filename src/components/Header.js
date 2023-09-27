import React from "react";
import { logoDark } from "../assets/index";
import { cartImg } from "../assets/index";
import { profilePicture } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img
              style={{ marginLeft: 0 }}
              src={logoDark}
              alt="logoDark"
              className="w-28"
            />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold  hover:text-orange-900  cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <li className="text-base text-black font-bold  hover:text-orange-900  cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900  cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900  cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900  cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img src={cartImg} alt="cartImg " width={70} />
              <span
                className="absolute top-8 left-0 text-sm flex items-center justify-center font-semibold"
                style={{ width: 70 }}
              >
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo?userInfo.image :profilePicture }
              alt="profilePicture"
            />
          </Link>
          {
            userInfo && <p className="text-base font-titleFont font-semibold">{userInfo.name}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
