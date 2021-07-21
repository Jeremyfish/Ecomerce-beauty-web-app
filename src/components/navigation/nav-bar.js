import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Underline from "../Images/underline.png";


export default class Navbar extends Component {
    constructor() {
        super();
    };


render() {
    return (
        <div className = "nav-wrapper">
            <div className = "right-side">
            
                <div className='nav-link-wrapper'>
                <NavLink exact to="/" activeClassName="nav-link-active">
                    Home
                    <img src ={Underline} />
                </NavLink>
                </div>
    
                <div className='nav-link-wrapper'>
                <NavLink to="/about" activeClassName="nav-link-active">
                    About Us
                    <img src ={Underline} />
                </NavLink>
                
                </div>
    
                <div className='nav-link-wrapper'>
                <NavLink to="/booking" activeClassName="nav-link-active">
                    Booking
                    <img src ={Underline} />
                </NavLink>
                </div>
    
                <div className='nav-link-wrapper'>
                <NavLink to="/portfolio" activeClassName="nav-link-active">
                    Our Work
                    <img src ={Underline} />
                </NavLink>
                </div>

            </div>

            <div className="left-side">
                Img Here
            </div>

        </div>

        )
    }
}