import 'aframe'
import React, {Component} from 'react'
import './Panorama.css'

const VRScene = () => {
  return (
    <div className="geet">
      
       <div className="description">Alcheringa is the annual cultural festival of the Indian Institute of Technology, Guwahati. A splendid idea realised by a group of students in 1996 at IITG marked the dawn of one of Asia’s most exhilarating and significant cultural college fests as we know it today. </div>
    <a-scene >
    <a-entity camera look-controls="reverseMouseDrag: true"></a-entity>

<a-sky src={require('./images/image.png')} rotation="0 -88 0"/>


    </a-scene>
    </div>
  );
};

export default VRScene;
  
        