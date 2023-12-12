import React from "react";
import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacts">Mes contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
