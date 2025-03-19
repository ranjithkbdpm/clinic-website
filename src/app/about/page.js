import Image from "next/image";
import { FaMedal } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center md:mt-12 mt-3">
        Welcome To Adayar Ortho Clinic
      </h1>
      <div className="container text-black p-8 text-xl leading-loose mx-auto md:mt-12 mt-3 md:mb-12 mb-3">
        {/* <h1 className="text-4xl fond-bold text-primary">About Us</h1> */}
        <p className="mt-3">
          Adyar Ortho Clinic (AOC) is the vision of{" "}
          <b>Prof. Dr. A. Shanmuga Sundaram</b>, established with the mission of
          delivering comprehensive and exceptional outpatient care. Our clinic
          is equipped with state-of-the-art facilities, including X-Ray
          services, Physiotherapy, and a Blood Collection Centre (Med All)
        </p>
        <p className="mt-3">
          At AOC, we are dedicated to providing the highest standard of care by
          offering all essential medical services under one roof. For added
          convenience, we extend home visit services for X-Ray, Physiotherapy,
          and Blood Collection. To schedule a home visit, please contact us at
          9962667744.
        </p>
        <p className="mt-3">
          For patients requiring surgical interventions, we facilitate
          admissions to leading corporate hospitals based on individual needs.
        </p>
        <p className="mt-3">
          We are also partnered with numerous cashless insurance providers,
          ensuring a seamless experience for our patients. Additionally, as part
          of our professional commitment to Medical Tourism, we proudly serve
          patients from across the globe, offering expert care tailored to
          international standards.
        </p>
      </div>
      <div className="about-doctor md:mt-12 mt-3 md:mb-12 mb-3 flex items-center h-[95%] w-[100%]">
        <div className="p-6">
          <div className="md:flex w-[100%]">
            {/* Doctor Profile Section */}
            <div className="glass-card md:p-6 p-3 doctor-profile md:w-[25%] w-full">
              <div className="rounded-full w-[200px] h-[200px] overflow-hidden relative mx-auto mt-8">
                <Image
                  src="/image/doctor-pic.avif"
                  alt="doctor-profile"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="text-neutralWhite md:mt-6 mt-3 text-center pt-8">
                <h1 className="text-xl mb-2 font-bold">
                  Prof. Dr. A. Shanmuga Sundaram
                </h1>
                <div className="mb-2 text-lg">
                  M.S(ORTHO), Mch(ORTHO), PhD(SPORTS MEDICINE)
                </div>
                <div className="">Consultant Orthopedic Surgeon</div>
                <div className="">Adayar Ortho Clinic</div>
              </div>
            </div>

            {/* Doctor Detail Section */}
            <div className="doctor-detail text-neutralWhite text-bold text-lg leading-loose md:p-6 w-full md:w-[75%]">
              <h1 className="text-4xl fond-bold text-center text-neutralWhite mb-3 mt-2">
                About Our Doctor
              </h1>
              <p className="mt-3">
                Prof. Dr. A. Shanmuga Sundaram is a distinguished orthopedic
                surgeon who has served as an Associate Professor of Orthopedic
                Surgery in the Tamil Nadu Government Medical Service. The
                majority of his academic career was dedicated to teaching
                orthopedic surgery at the prestigious Madras Medical College.
                Dr. Sundaram has received advanced training in fracture
                management, primary and revision joint replacements of the knee,
                hip, and shoulder, as well as arthroscopy at renowned
                institutions in India and abroad.
              </p>
              <p className="mt-3">
                He is an active member of both national and international forums
                for joint replacement surgeons and has a profound interest in
                keyhole surgery. With over 500 successful Arthroscopic ACL
                reconstructions to his credit, he is recognized as a leader in
                minimally invasive surgical techniques. Dr. Sundaram is also a
                proud member of ISAKOS (International Society of Arthroscopy,
                Knee Surgery, and Orthopaedic Sports Medicine) and IAS (Indian
                Arthroscopy Society).
              </p>
              <p className="mt-3">
                In addition to his clinical expertise, Dr. Sundaram has
                contributed extensively to academic and scientific research.
                Over the course of his career, he has delivered more than 50
                scientific presentations and authored two international and 10
                national/state-level scientific papers, earning him notable
                accolades such as the Prof. Vigneshwaralu Gold Medal (TNOA,
                2002) and the Prof. Bhakshi Gold Medal (IOACON, 2012).
              </p>
              <p className="mt-3">
                Dr. Sundaram serves as a consultant at prominent medical
                institutions, including Chennai Meenakshi Multispecialty
                Hospital, Apollo Spectra Hospital, Apollo Day Surgery, and other
                leading corporate hospitals in Chennai. His commitment to
                excellence and patient care has established him as a trusted
                authority in the field of orthopedics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container doctor-awards md:mt-12 mt-3 md:mb-12 mb-3">
        <h1 className="text-4xl fond-bold text-center text-accentDarkBlue mb-3">
          Honors And Accolades
        </h1>
        <div className="honors md:flex gap-6 justify-center mt-6">
          <div className="p-12 rounded border-3 shadow-md h-[300px] md:w-[500px] bg-primary text-neutralWhite text-center">
            <div className="mb-6">
              <FaMedal size={60} className="mx-auto" />
            </div>
            <h1 className="text-2xl font-bold">
              Prof.Vigneshwaralu Gold Medal
            </h1>
            <h1 className="text-2xl font-bold">2002(TNOA)</h1>
          </div>
          <div className="p-12 rounded border-3 shadow-md text-2xl  h-[300px] md:w-[500px] bg-primary text-neutralWhite text-center">
            <div className="mb-6">
              <FaMedal size={60} className="mx-auto" />
            </div>
            <h1 className="text-2xl font-bold">Prof.Bhakshi Gold Medal</h1>
            <h1 className="text-2xl font-bold">2012 (IOACON)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
