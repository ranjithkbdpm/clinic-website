import { Roboto } from "next/font/google";
import "./globals.css";
// import Navbar from "@/app/_layouts/Navbar";
import Footer from "@/app/_layouts/Footer";
import Header from "@/app/_layouts/Header";
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import("@/app/_layouts/Navbar"), { ssr: true});

const roboto = Roboto({
  subsets: ["latin"], 
  weight: ["400", "700"], 
  style: ["normal", "italic"], 
});


export const metadata = {
  title: "Adyar Ortho Clinic",
  description: "Adyar Ortho Clinic offers expert orthopedic care in Chennai, led by Prof. Dr. A. Shanmuga Sundaram, a renowned Orthopedic Surgeon specializing in Sports Medicine, M.S(Ortho), Mch(Ortho), and PhD(Sports Medicine). Book a consultation with the best orthopedic doctor in Chennai today.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-primay`}>
        <Header/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
