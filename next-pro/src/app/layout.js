import "./globals.css";
import Navbar from "./components/navbar";
import SessionWrapper from "@/app/components/SessionWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
      <SessionWrapper>

      <Navbar/>
      <main>{children}</main>
      </SessionWrapper>

    </body></html>
  );
}
