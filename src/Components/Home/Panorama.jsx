import './Panorama.css';
import * as PANOLENS from "panolens";
import image from "./images/image.jpg"


const panoramaImage = new PANOLENS.ImagePanorama(image);
const imageContainer = document.querySelector(".main-container");

  
const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: false,
});

viewer.add(panoramaImage);
 
viewer.OrbitControls.reverseDragging= true;
viewer.OrbitControls.noZoom = true; 
  const Panorama = () =>{
  return (
    <>
      <div className="description">Alcheringa is the annual cultural festival of the Indian Institute of Technology, Guwahati. A splendid idea realised by a group of students in 1996 at IITG marked the dawn of one of Asia’s most exhilarating and significant cultural college fests as we know it today. </div>
        <div className="main-container">
       
        
      

     
        </div>
    </>
  );
}
        export default Panorama;
        