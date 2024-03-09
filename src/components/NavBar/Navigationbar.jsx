import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearchData, logout } from "../../Redux/Features/authSlice";
import { toast } from "react-toastify";
import { MenuSquare } from "lucide-react";
import { Navbar } from "reactstrap";

function Navigationbar() {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user.status;
  });

  const counter = useSelector((state) => {
    return state?.usercart.cart;
  });

  const logOutFun = () => {
    navigate("/");
    dispatch(logout());
    toast.error("Logout Successfully", {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    dispatch(addSearchData(searchText));
  }, [searchText]);

  return (
    <>
      <Navbar className="header_sec">
        <div className="container">
          <div className="header_raw">
            <div className="header_graphy_blog">
              <div className="graphy_logo">
                <figure>
                  <img
                    src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg"
                    // style={{ width: "70px", height: "72px" }}
                    alt=""
                  />
                </figure>
              </div>
              <div className="graphy_item">
                <ul className="graphy_menu">
                  <li className="head_menu_item">
                    <NavLink to={"/"} className="head_menu_link">
                      Home
                    </NavLink>
                  </li>
                  <li className="head_menu_item">
                    <NavLink to={"/plant"} className="head_menu_link">
                      Plant
                    </NavLink>
                  </li>
                  <li className="head_menu_item">
                    <NavLink to={"/about"} className="head_menu_link">
                      About
                    </NavLink>
                  </li>
                  <li className="head_menu_item">
                    <NavLink to={"/contact"} className="head_menu_link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="graphy_bttn">
                {user && (
                  <div className="cart_icon">
                    <NavLink to={"/cart"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-cart"
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </NavLink>
                    <sup style={{ color: "white", fontWeight: "bold" }}>
                      {counter.length}
                    </sup>
                  </div>
                )}

                <div className="nav_input_btn">
                  {user && (
                    <input
                      type="text"
                      placeholder="Finds Your Plants Here!"
                      className="nav_input"
                      onChange={(e) => setSearchText(e?.target?.value)}
                    />
                  )}

                  {user ? (
                    <button
                      onClick={() => logOutFun()}
                      className="nav_logout_btn"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      className="nav_login_btn"
                    >
                      Login
                    </button>
                  )}
                </div>

                <div className="nav_togglebar">
                  <MenuSquare size={40} color="#e1dada" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Navigationbar;
