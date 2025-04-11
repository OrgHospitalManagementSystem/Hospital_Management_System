// // "use client";

// // import { useState, useEffect } from "react";

// // export default function ProfilePage() {
// //   const [userData, setUserData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // حقول قابلة للتعديل
// //   const [name, setName] = useState("");
// //   const [address, setAddress] = useState("");

// //   // رسالة نجاح أو خطأ
// //   const [successMsg, setSuccessMsg] = useState("");
// //   const [errorMsg, setErrorMsg] = useState("");

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await fetch("/api/profile", { method: "GET" });
// //         if (!res.ok) {
// //           throw new Error("Failed to fetch profile");
// //         }
// //         const data = await res.json();
// //         setUserData(data);

// //         // تعبئة الحقول لإظهارها في نموذج التعديل
// //         setName(data.name || "");
// //         setAddress(data.address || "");
// //       } catch (error) {
// //         console.error(error);
// //         setErrorMsg("Error loading profile data.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchProfile();
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSuccessMsg("");
// //     setErrorMsg("");

// //     try {
// //       const res = await fetch("/api/profile", {
// //         method: "PATCH",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           name,
// //           address,
// //           // أي حقول أخرى تريد تحديثها
// //         }),
// //       });

// //       if (!res.ok) {
// //         const errData = await res.json();
// //         throw new Error(errData.error || "Failed to update profile");
// //       }

// //       const updated = await res.json();
// //       setSuccessMsg("Profile updated successfully.");
// //       setUserData(updated.user);

// //       // إعادة تعبئة القيم الجديدة لو أحببت
// //       setName(updated.user.name || "");
// //       setAddress(updated.user.address || "");
// //     } catch (error) {
// //       console.error(error);
// //       setErrorMsg(error.message);
// //     }
// //   };

// //   if (loading) return <div>Loading profile...</div>;

// //   if (!userData) {
// //     return <div>No user data found (not logged in?)</div>;
// //   }

// //   return (
// //     <div className="max-w-md mx-auto p-4">
// //       <h1 className="text-xl font-bold mb-4">Profile</h1>

// //       {errorMsg && <div className="text-red-600 mb-2">{errorMsg}</div>}
// //       {successMsg && <div className="text-green-600 mb-2">{successMsg}</div>}

// //       <div className="bg-gray-100 p-4 mb-4 rounded">
// //         <p><strong>Email:</strong> {userData.email}</p>
// //         <p><strong>Role:</strong> {userData.role}</p>
// //         <p><strong>Birth Date:</strong> {userData.birthDate?.slice(0,10)}</p>
       
// //         <p><strong>report</strong><img src={`http://localhost:3000/${userData.report}`}/></p>
// //         {/* مثال لعرض الصورة إن وجدت */}
// //         {userData.profilePicture && (
// //           <div>
// //             <strong>Profile Picture:</strong>
// //             <img src={userData.profilePicture} alt="Profile" />
// //           </div>
// //         )}
// //       </div>

// //       {/* نموذج لتعديل الاسم والعنوان */}
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label className="block font-medium mb-1">Name:</label>
// //           <input
// //             type="text"
// //             className="w-full border border-gray-300 rounded px-3 py-2"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Address:</label>
// //           <input
// //             type="text"
// //             className="w-full border border-gray-300 rounded px-3 py-2"
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //         >
// //           Save
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";

// // دالة بسيطة للتعرّف على لون الحالة
// const getStatusColor = (status) => {
//   switch (status) {
//     case "Active":
//       return "bg-green-100 text-green-800";
//     case "Follow-up":
//       return "bg-[#A5D4DC] text-[#415A80]";
//     case "New":
//       return "bg-blue-100 text-blue-800";
//     case "Completed":
//       return "bg-gray-100 text-gray-800";
//     default:
//       return "bg-gray-100 text-gray-800";
//   }
// };

// export default function ProfilePage() {
//   // حالات تخص بيانات المستخدم
//   const [userData, setUserData] = useState(null);
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [loadingUser, setLoadingUser] = useState(true);

//   // حالات تخص جدول المرضى
//   const [patients, setPatients] = useState([]);
//   const [loadingPatients, setLoadingPatients] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   // (1) جلب بيانات البروفايل
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await fetch("/api/profile"); // يفترض أنك أنشأت هذا الراوت
//         if (!res.ok) throw new Error("Failed to fetch profile");
//         const data = await res.json();
//         setUserData(data);
//         // تعبئة الحقول
//         setName(data.name || "");
//         setAddress(data.address || "");
//       } catch (err) {
//         console.error(err);
//         setErrorMsg("Error loading profile data.");
//       } finally {
//         setLoadingUser(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   // (2) جلب قائمة المرضى
//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const res = await axios.get("/api/admin/patients");
//         setPatients(res.data);
//       } catch (err) {
//         console.error("Failed to load patients:", err);
//       } finally {
//         setLoadingPatients(false);
//       }
//     };
//     fetchPatients();
//   }, []);

//   // (A) تحديث بروفايل المستخدم
//   const handleSubmitProfile = async (e) => {
//     e.preventDefault();
//     setSuccessMsg("");
//     setErrorMsg("");

//     try {
//       const res = await fetch("/api/profile", {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, address }),
//       });

//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.error || "Failed to update profile");
//       }

//       const updated = await res.json();
//       setSuccessMsg("Profile updated successfully.");
//       setUserData(updated.user);
//       // إعادة تعبئة الحقول بالبيانات الأحدث
//       setName(updated.user.name || "");
//       setAddress(updated.user.address || "");
//     } catch (error) {
//       console.error(error);
//       setErrorMsg(error.message);
//     }
//   };

//   // (B) حذف مريض
//   const handleDeletePatient = async (id) => {
//     if (!confirm("Are you sure you want to delete this patient?")) return;
//     await axios.delete(`/api/admin/patients/${id}`);
//     setPatients((prev) => prev.filter((p) => p._id !== id));
//   };

//   // (C) ترشيح المرضى على أساس البحث
//   const filteredPatients = patients.filter((patient) => {
//     const term = searchTerm.toLowerCase();
//     return (
//       patient.name.toLowerCase().includes(term) ||
//       (patient.diagnosis && patient.diagnosis.toLowerCase().includes(term)) ||
//       (patient.status && patient.status.toLowerCase().includes(term))
//     );
//   });

//   // إذا ما زال يحمّل بيانات المستخدم
//   if (loadingUser) {
//     return <div className="p-4">Loading profile...</div>;
//   }

//   // لو لم نجد userData (قد يكون غير مسجل دخول)
//   if (!userData) {
//     return <div className="p-4">No user data found (maybe not logged in?)</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto py-8 px-4 space-y-8">
//       {/* قسم بيانات البروفايل */}
//       <section className="bg-white p-4 rounded shadow">
//         <h1 className="text-2xl font-bold mb-4">My Profile</h1>

//         {errorMsg && <div className="text-red-600 mb-2">{errorMsg}</div>}
//         {successMsg && <div className="text-green-600 mb-2">{successMsg}</div>}

//         <div className="bg-gray-50 p-4 mb-4 rounded">
//           <p>
//             <strong>Email:</strong> {userData.email}
//           </p>
//           <p>
//             <strong>Role:</strong> {userData.role}
//           </p>
//           <p>
//             <strong>Birth Date:</strong>{" "}
//             {userData.birthDate?.slice(0, 10) || "N/A"}
//           </p>
//           {/* عرض صورة التقرير إن وجدت */}
//           {userData.report && (
//             <div className="mt-4">
//               <strong>My Report:</strong>
//               <div className="mt-2">
//                 {userData.report.toLowerCase().endsWith(".pdf") ? (
//                   // لو ملف PDF، نعرض رابط لفتحه
//                   <a
//                     href={userData.report}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline"
//                   >
//                     View PDF
//                   </a>
//                 ) : (
//                   // وإلا نفترض أنه صورة
//                   <img
//                     src={userData.report}
//                     alt="Report"
//                     className="max-h-64 border mt-2"
//                   />
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* نموذج تعديل البروفايل */}
//         <form onSubmit={handleSubmitProfile} className="space-y-4">
//           <div>
//             <label className="block font-medium mb-1">Name:</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Address:</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Save
//           </button>
//         </form>
//       </section>

//       {/* قسم إدارة المرضى (نفس الكود تقريبًا) */}
//       <section className="bg-white p-4 rounded shadow">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//           <h2 className="text-2xl font-bold text-[#415A80]">Patient Management</h2>

//           <div className="flex items-center gap-4 w-full md:w-auto">
//             <div className="relative flex-grow md:flex-grow-0">
//               <input
//                 type="text"
//                 placeholder="Search patients..."
//                 className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A5D4DC]"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <svg
//                 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>

//             <Link
//               href="/adminDashboard/patients/create"
//               className="inline-flex items-center px-4 py-2 bg-[#415A80] text-white rounded-lg hover:bg-[#364b6d] focus:outline-none focus:ring-2 focus:ring-[#A5D4DC] focus:ring-opacity-50 transition-colors"
//             >
//               <svg
//                 className="w-5 h-5 mr-2"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Add Patient
//             </Link>
//           </div>
//         </div>

//         {/* حالة تحميل قائمة المرضى */}
//         {loadingPatients ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#415A80]"></div>
//           </div>
//         ) : (
//           <>
//             {filteredPatients.length === 0 ? (
//               <div className="bg-[#D7E2E9] rounded-lg p-8 text-center">
//                 <p className="text-gray-700 text-lg">
//                   No patients found matching your search criteria.
//                 </p>
//                 {searchTerm && (
//                   <button
//                     onClick={() => setSearchTerm("")}
//                     className="mt-4 text-[#415A80] hover:underline focus:outline-none"
//                   >
//                     Clear search
//                   </button>
//                 )}
//               </div>
//             ) : (
//               <div className="overflow-x-auto rounded-lg border border-gray-200">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-[#E5E7E9]">
//                     <tr>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Name
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Age
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Gender
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Contact
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Diagnosis
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Last Visit
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredPatients.map((p) => (
//                       <tr
//                         key={p._id}
//                         className="hover:bg-[#D7E2E9]/30 transition-colors"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {p.name}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {p.age}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {p.gender}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {p.contact}
//                         </td>
//                         <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 max-w-xs truncate">
//                           {p.diagnosis}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {p.lastVisit
//                             ? new Date(p.lastVisit).toLocaleDateString()
//                             : "N/A"}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
//                               p.status
//                             )}`}
//                           >
//                             {p.status}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           <div className="flex space-x-3">
//                             <Link
//                               href={`/adminDashboard/patients/edit/${p._id}`}
//                               className="text-[#415A80] hover:text-[#364b6d]"
//                             >
//                               Edit
//                             </Link>
//                             <button
//                               onClick={() => handleDeletePatient(p._id)}
//                               className="text-red-600 hover:text-red-900"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             <div className="mt-4 text-sm text-gray-500">
//               Showing {filteredPatients.length} of {patients.length} patients
//             </div>
//           </>
//         )}
//       </section>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { format } from "date-fns";
import {
  Calendar,
  Clock,
  User as UserIcon,
  FileText,
  AlertCircle,
  X as CloseIcon,
  Check,
  XCircle,
  CreditCard,
} from "lucide-react";

// دالة لتنسيق حالة الموعد
function getStatusBadge(status) {
  switch (status) {
    case "approved":
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <Check className="w-3 h-3 mr-1" /> Approved
        </span>
      );
    case "pending":
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          <Clock className="w-3 h-3 mr-1" /> Pending
        </span>
      );
    case "cancelled":
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <XCircle className="w-3 h-3 mr-1" /> Cancelled
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {status}
        </span>
      );
  }
}

// دالة للتحقق إن كان بالإمكان إلغاء الموعد
function canCancel(date, time) {
  const appointmentDateTime = new Date(`${date}T${time}`);
  const now = new Date();
  const diff = (appointmentDateTime - now) / (1000 * 60 * 60); // الفرق بالساعات
  return diff >= 1; // مثلاً يسمح بالإلغاء إذا الموعد لا يزال أبعد من ساعة
}

export default function ProfilePage() {
  // (A) حالات البروفايل
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [profileError, setProfileError] = useState("");
  const [profileSuccess, setProfileSuccess] = useState("");

  // (B) حالات المواعيد
  const [appointments, setAppointments] = useState([]);
  const [loadingAppointments, setLoadingAppointments] = useState(true);
  const [appointmentsError, setAppointmentsError] = useState("");

  // (C) حالات إلغاء الموعد
  const [cancelReason, setCancelReason] = useState("");
  const [cancelId, setCancelId] = useState(null);

  // ----------------------------------
  // 1) جلب بيانات البروفايل من /api/profile
  // ----------------------------------
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoadingProfile(true);
        const res = await fetch("/api/profile");
        if (!res.ok) {
          throw new Error("Failed to load profile data");
        }
        const data = await res.json();
        setUserData(data);
        // تعبئة الحقول القابلة للتعديل
        setName(data.name || "");
        setAddress(data.address || "");
      } catch (err) {
        console.error(err);
        setProfileError("Error loading profile data.");
      } finally {
        setLoadingProfile(false);
      }
    };
    fetchProfile();
  }, []);

  // ----------------------------------
  // 2) جلب المواعيد من /api/bookings/my
  // ----------------------------------
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoadingAppointments(true);
        const res = await axios.get("/api/bookings/my");
        setAppointments(res.data);
      } catch (err) {
        setAppointmentsError(
          "Failed to load your appointments. Please try again later."
        );
        console.error("Error fetching appointments:", err);
      } finally {
        setLoadingAppointments(false);
      }
    };
    fetchAppointments();
  }, []);

  // ----------------------------------
  // (A) تعديل بيانات البروفايل - إرسال PATCH
  // ----------------------------------
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setProfileError("");
    setProfileSuccess("");

    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address }),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to update profile");
      }
      const updated = await res.json();
      setUserData(updated.user);
      setProfileSuccess("Profile updated successfully.");
    } catch (error) {
      console.error(error);
      setProfileError(error.message);
    }
  };

  // ----------------------------------
  // (B) تأكيد إلغاء الموعد
  // ----------------------------------
  const confirmCancel = (appointmentId) => {
    setCancelId(appointmentId);
  };

  // ----------------------------------
  // (C) تنفيذ الإلغاء: إرسال PUT للدلالة على الإلغاء
  // ----------------------------------
  const submitCancel = async () => {
    if (!cancelReason.trim()) return;

    try {
      await axios.put(`/api/bookings/${cancelId}`, {
        status: "cancelled",
        cancelMessage: cancelReason,
      });
      // إزالة الموعد من القائمة (لتحديثها فوراً دون إعادة التحميل)
      setAppointments((prev) => prev.filter((a) => a._id !== cancelId));

      // تنظيف الحقول الخاصة بالإلغاء
      setCancelId(null);
      setCancelReason("");
    } catch (err) {
      alert("Failed to cancel the appointment. Please try again.");
      console.error("Error cancelling appointment:", err);
    }
  };

  // لو ما زال يحمّل بيانات البروفايل
  if (loadingProfile) {
    return (
      <div className="p-4">
        <p>Loading profile...</p>
      </div>
    );
  }

  // لو لم نجد بيانات المستخدم
  if (!userData) {
    return (
      <div className="p-4">
        <p>No user data found (possibly not logged in).</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8">
      {/* ------------------------- */}
      {/* قسم بيانات البروفايل */}
      {/* ------------------------- */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>

        {profileError && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded mb-2">
            {profileError}
          </div>
        )}
        {profileSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-600 p-3 rounded mb-2">
            {profileSuccess}
          </div>
        )}

        <div className="bg-gray-50 p-4 mb-4 rounded">
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Role:</strong> {userData.role}
          </p>
          <p>
            <strong>Birth Date:</strong>{" "}
            {userData.birthDate?.slice(0, 10) || "N/A"}
          </p>

       
        </div>

        {/* نموذج لتعديل الحقول (Name, Address) */}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Address:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Profile
          </button>
        </form>
      </section>

      {/* ------------------------- */}
      {/* قسم مواعيدي (My Appointments) */}
      {/* ------------------------- */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-[#415A80]">
          My Appointments
        </h2>

        {/* حالة تحميل المواعيد */}
        {loadingAppointments ? (
          <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#415A80]"></div>
              <p className="mt-4 text-gray-600">Loading your appointments...</p>
            </div>
          </div>
        ) : appointmentsError ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
            <div className="flex">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{appointmentsError}</span>
            </div>
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Calendar className="h-12 w-12 text-[#A5D4DC] mx-auto mb-4" />
            <h3 className="text-xl font-medium text-[#415A80] mb-2">
              No Appointments Found
            </h3>
            <p className="text-gray-600">
              You don&apos;t have any scheduled appointments at the moment.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-[#D7E2E9]">
              {appointments.map((app) => (
                <li
                  key={app._id}
                  className="p-6 hover:bg-[#E5E7E9]/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    {/* معلومات الموعد */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-5 w-5 text-[#415A80]" />
                        <span className="font-medium">
                          Dr. {app.doctor.name}
                        </span>
                        {app.doctor.specialty && (
                          <span className="text-sm text-gray-500">
                            ({app.doctor.specialty})
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-[#415A80]" />
                        <span>
                          {format(new Date(app.date), "EEEE, MMMM d, yyyy")}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[#415A80]" />
                        <span>{app.time}</span>
                      </div>

                      {app.reason && (
                        <div className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-[#415A80] mt-0.5" />
                          <span className="text-gray-700">{app.reason}</span>
                        </div>
                      )}
                    </div>

                    {/* الحالة + أزرار الإجراء */}
                    <div className="flex flex-col items-end gap-3">
                      {getStatusBadge(app.status)}

                      {app.status === "pending" && (
                        <button
                          onClick={() => confirmCancel(app._id)}
                          className={`text-sm font-medium inline-flex items-center transition-colors ${
                            canCancel(app.date, app.time)
                              ? "text-red-600 hover:text-red-800"
                              : "text-gray-400 cursor-not-allowed"
                          }`}
                          disabled={!canCancel(app.date, app.time)}
                        >
                          <XCircle className="h-4 w-4 mr-1" /> Cancel
                        </button>
                      )}

                      {/* الدفع إذا كان الموعد Approved ولم يدفع */}
                      {app.status === "approved" &&
                        app.paymentStatus !== "paid" && (
                          <button
                            onClick={() =>
                              (window.location.href = `/patient/payment/${app._id}`)
                            }
                            className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1 rounded transition-colors flex items-center"
                          >
                            <CreditCard className="h-4 w-4 mr-2" /> Pay Now
                          </button>
                        )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Popup لإدخال سبب الإلغاء */}
      {cancelId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            <div className="bg-[#415A80] text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-medium">Cancel Appointment</h2>
              <button
                onClick={() => {
                  setCancelId(null);
                  setCancelReason("");
                }}
                className="text-white hover:text-[#D7E2E9] transition-colors"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="mb-3 text-gray-700">
                Please provide a reason for cancellation:
              </p>
              <textarea
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                className="w-full border border-[#D7E2E9] p-3 rounded-lg bg-[#E5E7E9] focus:ring-[#A5D4DC] focus:border-[#A5D4DC] focus:outline-none"
                placeholder="Enter your reason here..."
                rows={3}
              />
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setCancelId(null);
                    setCancelReason("");
                  }}
                  className="px-4 py-2 border border-[#D7E2E9] text-gray-700 rounded-lg hover:bg-[#E5E7E9] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={submitCancel}
                  disabled={!cancelReason.trim()}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-300 disabled:cursor-not-allowed"
                >
                  Confirm Cancellation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


<section className="bg-white p-4 rounded shadow">
   {/* عرض الـ report (صورة أو PDF) إن وجد */}
   {userData.report && (
            <div className="mt-4">
                <h2 className="text-2xl font-bold mb-4 text-[#415A80]">
          My report
        </h2>
              <div className="mt-2">
                {userData.report.toLowerCase().endsWith(".pdf") ? (
                  <a
                    href={userData.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View PDF
                  </a>
                ) : (
                  <img
                    src={userData.report}
                    alt="Report"
                    className="max-h-64 border mt-2"
                  />
                )}
              </div>
            </div>
          )}
</section>
    </div>
  );
}
