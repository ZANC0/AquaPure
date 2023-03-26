import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import './Shop_Style.css'

function NavLink({to, children, ...props}) {
    const Path = useResolvedPath(to);
    const isActive = useMatch({ path: Path.pathname, end: true });
    return(
        <li className={isActive ? "clicked": ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default function Navbar() {
  
    return(
    <>
    <nav className="navbar_shop">
        <ul>
            <NavLink to="/shop/Shop_Appearal">CLOTHES</NavLink> 
            <NavLink to="/shop/Shop_drinks">DRINKWARE</NavLink>
            <NavLink to="/shop/Shop_other">BRANDED</NavLink>
            <NavLink to="/shop/Shop_tech">TECHNOLOGY</NavLink>
        </ul>
    </nav>
    </>
    )
}