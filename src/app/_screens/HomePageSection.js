"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";  // Import useRouter from Next.js

const Card = dynamic(() => import("@/app/_components/Card"), { ssr: true });

const HomePageSection = () => {
  const router = useRouter();  // Initialize useRouter

  const handleBookAppointment = () => {
    // Redirect to the appointment page
    router.push("/appointment");
  };

  return (
    <div className="flex flex-col justify-evenly md:flex-row gap-6 px-6 bg-primary py-10 rounded">
      <Card
        title="Work Timings"
        titleClass="font-bold text-lg mb-3 text-center"
        content={
          <div>
            <ul>
              <li>
                <span className='text-primary font-bold mr-2'>Clinic Time:</span>
                <span>Monday - Saturday</span>
              </li>
              <li>9:00 AM - 9:00 PM</li>
            </ul>
            <ul>
              <li>
                <span className='text-primary font-bold mr-2'>Doctor Consultation:</span>
                <span>Monday - Saturday</span>
              </li>
              <li>10:00 AM - 1:30 PM</li>
              <li>7:00 PM - 9:00 PM</li>
            </ul>
          </div>
        }
        className="md:w-[500px]"
      />
      <Card
        title="Appointment Booking"
        titleClass="font-bold text-lg mb-3 text-center"
        content="Book an appointment with our specialists at your convenience."
        buttonText="Book Now"
        buttonAction={handleBookAppointment}  // Trigger handleBookAppointment on button click
        className="md:w-[500px] justify-center"
      />
    </div>
  );
};

export default HomePageSection;

