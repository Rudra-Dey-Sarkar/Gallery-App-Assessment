import React, { useContext } from 'react'
import { Context } from '../GlobalContext/GlobalText'
import "./HomePage.css"
import Gallery from '../Gallery/Gallery'
import Features from '../Features/Features'
function HomePage() {
  const { selectedImage, setSelectedImage } = useContext(Context);

  return (
    <div className='mainBody'>

      <div className='section1'>
        <img src={selectedImage}></img>
      </div>

      <div className='section2'>
        <Features />
        <hr />
        <Gallery />
        <hr />
      </div>

    </div>
  )
}

export default HomePage