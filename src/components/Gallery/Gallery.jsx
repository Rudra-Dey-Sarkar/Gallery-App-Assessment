import React, { useState, useRef, useContext } from 'react';
import { Context } from '../GlobalContext/GlobalText';
import "./Gallery.css";
import { LeftArrow, RightArrow, QuestionMark, Dots } from "../Icons/Icons"; 


function Gallery() {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState(null);
    const [allImages, setAllImages] = useState([]); // Use state to track all images
    const {selectedImage, setSelectedImage} = useContext(Context);

    const handleClick = () => {
        fileInputRef.current.click();
    };
    
    function ImageInsert(data){
        setAllImages(prevImages => [...prevImages, data]); // Append the new image to the array
    }

    const handleFileChange = (event) => {
        const files = event.target.files[0];
        const objURL = URL.createObjectURL(files);
        ImageInsert(objURL);
        setImages(objURL);
    };

    return (
        <div className='gallery'>
            <div className='navSide'>
                <QuestionMark id="qmark" />
                <Dots id="dot" />
            </div>

            <div className='nav-body'>
                <div className='navTop'>
                    <p id='galButton'>Gallery</p>
                    <div id='buttonCombine'>
                        <div id='add' onClick={handleClick}>+ ADD IMAGE</div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                        <LeftArrow id='prevButton' />
                        <RightArrow id='nextButton' />
                    </div>
                </div>
                
                <div className='photos'>
                    {/* Render all images in the array */}
                    {allImages.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`Uploaded ${index}`} id='GalImage' onClick={(e)=>setSelectedImage(e.target.src)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
