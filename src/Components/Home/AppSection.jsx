import React from 'react';
import './AppSection.css';
import bg1 from './images/IMG_1306_1.png';
import bg2 from './images/IMG_1306_2.png';
import bg3 from './images/IMG_1306_3.png';
import download from './images/DOWNLOAD.png'
import our from './images/OUR.png'
import app from './images/APP.png'
import alcherlady from './images/alcher lady.png'

function AppSection() {
  return (
    <div className='app_section_container'>
        <div className="bg_images">
        <img className='bg2' src={bg2} alt =""/>
        <img className='bg1' src={bg1} alt =""/>
        <img className='bg3' src={bg3} alt =""/>
        </div>
        <img className='alcherlady' src={alcherlady} alt="" />
        <div className='app_text'>
            <img className='download' src={download} alt=""></img>
            <img className='our' src={our} alt=""></img>
            <img className='app' src={app} alt=""></img>
        </div>
    </div>
  )
}

export default AppSection