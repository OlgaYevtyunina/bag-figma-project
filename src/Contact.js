
import { FaCamera } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function ContactUs(){
    return <div>
        <h1>Contact Us</h1>
        <h3 className="center">Our Address: Moscow, Tverskaya st. 56/65</h3>
        <h3 className="center">Email: shopfast@inc.com</h3>
        <h3 className="center">Our Social Media:</h3>
        <div className="center">
        <FaFacebookF size="30px"/>
        <FaCamera size="30px"/>
        <FaTwitter size="30px"/>
        </div>
        </div>


}


export default ContactUs;