// import "./globals.css";
// import Navbar from "./components/navbar";
// import SessionWrapper from "@/app/components/SessionWrapper";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
        
//       </head>
//       <body>
//       <SessionWrapper>

//       <Navbar/>
//       <main>{children}</main>
//       </SessionWrapper>

//     </body></html>
//   );
// }


import "./globals.css";
import Navbar from "./components/navbar";
import SessionWrapper from "@/app/components/SessionWrapper";
import GlobalStreamListener from "../../src/app/components/GlobalStreamListener";
import { getCurrentUser } from "@/lib/getCurrentUser";

export default async function RootLayout({ children }) {
  const user = await getCurrentUser(); // 👤 جلب المستخدم الحالي من الكوكيز

  return (
    <html lang="en">
      <head />
      <body>
        <SessionWrapper>
          {/* ✅ إشعارات فورية عند وصول رسالة */}
          {user && (
            <GlobalStreamListener
              user={{
                _id: user._id.toString(),
                name: user.name,
                profilePicture: user.profilePicture || "",
              }}
            />
          )}

          {/* ✅ مكونات الموقع */}
          <Navbar />
          <main>{children}</main>
        </SessionWrapper>
      </body>
    </html>
  );
}
