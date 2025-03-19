import {
  FaLocationDot,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
const ContactPage = () => {
  return (
    <div className="text-primary mt-6">
      <h2 className="text-center mb-4 text-4xl font-bold">Contact Us </h2>
      <div>
        <h2 className="text-center mb-4 text-3xl font-bold">Location</h2>
        <div className="location overflow-hidden flex justify-center">
          <div className="md:w-[600px] md:h-[500px]">
            <div className="h-[60px] bg-primary text-neutralWhite align-center pl-4 pt-4">
              Here is the Hospital Location
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5314544043204!2d80.24930537321026!3d13.001792514219332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679281a561f5%3A0xb36101821bda65ce!2sAdyar%20Ortho%20Clinic!5e0!3m2!1sen!2sin!4v1734625156285!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullcreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className='mb-12'>
        <h2 className="text-center mt-16 text-3xl font-bold">Contact </h2>
        <div className="flex justify-center md:w-[80%] mx-auto">
          <div className=" flex  items-start justify-center m-8 w-[300px] h-[min-350px] border-4 shadow-lg rounded-lg border-primary">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2 text-center">
                Address
              </div>
              <FaLocationDot size={75} className="mx-auto mb-2" />
              <h2 className="text-lg text-center">Adyar Ortho Clinic</h2>
              <h2 className="text-center">108/2, Akhil Apartment, Kamaraj</h2>
              <h2 className="text-center">
                Avenue First Street, Kasturba Nagar
              </h2>
              <h2 className="text-center">
                Main Road, Adyar, near Nalli Silks
              </h2>
              <h2 className="text-center">Adyar ,Chennai- 600020</h2>
              <h2 className="text-center">Tamil Nadu, India</h2>
            </div>
          </div>
          <div className="flex  items-start justify-center m-8 w-[300px] h-[min-350px] border-4 shadow-lg rounded-lg border-primary">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-6 text-center">Phone</div>
              <FaPhone size={75} className="mx-auto mb-2" />
              <h2 className="text-center">Tel: 044- 6565 33 66</h2>
              <h2 className="text-center">Mobile: +91 9962 66 77 44</h2>
            </div>
          </div>
          <div className=" flex  items-start justify-center m-8 w-[300px] h-[min-350px] border-4 shadow-lg rounded-lg border-primary">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-6 text-center">Email</div>
              <SlEnvolopeLetter size={75} className=" mx-auto" />
              <h2 className="text-center mt-4">info@adyarorthoclinic.com</h2>
            </div>
          </div>
          <div className=" flex  items-start justify-center m-8 w-[300px] h-[min-350px] border-4 shadow-lg rounded-lg border-primary">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl  text-center mb-8">Follow Us</div>
              <div className="flex gap-5 mb-4">
                <FaFacebookF size={50} />
                <FaTwitter size={50} />
              </div>
              <div className="flex gap-5 ">
                <FaInstagram size={50} />
                <FaLinkedinIn size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
