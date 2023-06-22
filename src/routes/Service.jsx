
import AboutImg2 from '../assets/service.jpg';
import Hero from '../Components/Hero';

import Trip from '../Components/Trip';

function Service () {
    return (
        <>
       
        <Hero 
            cName="hero-mid"
            heroImg={AboutImg2}
            title="Services"
            btnClass="hide"
            />
            <Trip />
           
        </>
    );
}

export default Service;