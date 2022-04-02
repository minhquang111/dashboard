import "../../style/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ openSidebar }) => {
  return (
    <>
      <div className={openSidebar ? "sidebar active" : "sidebar"}>
        <header>
          <img
            src="./assets/avatar/avatar0.png"
            className="sidebar-avatar"
            alt=""
          />
          <h2 className="sidebar-name">Admin</h2>
          <i className="fa-solid fa-angles-down btn-setting"></i>
        </header>
        <ul>
          <li>
            <Link to="/dashboard">
              <i className="fa-solid fa-chart-simple"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/customer">
              <i className="fa-regular fa-user"></i>
              <span>Customer</span>
            </Link>
          </li>
          <li>
            <Link to="/order">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Order</span>
            </Link>
          </li>
          <li>
            <Link to="/product">
              <i className="fas fa-shop"></i>
              <span>Product</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa-solid fa-circle-exclamation"></i>
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
