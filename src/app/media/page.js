
import Link from "next/link";

const page = () => {
  
  return (
    
    <div className="w-[100%] h-[400px] flex justify-center mt-12">
      <div>
        <h2 className='font-bold text-xl'>
            Page is under construction
        </h2>
        <Link href="/" className="underline">
          Home
        </Link>
      </div>
    </div>
  )
}

export default page


