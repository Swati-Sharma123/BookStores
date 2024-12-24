import React from 'react'
import "../Style/Carousal.css"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Carousal() {
  return (
    <div className='carousal_container'>
      <div className='left-btn-carousal'>
      <MdKeyboardDoubleArrowLeft size={'40px'} className='arrow'/>
      </div>
      <div className='carousal-images'>
        <div>
        <img 
          src="https://image.ebooks.com/staffpick-2.jpg" 
          alt="book-image" 
          className='carousal-img'
        />
        </div>
        <div>
        <img 
        src="https://image.ebooks.com/staffpick-2.jpg" 
        alt="book-image" 
        className='carousal-img'
      />
      </div>
      <div>
        <img 
        src="https://image.ebooks.com/staffpick-2.jpg" 
        alt="book-image" 
        className='carousal-img'
      />
      </div>
      </div>
      <div className='right-btn-carousal'>
      <MdKeyboardDoubleArrowRight size={'40px'} className='arrow'/>
      </div>
    </div>
  )
}
