import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../styles/Slideshow.css'
import 'react-slideshow-image/dist/styles.css'
// import '../data/lodgement.js'


    const lodgingPicturespictures = () => {
        const lodgingPictures = [
            "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
            "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        ];
        return (
            < Slide autoplay={false} >
                <div className="each-slide-effect">
                    <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${lodgingPictures[0]})` }}>
                        <span>1/3</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${lodgingPictures[1]})` }}>
                        <span>2/3</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${lodgingPictures[2]})` }}>
                        <span>3/3</span>
                    </div>
                </div>
            </Slide>
        )}
        export default lodgingPicturespictures;