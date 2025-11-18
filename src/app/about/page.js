import Image from "next/image";
import { FaMedal } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center md:mt-12 mt-3">
        Welcome To Ortho Clinic
      </h1>
      <div className="container text-black p-8 text-xl leading-loose mx-auto md:mt-12 mt-3 md:mb-12 mb-3">
        {/* <h1 className="text-4xl fond-bold text-primary">About Us</h1> */}
        <p className="mt-3">
          [Clinic Name] is established with the mission of providing
          comprehensive and high-quality outpatient orthopedic care. The clinic
          is equipped with modern facilities such as X-Ray services,
          Physiotherapy, and a Blood Collection Centre to ensure a complete and
          convenient experience for patients.
        </p>

        <p className="mt-3">
          We are dedicated to delivering exceptional care by offering essential
          diagnostic and therapeutic services under one roof. For added
          convenience, home visit services are available for X-Ray,
          Physiotherapy, and Blood Collection. To schedule a home visit, kindly
          contact our clinic’s support team.
        </p>

        <p className="mt-3">
          For patients who require surgical management, we coordinate admissions
          with reputed hospitals based on individual needs and the nature of the
          procedure.
        </p>

        <p className="mt-3">
          Our clinic is also associated with multiple cashless insurance
          providers to ensure a smooth and hassle-free experience. Additionally,
          as part of our commitment to accessible healthcare, we offer services
          for international patients and support medical tourism with
          professional, patient-centered care.
        </p>
      </div>
      <div className="about-doctor md:mt-12 mt-3 md:mb-12 mb-3 flex items-center h-[95%] w-[100%]">
        <div className="p-6">
          <div className="md:flex w-[100%]">
            {/* Doctor Profile Section */}
            <div className="glass-card md:p-6 p-3 doctor-profile md:w-[25%] w-full">
              <div className="rounded-full w-[200px] h-[200px] overflow-hidden relative mx-auto mt-8">
                <Image
                  src='/clinic-website/image/doctor-pic.avif'
                  alt="doctor-profile"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="text-neutralWhite md:mt-6 mt-3 text-center pt-8">
                <h1 className="text-xl mb-2 font-bold">
                  Prof. Dr. Anandaraj
                </h1>
                <div className="mb-2 text-lg">
                  M.S(ORTHO)
                </div>
                <div className="">Consultant Orthopedic Surgeon</div>
                <div className="">Ortho Clinic</div>
              </div>
            </div>

            {/* Doctor Detail Section */}
            <div className="doctor-detail text-neutralWhite text-bold text-lg leading-loose md:p-6 w-full md:w-[75%]">
              <h1 className="text-4xl fond-bold text-center text-neutralWhite mb-3 mt-2">
                About Our Doctor
              </h1>
              <p className="mt-3">
                Dr.Anandaraj is a highly respected orthopedic surgeon with
                extensive experience in clinical practice and medical education.
                Having served in reputable medical institutions, Dr.
                Dr.Anandaraj has contributed significantly to the training of
                medical students and orthopedic residents. They have completed
                advanced training in fracture management, joint replacement
                surgeries of the knee, hip, and shoulder, as well as arthroscopy
                at recognized centers in India and abroad.
              </p>

              <p className="mt-3">
                Dr. Dr.Anandaraj is an active member of several national and
                international orthopedic associations and has a strong interest
                in minimally invasive and keyhole surgical techniques. With
                substantial experience in arthroscopic procedures and sports
                injury management, they are regarded as a specialist in modern
                orthopedic surgical methods.
              </p>

              <p className="mt-3">
                In addition to clinical practice, Dr. Dr.Anandaraj has
                contributed to academic and scientific research by delivering
                numerous scientific presentations and publishing papers in
                national and international journals. Their work has been
                recognized through various professional accolades and awards
                over the course of their career.
              </p>

              <p className="mt-3">
                Dr. Dr.Anandaraj currently serves as a consultant at multiple
                leading hospitals and healthcare institutions. Their dedication
                to patient care, continuous learning, and clinical excellence
                has made them a trusted figure in the field of orthopedic
                surgery.
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
            <h1 className="text-2xl font-bold">Gold Medal</h1>
            <h1 className="text-2xl font-bold">2012</h1>
          </div>
          <div className="p-12 rounded border-3 shadow-md text-2xl  h-[300px] md:w-[500px] bg-primary text-neutralWhite text-center">
            <div className="mb-6">
              <FaMedal size={60} className="mx-auto" />
            </div>
            <h1 className="text-2xl font-bold">Gold Medal</h1>
            <h1 className="text-2xl font-bold">2012</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
