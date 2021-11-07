import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  PersonIcon,
  QuestionMarkCircledIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
// import { connect } from "react-redux";
// import axios from "axios";

// import { Bars } from "./NavbarElements";

const Navbar = (props) => {
  const [navMenu, setNavMenu] = useState("hidden");

  const history = useHistory();
  console.log("navbar currentUser", props.currentUser);
  const toggleNav = () => {
    if (navMenu === "hidden") {
      return setNavMenu(null);
    } else {
      return setNavMenu("hidden");
    }
  };

  const handleLogout = async () => {
    // setCurrentUser(null)
    fetch("/api/sessions/destroy-route")
      .then((response) => response.json)
      .then((data) => console.log("data", data))
      .catch((error) => console.log("error", error));
    history.push("/");
    props.setCurrentUser("");
    console.log("logout currentUser", props.currentUser);
  };

  // const handleLogout = async (event) => {
  //   await axios.delete("/api/sessions");
  //   history.push("/");
  // };

  // const authButton = () => {
  //   if (currentUser === null) {
  //     return (
  //       <>

  //       </>
  //     );
  //   } else {
  //     return (
  //       <NavLink to="/" className="text-white">
  //         <button
  //           onClick={handleLogout}
  //           className="rounded-lg bg-red-600 py-2 px-4 hover:bg-red-700"
  //         >
  //           Log Out
  //         </button>
  //       </NavLink>
  //     );
  //   }
  // };
  return (
    <>
      <nav className="bg-red-400 fixed w-full z-10">
        <div className="max-w-2xl lg:max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="flex py-3">
                <NavLink to="/" className="flex items-center text-white ml-3">
                  <span className="text-xl font-semibold">TRIVIA</span>
                  <span>
                    <QuestionMarkCircledIcon className="w-5 h-5" />
                  </span>
                  <span className="text-xl font-semibold">KING</span>
                </NavLink>
              </div>
              <div className="hidden md:flex items-center py-3 space-x-3 text-sm">
                {/* Change username to current username */}
                {/* <NavLink
                  to="/user/:username/myQuizzes"
                  className={
                    props.currentUser.username
                      ? "text-white hover:text-red-700"
                      : "hidden"
                  }
                >
                  My Quizzes
                </NavLink> */}
                <NavLink
                  to="/trivia/new"
                  className={
                    props.currentUser.username
                      ? "text-white hover:text-red-700"
                      : "hidden"
                  }
                >
                  New Quiz
                </NavLink>
              </div>
            </div>
            <div className="hidden md:flex items-center py-3 space-x-3 mr-2 text-sm">
              {/* Change username to current username */}
              <NavLink
                to="/user/:username"
                className="flex items-center text-white hover:text-red-700"
              >
                <span>{props.currentUser.username}</span>
                <span
                  className={
                    props.currentUser.username == null ? "hidden" : null
                  }
                >
                  <PersonIcon className="w-5 h-5 ml-1" />
                </span>
              </NavLink>

              <NavLink to="/login" className="text-white">
                <button
                  className={
                    props.currentUser.username == null
                      ? "rounded-lg bg-red-600 py-2 px-4 hover:bg-red-700"
                      : "hidden"
                  }
                >
                  Log In
                </button>
              </NavLink>
              <NavLink to="/signup" className="text-white">
                <button
                  className={
                    props.currentUser.username == null
                      ? "rounded-lg bg-red-600 py-2 px-4 hover:bg-red-700"
                      : "hidden"
                  }
                >
                  Sign Up
                </button>
              </NavLink>
              <NavLink to="/" className="text-white">
                <button
                  onClick={handleLogout}
                  className={
                    props.currentUser.username
                      ? "rounded-lg bg-red-600 py-2 px-4 hover:bg-red-700"
                      : "hidden"
                  }
                >
                  Log Out
                </button>
              </NavLink>
            </div>
            {/* mobile button */}
            <div className="md:hidden flex items-center text-white">
              <button onClick={toggleNav}>
                <HamburgerMenuIcon className="mx-3 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}

        {/* Change username to current username */}
        <div className={navMenu + " md:hidden pb-3"}>
          <NavLink
            to="/user/:username"
            className={
              props.currentUser.username
                ? "block py-2 px-4 text-white"
                : "hidden"
            }
          >
            Profile
          </NavLink>
          {/* <NavLink
            to="/user/:username/myQuizzes"
            className={
              props.currentUser ? "block py-2 px-4 text-white" : "hidden"
            }
          >
            My Quizzes
          </NavLink> */}
          <NavLink
            to="/trivia/new"
            className={
              props.currentUser.username
                ? "block py-2 px-4 text-white"
                : "hidden"
            }
          >
            New Quiz
          </NavLink>
          <NavLink
            to="/login"
            className={
              props.currentUser.username
                ? "hidden"
                : "block py-2 px-4 text-white"
            }
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className={
              props.currentUser.username
                ? "hidden"
                : "block py-2 px-4 text-white"
            }
          >
            Sign Up
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
