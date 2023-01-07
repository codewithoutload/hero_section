import React from 'react';
import { useState } from 'react';
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
                <ul style={{listStyle: 'none'}}>
                    <li>PRONITES <img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></li>
                    <li className={click?'inactive':'active'}>CREATORS CAMP</li>
                    <li className={click?'inactive':'active'}>HUMOUR FEST</li>
                    <li className={click?'inactive':'active'}>PROSHOWS</li>
                </ul>
            </div>
        </div>

    );
}

export default NavMob;