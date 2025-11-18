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

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">[Clinic Name]</h2>

          <nav className="flex flex-wrap space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-secondaryGreen">Home</Link>
            <Link href="/about" className="hover:text-secondaryGreen">About Us</Link>
            <Link href="/services" className="hover:text-secondaryGreen">Services</Link>
            <Link href="/specialities" className="hover:text-secondaryGreen">Specialities</Link>
            <Link href="/media" className="hover:text-secondaryGreen">Media</Link>
            <Link href="/contact" className="hover:text-secondaryGreen">Contact</Link>
          </nav>
        </div>

        {/* Footer Content */}
        <div className="flex flex-wrap gap-12">

          {/* Address Section */}
          <div className="contact-address">
            <div className="address mb-3">
              <div className="font-bold text-xl">Address</div>
              <p className="text-sm">[Clinic Name]</p>
              <p className="text-sm">[Street Address]</p>
              <p className="text-sm">[Area / Locality]</p>
              <p className="text-sm">[City], [State]</p>
              <p className="text-sm">[Country], [Postal Code]</p>
            </div>

            {/* Contacts */}
            <div className="contacts mb-3">
              <div className="font-bold text-xl">Contacts</div>
              <p className="text-sm">Tel: [Landline Number]</p>
              <p className="text-sm">Mobile: [Mobile Number]</p>
              <p className="text-sm">Email: [email@example.com]</p>
            </div>

            {/* Working Hours */}
            <div className="Working-Hours mb-3">
              <div className="font-bold text-xl">Clinic Working Hours</div>
              <p className="text-sm">Monday - Friday: [Timings]</p>
              <p className="text-sm">Saturday: [Timings]</p>
              <p className="text-sm">Sunday: [Timings]</p>
            </div>
          </div>

          {/* Appointment Section */}
          <div className="py-auto">
            <div className="font-bold text-xl">Appointment Booking</div>
            <div className="phone-nos">
              <p className="text-sm">Mobile: [Contact Number 1]</p>
              <p className="text-sm">Mobile: [Contact Number 2]</p>
              <p className="text-sm">Mobile: [Contact Number 3]</p>

              <div>
                <Link href="/appointment" className="text-dark">
                  <div className="border bg-white rounded mt-3 text-center p-3 text-primary">
                    Book Now
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Generic Map */}
          <div className="py-auto">
            <div className="font-bold text-xl">Location</div>
            <div className="map w-[250px] h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0908659042066!2d-122.4194155846813!3d37.77492927975874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d2674c13f%3A0xfdf8e9f1e1e0e5fc!2sSan%20Francisco%20City%20Center!5e0!3m2!1sen!2sus!4v0000000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutralGrey my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutralGrey">
            &copy; {new Date().getFullYear()} [Clinic Name]. All Rights Reserved.
          </p>

          <p className="text-sm text-neutralGrey">
            Website developed by [Your Company Name].
          </p>

          <div className="flex flex-wrap space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-secondary"><FaFacebookF size={20} /></Link>
            <Link href="#" className="hover:text-secondary"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-secondary"><FaInstagram size={20} /></Link>
            <Link href="#" className="hover:text-secondary"><FaLinkedinIn size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
