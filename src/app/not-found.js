import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-[100%] h-[400px] flex justify-center mt-12">
      <div>
        <h2 className='font-bold text-xl'>Page Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="underline">
          Home
        </Link>
      </div>
    </div>
  );
}
