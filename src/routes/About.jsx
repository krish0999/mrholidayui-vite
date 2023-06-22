
import AboutImg from '../assets/about.jpg';
import Hero from '../Components/Hero';

import AboutUs from '../Components/AboutUs';
function About () {
    return (
        <>
       
        <Hero 
            cName="hero-mid"
            heroImg={AboutImg}
            title="About Us"
            btnClass="hide"
            />
            <AboutUs />
           
        </>
    );
}

export default About;