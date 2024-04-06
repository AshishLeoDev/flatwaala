import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const mainLinks = [
    { name: "HOME", path: "/" },
    { name: "SELL", path: "/" },
    { name: "RENT", path: "/" },
    { name: "CONTACT US", path: "/" },
    { name: "ABOUT US", path: "/" },
  ];
  return (
    <div className=" flex w-[70%] m-auto">
      {/* Logo Div */}
      <div className="w-[50%] my-2">
        <Link to={"/"}>
          <img width={80} src={logo} alt="flatwaal-logo" />
        </Link>
      </div>
      <div className="flex items-center  w-full justify-evenly">
        {/* Main Links */}
        <div className="mainLinks flex gap-5 font-semibold">
          {mainLinks.map((x, i) => (
            <Link key={i} to={x.path}>
              {x.name}
            </Link>
          ))}
        </div>
        {/* Add Property Button */}
        <div>
          <Button
            className="addProperty"
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "#FF3131",
              textTransform: "capitalize",
              fontWeight: 500,
            }}
          >
            Add Property <GoArrowUpRight className="text-xl" />
          </Button>
        </div>

        {/* Login */}
        <div>
          <button className="py-1 rounded-2xl px-8 bg-[#FF3131] font-bold text-xl ">
            Login
          </button>
        </div>
        {dark ? (
          <MdOutlineDarkMode
            className="text-xl cursor-pointer"
            onClick={() => setDark(!dark)}
          />
        ) : (
          <MdOutlineLightMode
            className="text-xl cursor-pointer"
            onClick={() => setDark(!dark)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
