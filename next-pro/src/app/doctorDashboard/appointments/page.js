
// // 'use client';
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // // استخدم مكتبة لمساعدة في تواريخ مثل dayjs أو date-fns إن أحببت، 
// // // لكن هنا سنكتفي بالجافاسكربت المدمج.

// // function DoctorDashboardPatients() {
// //   const [bookings, setBookings] = useState([]);
// //   const [statusOptions] = useState(["all", "pending", "approved", "rejected", "completed"]);
// //   const [statusFilter, setStatusFilter] = useState("all");
// //   const [isLoading, setIsLoading] = useState(true);

// //   // سنضيف حالات للتحكم في التقويم
// //   const [selectedDate, setSelectedDate] = useState(new Date());
  
// //   // نستخدم هذه الحالات لتحديد الشهر/السنة المعروضين بالتقويم
// //   const currentMonth = selectedDate.getMonth();   // 0 - 11
// //   const currentYear = selectedDate.getFullYear(); // ex: 2025

// //   // ----------------------------------------------------------------
// //   //                  1) جلب بيانات الحجوزات
// //   // ----------------------------------------------------------------
// //   const fetchBookings = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await axios.get("/api/doctorDashboard/appointments");
// //       // response.data هو مصفوفة الحجوزات بالشكل الذي أرسلته (مع المريض والطبيب وغيرها)
// //       setBookings(response.data);
// //     } catch (error) {
// //       console.error("Error fetching bookings:", error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBookings();
// //   }, []);

// //   // ----------------------------------------------------------------
// //   //                  2) تصفية الحجوزات بالـ status
// //   // ----------------------------------------------------------------
// //   const filteredBookings = statusFilter === "all"
// //     ? bookings
// //     : bookings.filter((booking) => booking.status === statusFilter);

// //   // ----------------------------------------------------------------
// //   //    3) دالة لتعديل حالة الحجز (مثال على تغيير status)
// //   // ----------------------------------------------------------------
// //   const handleStatusChange = async (bookingId, newStatus) => {
// //     try {
// //       await axios.put(`/api/doctorDashboard/appointments/${bookingId}`, {
// //         status: newStatus,
// //       });
// //       // تحدّيث الحالة محليًا
// //       setBookings((prevBookings) =>
// //         prevBookings.map((booking) =>
// //           booking._id === bookingId ? { ...booking, status: newStatus } : booking
// //         )
// //       );
// //       toast.success("Patient status updated successfully!");
// //     } catch (error) {
// //       console.error("Error updating booking status:", error);
// //       toast.error("Failed to update patient status")
// //     }
// //   };

// //   // ----------------------------------------------------------------
// //   //   4) توابع التقويم: إنشاء أيام الشهر + جلب حجوزات يوم معين
// //   // ----------------------------------------------------------------
// //   // دالة لمعرفة عدد أيام الشهر الحالي
// //   const daysInCurrentMonth = () => {
// //     // الشهر القادم = currentMonth + 1
// //     // وضعنا اليوم = 0 سيعطينا آخر يوم في الشهر السابق
// //     return new Date(currentYear, currentMonth + 1, 0).getDate();
// //   };

// //   // نحصل على أول يوم في الشهر الحالي (لمعرفة اسم اليوم الذي يبدأ به الشهر)
// //   const firstDayOfMonth = () => {
// //     return new Date(currentYear, currentMonth, 1).getDay(); 
// //     // Sunday=0, Monday=1, ...
// //   };

// //   // دالة تعيد جميع الحجوزات الخاصة بتاريخ محدد (اليوم + الشهر + السنة)
// //   const getBookingsForDate = (dateObj) => {
// //     return bookings.filter((booking) => {
// //       const bookingDate = new Date(booking.date); // تحويل إلى كائن Date
// //       return (
// //         bookingDate.getFullYear() === dateObj.getFullYear() &&
// //         bookingDate.getMonth() === dateObj.getMonth() &&
// //         bookingDate.getDate() === dateObj.getDate()
// //       );
// //     });
// //   };

// //   // ----------------------------------------------------------------
// //   //        5) عناصر واجهة التقويم
// //   // ----------------------------------------------------------------
// //   const renderCalendar = () => {
// //     const totalDays = daysInCurrentMonth(); // عدد أيام الشهر
// //     const startDay = firstDayOfMonth();     // اليوم الذي يبدأ فيه الشهر

// //     // نقوم بإنشاء مصفوفة فراغات لبداية الشهر
// //     const blanks = [];
// //     for (let i = 0; i < startDay; i++) {
// //       blanks.push(<div key={`blank-${i}`} className="h-16 border bg-gray-50" />);
// //     }

// //     // ننشئ عناصر لأيام الشهر
// //     const daysArray = [];
// //     for (let day = 1; day <= totalDays; day++) {
// //       const currentDay = new Date(currentYear, currentMonth, day);
// //       // نجلب الحجوزات في هذا اليوم
// //       const bookingsInDay = getBookingsForDate(currentDay);

// //       // هل اليوم هو اليوم الحالي ؟
// //       const isToday =
// //         currentDay.toDateString() === new Date().toDateString();

// //       daysArray.push(
// //         <div
// //           key={day}
// //           onClick={() => setSelectedDate(currentDay)}
// //           className={`h-16 border p-1 cursor-pointer hover:bg-blue-50 
// //             ${isToday ? 'bg-blue-100 border-blue-300' : ''}`}
// //         >
// //           <div className="flex justify-between">
// //             <span className={`text-sm font-medium ${isToday ? 'text-blue-600' : ''}`}>
// //               {day}
// //             </span>
// //             {/* إذا عندنا حجوزات في ذلك اليوم نعرض عدادًا */}
// //             {bookingsInDay.length > 0 && (
// //               <span className="text-xs bg-blue-500 text-white px-1 rounded-full">
// //                 {bookingsInDay.length}
// //               </span>
// //             )}
// //           </div>
// //           {/* نعرض مثالاً لأول حجز أو الأوقات */}
// //           <div className="mt-1">
// //             {bookingsInDay.slice(0, 1).map((b) => (
// //               <div key={b._id} className="text-[10px] truncate bg-blue-100 mt-1 p-1 rounded">
// //                 {b.time} 
// //                 {/* يمكنك مثلاً: {b.patient?.name || 'No Name'} */}
// //               </div>
// //             ))}
// //             {bookingsInDay.length > 1 && (
// //               <div className="text-[10px] text-gray-500">
// //                 +{bookingsInDay.length - 1} more
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="bg-white rounded-lg shadow p-4 mt-8">
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-xl font-semibold">
// //             {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
// //           </h2>
// //           <div>
// //             <button
// //               onClick={() => {
// //                 // نرجع شهرًا للخلف
// //                 const prevMonth = new Date(currentYear, currentMonth - 1, 1);
// //                 setSelectedDate(prevMonth);
// //               }}
// //               className="p-2 mx-1 bg-gray-100 rounded hover:bg-gray-200"
// //             >
// //               Previous
// //             </button>
// //             <button
// //               onClick={() => {
// //                 // نتقدم شهرًا للأمام
// //                 const nextMonth = new Date(currentYear, currentMonth + 1, 1);
// //                 setSelectedDate(nextMonth);
// //               }}
// //               className="p-2 mx-1 bg-gray-100 rounded hover:bg-gray-200"
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </div>

// //         {/* عناوين الأيام */}
// //         <div className="grid grid-cols-7 gap-1 mb-2 text-center">
// //           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
// //             <div key={dayName} className="font-medium text-sm py-1 bg-gray-50">
// //               {dayName}
// //             </div>
// //           ))}
// //         </div>

// //         {/* عرض الفراغات + الأيام */}
// //         <div className="grid grid-cols-7 gap-1">
// //           {blanks}
// //           {daysArray}
// //         </div>

// //         {/* قسم يعرض حجوزات اليوم المختار تفصيليًا */}
// //         <div className="mt-4 max-w-sm mx-auto border rounded-md shadow-sm">
// //   <h3 className="font-medium text-lg mb-2 p-3 bg-gray-50 border-b">
// //     Appointments for {selectedDate.toDateString()}
// //   </h3>
// //   <div className="divide-y">
// //     {getBookingsForDate(selectedDate).map((b) => (
// //       <div key={b._id} className="py-2 px-3 flex justify-between items-center">
// //         <div>
// //           <span className="font-medium">{b.time}</span> - {b?.patient?.name || 'Unknown'}
// //         </div>
// //       </div>
// //     ))}
// //     {getBookingsForDate(selectedDate).length === 0 && (
// //       <div className="py-4 text-gray-500 text-center">
// //         No appointments for this day
// //       </div>
// //     )}
// //   </div>
// // </div>
// //       </div>
// //     );
// //   };

// //   // ----------------------------------------------------------------
// //   //                     واجهة المستخدم النهائية
// //   // ----------------------------------------------------------------
// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case 'pending': return 'bg-yellow-100 text-yellow-800';
// //       case 'approved': return 'bg-green-100 text-green-800';
// //       case 'rejected': return 'bg-red-100 text-red-800';
// //       case 'completed': return 'bg-blue-100 text-blue-800';
// //       default: return 'bg-gray-100';
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-50 min-h-screen p-6">
// //       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
// //         {/* العنوان + الفلتر */}
// //         <div className="flex justify-between items-center mb-6">
// //           <h1 className="text-2xl font-bold text-gray-800">Patient Bookings</h1>

// //           <div className="flex items-center space-x-4">
// //             <label className="text-gray-700 font-medium">Filter by Status:</label>
// //             <select
// //               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               value={statusFilter}
// //               onChange={(e) => setStatusFilter(e.target.value)}
// //             >
// //               {statusOptions.map((status) => (
// //                 <option key={status} value={status}>
// //                   {status.charAt(0).toUpperCase() + status.slice(1)}
// //                 </option>
// //               ))}
// //             </select>

// //             <button
// //               onClick={fetchBookings}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
// //             >
// //               <svg
// //                 className="w-4 h-4 mr-2"
// //                 fill="none" stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// //                   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
// //                 />
// //               </svg>
// //               Refresh
// //             </button>
// //           </div>
// //         </div>

// //         {/* عرض لودر أو عرض جدول الحجوزات */}
// //         {isLoading ? (
// //           <div className="flex justify-center items-center py-12">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// //           </div>
// //         ) : filteredBookings.length === 0 ? (
// //           <div className="bg-gray-50 rounded-lg p-8 text-center">
// //             <p className="text-gray-600 text-lg">No bookings available for the selected filter.</p>
// //           </div>
// //         ) : (
// //           <div className="overflow-x-auto">
// //             <table className="min-w-full bg-white rounded-lg overflow-hidden">
// //               <thead className="bg-gray-100">
// //                 <tr>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
// //                     Patient Name
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
// //                     Email
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
// //                     Booking Date
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
// //                     Time
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
// //                     Status
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
// //                     Reason
// //                   </th>
// //                   <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
// //                     Action
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-200">
// //                 {filteredBookings.map((booking) => (
// //                   <tr key={booking._id} className="hover:bg-gray-50">
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
// //                       {booking?.patient?.name || "N/A"}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                       {booking?.patient?.email || "N/A"}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                       {new Date(booking.date).toLocaleDateString("en-GB")}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                       {booking.time}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap">
// //                       <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
// //                         {booking.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
// //                       {booking.reason}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-center">
// //                       {/* Select لتحديث الستاتس */}
// //                       <select
// //                         className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         onChange={(e) => handleStatusChange(booking._id, e.target.value)}
// //                         value={booking.status}
// //                       >
// //                         {statusOptions.slice(1).map((status) => (
// //                           <option key={status} value={status}>
// //                             {status.charAt(0).toUpperCase() + status.slice(1)}
// //                           </option>
// //                         ))}
// //                       </select>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}

// //         {/* 6) التقويم  */}
// //         {renderCalendar()}
// //       </div>
// //     </div>
// //   );
// // }

// // export default DoctorDashboardPatients;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // You can use libraries like dayjs or date-fns if you want,
// // but here we'll stick with built-in JavaScript.

// function DoctorDashboardPatients() {
//   const [bookings, setBookings] = useState([]);
//   const [statusOptions] = useState(["all", "pending", "approved", "rejected", "completed"]);
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [isLoading, setIsLoading] = useState(true);

//   // States for calendar control
//   const [selectedDate, setSelectedDate] = useState(new Date());
  
//   // Use these states to determine the month/year displayed in the calendar
//   const currentMonth = selectedDate.getMonth();   // 0 - 11
//   const currentYear = selectedDate.getFullYear(); // ex: 2025

//   // ----------------------------------------------------------------
//   //                  1) Fetch booking data
//   // ----------------------------------------------------------------
//   const fetchBookings = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get("/api/doctorDashboard/appointments");
//       // response.data is the array of bookings in the format you sent (with patient, doctor, etc.)
//       setBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   // ----------------------------------------------------------------
//   //                  2) Filter bookings by status
//   // ----------------------------------------------------------------
//   const filteredBookings = statusFilter === "all"
//     ? bookings
//     : bookings.filter((booking) => booking.status === statusFilter);

//   // ----------------------------------------------------------------
//   //    3) Function to update booking status (with Toast confirmation)
//   // ----------------------------------------------------------------
//   const handleStatusChange = async (bookingId, newStatus, currentStatus) => {
//     // If status hasn't changed, do nothing
//     if (newStatus === currentStatus) {
//       return;
//     }
    
//     // Create a unique ID for the toast
//     const toastId = `confirm-${bookingId}-${Date.now()}`;
    
//     // Show confirmation toast
//     toast.info(
//       <div>
//         <p>Do you want to change booking status from <strong>{currentStatus}</strong> to <strong>{newStatus}</strong>?</p>
//         <div className="mt-3 flex justify-between">
//           <button 
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" 
//             onClick={() => confirmStatusChange(bookingId, newStatus, toastId)}
//           >
//             Confirm
//           </button>
//           <button 
//             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded" 
//             onClick={() => cancelStatusChange(bookingId, currentStatus, toastId)}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>,
//       {
//         autoClose: false,
//         closeOnClick: false,
//         draggable: false,
//         closeButton: false,
//         toastId: toastId
//       }
//     );
//   };
  
//   // Function to confirm status change
//   const confirmStatusChange = async (bookingId, newStatus, toastId) => {
//     // Close the confirmation toast
//     toast.dismiss(toastId);
    
//     try {
//       await axios.put(`/api/doctorDashboard/appointments/${bookingId}`, {
//         status: newStatus,
//       });
      
//       // Update the state locally
//       setBookings((prevBookings) =>
//         prevBookings.map((booking) =>
//           booking._id === bookingId ? { ...booking, status: newStatus } : booking
//         )
//       );
      
//       // Show success message
//       toast.success("Booking status updated successfully!");
//     } catch (error) {
//       console.error("Error updating booking status:", error);
//       toast.error("Failed to update booking status");
//     }
//   };
  
//   // Function to cancel status change
//   const cancelStatusChange = (bookingId, currentStatus, toastId) => {
//     // Close the confirmation toast
//     toast.dismiss(toastId);
    
//     // Reset the dropdown value to the original status
//     const selectElement = document.getElementById(`status-select-${bookingId}`);
//     if (selectElement) {
//       selectElement.value = currentStatus;
//     }
    
//     // Optional cancellation notification
//     toast.info("Change cancelled", { autoClose: 2000 });
//   };

//   // ----------------------------------------------------------------
//   //   4) Calendar functions: Create month days + get bookings for a specific day
//   // ----------------------------------------------------------------
//   // Function to get the number of days in the current month
//   const daysInCurrentMonth = () => {
//     // Next month = currentMonth + 1
//     // Setting day = 0 will give us the last day of the previous month
//     return new Date(currentYear, currentMonth + 1, 0).getDate();
//   };

//   // Get the first day of the current month (to know which day of the week the month starts)
//   const firstDayOfMonth = () => {
//     return new Date(currentYear, currentMonth, 1).getDay(); 
//     // Sunday=0, Monday=1, ...
//   };

//   // Function to return all bookings for a specific date (day + month + year)
//   const getBookingsForDate = (dateObj) => {
//     return bookings.filter((booking) => {
//       const bookingDate = new Date(booking.date); // Convert to Date object
//       return (
//         bookingDate.getFullYear() === dateObj.getFullYear() &&
//         bookingDate.getMonth() === dateObj.getMonth() &&
//         bookingDate.getDate() === dateObj.getDate()
//       );
//     });
//   };

//   // ----------------------------------------------------------------
//   //        5) Calendar interface elements
//   // ----------------------------------------------------------------
//   const renderCalendar = () => {
//     const totalDays = daysInCurrentMonth(); // Number of days in the month
//     const startDay = firstDayOfMonth();     // The day the month starts

//     // Create an array of blanks for the beginning of the month
//     const blanks = [];
//     for (let i = 0; i < startDay; i++) {
//       blanks.push(<div key={`blank-${i}`} className="h-16 border bg-gray-50" />);
//     }

//     // Create elements for days of the month
//     const daysArray = [];
//     for (let day = 1; day <= totalDays; day++) {
//       const currentDay = new Date(currentYear, currentMonth, day);
//       // Get bookings for this day
//       const bookingsInDay = getBookingsForDate(currentDay);

//       // Is this day the current day?
//       const isToday =
//         currentDay.toDateString() === new Date().toDateString();

//       daysArray.push(
//         <div
//           key={day}
//           onClick={() => setSelectedDate(currentDay)}
//           className={`h-16 border p-1 cursor-pointer hover:bg-blue-50 
//             ${isToday ? 'bg-blue-100 border-blue-300' : ''}`}
//         >
//           <div className="flex justify-between">
//             <span className={`text-sm font-medium ${isToday ? 'text-blue-600' : ''}`}>
//               {day}
//             </span>
//             {/* If we have bookings on that day, show a counter */}
//             {bookingsInDay.length > 0 && (
//               <span className="text-xs bg-blue-500 text-white px-1 rounded-full">
//                 {bookingsInDay.length}
//               </span>
//             )}
//           </div>
//           {/* Show an example of the first booking or times */}
//           <div className="mt-1">
//             {bookingsInDay.slice(0, 1).map((b) => (
//               <div key={b._id} className="text-[10px] truncate bg-blue-100 mt-1 p-1 rounded">
//                 {b.time} 
//                 {/* For example: {b.patient?.name || 'No Name'} */}
//               </div>
//             ))}
//             {bookingsInDay.length > 1 && (
//               <div className="text-[10px] text-gray-500">
//                 +{bookingsInDay.length - 1} more
//               </div>
//             )}
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="bg-white rounded-lg shadow p-4 mt-8">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">
//             {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
//           </h2>
//           <div>
//             <button
//               onClick={() => {
//                 // Go back one month
//                 const prevMonth = new Date(currentYear, currentMonth - 1, 1);
//                 setSelectedDate(prevMonth);
//               }}
//               className="p-2 mx-1 bg-gray-100 rounded hover:bg-gray-200"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => {
//                 // Go forward one month
//                 const nextMonth = new Date(currentYear, currentMonth + 1, 1);
//                 setSelectedDate(nextMonth);
//               }}
//               className="p-2 mx-1 bg-gray-100 rounded hover:bg-gray-200"
//             >
//               Next
//             </button>
//           </div>
//         </div>

//         {/* Day headers */}
//         <div className="grid grid-cols-7 gap-1 mb-2 text-center">
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
//             <div key={dayName} className="font-medium text-sm py-1 bg-gray-50">
//               {dayName}
//             </div>
//           ))}
//         </div>

//         {/* Display blanks + days */}
//         <div className="grid grid-cols-7 gap-1">
//           {blanks}
//           {daysArray}
//         </div>

//         {/* Section showing bookings for the selected day in detail */}
//         <div className="mt-4 max-w-sm mx-auto border rounded-md shadow-sm">
//           <h3 className="font-medium text-lg mb-2 p-3 bg-gray-50 border-b">
//             Appointments for {selectedDate.toDateString()}
//           </h3>
//           <div className="divide-y">
//             {getBookingsForDate(selectedDate).map((b) => (
//               <div key={b._id} className="py-2 px-3 flex justify-between items-center">
//                 <div>
//                   <span className="font-medium">{b.time}</span> - {b?.patient?.name || 'Unknown'}
//                 </div>
//               </div>
//             ))}
//             {getBookingsForDate(selectedDate).length === 0 && (
//               <div className="py-4 text-gray-500 text-center">
//                 No appointments for this day
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // ----------------------------------------------------------------
//   //                     Final user interface
//   // ----------------------------------------------------------------
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'approved': return 'bg-green-100 text-green-800';
//       case 'rejected': return 'bg-red-100 text-red-800';
//       case 'completed': return 'bg-blue-100 text-blue-800';
//       default: return 'bg-gray-100';
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen p-6">
//       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
//         {/* Title + Filter */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Patient Bookings</h1>

//           <div className="flex items-center space-x-4">
//             <label className="text-gray-700 font-medium">Filter by Status:</label>
//             <select
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               {statusOptions.map((status) => (
//                 <option key={status} value={status}>
//                   {status.charAt(0).toUpperCase() + status.slice(1)}
//                 </option>
//               ))}
//             </select>

//             <button
//               onClick={fetchBookings}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
//             >
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="none" stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                 />
//               </svg>
//               Refresh
//             </button>
//           </div>
//         </div>

//         {/* Display loader or bookings table */}
//         {isLoading ? (
//           <div className="flex justify-center items-center py-12">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : filteredBookings.length === 0 ? (
//           <div className="bg-gray-50 rounded-lg p-8 text-center">
//             <p className="text-gray-600 text-lg">No bookings available for the selected filter.</p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white rounded-lg overflow-hidden">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                     Patient Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                     Email
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                     Booking Date
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                     Time
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                     Reason
//                   </th>
//                   <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredBookings.map((booking) => (
//                   <tr key={booking._id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
//                       {booking?.patient?.name || "N/A"}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                       {booking?.patient?.email || "N/A"}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                       {new Date(booking.date).toLocaleDateString("en-GB")}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                       {booking.time}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
//                         {booking.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
//                       {booking.reason}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-center">
//                       {/* Select to update status */}
//                       <select
//                         id={`status-select-${booking._id}`}
//                         className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         onChange={(e) => handleStatusChange(booking._id, e.target.value, booking.status)}
//                         value={booking.status}
//                       >
//                         {statusOptions.slice(1).map((status) => (
//                           <option key={status} value={status}>
//                             {status.charAt(0).toUpperCase() + status.slice(1)}
//                           </option>
//                         ))}
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* 6) Calendar */}
//         {renderCalendar()}
//       </div>
      
//       {/* Add ToastContainer for notifications with custom settings */}
//       <ToastContainer
//         position="bottom-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </div>
//   );
// }

// export default DoctorDashboardPatients;


'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DoctorDashboardPatients() {
  const [bookings, setBookings] = useState([]);
  const [statusOptions] = useState(["all", "pending", "approved", "rejected", "completed"]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // States for calendar control
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Use these states to determine the month/year displayed in the calendar
  const currentMonth = selectedDate.getMonth();   // 0 - 11
  const currentYear = selectedDate.getFullYear(); // ex: 2025

  // ----------------------------------------------------------------
  //                  1) Fetch booking data
  // ----------------------------------------------------------------
  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/doctorDashboard/appointments");
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load appointments");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ----------------------------------------------------------------
  //                  2) Filter bookings by status
  // ----------------------------------------------------------------
  const filteredBookings = statusFilter === "all"
    ? bookings
    : bookings.filter((booking) => booking.status === statusFilter);

  // ----------------------------------------------------------------
  //    3) Function to update booking status (with Toast confirmation)
  // ----------------------------------------------------------------
  const handleStatusChange = async (bookingId, newStatus, currentStatus) => {
    // If status hasn't changed, do nothing
    if (newStatus === currentStatus) {
      return;
    }
    
    // Create a unique ID for the toast
    const toastId = `confirm-${bookingId}-${Date.now()}`;
    
    // Show confirmation toast
    toast.info(
      <div className="p-1">
        <p className="font-medium mb-2">Do you want to change booking status from <span className="font-bold">{currentStatus}</span> to <span className="font-bold">{newStatus}</span>?</p>
        <div className="mt-4 flex justify-between gap-3">
          <button 
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200" 
            onClick={() => confirmStatusChange(bookingId, newStatus, toastId)}
          >
            Confirm
          </button>
          <button 
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200" 
            onClick={() => cancelStatusChange(bookingId, currentStatus, toastId)}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
        toastId: toastId,
        className: "rounded-lg shadow-md border border-gray-100"
      }
    );
  };
  
  // Function to confirm status change
  const confirmStatusChange = async (bookingId, newStatus, toastId) => {
    // Close the confirmation toast
    toast.dismiss(toastId);
    
    try {
      await axios.put(`/api/doctorDashboard/appointments/${bookingId}`, {
        status: newStatus,
      });
      
      // Update the state locally
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId ? { ...booking, status: newStatus } : booking
        )
      );
      
      // Show success message
      toast.success("Booking status updated successfully!", {
        className: "rounded-lg shadow-md border border-gray-100"
      });
    } catch (error) {
      console.error("Error updating booking status:", error);
      toast.error("Failed to update booking status", {
        className: "rounded-lg shadow-md border border-gray-100"
      });
    }
  };
  
  // Function to cancel status change
  const cancelStatusChange = (bookingId, currentStatus, toastId) => {
    // Close the confirmation toast
    toast.dismiss(toastId);
    
    // Reset the dropdown value to the original status
    const selectElement = document.getElementById(`status-select-${bookingId}`);
    if (selectElement) {
      selectElement.value = currentStatus;
    }
    
    // Optional cancellation notification
    toast.info("Change cancelled", { 
      autoClose: 2000,
      className: "rounded-lg shadow-md border border-gray-100"
    });
  };

  // ----------------------------------------------------------------
  //   4) Calendar functions: Create month days + get bookings for a specific day
  // ----------------------------------------------------------------
  // Function to get the number of days in the current month
  const daysInCurrentMonth = () => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  // Get the first day of the current month
  const firstDayOfMonth = () => {
    return new Date(currentYear, currentMonth, 1).getDay(); 
    // Sunday=0, Monday=1, ...
  };

  // Function to return all bookings for a specific date
  const getBookingsForDate = (dateObj) => {
    return bookings.filter((booking) => {
      const bookingDate = new Date(booking.date);
      return (
        bookingDate.getFullYear() === dateObj.getFullYear() &&
        bookingDate.getMonth() === dateObj.getMonth() &&
        bookingDate.getDate() === dateObj.getDate()
      );
    });
  };

  // ----------------------------------------------------------------
  //        5) Calendar interface elements
  // ----------------------------------------------------------------
  const renderCalendar = () => {
    const totalDays = daysInCurrentMonth();
    const startDay = firstDayOfMonth();

    // Create an array of blanks for the beginning of the month
    const blanks = [];
    for (let i = 0; i < startDay; i++) {
      blanks.push(<div key={`blank-${i}`} className="h-20 border border-gray-100 bg-gray-50/50 rounded-md" />);
    }

    // Create elements for days of the month
    const daysArray = [];
    for (let day = 1; day <= totalDays; day++) {
      const currentDay = new Date(currentYear, currentMonth, day);
      // Get bookings for this day
      const bookingsInDay = getBookingsForDate(currentDay);

      // Is this day the current day?
      const isToday = currentDay.toDateString() === new Date().toDateString();
      // Is this day the selected day?
      const isSelected = currentDay.toDateString() === selectedDate.toDateString();

      daysArray.push(
        <div
          key={day}
          onClick={() => setSelectedDate(currentDay)}
          className={`h-20 border p-2 cursor-pointer rounded-md transition-all duration-200
            ${isToday ? 'bg-indigo-50 border-indigo-200' : 'border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50'}
            ${isSelected ? 'ring-2 ring-indigo-400 ring-offset-1' : ''}`}
        >
          <div className="flex justify-between">
            <span className={`text-sm font-semibold ${isToday ? 'text-indigo-700' : 'text-gray-700'}`}>
              {day}
            </span>
            {/* If we have bookings on that day, show a counter */}
            {bookingsInDay.length > 0 && (
              <span className="text-xs bg-indigo-600 text-white px-1.5 py-0.5 rounded-full">
                {bookingsInDay.length}
              </span>
            )}
          </div>
          {/* Show an example of the first booking or times */}
          <div className="mt-1">
            {bookingsInDay.slice(0, 1).map((b) => (
              <div key={b._id} className="text-[10px] truncate bg-indigo-100 mt-1 p-1 rounded-md text-indigo-800">
                {b.time}
              </div>
            ))}
            {bookingsInDay.length > 1 && (
              <div className="text-[10px] text-indigo-500 mt-0.5 font-medium">
                +{bookingsInDay.length - 1} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => {
                // Go back one month
                const prevMonth = new Date(currentYear, currentMonth - 1, 1);
                setSelectedDate(prevMonth);
              }}
              className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200 text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                // Go forward one month
                const nextMonth = new Date(currentYear, currentMonth + 1, 1);
                setSelectedDate(nextMonth);
              }}
              className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200 text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => {
                // Go to today
                setSelectedDate(new Date());
              }}
              className="p-2 px-3 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors duration-200 text-sm font-medium"
            >
              Today
            </button>
          </div>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-2 mb-2 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
            <div key={dayName} className="font-semibold text-sm py-2 bg-gray-50 rounded-md text-gray-600">
              {dayName}
            </div>
          ))}
        </div>

        {/* Display blanks + days */}
        <div className="grid grid-cols-7 gap-2">
          {blanks}
          {daysArray}
        </div>

        {/* Section showing bookings for the selected day in detail */}
        <div className="mt-6 max-w-md mx-auto border border-gray-100 rounded-lg shadow-sm overflow-hidden">
          <h3 className="font-semibold text-lg p-4 bg-gray-50 border-b border-gray-100 text-gray-800">
            Appointments for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </h3>
          <div className="divide-y divide-gray-100">
            {getBookingsForDate(selectedDate).map((b) => (
              <div key={b._id} className="py-3 px-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-indigo-700">{b.time}</span> - {b?.patient?.name || 'Unknown'}
                  </div>
                  <span className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full ${getStatusColor(b.status)}`}>
                    {b.status}
                  </span>
                </div>
                {b.reason && (
                  <p className="mt-1 text-sm text-gray-500 truncate">{b.reason}</p>
                )}
              </div>
            ))}
            {getBookingsForDate(selectedDate).length === 0 && (
              <div className="py-6 text-gray-500 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg">No appointments for this day</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ----------------------------------------------------------------
  //                     Final user interface
  // ----------------------------------------------------------------
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-800';
      case 'approved': return 'bg-emerald-100 text-emerald-800';
      case 'rejected': return 'bg-rose-100 text-rose-800';
      case 'completed': return 'bg-sky-100 text-sky-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'approved':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'rejected':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'completed':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Appointment Management</h1>
          <p className="text-gray-600">View and manage all patient appointments</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          {/* Title + Filter */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h2 className="text-xl font-bold text-gray-800">Patient Bookings</h2>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center">
                <label className="text-gray-700 font-medium mr-3">Status:</label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={fetchBookings}
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none" stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Refresh
              </button>
            </div>
          </div>

          {/* Display loader or bookings table */}
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-gray-600 text-xl font-medium mb-2">No bookings found</p>
              <p className="text-gray-500">No appointments are available for the selected filter.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Booking Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Reason
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {booking?.patient?.name || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {booking?.patient?.email || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(booking.date).toLocaleDateString("en-GB")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {booking.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-1 inline-flex items-center text-xs leading-4 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                        {booking.reason}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {/* Select to update status */}
                        <select
                          id={`status-select-${booking._id}`}
                          className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          onChange={(e) => handleStatusChange(booking._id, e.target.value, booking.status)}
                          value={booking.status}
                        >
                          {statusOptions.slice(1).map((status) => (
                            <option key={status} value={status}>
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Calendar */}
        {renderCalendar()}
      </div>
      
      {/* Add ToastContainer for notifications with custom settings */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default DoctorDashboardPatients;