import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Go Home
    </NavLink>
    <br />
    <NavLink to="/create" activeClassName="is-active">
      Go Create
    </NavLink>
    <br />
    <NavLink to="/help" activeClassName="is-active">
      Go Help
    </NavLink>
  </header>
);

export default Header;
