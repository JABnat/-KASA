import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../styles/Slideshow.css'
import 'react-slideshow-image/dist/styles.css'
// import '../data/lodgement.js'


    const lodgingPictures = (pictures) => {
        console.log(pictures)
        console.log(pictures["pictures"][0])
        return (
            < Slide autoplay={false} >
                <div className="each-slide-effect">
                    <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${pictures["pictures"][0]})` }}>
                        <span>1/3</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${pictures["pictures"][1]})` }}>
                        <span>2/3</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${pictures["pictures"][2]})` }}>
                        <span>3/3</span>
                    </div>
                </div>
            </Slide>
        )}
        export default lodgingPictures;