import imageOne from './assets/home1.jpg';
import imageTwo from './assets/home2.jpg';
import imageThree from './assets/home3.jpg';
import imageFour from './assets/home4.jpg';
import imageFive from './assets/home 5.jpg';
import imageSix from './assets/home6.jpg';
import imageSeven from './assets/home7.jpg';

function HomePage () {
    return ( 
    <div className='home'>
        <div className="leftRow">
            <img src={imageOne} className='homeImg' alt='Vacation'/>
            <h2>Trip ideas for your family vacation</h2>
            <p>When we come to creating your trip, you and your family can choose every aspect. These routes and experiences are just for inspiration — because your trip will be uniquely yours.</p>
            <img src={imageThree} className='homeImg' alt='Vacation'/>
            <h2>Our recommended cultural itinerary ideas</h2>
            <p>Our itinerary ideas will give you a starting point for what your trip could entail. Treat them just as inspiration, as each trip is created uniquely for you and there are many more options available.</p>
            <img src={imageFive} className='homeImg' alt='Vacation'/>
            <h2>Our recommended off-the-beaten-track itineraries</h2>
            <p>Leave the flocks of tourists behind and journey into some of the world's remotest regions on a tailor-made trip that's off the beaten track. </p>
            <img src={imageSeven} className='homeImg' alt='Vacation'/>
        </div>
        <div className="rightRow">
            <img src={imageTwo} className='homeImg' alt='Vacation'/>
            <h2>Our cruise collection</h2>
            <p>Our style of cruising — partnering with smaller ships that offer expert-led experiences — leads to a more personal and revealing journey. You might have the chance to snorkel near marine iguanas in the Galapagos.</p>
            <img src={imageFour} className='homeImg' alt='Vacation'/>
            <h2>Our recommended honeymoon destinations</h2>
            <p>Our specialists can help you plan your honeymoon, individually focusing on your tastes and interests, to any of our destinations, including those below.</p>
            <img src={imageSix} className='homeImg' alt='Vacation'/>
        </div>
    </div>
    )
}
export default HomePage;