import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../NavBar/Nav'
import { useEffect, useRef } from 'react';
import './Home.css';
import Panorama from './Panorama'
import Book from './Book';
import NavMob from '../NavEventsMobile/NavMob';
  
function Home() {
  return (
    <div>
      <Nav/>
      <div className='text'>
                The width and height properties of the DOMRect object returned by the method include the padding and border-width, not only the content width/height. In the standard box model, this would be equal to the width or height property of the element + padding + border-width. But if box-sizing: border-box is set for the element this would be directly equal to its width or height.
                The returned value can be thought of as the union of the rectangles returned by getClientRects() for the element, i.e., the CSS border-boxes associated with the element.
                Empty border-boxes are completely ignored. If all the element's border-boxes are empty, then a rectangle is returned with a width and height of zero and where the top and left are the top-left of the border-box for the first CSS box (in content order) for the element.
                The amount of scrolling that has been done of the viewport area (or any other scrollable element) is taken into account when computing the bounding rectangle. This means that the rectangle's boundary edges (top, right, bottom, left) change their values every time the scrolling position changes (because their values are relative to the viewport and not absolute).
                If you need the bounding rectangle relative to the top-left corner of the document, just add the current scrolling position to the top and left properties (these can be obtained using window.scrollY and window.scrollX) to get a bounding rectangle which is independent from the current scrolling position.
            </div>
       {/* <Panorama/> */}
       <Book />
       <div className='text'>
                The width and height properties of the DOMRect object returned by the method include the padding and border-width, not only the content width/height. In the standard box model, this would be equal to the width or height property of the element + padding + border-width. But if box-sizing: border-box is set for the element this would be directly equal to its width or height.
                The returned value can be thought of as the union of the rectangles returned by getClientRects() for the element, i.e., the CSS border-boxes associated with the element.
                Empty border-boxes are completely ignored. If all the element's border-boxes are empty, then a rectangle is returned with a width and height of zero and where the top and left are the top-left of the border-box for the first CSS box (in content order) for the element.
                The amount of scrolling that has been done of the viewport area (or any other scrollable element) is taken into account when computing the bounding rectangle. This means that the rectangle's boundary edges (top, right, bottom, left) change their values every time the scrolling position changes (because their values are relative to the viewport and not absolute).

                If you need the bounding rectangle relative to the top-left corner of the document, just add the current scrolling position to the top and left properties (these can be obtained using window.scrollY and window.scrollX) to get a bounding rectangle which is independent from the current scrolling position.
            </div>
      <Footer/>
    </div>
  )
}

export default Home