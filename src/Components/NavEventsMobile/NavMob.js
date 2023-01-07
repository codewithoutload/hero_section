import React from 'react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import './NavMob.css';
import logo1 from './Images/side.png';
import img2 from './Images/dashline.png';
import dropimg from './Images/downarrow.svg';
import uparrow from './Images/uparrow.svg';
const NavMob = () => {
    const [click,setClick]=useState('true');
    const handleClick = (e)=>{
        setClick(!click);
    }
    return ( 
        <div className='overall_nav'>
            <div className='navheader'>
                <div className='side'><img src={logo1} alt=" " /></div>
                <div className='dashline'><img src={img2} alt=" " /></div>
            </div>
            <div className='main-nav'>
                <ul style={{listStyle: 'none',}}>
                    <li><NavLink to="/Events/pt" style={{textDecoration: 'none',color:'#1A1A1A'}} ><span>PRONITES</span></NavLink><img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/pt/cc" style={{textDecoration: 'none',color:'#1A1A1A'}} >CREATORS CAMP</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/pt/hf" style={{textDecoration: 'none',color:'#1A1A1A'}} >HUMOUR FEST</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/pt/ps" style={{textDecoration: 'none',color:'#1A1A1A'}} >PROSHOWS</NavLink></li>
                </ul>
            </div>
        </div>

    );
}

export default NavMob;