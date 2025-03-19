import Card from "@/app/_components/Card";
import { homePageServiceData } from '@/data/data';
import Image from "next/image";

const HomePageService = () => {

  return (
    <div className='flex flex-row flex-wrap gap-6 justify-center'>
      {homePageServiceData.map((item, index) => (
        <div key={index} className='text-center'>
          <Card
            title={item.title}
            titleClass='text-2xl font-bold  '
            content={
              <div className=''>
                <Image
                  src={item.src}
                  alt={item.title}
                  style={{ ...item.style }}
                  width={800}
                  height={500}
                />
                <p className='mt-6 text-lg font-bold'>{item.content}</p>
              </div>
            }
            className="w-[400px] h-[500px]"
          />
        </div>
      ))}
    </div>
  );
};

export default HomePageService;
