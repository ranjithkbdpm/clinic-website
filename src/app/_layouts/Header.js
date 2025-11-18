import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="bg-neutralGrey">
        <div className="font-sans md:flex justify-between text-primary px-3 py-3 bg-ne">
          <div>
            <h1 className="text-4xl font-bold">Ortho Clinic</h1>
            <p className="text-lg text-secondary">
              Dedicated to your health and well-being.
            </p>
          </div>
          <div className="contact">
            <div className="flex align-middle justify-start space-x-5 mt-4 md:mt-0 mb-2 social-media">
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
            <div className="mail-phone">
              <div className="flex space-x-1 align-middle">
                <span className="mt-1">
                  <FaPhone />
                </span>
                <span>+91 99446677889</span>
              </div>
              <div className="flex space-x-1 align-middle">
                <span className="mt-1">
                  <FaMailBulk />
                </span>
                <span>info@orthoclinic.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
