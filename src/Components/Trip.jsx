import "./TripStyles.css";
import TripData from "./TripData";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations with us.</p>

            <div className="tripcard">
                <TripData 
                image={image5}
                heading="Trip to Nepal"
                text="Nepal is the country of the Mount Everest, 
                the highest mountain peak in the world, and the 
                Birthplace of Gautama Buddha- Lumbini. 
                Mountaineering and other types of adventure 
                tourism and ecotourism are important attractions f
                or visitors."
                />

                <TripData 
                image={image7}
                heading="Trip to America"
                text="Niagara Falls, New York. 
                Not just one but three waterfalls create the 
                magnificence that is North America's largest 
                falls, Niagara: Horseshoe Falls, American 
                Falls and Bridal Veil Falls. They straddle
                the US and Canadian border formed by the 
                Niagara River, and no matter your vantage 
                point, they are wondrous."
                />

                <TripData 
                image={image6}
                heading="Trip to Finland"
                text="The nation has an astounding number of 
                lakes, and the official number stands close 
                to 168,000, which is why it is known as 
                “A Land of Thousand Lakes.” It has at least 
                55,000 lakes that are 200 m wide. Finland is 
                also known for its enchanting forests, so 
                there is no dearth of natural splendour here."
                />
            </div>
        </div>
    );
}

export default Trip;