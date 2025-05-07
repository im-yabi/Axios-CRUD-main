import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Home from "./Home";
import DashBoard from "./DashBoard";
import Create from "./Create";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Nav from "../Nav";
import UserView from "./UserView";
import Edit from "./Edit";
import Footer from "../Footer";

// import List from "./List";

const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
    <div
      id="wrapper"
      className={`wrapper-content ${isToggled ? "toggled" : ""} `}
    >
      <BrowserRouter>
        <div className="sidebar1" id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li>
              {" "}
              <Link to={"/"} className="nav-link active">
                Home
              </Link>
            </li>

            <li>
              <Link to={"/dashboard"} className="nav-link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={"/create"} className="nav-link">
                Create
              </Link>
            </li>
            {/* <li>
              <Link to={"/userview"} className="nav-link">
                View
              </Link>
            </li> */}
          </ul>
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  className="btn-menu btn btn-toggle-menu"
                  type="button"
                  onClick={toggleMenu}
                  style={{backgroundColor:'#67d599'}}
                  
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/dashboard/userview/:id" element={<UserView />} />
            <Route path="/dashboard/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
    
    </>
  );
};

export default Sidebar;
