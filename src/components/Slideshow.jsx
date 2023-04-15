import { useState } from "react";
import left from "../assets/images/Vector-left.svg";
import right from "../assets/images/Vector-right.svg";
import '../styles/Slideshow.css'

export default function Slideshow({ slides }) {
	const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
	const length = slides.length; // longueur du tableau de slides

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
	};

	return (
		<section className="slideshow-container">
            <div className="slideshow">
			{slides.map((slide, index) => (
				<div
					key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
					className={
						current === index
							? "current-picture"
							: "hidden-pictures"
					}
				>
					{index === current && <img src={slide} alt="apartment for rent" />}
					{index === current && (
						<span className="picture__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
            </div>
              <div className="left-arrow">
			{length > 1 && (
				<img
					src={left} //Affichage des flèches seulement si length > 1
					alt="left arrow"
					onClick={prevSlide}
					className="left-arrow"
				/>
			)}
            </div>
            <div className="right-arrow">
			{length > 1 && (
				<img
					src={right}
					alt="right arrow"
					onClick={nextSlide}
					className="right-arrow"
				/>
			)}
            </div>
		</section>
	);
}


















// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import '../styles/Slideshow.css'
// import 'react-slideshow-image/dist/styles.css'


// export default function Slideshow(pictures) {
//     const allPictures = pictures['pictures']
//     allPictures.map(eachPicture => {
//         console.log(eachPicture)
//         return (
//             < Slide autoplay={false} >
//                     <div className="each-slide-effect">
//                         test
//                         <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${eachPicture})` }}>
//                             <span>1/3</span>
//                         </div>
//                     </div>
//             </Slide>
//         )
//     })
// }




// export default function lodgingPictures(pictures) {

//     const allPictures = pictures['pictures']



    // return (
    //     < Slide autoplay={false} >
    //         <div className="each-slide-effect">
    //             <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${allPictures[0]})` }}>
    //                 <span>1/3</span>
    //             </div>
    //         </div>
    //         <div className="each-slide-effect">
    //             <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${allPictures[1]})` }}>
    //                 <span>2/3</span>
    //             </div>
    //         </div>
    //         <div className="each-slide-effect">
    //             <div className="each-slide-effect-img" style={{ 'backgroundImage': `url(${allPictures[2]})` }}>
    //                 <span>3/3</span>
    //             </div>
    //         </div>
    //     </Slide>
    // )}
