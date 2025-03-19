import Card from "@/app/_components/Card";
import Image from "next/image";

const ServicePage = () => {
  const ServiceData = [
    {
      title: "Joint replacements",
      src: "./public./public/image/Orthopedic/Joint-replacement.jpg",
    },
    {
      title: "Paediatric orthopaedic",
      src: "./public/image/Orthopedic/Paediatric orthopaedic.jpg",
    },
    {
      title: "Spine surgery",
      src: "./public/image/Orthopedic/Spine Surgery.Jpeg",
    },
    {
      title: "Fractures",
      src: "./public/image/Orthopedic/Fractures.jpeg",
    },
    {
      title: " Hip fractures",
      src: "./public/image/Orthopedic/Hip-Fracture.jpg",
    },
    {
      title: "Arthritis",
      src: "./public/image/Orthopedic/Arthritis.jpg",
    },
    {
      title: "Tennis elbow",
      src: "./public/image/Orthopedic/Tennis elbow.jpg",
    },
    {
      title: "Golfers elbow",
      src: "./public/image/Orthopedic/Golfer-elbow.jpeg",
    },
    {
      title: "Soft tissue injuries",
      src: "./public/image/Orthopedic/Soft Tissue.jpg",
    },
    {
      title: "Ligament injuries",
      src: "./public/image/Orthopedic/LigamentInjuries.jpg",
    },
    {
      title: "Elbow pain and problems",
      src: "./public/image/Orthopedic/Elbow-Pain.jpg",
    },
    {
      title: "Foot pain and problems",
      src: "./public/image/Orthopedic/FootPain.jpeg",
    },
    {
      title: "Low back pain",
      src: "./public/image/Orthopedic/Low-Back-Pain.jpeg",
    },
    {
      title: "Hand pain and problems",
      src: "./public/image/Orthopedic/Wrist Hand Pain.jpg",
    },
    {
      title: "Shoulder pain and problems",
      src: "./public/image/Orthopedic/Shoulder-Pain.jpg",
    },
    {
      title: "Knee pain and problems",
      src: "./public/image/Orthopedic/KneePain.jpg",
    },
    {
      title: "Neck pain and problems",
      src: "./public/image/Orthopedic/NeckPain.jpg",
    },
    {
      title: "Heel pain",
      src: "./public/image/Orthopedic/HeelPain.Jpeg",
    },
    {
      title: "Fractures in children",
      src: "./public/image/Orthopedic/broken-arm child.jpg",
    },
    {
      title: "Growth related disorders",
      src: "./public/image/Orthopedic/GrowthDisorder.jpeg",
    },
  ];
  const ServiceData1 = [
    {
      title: "INTERFERENCIAL THERAPY (IFT)",
      src: "./public/image/Physio Theraphy/IFT Physiotherapy.jpeg",
    },
    {
      title: "INTERMITTENT CERVICAL TRACTION (ICT)",
      src: "./public/image/Physio Theraphy/INTERMITTENT CERVICAL.jpeg",
    },
    {
      title: "INTERMITTENT PELVIC TRACTION (IPT)",
      src: "./public/image/Physio Theraphy/OPTIMAL PELVIC TRACTION.jpeg",
    },
    {
      title: "ULTRASOUND THERAPY(UST)",
      src: "./public/image/Physio Theraphy/Ultra sound Therapy.jpeg",
    },
    {
      title: "ACUTENS (TENS)",
      src: "./public/image/Physio Theraphy/ACUTENS.jpeg",
    },
    {
      title: "ELECTRICAL MUSCLE STIMULATION (EMS)",
      src: "./public/image/Physio Theraphy/Electrical Muscle stimulation.jpeg",
    },
    {
      title: "WAX THERAPY",
      src: "./public/image/Physio Theraphy/Wax Threaphy.jpeg",
    },
    {
      title: "LASER",
      src: "./public/image/Physio Theraphy/Laser Physiotheraphy.jpeg",
    },
  ];
  const ServiceData2 = [
    {
      title: "Sports rehabilitation",
      src: "./public/image/Rehabliation/Sports-Rehabilitation.jpeg",
    },
    {
      title: "Pain mangement techniques",
      src: "./public/image/Rehabliation/Pain Management therpies.jpeg",
    },
    {
      title: "Personalised rehabilitation  plan",
      src: "./public/image/Rehabliation/Personalised Rehabilition.jpeg",
    },
    {
      title: "Injury prevention mangement",
      src: "./public/image/Rehabliation/Injury Prevention.jpeg",
    },
    {
      title: "Ortho,Neuro & Spine related Rehabilitation",
      src: "./public/image/Rehabliation/Ortho Neuro Spine.jpeg",
    },
    {
      title: "Fitness training",
      src: "./public/image/Rehabliation/Fitness Training.jpeg",
    },
    {
      title: "Weight loss",
      src: "./public/image/Rehabliation/weight-loss-journey.jpeg",
    },
    {
      title: "Strengthening exercises",
      src: "./public/image/Rehabliation/Strenthening.jpeg",
    },
    {
      title: "Posture correction",
      src: "./public/image/Rehabliation/posture-correction.jpeg",
    },
    {
      title: "Ergonomics",
      src: "./public/image/Rehabliation/Ergonomics.jpeg",
    },
    {
      title: "Pre & post operativerehab",
      src: "./public/image/Rehabliation/rehab.jpeg",
    },
    {
      title: "Pre & post natal exercise",
      src: "./public/image/Rehabliation/Pre-Post Natal Rehab.jpeg",
    },
    {
      title: "Paediatric & geriatric physiotherapy",
      src: "./public/image/Rehabliation/Paediatric Physiotheraphy.jpeg",
    },
  ];

  // Reusable card rendering function
  const renderCards = (data) =>
    data.map((item, index) => (
      <Card
        className="w-[200px] flex justify-end"
        key={index}
        title={item.title}
        titleClass="mb-3 text-lg font-bold text-center"
        content={
          <div
            className="relative w-[150px] h-[150px] overflow-hidden border"
            style={{ borderRadius: "8px" }}
          >
            <Image
              style={{ objectFit: "cover" }}
              src={item.src}
              layout="fill"
              objectFit="cover"
              alt={item.title}
            />
          </div>
        }
      />
    ));

  return (
    <div className="p-6 text-primary">
      {/* Ortho Services */}
      <h2 className="text-center mb-4 text-3xl font-bold">Ortho Services</h2>
      <div className="flex flex-wrap gap-6 justify-between md:p-5">{renderCards(ServiceData)}</div>

      {/* Physio Therapy Services */}
      <h2 className="text-center my-6 text-3xl font-bold">
        Physio Therapy Services
      </h2>
      <div className="flex flex-wrap gap-6 justify-between md:p-5">{renderCards(ServiceData1)}</div>

      {/* Rehabilitation Equipment */}
      <h2 className="text-center my-6 text-3xl font-bold">
        Rehabilitation Equipment
      </h2>
      <div className="flex flex-wrap gap-6 justify-between md:p-5">{renderCards(ServiceData2)}</div> 
    </div>
  );
};

export default ServicePage;
