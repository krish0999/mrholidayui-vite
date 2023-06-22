import "./ContactformStyles.css";

function ContactForm(){
    return(
        <div className="form-container">
            <h1>
                Send a message to us..!!
                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <input placeholder="Number"/>
                    <textarea placeholder="Message" rows="4"/>
                    <button>Send Message</button>
                </form>
            </h1>
        </div>
    );
}

export default ContactForm;