// // src/app/adminDashboard/page.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// // Stats Card Component
// function StatsCard({ title, value, icon, color }) {
//   return (
//     <div className="bg-white overflow-hidden shadow rounded-lg">
//       <div className="p-5">
//         <div className="flex items-center">
//           <div className={`flex-shrink-0 rounded-md p-3 ${color}`}>
//             {icon}
//           </div>
//           <div className="ml-5">
//             <p className="text-sm font-medium text-gray-500 truncate">
//               {title}
//             </p>
//             <p className="mt-1 text-3xl font-semibold text-gray-900">
//               {value}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className={`bg-gray-50 px-5 py-3`}>
//         <div className="text-sm">
//           <Link href={`/adminDashboard/${title.toLowerCase().replace(/\s+/g, '-')}`} className="font-medium text-primary hover:text-primary-dark">
//             View All
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Recent Activity Component
// function RecentActivity({ title, items }) {
//   return (
//     <div className="bg-white shadow rounded-lg">
//       <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
//         <h3 className="text-lg font-medium text-gray-900">{title}</h3>
//       </div>
//       <div className="divide-y divide-gray-200">
//         {items.map((item, index) => (
//           <div key={index} className="px-4 py-4 sm:px-6">
//             <div className="flex items-center justify-between">
//               <p className="text-sm font-medium text-primary truncate">
//                 {item.title}
//               </p>
//               <div className="ml-2 flex-shrink-0 flex">
//                 <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                   item.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
//                   item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
//                   item.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 
//                   'bg-blue-100 text-blue-800'
//                 }`}>
//                   {item.status}
//                 </p>
//               </div>
//             </div>
//             <div className="mt-2 sm:flex sm:justify-between">
//               <div className="sm:flex">
//                 <p className="flex items-center text-sm text-gray-500">
//                   {item.user}
//                 </p>
//               </div>
//               <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
//                 <p>
//                   {item.date}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function AdminDashboard() {
//   // In a real app, you would fetch this data from an API
//   const [stats, setStats] = useState({
//     patients: 0,
//     doctors: 0,
//     appointments: 0,
//     revenue: 0
//   });

//   const [recentAppointments, setRecentAppointments] = useState([]);
//   const [recentUsers, setRecentUsers] = useState([]);
  
//   // Simulate fetching data from server
//   useEffect(() => {
//     // In a real app, replace this with actual API calls
//     setStats({
//       patients: 243,
//       doctors: 15,
//       appointments: 87,
//       revenue: 12500
//     });

//     setRecentAppointments([
//       { title: 'Appointment with Dr. John Smith', status: 'Confirmed', user: 'Michael Johnson', date: 'Today, 10:00 AM' },
//       { title: 'Appointment with Dr. Sarah Wilson', status: 'Pending', user: 'Emily Brown', date: 'Tomorrow, 2:30 PM' },
//       { title: 'Appointment with Dr. David Lee', status: 'Confirmed', user: 'Robert Miller', date: 'Apr 25, 9:00 AM' },
//       { title: 'Appointment with Dr. Lisa Anderson', status: 'Cancelled', user: 'Jennifer Davis', date: 'Apr 26, 11:30 AM' },
//     ]);

//     setRecentUsers([
//       { title: 'New User', status: 'Patient', user: 'Thomas Wilson', date: 'Today, 9:23 AM' },
//       { title: 'New User', status: 'Patient', user: 'Emma Taylor', date: 'Yesterday, 3:45 PM' },
//       { title: 'New User', status: 'Doctor', user: 'Dr. James Robinson', date: 'Apr 24, 10:15 AM' },
//     ]);
//   }, []);

//   return (
//     <>
//       <div className="pb-5 border-b border-gray-200 mb-5">
//         <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
//       </div>

//       {/* Stats Cards */}
//       <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//         <StatsCard 
//           title="Patients" 
//           value={stats.patients} 
//           icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} 
//           color="bg-primary"
//         />
//         <StatsCard 
//           title="Doctors" 
//           value={stats.doctors} 
//           icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
//           color="bg-secondary"
//         />
//         <StatsCard 
//           title="Appointments" 
//           value={stats.appointments} 
//           icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} 
//           color="bg-yellow-500"
//         />
//         <StatsCard 
//           title="Revenue" 
//           value={`$${stats.revenue}`} 
//           icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} 
//           color="bg-purple-500"
//         />
//       </div>

//       {/* Recent Activity */}
//       <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
//         <RecentActivity title="Recent Appointments" items={recentAppointments} />
//         <RecentActivity title="Recent Users" items={recentUsers} />
//       </div>

//       {/* Quick Actions */}
//       <div className="mt-5">
//         <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Actions</h3>
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           <Link href="/adminDashboard/appointments/create" className="bg-white hover:bg-primary-light border border-gray-200 rounded-lg p-4 text-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="mt-2 block text-sm font-medium text-gray-900">New Appointment</span>
//           </Link>
//           <Link href="/adminDashboard/doctors/create" className="bg-white hover:bg-primary-light border border-gray-200 rounded-lg p-4 text-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="mt-2 block text-sm font-medium text-gray-900">Add Doctor</span>
//           </Link>
//           <Link href="/adminDashboard/patients/create" className="bg-white hover:bg-primary-light border border-gray-200 rounded-lg p-4 text-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="mt-2 block text-sm font-medium text-gray-900">Add Patient</span>
//           </Link>
//           <Link href="/adminDashboard/articles/create" className="bg-white hover:bg-primary-light border border-gray-200 rounded-lg p-4 text-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="mt-2 block text-sm font-medium text-gray-900">New Article</span>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// src/app/adminDashboard/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Stats Card Component
function StatsCard({ title, value, icon, color }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`flex-shrink-0 rounded-md p-3 ${color}`}>
            {icon}
          </div>
          <div className="ml-5">
            <p className="text-sm font-medium text-gray-500 truncate">
              {title}
            </p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">
              {value}
            </p>
          </div>
        </div>
      </div>
      <div className={`bg-gray-50 px-5 py-3`}>
        <div className="text-sm">
          <Link href={`/adminDashboard/${title.toLowerCase().replace(/\s+/g, '-')}`} className="font-medium text-[#415A80] hover:text-[#334766]">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}

// Recent Activity Component
function RecentActivity({ title, items }) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <div key={index} className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#415A80] truncate">
                {item.title}
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  item.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                  item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                  item.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 
                  'bg-blue-100 text-blue-800'
                }`}>
                  {item.status}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  {item.user}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <p>
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  // In a real app, you would fetch this data from an API
  const [stats, setStats] = useState({
    patients: 0,
    doctors: 0,
    appointments: 0,
    revenue: 0
  });

  const [recentAppointments, setRecentAppointments] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  
  // Simulate fetching data from server
  useEffect(() => {
    // In a real app, replace this with actual API calls
    setStats({
      patients: 243,
      doctors: 15,
      appointments: 87,
      revenue: 12500
    });

    setRecentAppointments([
      { title: 'Appointment with Dr. John Smith', status: 'Confirmed', user: 'Michael Johnson', date: 'Today, 10:00 AM' },
      { title: 'Appointment with Dr. Sarah Wilson', status: 'Pending', user: 'Emily Brown', date: 'Tomorrow, 2:30 PM' },
      { title: 'Appointment with Dr. David Lee', status: 'Confirmed', user: 'Robert Miller', date: 'Apr 25, 9:00 AM' },
      { title: 'Appointment with Dr. Lisa Anderson', status: 'Cancelled', user: 'Jennifer Davis', date: 'Apr 26, 11:30 AM' },
    ]);

    setRecentUsers([
      { title: 'New User', status: 'Patient', user: 'Thomas Wilson', date: 'Today, 9:23 AM' },
      { title: 'New User', status: 'Patient', user: 'Emma Taylor', date: 'Yesterday, 3:45 PM' },
      { title: 'New User', status: 'Doctor', user: 'Dr. James Robinson', date: 'Apr 24, 10:15 AM' },
    ]);
  }, []);

  return (
    <>
      <div className="pb-5 border-b border-gray-200 mb-5">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Patients" 
          value={stats.patients} 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} 
          color="bg-[#415A80]"
        />
        <StatsCard 
          title="Doctors" 
          value={stats.doctors} 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
          color="bg-[#A5D4DC]"
        />
        <StatsCard 
          title="Appointments" 
          value={stats.appointments} 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} 
          color="bg-yellow-500"
        />
        <StatsCard 
          title="Revenue" 
          value={`$${stats.revenue}`} 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} 
          color="bg-purple-500"
        />
      </div>

      {/* Recent Activity */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <RecentActivity title="Recent Appointments" items={recentAppointments} />
        <RecentActivity title="Recent Users" items={recentUsers} />
      </div>

      {/* Quick Actions */}
      <div className="mt-5">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Link href="/adminDashboard/appointments/create" className="bg-white hover:bg-[#D7E2E9] border border-gray-200 rounded-lg p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-[#415A80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-900">New Appointment</span>
          </Link>
          <Link href="/adminDashboard/doctors/create" className="bg-white hover:bg-[#D7E2E9] border border-gray-200 rounded-lg p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-[#A5D4DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-900">Add Doctor</span>
          </Link>
          <Link href="/adminDashboard/patients/create" className="bg-white hover:bg-[#D7E2E9] border border-gray-200 rounded-lg p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-[#415A80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-900">Add Patient</span>
          </Link>
          <Link href="/adminDashboard/articles/create" className="bg-white hover:bg-[#D7E2E9] border border-gray-200 rounded-lg p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-[#A5D4DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-900">New Article</span>
          </Link>
        </div>
      </div>
    </>
  );
}