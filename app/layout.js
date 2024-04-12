import {  Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FileFlow",
  description: "Streamline your file management with our Next.js application. Effortlessly upload, save, and share files via email. Enhance collaboration and productivity with secure, easy-to-use tools. Try FileFlow today!",
  openGraph:{
    images: [
      {
        url: "/favicon.ico", 
    
      },
      {
        url: "/logo.png", 
      
      },
    ],
    title: "FileFlow",

    url: "https://namanarora.in",
  },
  twitter: {
    card: "summary_large_image",
    images: {
      url: "/logo.png",
    },
  },
  creator:'Naman Arora'
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}<ToastContainer/></body>
    </html>
    </ClerkProvider>
  );
}
