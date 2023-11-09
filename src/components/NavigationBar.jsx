import React from 'react';
import {NavLink} from "react-router-dom";

export default function NavigationBar() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/blog">Blog</NavLink>
                </li>
            </ul>
    </nav>
    );
}