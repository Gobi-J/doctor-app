import React, { useContext, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../context/authContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef();
  const menuRef = useRef();
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  
  console.log(user);
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className=" flex items-center justify-between">
          <div>
            <Link to={"/home"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index} className="menu-item">
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] font-[600] leading-7"
                        : "text-textColor text-[16px] font-[500] leading-7 hover:text-primaryColor transition-colors"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 ">
            {token && user ? (
              <Link
                to={`${
                  role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"
                }`}
              >
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={user?.photo} className="w-full rounded-full " />
                </figure>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  className="bg-primaryColor py-2 px-6 text-white font-semibold
             h-[44px] flex items-center rounded-[500px]"
                >
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
