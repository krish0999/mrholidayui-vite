
import Hero from '../Components/Hero';
import AboutImg1 from '../assets/img-3.jpg'
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';


function Home () {
    return (
        <>
           
            <Hero 
            cName="hero"
            heroImg={AboutImg1}
            title="Your Journey Your Story "
            text="Choose Your Favourite Destination in one click."
            buttonText="Travel Plan"
            url="/"
            btnClass="Show"
            />
            <Destination />
            <Trip />
            
        </>
    );
}

export default Home;