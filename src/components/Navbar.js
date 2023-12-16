import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  clearStore,
  logoutUser,
  toggleSibar,
} from "../features/user/userSlice";
import { useState } from "react";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSibar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            john
            <FaCaretDown />
          </button>
          <div className={showLogout ? "show-dropdown dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                dispatch(clearStore("Logout Successful..."));
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
