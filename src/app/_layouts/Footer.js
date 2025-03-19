import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-accentDarkBlue text-neutralWhite py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Adayar Ortho Clinic</h2>
          <nav className="flex flex-wrap space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-secondaryGreen">
              Home
            </Link>
            <Link href="/about" className="hover:text-secondaryGreen">
              About Us
            </Link>
            <Link href="/services" className="hover:text-secondaryGreen">
              Services
            </Link>
            <Link href="/specialities" className="hover:text-secondaryGreen">
              Specialities
            </Link>
            <Link href="/media" className="hover:text-secondaryGreen">
              Media
            </Link>
            <Link href="/contact" className="hover:text-secondaryGreen">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-wrap gap-12">
          <div className="contact-address">
            <div className="address mb-3">
              <div className="font-bold text-xl">Address</div>
              <p className="text-sm">Adyar Ortho Clinic</p>
              <p className="text-sm">108/2, Akhil Apartment</p>
              <p className="text-sm">Kamaraj Avenue First Street</p>
              <p className="text-sm">Kasturba Nagar Main Road</p>
              <p className="text-sm">Near Nalli Silks, Adyar</p>
              <p className="text-sm"> Chennai- 600 000, India</p>
            </div>
            <div className="contacts mb-3">
              <div className="font-bold text-xl">Contacts</div>
              <p className="text-sm">Tel: 044- 6565 33 66</p>
              <p className="text-sm">Mobile: +91 9962 66 77 44</p>
              <p className="text-sm">info@adyarorthoclinic.com</p>
            </div>
            <div className="Working-Hours mb-3">
              <div className="font-bold text-xl">Clinic Working Hours</div>
              <p className="text-sm">Monday - Friday: 9:00 AM - 9:00 PM</p>
              <p className="text-sm">Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-sm">Sunday: 10:00 AM - 3:00PM</p>
            </div>
          </div>
          <div className="py-auto">
            <div className="font-bold text-xl">Appointment Booking</div>
            <div className="phone-nos">
              <p className="text-sm">Mobile: +91 44 6565 33 66</p>
              <p className="text-sm">Mobile: +91 9962 66 77 44</p>
              <p className="text-sm">Mobile: +91 8144 240 240</p>
              <div className="">
                <Link href="/appointment" className="text-dark">
                  <div className="border bg-white rounded mt-3 text-center p-3">
                    Book now
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-auto">
            <div className="font-bold text-xl">Location</div>
            <div className="map w-[250px] h-[250px]">
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
        <div className="border-t border-neutralGrey my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutralGrey">
            &copy; {new Date().getFullYear()} ADYAR ORTHO CLINIC. All Rights
            Reserved. Website developed by TITO IT Solutions.
          </p>
          <p className="text-sm text-neutralGrey">
            <span>Images are designed by </span>
            <Link href="https://www.freepik.com/" className="underline mx-1">
              Freepik
            </Link>
            <span>and</span>
            <Link href="https://smart.servier.com/" className="underline mx-1">
              Servier Medical Art 
            </Link>
            <span>(licensed under CC BY 4.0.)</span>
          </p>
          <div className="flex flex-wrap space-x-4 mt-4 md:mt-0">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
