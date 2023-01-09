import React from 'react';
import './Strips.css';
import star from './images/Mask group.png';
function Strips() {
  return (
    <div>
    <div className='stripContainer'>
        <div className='strip_container1'>
        </div>
            <div className='strip1'>
                <div className='football_text1'>140K FOOTBALL</div>
                <div><img className='star star1' src={star}></img></div>
                <div className='edition_text'>26 EDITIONS</div>
                <div><img className='star star2' src={star}></img></div>
                <div className='football_text'>140K FOOTBALL</div>
                <div><img className='star star3' src={star}></img></div>
            </div>
        <div className='strip_container2'>
        </div>
            <div className='strip2'>
                <div className='football_text1'>500+ COLLEGES</div>
                <div><img className='star star1' src={star}></img></div>
                <div className='edition_text'>100+ EVENTS</div>
                <div><img className='star star2' src={star}></img></div>
                <div className='football_text'>500+ COLLEGES</div>
                <div><img className='star star3' src={star}></img></div>
            </div>
    </div>
    </div>
  )
}

export default Strips;