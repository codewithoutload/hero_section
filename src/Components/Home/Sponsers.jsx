import React, { useEffect } from 'react';
import './Sponsers.css';
import img from  '../../images/hailAlcher.png'

function Sponsers() {
    useEffect(()=>{
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");
        
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);
        
        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    },[])
  return (
    <div>
        <h1 className="featured-event-heading">
            Our Sponsers
        </h1>
        <div className="marquee-body">
            <div className="marquee">
                <ul className="marquee-content">
                    <li><img src={img} alt="pr-sample23" style={{'width':'150px'}} /></li>
                    <li><img src={img} alt="pr-sample23" style={{'width':'150px'}} /></li>
                    <li><img src={img} alt="pr-sample23" style={{'width':'150px'}} /></li>
                    <li><img src={img} alt="pr-sample23" style={{'width':'150px'}} /></li>
                    <li><img src={img} alt="pr-sample23" style={{'width':'150px'}} /></li>
                    <li><img src={img} alt="pr-sample23" style={{'width':'150px'}} /></li>
                    <li><img src={img} alt="pr-sample23" style={{'width':'150px'}} /></li>
                </ul>
            </div>
        </div>
</div>
  )
}

export default Sponsers