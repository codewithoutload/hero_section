import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import './Nav.css'
import Book from './Book'
import Logo from "./Logo"
import Hamburger from './Hamburger'

function Nav() {
    const [active, setActive] = useState(false)
    const handleClick = (e) => {
        setActive(!active);
    }
    return (
        <>
    <div className='main'>
        <header className='navHeader gradient'>
            <div><Link to="/"><Logo/></Link></div>
            <nav className='NavigationBar'>
                <ul className='NavigationList'>
                    <li className="Events"><NavLink to="/Events/pt"><b>EVENTS</b></NavLink></li>
                    <li className="Merch"><NavLink to="/Merch"><b>MERCH</b></NavLink></li>
                    <li className='Campaigns'><NavLink to="/Campaigns"><b>CAMPAIGNS</b></NavLink></li>
                    <li className='Teams'><NavLink to="/Teams"><b>TEAMS</b></NavLink></li>
                    <li className='Mun'><NavLink to="/MUN"><b>MUN &emsp;</b></NavLink></li>
                    <li className='Sponsors'><NavLink to="/Sponsors" style={{
                        marginLeft : '-25px'
                        }}><b>SPONSORS</b></NavLink></li>
                    <li className="Contests"><NavLink to="/Contests/vn"><b>CONTESTS</b></NavLink></li>
                </ul>
            </nav>
            <Link className='image' to="/BookTickets"><Book /></Link>
        </header>
        </div>
            <div className='mobile'>
            <div className='navmob'>
                <div><Link to="/"><Logo /></Link></div> 
                <div onClick={handleClick}><Hamburger /></div>
            </div>
                {active ? <div>
                    <ul className='mobileList'>
                        <li ><NavLink to="/Events/pt"><b>EVENTS</b></NavLink></li>
                        <li ><NavLink to="/Merch"><b>MERCH</b></NavLink></li>
                        <li ><NavLink to="/Campaigns"><b>CAMPAIGNS</b></NavLink></li>
                        <li ><NavLink to="/Teams"><b>TEAMS</b></NavLink></li>
                        <li ><NavLink to="/MUN"><b>MUN</b></NavLink></li>
                        <li ><NavLink to="/Sponsors"><b>SPONSORS</b></NavLink></li>
                        <li className="Contests"><NavLink to="/Contests/vn"><b>CONTESTS</b></NavLink></li>
                    </ul>
                </div>:<></>}
        </div>
        </>
    )
}

export default Nav