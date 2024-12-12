import React, { useState } from 'react';
import ReviewOne from './assets/otzyv.jpg';
import ReviewTwo from './assets/otzyv1.jpg';
import ReviewThree from './assets/otzyv2.jpg';
import ReviewFour from './assets/otzyv3.jpg';
import ReviewFive from './assets/otzyv4.jpg';

const imageList = [
  { src: ReviewOne, text: '"We are still awe-struck by all the amazing scenes we were shown and we are still in love with our tour manager. She was an absolute delight! Her great personality and easy going style made it so much easier to enjoy the trip." Ms. Heidi Corona' },
  { src: ReviewTwo, text: '“This tour was beyond organized and offered us every amenity we might require, although we covered a lot of sites and events. We enjoyed each hotel we were booked into and each special dinner and entertainment.” Rev. Barry & Marilyn Duguid' },
  { src: ReviewThree, text: '"The entire trip was absolutely a marvelous experience. The accommodations were terrific as was the food. Including the transportation to and from Logan airport was a great perk! We thoroughly enjoyed our vacation.” Mr. and Mrs. Mucciarone' },
  { src: ReviewFour, text: '“As seasoned travelers, my spouse and I have come to appreciate two main aspects of guided tours - the quality of the itinerary and the professionalism of the tour guide. On both counts, this tour succeeded beautifully.” Mr. Joseph Russo' },
  { src: ReviewFive, text: 'It was an amazing trip and I had a great time. Our Trip Leader Ashish was super knowledgeable and enjoyable to travel with and he did a flawless job handling logistics in a chaotic and crazy (but awesome) country. Alison Mahoney' }
];
function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + imageList.length) % imageList.length
    );
  };
  return (
    <div className="image-switcher">
        <div className='imgTextReview'>
            <img className='imgReview'
            src={imageList[currentIndex].src}
            alt={imageList[currentIndex].text}/>
            <p className='textReview'>{imageList[currentIndex].text}</p>
        </div>
        <div className='btnsReviews'>
        <button className='btnSwitcher' onClick={handlePrevious}>Previous</button>
        <button className='btnSwitcherNext' onClick={handleNext}>Next</button>
        </div>
    </div>
  );
}

export default Review;