import React from "react";
import "../styles/navbar_sidebar.css";

export const Navbar_Sidebar = () => {
  return (
    <div>
      <input type="checkbox" id="nav-toggle" />

      <section className="sidebar">
        <div className="sidebar-brand">
          <h2>
            <span>
              <i className="fab fa-font-awesome-alt"></i>
            </span>
            <span>EDUERA</span>
          </h2>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#" className="active">
                <span>
                  <i className="fas fa-tachometer-alt"></i>{" "}
                </span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/adminlist">
                <span>
                  <i className="fas fa-users"></i>{" "}
                </span>
                <span>Admins</span>
              </a>
            </li>
            <li>
              <a href="/product">
                <span>
                  <i className="fas fa-box"></i>{" "}
                </span>
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="/subscription">
                <span>
                  <i className="far fa-bell"></i>{" "}
                </span>
                <span>Subscription</span>
              </a>
            </li>
            <li>
              <a href="/enquiry">
                <span>
                  <i className="far fa-bell"></i>{" "}
                </span>
                <span>Enquiries</span>
              </a>
            </li>
            <li>
              <a href="/career">
                <span>
                  <i className="fas fa-laptop-code"></i>{" "}
                </span>
                <span>Career</span>
              </a>
            </li>
            <li>
              <a href="/team">
                <span>
                  <i className="fas fa-users"></i>{" "}
                </span>
                <span>Our Team</span>
              </a>
            </li>
            <li>
              <a href="/testimonal">
                <span>
                  <i className="fas fa-laptop-code"></i>{" "}
                </span>
                <span>Testimonials</span>
              </a>
            </li>
            <li>
              <a href="/account">
                <span>
                  <i className="fas fa-laptop-code"></i>{" "}
                </span>
                <span>Account</span>
              </a>
            </li>
            <li>
              <a href="/blog">
                <span>
                  <i className="far fa-bell"></i>{" "}
                </span>
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="main-content">
        <header>
          <div className="header-title">
            <h2>
              <label for="nav-toggle">
                <i className="fas fa-bars"></i>
              </label>
              Dashboard
            </h2>
          </div>

          <div className="search-wrapper">
            <i className="fas fa-search"></i>
            <input type="search" placeholder="Search Here" />
          </div>

          <div className="user-wrapper">
            <img src="https://i.ibb.co/LkYmJjR/avatar.png" alt="person" />
            <div>
              <h4>Achyut Adhikari</h4>
              <small>Admin</small>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar_Sidebar;
