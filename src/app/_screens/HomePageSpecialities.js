import React from "react";
import Card from "../_components/Card";
import { homePageSpecialitiesData } from "@/data/data";
import Image from "next/image";

const HomePageSpecialities = () => {
  return (
    <div className='flex flex-row flex-wrap gap-6 justify-center'>
      {homePageSpecialitiesData.map((item, index) => (
        <div key={index} className="text-center">
          <Card
            title={item.title}
            titleClass='mb-3 uppercase font-bold'
            content={
              <div className="w-[200px] h-[200px] relative">
                <Image
                  src={item.src}
                  alt={item.title}
                  style={{ ...item.style }}
                  layout="fill"
                  objectFit="cover" 
                  className="rounded-md"
                />
                <p>{item.content}</p>
              </div>
            }
            className="w-[300px] h-[300px] justify-start items-center"
          />
        </div>
      ))}
    </div>
  );
};

export default HomePageSpecialities;
