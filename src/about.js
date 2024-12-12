import Review from "./review";


function About () {
    return (
    <div className="about"> 
        <Review/>
        <h2>See the world, differently.</h2>
        <p>We create personalized trips based on your preferences, this means no two trips are the same.
        Our expertise in over 100 countries worldwide means we take on all the complexities and logistics of planning your trip, so you can simply enjoy. <br/>
        Whether you’re looking for culturally immersive experiences, relaxation, culinary delights, exclusive access or unique places to stay, we make it happen.<br/>
        While your local private guide takes it one step further by helping you authentically experience their country. Your next journey is calling.</p>
        <h2>What you'll recieve</h2>
        <div className="recieve">
            <h3>Every journey begins with a conversation.</h3>
            <p>We think care and curation make all the difference in the world. Understanding your travel vision is the first priority.</p>
            <div className="recieveRow">
                <div className="recieveText">
                    <h3>No fixed dates or schedules</h3>
                    <p>Escape the tour bus crowds and explore on your own terms, departing and returning whenever you choose.</p>
                </div>
                <div className="recieveText">
                    <h3>The freedom of flexibility</h3>
                    <p>Travel whenever you want, for as long as you want with the option to change your plans on the fly – even in-destination.</p>
                </div>
            </div>
        </div>
        <div className="recieve">
            <h3>Itineraries designed by well-traveled experts.</h3>
            <p>Our Destination Experts are people with deep, local knowledge of the areas they represent, having lived, worked or traveled extensively throughout the region.</p>
            <div className="recieveRow">
                <div className="recieveText">
                    <h3>The best of each destination</h3>
                    <p>Our team travels regularly to source and individually vet each and every activity, accommodation and experience featured within our product offering.</p>
                </div>
                <div className="recieveText">
                    <h3>A single point of contact</h3>
                    <p>The Destination Expert who designs your personalized itinerary will keep in touch throughout your journey from planning to unpacking.</p>
                </div>
            </div>
        </div>
        <div className="recieve">   
            <h3>Local secrets unlocked.</h3>
            <p>Cultivate a deeper understanding of your destination with one of our local, English-speaking, private guides by your side. Become immersed in local traditions, cuisines and customs as your guide reveals hidden gems.</p>
            <div className="recieveRow">
                <div className="recieveText">
                    <h3>Only the best will do</h3>
                    <p>Our exacting standards designed to reflect the expectations of North American travelers ensure access the finest local, private guides worldwide.</p>
                </div>
                <div className="recieveText">
                    <h3>Specialist guides</h3>
                    <p>From historians and archeologists to culinary experts and world-class athletes, enhance the private-guided experience by opting for an excursion with a local expert.</p>
                </div>
            </div>
        </div>
        <div className="recieve"> 
            <h3>Your trip. Our responsibility.</h3>
            <p>With our industry-leading, 24/7 support and operational expertise you’ll travel with peace of mind. Should hiccups occur, you can rest assured that our round-the-clock assistance is only a phone call away.</p>
            <div className="recieveRow">
                <div className="recieveText">
                    <h3>The moment you touch down</h3>
                    <p>Once you clear customs, we’re there for you and will take care of the rest. A Kensington Tours representative will meet you at the airport to start your personalized trip.</p>
                </div>
                <div className="recieveText">
                    <h3>Live updates</h3>
                    <p>We stay in touch with you throughout your travels. If changes are necessary, you’ll receive live updates via the Kensington Tours app.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;