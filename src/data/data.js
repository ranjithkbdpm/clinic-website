import { FaSmile, FaThumbsUp } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { GiLoveInjection } from "react-icons/gi";

export const slideData = [
    {
      src: "/image/slider/operations.jpg",
      alt: "Doctors working",
      style: { backgroundPosition: "center" },
      content:'Providing professional, affordable orthopedic care focused on restoring mobility and ensuring optimal outcomes.'
    },
    {
      src: "/image/slider/doctors.jpg",
      alt: "Doctors",
      style: { backgroundPosition: "top" },
      content:"Accurate X-Ray and blood diagnostics, now conveniently available at your doorstep."
    },
    {
      src: "/image/slider/healthcare-concept-clinic.jpg",
      alt: "Healthcare clinic",
      style: { backgroundPosition: "center" },
      content:"Restoring strength and mobility with expert physiotherapy care, now available at your doorstep"
    },
    {
      src: "/image/slider/doctors-working.jpg",
      alt: "Operations",
      style: { backgroundPosition: "top" },
      content:'Serving Humanity With Comprehensive Cutting-Edge Treatment'
    },
    {
      src: "/image/slider/physio.jpg",
      alt: "Physiotherapy",
      style: { backgroundPosition: "center" },
      content:"Restoring strength and mobility with expert physiotherapy care, now available at your doorstep"
    },
];

export const homePageSpecialitiesData = [
  {
    title: "FRACTURE MANAGEMENT",
    src: "/image/specialities/fracture.png",
    style: {},
    content: "",
  },
  {
    title: "SHOULDER REPLACEMENT SURGERY",
    src: "/image/specialities/shoulder-replacement.png",
    style: {},
    content: "",
  },
  {
    title: "ARTHROSCOPIC KEYHOLE SURGERY",
    src: "/image/specialities/arthroscopy.jpg",
    style: {},
    content: "",
  },
  {
    title: "JOINT PAIN CLINIC",
    src: "/image/specialities/joint-pain.jpg",
    style: {},
    content: "",
  },
  {
    title: "SPINAL SURGERY",
    src: "/image/specialities/spine-model.avif",
    style: {},
    content: "",
  },
  {
    title: "DISC PROLAPSE NON SURGICAL TREATMENT",
    src: "/image/specialities/herniated-disc.jpg",
    style: {},
    content: "",
  },
  {
    title: "BACK PAIN NON SURGICAL TREATMENT ",
    src: "/image/specialities/back-pain.jpg",
    style: {},
    content: "",
  },
  {
    title: "PEADIATRIC ORTHO CARE",
    src: "/image/specialities/pediatric-ortho.jpg",
    style: {},
    content: "",
  },
  {
    title: "STEMCELL THERAPY",
    src: "/image/specialities/stem-cell-theraphy.jpg",
    style: {},
    content: "",
  },
  {
    title: "Knee replacement",
    src: "/image/specialities/knee-replacement.png",
    style: {},
    content: "",
  },
  {
    title: "Hip replacement",
    src: "/image/specialities/hip-replacement.png",
    style: {},
    content: "",
  },
  {
    title: "Dislocation ",
    src: "/image/specialities/bone-dislocation.jpg",
    style: {},
    content: "",
  },
  {
    title: "Knee osteotomy",
    src: "/image/specialities/knee-osteotomy.jpg",
    style: {},
    content: "",
  },
  
];  

export const homePageServiceData = [
  {
    title: "Orthopedic",
    src: "/image/home-service/orthopedic-treatment.jpg",
    style: {},
    content: "Providing professional, affordable orthopedic care focused on restoring mobility and ensuring optimal outcomes.",
  },
  {
    title: "Physiotherapy",
    src: "/image/home-service/physiotherapy.jpg",
    style: {},
    content: "Restoring strength and mobility with expert physiotherapy care, now available at your doorstep",
  },
  {
    title: "Blood Collection and X-Ray",
    src: "/image/home-service/blood-collection-fix.jpg",
    style: {},
    content: "Accurate X-Ray and blood diagnostics, now conveniently available at your doorstep.",
  },
];


export const statsData = [
  {
    value: "18+",
    text: "Year of Experience",
    icons:<MdWorkHistory size={50} className="mx-auto"/>
  },
  {
    value: "500",
    text: "Arthroscopic ACL reconstructions",
    icons:<GiLoveInjection size={50} className="mx-auto"/>
  },
  {
    value: "6000+",
    text: "Successfull operations",
    icons:<FaThumbsUp size={50} className="mx-auto" />
  },
  {
    value: "20k+",
    text: "Happy patients",
    icons:<FaSmile size={50} className="mx-auto"/>
  },
];