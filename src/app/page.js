import { slideData } from "@/data/data";
import dynamic from "next/dynamic";
import Head from "next/head";

const HomePageSpecialities = dynamic(
  () => import("./_screens/HomePageSpecialities"),
  { ssr: true }
);
const HomePageTestimonals = dynamic(
  () => import("./_screens/HomePageTestimonals"),
  { ssr: true }
);
const HomePageSection = dynamic(() => import("./_screens/HomePageSection"), {
  ssr: true,
});
const HomePageService = dynamic(() => import("./_screens/HomePageService"), {
  ssr: true,
});
const HomePageStats = dynamic(() => import("./_screens/HomePageStats"), {
  ssr: true,
});
const Slider = dynamic(() => import("@/app/_components/Slider"), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Adyar Ortho Clinic offers expert orthopedic care in Chennai, led by Prof. Dr. A. Shanmuga Sundaram, a renowned Orthopedic Surgeon specializing in Sports Medicine, M.S(Ortho), Mch(Ortho), and PhD(Sports Medicine). Book a consultation with the best orthopedic doctor in Chennai today."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          property="article:modified_time"
          content="2020-03-13T17:40:57+00:00"
        />

        {/* Social Media Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="http://adyarorthoclinic.com/wp-content/uploads/2014/04/8b786610b090d585d9dfac6210b6cc941.jpg"
        />
        <meta property="og:site_name" content="Adyar Ortho Clinic" />
        <meta property="og:url" content="http://adyarorthoclinic.com/" />
        <meta
          property="og:description"
          content="Adyar Ortho Clinic provides high-quality orthopedic services in Chennai, with personalized care by Prof. Dr. A. Shanmuga Sundaram, an expert in Orthopedic Surgery and Sports Medicine."
        />
        <meta
          property="og:title"
          content="Adyar Ortho Clinic | Best Orthopedic Doctor in Chennai - Expert Consultation by Prof. Dr. A. Shanmuga Sundaram"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="font-sans text-primary">
        <Slider slides={slideData} />
        {/* <div>slider</div> */}
        <div className="card-section bg-neutralWhite md:p-20 p-3">
          <HomePageSection />
        </div>
        <div className="about md:p-10 flex justify-center items-center">
          <div className="container rounded font-bold text-neutralWhite md:p-8 p-6 leading-loose shadow-md">
            <h1 className="md:text-6xl text-4xl fond-bold text-neutralWhite text-center md:mb-6">
              About Us
            </h1>
            <p className="md:mt-6 md:text-2xl">
              [Clinic Name] was established with the mission of delivering
              comprehensive and exceptional outpatient orthopedic care. The
              clinic is equipped with modern facilities, including X-Ray
              services, Physiotherapy, and a dedicated Blood Collection Centre,
              ensuring convenient access to essential diagnostics.
            </p>

            <p className="md:mt-6 md:text-2xl">
              We are committed to providing the highest standard of care by
              offering a wide range of medical services under one roof. For
              added convenience, we also provide home visit services for X-Ray,
              Physiotherapy, and Blood Collection. To schedule a home visit,
              kindly contact our support team.
            </p>

            <p className="md:mt-6 md:text-2xl">
              For patients requiring surgical treatment, we coordinate
              admissions with leading hospitals based on individual patient
              needs and treatment recommendations.
            </p>

            <p className="md:mt-6 md:text-2xl">
              Our clinic is associated with multiple cashless insurance
              providers, ensuring a streamlined and stress-free experience. As
              part of our commitment to global healthcare standards, we also
              support medical tourism and provide services to patients from
              around the world with personalized and expert care.
            </p>
          </div>
        </div>
        <div className="services-section p-20 h-[min-80vh]">
          <h1 className="text-4xl text-center mb-12 font-bold">Our Services</h1>
          <HomePageService />
        </div>
        <div className="mission mt-3 flex justify-center px-4">
          <div className="flex flex-col justify-center w-[70%]">
            <h1 className="text-6xl text-neutralWhite mb-3 font-bold text-center">
              Misson
            </h1>
            <h1 className="md:text-4xl text-2xl text-neutralWhite mb-3 font-bold">
              {`"Delivering exceptional patient care, advanced surgical expertise, top-quality treatment at an affordable price with strong medical ethics, and ensuring that expert healthcare is accessible to all citizens"`}
            </h1>
            <small className="text-neutralWhite text-xl font-bold">
              Ortho Clinic
            </small>
          </div>
        </div>
        <div className="specialities-section p-20 h-[min-80vh] ">
          <h1 className="text-4xl text-center mb-12 font-bold">
            Our Specialities
          </h1>
          <HomePageSpecialities />
        </div>
        <div className="stats-section">
          <HomePageStats />
        </div>
        <div className="testimonials-section md:p-20 bg-neutralGrey mt-6">
          <div>
            <HomePageTestimonals />
          </div>
        </div>
        <div className="health-video-section md:p-20 bg-neutralGrey h-[min-60vh] mt-6">
          <div>
            <h1 className="text-4xl text-center mb-12 font-bold">
              Health Videos and Papers{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
