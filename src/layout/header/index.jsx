import React from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HotelIcon from "@material-ui/icons/Hotel";

import "./header.scss";
import logo from "../../assets/logo.svg.png";

Header.propTypes = {};

function Header() {
  return (
    <div className="main-header">
      <header className="page-header">
        <div className="header">
          <div className="header-center">
            <div className="header-logo">
              <Link className="logo" to="/home">
                <img src={logo} alt="logo-orbitz" className="logo-orbitz" />
              </Link>
            </div>
            <div className="header-communication">
              <div className="header-button">
                <p>Khách sạn</p>
                <span>
                  <ArrowDropDownIcon />
                </span>
              </div>
              <div className="option-button">
                <div className="option-center">
                  <Link className="link-option" to="/hotel">
                    <div className="option">
                      <HotelIcon fontSize="small" />
                      <p>Khách sạn</p>
                    </div>
                  </Link>
                  <Link className="link-option" to="/flights">
                    <div className="option">
                      <HotelIcon fontSize="small" />
                      <p>Chuyến bay</p>
                    </div>
                  </Link>
                  <Link className="link-option" to="/cars">
                    <div className="option">
                      <HotelIcon fontSize="small" />
                      <p>Ô tô</p>
                    </div>
                  </Link>
                  <Link className="link-option" to="/cruises">
                    <div className="option">
                      <HotelIcon fontSize="small" />
                      <p>Dịch vụ trên biển</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="header-login">
            <Link className="link-login" to="/login">
              <div className="login-center">
                <p>Đăng nhập</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
