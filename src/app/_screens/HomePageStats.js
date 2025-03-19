import React from "react";
import {statsData} from '@/data/data.js'

const HomePageStats = () => {
  

  return (
    <>
      <div className="stats flex justify-around">
        {statsData.map((item, index) => (
          <div key={index} className=" text-neutralWhite my-auto text-center">
            <div className="mb-1">
                {item.icons}
              {/* <FaThumbsUp size={50} className="mx-auto" /> */}
            </div>
            <div className="text-4xl font-bold mb-1">{item.value}</div>
            <div className="text-1xl font-bold mb-1">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageStats;
