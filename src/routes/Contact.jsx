
import AboutImg3 from '../assets/contact.jpg';
import Hero from '../Components/Hero';

import ContactForm from '../Components/ContactForm';
function Contact () {
    return (
        <>
       
        <Hero 
            cName="hero-mid"
            heroImg={AboutImg3}
            title="Contact"
            btnClass="hide"
            />
            <ContactForm />
           
        </>
    );
}

export default Contact;