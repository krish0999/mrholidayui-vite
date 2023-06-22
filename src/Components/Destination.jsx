import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import './DestinationStyles.css';
import DestinationData from './DestinationData';


const Destination = () => {
    return (
        <div className="destination">
            <h1>Most Visited</h1>
            <p>Tours give you the opporunity to Travel within a time frame.</p>

            <DestinationData 
            className="first-des"
            heading="Taal Volcano, Batangas"
            text="Taal Volcano is the smallest active 
            volcano in the world. Its unexplained 
            shape and location on an island within 
            a lake within an island, makes it a 
            unique geologic wonder, enthralling 
            thousands of tourists and geologists 
            yearly. This island covers an area of about 23 km², and consists of forty-seven different overlapping cones and craters. It is one of the active volcanoes in the Philippines and part of the “Pacific Ring of Fire”.

            Permanent settlement in the island is prohibited by the government. Despite the warnings, poor families have settled on the island, risking their lives, earning a living through tourism, fishing and farming crops from the rich volcanic soil."
            img1={image1}
            img2={image2}
            />
           
           <DestinationData 
           className="first-des-reverse"
           img1={image3}
           img2={image4}
            heading="Eiffel Tower, Paris"
            text="What would Paris be without its 
            symbolic Eiffel Tower? Built by Gustave Eiffel 
            to commemorate the centenary of the French 
            Revolution, it is presented at the Exposition 
            Universelle in Paris in 1889. 324 meters high, 
            it is one of the most visited monuments in the 
            world with nearly 7 million visitors a year. Every seven years, around 60 tons of paint are applied to the tower. It not only keeps the so-called La dame de fer looking good, but also helps the iron from rusting. The massive iron structure is wind resistant and will sway during a storm. Wind isn't the only thing that can make the enormous Tower move, though — the heat of the sun also affects it, causing the iron to expand making the Tower grow an average of six inches during hot months."
            />
        </div>
    );
};

export default Destination;