import "./globals.css";
import Navbar from "./components/navbar";
import SessionWrapper from "@/app/components/SessionWrapper";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
      <SessionWrapper>

      <Navbar/>
      <main>{children}</main>
      <Footer/>
      </SessionWrapper>
      <ToastContainer />
    </body></html>
  );
}
