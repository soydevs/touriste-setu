import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import { AuthContext } from '../../../context/AuthContext'
import "./Sidebar.css";


function Sidebar() {

  const { name } = useContext(AuthContext);

  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <h1>Tourist'e Setu</h1>
        </div>
        <div className='sidebar--container'>
            <NavLink to='/home' className='nav--item' activeClassName="navActive">
                <FiHome className="navIcon"/>
                <p>Home</p>
            </NavLink>
            <NavLink to='/plan' className='nav--item' activeClassName="navActive">
                <FiHome className="navIcon"/>
                <p>Plan</p>
            </NavLink>
            <NavLink to='/connect' className='nav--item' activeClassName="navActive">
                <FiHome className="navIcon"/>
                <p>Connect</p>
            </NavLink>
            <NavLink to='/profile' className='nav--item' activeClassName="navActive">
                <FiHome className="navIcon"/>
                <p>Profile</p>
            </NavLink>
        </div>

        
        <Link to='/profile' className="sidebar__profile">
          <img src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
          <div className="sidebar__profile__info">
            <h1>{name}</h1>
            <p>Traveller</p>
          </div>
        </Link>
    </div>
  );
}

export default Sidebar;