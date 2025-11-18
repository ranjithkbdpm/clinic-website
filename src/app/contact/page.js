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
      <h2 className="text-center mb-4 text-4xl font-bold">Contact Us</h2>

      {/* Location Section */}
      <div>
        <h2 className="text-center mb-4 text-3xl font-bold">Location</h2>
        <div className="location overflow-hidden flex justify-center">
          <div className="md:w-[600px] md:h-[500px]">
            <div className="h-[60px] bg-primary text-neutralWhite pl-4 pt-4">
              Our Clinic Location
            </div>

            {/* Generic Map (Shows a public landmark) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0908659042066!2d-122.4194155846813!3d37.77492927975874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d2674c13f%3A0xfdf8e9f1e1e0e5fc!2sSan%20Francisco%20City%20Center!5e0!3m2!1sen!2sus!4v0000000000000!"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-12">
        <h2 className="text-center mt-16 text-3xl font-bold">Contact</h2>

        <div className="flex justify-center md:w-[80%] mx-auto flex-wrap">
          {/* Address */}
          <div className="flex items-start justify-center m-8 w-[300px] border-4 shadow-lg rounded-lg border-primary">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2 text-center">Address</div>
              <FaLocationDot size={75} className="mx-auto mb-2" />
              <h2 className="text-center">[Clinic Name]</h2>
              <h2 className="text-center">[Street Address]</h2>
              <h2 className="text-center">[Area / Locality]</h2>
              <h2 className="text-center">[City], [State] - [ZIP Code]</h2>
              <h2 className="text-center">[Country]</h2>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start justify-center m-8 w-[300px] border-4 shadow-lg rounded-lg border-primary">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-6 text-center">Phone</div>
              <FaPhone size={75} className="mx-auto mb-2" />
              <h2 className="text-center">Tel: [Office Number]</h2>
              <h2 className="text-center">Mobile: [Mobile Number]</h2>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start justify-center m-8 w-[300px] border-4 shadow-lg rounded-lg border-primary">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-6 text-center">Email</div>
              <SlEnvolopeLetter size={75} className="mx-auto" />
              <h2 className="text-center mt-4">[email@example.com]</h2>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-start justify-center m-8 w-[300px] border-4 shadow-lg rounded-lg border-primary">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl text-center mb-8">
                Follow Us
              </div>
              <div className="flex gap-5 mb-4 justify-center">
                <FaFacebookF size={50} />
                <FaTwitter size={50} />
              </div>
              <div className="flex gap-5 justify-center">
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
