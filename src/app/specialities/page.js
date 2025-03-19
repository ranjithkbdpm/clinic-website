import dynamic from 'next/dynamic'
import { FaBone, FaHeartbeat, FaRunning, FaUserMd } from 'react-icons/fa'; // Example for icons
const HomePageSpecialities = dynamic(
  () => import("../_screens/HomePageSpecialities"),
  { ssr: true }
);

// SpecialtyCard Component
const SpecialtyCard = ({ specialty }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
      <div className="text-4xl mb-4">{specialty.icon}</div>
      <h3 className="text-xl font-semibold">{specialty.title}</h3>
      <p>{specialty.description}</p>
    </div>
  );
};

// SpecialtyPage Component
const SpecialtyPage = () => {
  const specialties = [
    {
      title: "Orthopedic Specialties",
      description: "Joint replacements, spine surgery, sports injuries, pediatric orthopedics, and more.",
      icon: <FaBone />, // Example icon for orthopedic specialties
    },
    {
      title: "Physiotherapy Specialties",
      description: "IFT, Ultrasound therapy, EMS, Laser therapy, Wax therapy, and TENS.",
      icon: <FaHeartbeat />, // Example icon for physiotherapy specialties
    },
    {
      title: "Rehabilitation Specialties",
      description: "Sports rehabilitation, injury prevention, post-operative care.",
      icon: <FaRunning />, // Example icon for rehabilitation specialties
    },
    {
      title: "Advanced Treatments & Technologies",
      description: "Stem cell therapy, arthroscopic surgery, non-surgical back pain treatments.",
      icon: <FaUserMd />, // Example icon for advanced treatments
    },
    {
      title: "Patient-Centered Care",
      description: "Personalized care, state-of-the-art equipment, experienced specialists.",
      icon: <FaUserMd />, // Another icon for patient care (same or different as needed)
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold mb-8">Our Specialties</h1>
      
      {/* Specialties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty, index) => (
          <SpecialtyCard key={index} specialty={specialty} />
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <p>Contact us today to learn more about our specialized care!</p>
        <button className="bg-blue-500 text-white p-2 rounded mt-4">Contact Us</button>
      </div>

      <div className='mt-12'>
        <HomePageSpecialities />
      </div>
    </div>
  );
};

export default SpecialtyPage;

