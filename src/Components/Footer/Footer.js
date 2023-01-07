import React from 'react'
import './Footer.css'
import RedStone from './RedStone';
import GreenStone from './GreenStone';
import YellowStone from './YellowStone';
import VioletStone from './VioletStone';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Insta } from './Images/insta.svg';
import { ReactComponent as Facebook } from './Images/facebook.svg';
import { ReactComponent as Youtube } from './Images/utube.svg';
import { ReactComponent as Twitter } from './Images/twitter.svg';
import { ReactComponent as Insta2 } from './Images/insta2.svg';
import { ReactComponent as Facebook2 } from './Images/facebook2.svg';
import { ReactComponent as Youtube2 } from './Images/utube2.svg';
import { ReactComponent as Twitter2 } from './Images/twitter2.svg';
import Logo from '../NavBar/Logo';

function Footer() {
 return (
    <div style={{
        backgroundColor: 'black',
        color: 'white',
    
    }} className='footer_desk'>
        <div className='options'>
            <ul>
                    <li><NavLink to="/Events">EVENTS</NavLink></li>
                    <li><NavLink to="/Merch">MERCH</NavLink></li>
                    <li><NavLink to="/Campaigns">CAMPAIGNS</NavLink></li>
                    <li><NavLink to="/Teams">TEAMS</NavLink></li>
                    <li><NavLink to="/MUN">MUN</NavLink></li>
                    <li><NavLink to="/Sponsors">SPONSORS</NavLink></li>
                    <li><NavLink to="/Contests">CONTESTS</NavLink></li>
            </ul>
        </div>



        <div><Logo/></div>


        
        <div className='logo'>
            <div className='hail'>HAIL <br/> ALCHER!</div>
            <div className="stones">
                <div className='red'>
                    <RedStone/>
                </div>
                <div className='green'>
                    <GreenStone/>
                </div>
                <div className='violet'>
                    <VioletStone/>
                </div>
                <div className='yellow'>
                    <YellowStone/>
                </div>
            </div>
        </div>




        <div className='details'>
            <div className='contact'>
                <div className='shareka'>
                    <b>Siddant Singh</b> <br></br>
                    PR HEAD<br></br>
                    +91 9310859978
                </div>
                <div className='abhi'>
                    <b>Danda Akshara</b> <br></br>
                        PR HEAD<br></br>
                        +91 9908991939
                </div>
            </div>
            <div className='socialIcon'>
                <div className="socials_desk">
                    <a className='insta' href='https://www.instagram.com/alcheringaiitg/' ><Insta/></a>
                    <a className='face'  href='https://www.facebook.com/alcheringaiitg' ><Facebook/></a>
                    <a className='tweet'  href='https://twitter.com/alcheringaiitg' ><Twitter/></a>
                    <a className='youtube'  href='https://www.youtube.com/@alcheringaIITG' ><Youtube/></a>
                </div>
                <div className="socials_mob">
                    <a className='insta' href='https://www.instagram.com/alcheringaiitg/' ><Insta2/></a>
                    <a className='face'  href='https://www.facebook.com/alcheringaiitg' ><Facebook2/></a>
                    <a className='tweet'  href='https://twitter.com/alcheringaiitg' ><Twitter2/></a>
                    <a className='youtube'  href='https://www.youtube.com/@alcheringaIITG' ><Youtube2/></a>
                </div>
                <div className='inqueries'>
                For Business Enqueries: <b>alcheringa@iitg.ac.in</b>
                </div>
            </div>
        </div>




        












        









        


        
    </div>
)
}

export default Footer