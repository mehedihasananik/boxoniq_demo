import Link from "next/link";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <header style={{ backgroundColor: "#EDEBEB" }}>
      <div className="top-menu-container">
        <div className="d-flex align-items-center ">
          <img src="https://i.ibb.co/h7YykdW/delivery-truck.png" alt="" />
          <p className="p-0 m-0 ms-2">Free Shipping on Orders Rs. 499</p>
        </div>
        <ul className="menu-top">
          <li>
            <Link href="/refer">
              <a className="menu-top-links">
                <div className="refer">
                  <img src="https://i.ibb.co/Bytqrpg/megaphone-1.png" alt="" />
                  Refer & earn
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a className="menu-top-links">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/stories">
              <a className="menu-top-links">Story</a>
            </Link>
          </li>
          <li>
            <Link href="/community">
              <a className="menu-top-links">Community</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <header
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link href="/">
                  <a
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactUs">
                  <a
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Contact us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/aboutUs">
                  <a
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    About us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/subscription">
                  <a
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    My subscription
                  </a>
                </Link>
              </li>
            </ul>
            <Link href="/">
              <a className="nav-logo">
                <h1 className="">Boxoniq</h1>
                <p>Let&apos;s begin to continue</p>
              </a>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="search position-relative">
                  <input
                    className="form-control search-control-nav w-100 mr-sm-2"
                    type="search"
                    placeholder="Search for products"
                    aria-label="Search"
                  />

                  <img
                    className="position-absolute"
                    src="https://i.ibb.co/7KjcbBR/icons8-search-24-1.png"
                    alt=""
                  />
                </div>
              </li>

              <li>
                <Link href="/cart">
                  <a activeClassName="active" className="nav-links">
                    <button className="btn btn-nav-login">Login</button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a activeClassName="active" className="nav-links">
                    <img
                      src="https://i.ibb.co/ZG2rvHY/shopping-bag-1-1.png"
                      alt=""
                    />
                    Cart
                  </a>
                </Link>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              {click ? <AiOutlineCloseSquare /> : <GiHamburgerMenu />}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
