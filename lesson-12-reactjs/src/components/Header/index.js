import React from "react";
import { NavLink } from "react-router-dom";

import { SIGN_IN, SIGN_UP, HOME, POSTS } from "../../constants/global";
import "./style.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <p className="header__label">Header</p>
        <div className="header__menu">
          <ul>
            <li>
              <NavLink
                to="/home"
                className="header__link"
                activeClassName="header__link--acticed"
              >
                {HOME}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className="header__link"
                activeClassName="header__link--acticed"
              >
                {POSTS}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                className="header__link"
                activeClassName="header__link--acticed"
              >
                {SIGN_IN}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-up"
                className="header__link"
                activeClassName="header__link--acticed"
              >
                {SIGN_UP}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
