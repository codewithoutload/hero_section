// import "./App.css";
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { disableScrolling, enableScrolling } from './Loading';
// import './voyage-2-neoterra.scss';
import './hero_section.scss'
import img0 from "./images/Timeline 1_0000.png";
import img1 from "./images/Timeline 1_0001.png";
import img2 from "./images/Timeline 1_0002.png";
import img3 from "./images/Timeline 1_0003.png";
import img4 from "./images/Timeline 1_0004.png";
import img5 from "./images/Timeline 1_0005.png";
import img6 from "./images/Timeline 1_0006.png";
import img7 from "./images/Timeline 1_0007.png";
import img8 from "./images/Timeline 1_0008.png";
import img9 from "./images/Timeline 1_0009.png";
import img10 from "./images/Timeline 1_0010.png";
import img11 from "./images/Timeline 1_0011.png";
import img12 from "./images/Timeline 1_0012.png";
import img13 from "./images/Timeline 1_0013.png";
import img14 from "./images/Timeline 1_0014.png";
import img15 from "./images/Timeline 1_0015.png";
import img16 from "./images/Timeline 1_0016.png";
import img17 from "./images/Timeline 1_0017.png";
import img18 from "./images/Timeline 1_0018.png";
import img19 from "./images/Timeline 1_0019.png";
import img20 from "./images/Timeline 1_0020.png";
import img21 from "./images/Timeline 1_0021.png";
import img22 from "./images/Timeline 1_0022.png";
import img23 from "./images/Timeline 1_0023.png";
import img24 from "./images/Timeline 1_0024.png";
import img25 from "./images/Timeline 1_0025.png";
import img26 from "./images/Timeline 1_0026.png";
import img27 from "./images/Timeline 1_0027.png";
import img28 from "./images/Timeline 1_0028.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import AlcherLogo from './images/alcher_2023_logo.png'
// import footerStarsBg from './stars.webp';
const EVENTS_HEAD = [img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28];


gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const imgsEventRef = useRef([]);
  const eventsHeadRef = useRef([]);
  useEffect(() => {
    if (!window.matchMedia('(max-width: 800px)').matches) {
        gsap.delayedCall(0.1, () => {
            // gsap.to('.events-container', {
            //     scrollTrigger: {
            //         trigger: '#event-trigger-3',
            //         start: 'bottom top',
            //         markers: true,
            //         id: 'check',
            //         end: '+=100%',
            //     },
            //     css: {
            //         opacity: 0,
            //     },
            // });
            


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.events-container',
                    start: '2% top',
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse',
                    // markers: true,
                    id: 'events-container',
                },
            });
            tl.to('.v2n-wrapper-main', {
                css: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                },
            });


            

            // const ntl = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: '#events-container',
            //         start: 'bottom bottom',
            //         end: 'bottom bottom',
            //         toggleActions: 'play none none reverse',
            //         // markers: true,
            //         id: 'events-container',
            //     },
            // });
            // ntl.to('.v2n-wrapper-main', {
            //     autoAlpha: 0,
            //     y: '-=20%',
            //     duration: 0.2,
            //     zIndex: '-1',
            // });
            // ntl.fromTo(
            //     '.icons-container',
            //     {
            //         y: 200,
            //         duration: 0.3,
            //     },
            //     {
            //         y: 0,
            //     },
            //     '<',
            // );


            const tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#events-container',
                    toggleActions: 'play none none reverse',
                    start: 'top bottom',
                    // end: '+=100%',
                    end:'top 25%',
                    // markers:true,
                    id:'hgbdfhbvhdf'
                },
            });
          
         
            tl3.to(
                imgsEventRef.current[0],
                {
                    opacity: 1,
                    duration: 0.2,
                    y:100, 
                },
              
                '<',
            );
          

            for (let i = 0; i < EVENTS_HEAD.length ; i++) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: `#event-trigger-${i}`,
                        start: '-50% 100%',
                        // markers:true,
                        toggleActions: 'play none none reverse',
                        // end: '+=100%',
                        end: 'top bottom',
                        scrub:0.2,
                        id:'event trigger'
                        
                    },
                });
             


                // timeline.to(eventsHeadRef.current[i], {
                //     onStart: () => {
                //         disableScrolling();
                //     },
                //     onReverseComplete: () => enableScrolling(),
                //     opacity: 0,
                //     duration: 0.5,
                // });
               
                timeline.to(imgsEventRef.current[i], {
                    opacity: 0,
                    duration: 0.1,
                });
                timeline.to(
                    imgsEventRef.current[i+1],
                    {
                        opacity: 1,
                        duration:0.1,
                    },
                    '<',
                );
            }
        });
    } else {
        gsap.delayedCall(0, () => {
            for (let i = 0; i < EVENTS_HEAD.length; i++) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: `#v2n-wrapper-main-${i}`,
                        start: 'top 80%',
                        end: 'bottom top',
                        toggleActions: 'play none none reverse',
                        id: `#v2n-wrapper-main-${i}`,
                    },
                });
                // tl.to(`#v2n-wrapper-main-${i} .v2n-wrapper-left`, {
                //     opacity: 1,
                //     duration: 1.2,
                // });
                tl.to(
                    `#v2n-wrapper-main-${i} .v2n-wrapper-right`,
                    {
                        opacity: 1,
                        duration: 1.2,
                    },
                    '<',
                );
            }
        });
    }
}, []);









  return (
    
      <div id="events-container">
        <div className='alcher_logo' >
          <img src={AlcherLogo} alt="" />
        </div>
      <div
            className="v2n-container-main"
            // style={{  backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            {EVENTS_HEAD.map((e, i) => {
                return (
                    <div className="v2n-wrapper-main" key={i} id={`v2n-wrapper-main-${i}`}>
                        {/* <div className="v2n-wrapper-left">
                            <div ref={(el) => (imgsLeftRef.current[i] = el)} className="img-l-w">
                                <LazyLoadImage src={IMGS_LEFT[i]} alt="img-left" className="img-l" />
                            </div>
                            <h1 ref={(el) => (eventsHeadRef.current[i] = el)}>{e}</h1>
                            <p className="font-family-hk" ref={(el) => (eventsDescriptionRef.current[i] = el)}>
                                {EVENTS_DESRIPTION[i]}
                            </p>
                        </div> */}
                        <div className="v2n-wrapper-right">
                            {/* <div> */}
                                {/* <div ref={(el) => (imgsAstroRef.current[i] = el)} className="img-1-w">
                                    <LazyLoadImage
                                        src={IMGS_ASTRO[i]}
                                        alt="img-1"
                                        className="img-1"
                                        id={`img-1-astro-${i}`}
                                    />
                                </div> */}
                                <div
                                    className="img-2-w"
                                    ref={(el) => (imgsEventRef.current[i] = el)}
                                    id={`img-2-w-${i}`}
                                >
                                    <LazyLoadImage src={EVENTS_HEAD[i]} alt="img-2" className="img-2" />
                                </div>
                            {/* </div> */}
                            {/* <div ref={(el) => (imgsRightRef.current[i] = el)} className="img-3-w" id={`img-3-w-${i}`}>
                                <LazyLoadImage src={IMGS_RIGHT[i]} alt="img-3" className="img-3" />
                            </div> */}
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="events-trigger" id="event-trigger-0"></div>
        <div className="events-trigger" id="event-trigger-1"></div>
        <div className="events-trigger" id="event-trigger-2"></div>
        <div className="events-trigger" id="event-trigger-3"></div>
        <div className="events-trigger" id="event-trigger-4"></div>
        <div className="events-trigger" id="event-trigger-5"></div>
        <div className="events-trigger" id="event-trigger-6"></div>
        <div className="events-trigger" id="event-trigger-7"></div>
        <div className="events-trigger" id="event-trigger-8"></div>
        <div className="events-trigger" id="event-trigger-9"></div>
        <div className="events-trigger" id="event-trigger-10"></div>
        <div className="events-trigger" id="event-trigger-11"></div>
        <div className="events-trigger" id="event-trigger-12"></div>
        <div className="events-trigger" id="event-trigger-13"></div>
        <div className="events-trigger" id="event-trigger-14"></div>
        <div className="events-trigger" id="event-trigger-15"></div>
        <div className="events-trigger" id="event-trigger-16"></div>
        <div className="events-trigger" id="event-trigger-17"></div>
        <div className="events-trigger" id="event-trigger-18"></div>
        <div className="events-trigger" id="event-trigger-19"></div>
        <div className="events-trigger" id="event-trigger-20"></div>
        <div className="events-trigger" id="event-trigger-21"></div>
        <div className="events-trigger" id="event-trigger-22"></div>
        <div className="events-trigger" id="event-trigger-23"></div>
        <div className="events-trigger" id="event-trigger-24"></div>
        <div className="events-trigger" id="event-trigger-25"></div>
        <div className="events-trigger" id="event-trigger-26"></div>
        <div className="events-trigger" id="event-trigger-27"></div>
        <div className="events-trigger" id="event-trigger-28"></div>


      </div>
      

  );
}

export default HeroSection;
