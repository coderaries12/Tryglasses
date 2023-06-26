import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <div>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle fa-2xl" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <div className="logged-in-profile">
            <li>Hello, {user.username}</li>
            {/* <li>{user.email}</li> */}
            <li>
              <button onClick={handleLogout} className="signout-button">
              {/* <i class="fa-solid fa-right-from-bracket fa-rotate-180"></i> */}
              Log Out</button>
            </li>
          </div>
        ) : (
          <div className="login-logout-modal">
            <h2>Welcome</h2>
            <OpenModalButton
              className="login-button"
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <div className="create-account" >

            <OpenModalButton
              className="login-logout-button"
              buttonText="Create Account"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;
