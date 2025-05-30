// // // // // // // // components/PatientRecordsSidebar.jsx
// // // // // // // import { useState } from 'react';
// // // // // // // import Link from 'next/link';
// // // // // // // import { 
// // // // // // //   HomeIcon, 
// // // // // // //   UserIcon,
// // // // // // //   DocumentTextIcon,
// // // // // // //   PlusCircleIcon,
// // // // // // //   SearchIcon,
// // // // // // //   CalendarIcon,
// // // // // // //   ClipboardListIcon,
// // // // // // //   ChartBarIcon,
// // // // // // //   DocumentReportIcon,
// // // // // // //   PencilAltIcon,
// // // // // // //   UploadIcon,
// // // // // // //   UserCircleIcon,
// // // // // // //   LogoutIcon,
// // // // // // //   MenuIcon,
// // // // // // //   XIcon
// // // // // // // } from '@heroicons/react/outline';

// // // // // // // const SidebarDoctor = () => {
// // // // // // //   const [isCollapsed, setIsCollapsed] = useState(false);
  
// // // // // // //   const toggleSidebar = () => {
// // // // // // //     setIsCollapsed(!isCollapsed);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={`h-screen bg-[#415A80] text-white fixed top-0 left-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} shadow-lg z-50`}>
// // // // // // //       {/* Toggle Button */}
// // // // // // //       <button 
// // // // // // //         className="absolute top-4 left-4 lg:hidden p-2 rounded-full bg-[#374E70] text-[#A5D4DC]"
// // // // // // //         onClick={toggleSidebar}
// // // // // // //       >
// // // // // // //         {isCollapsed ? (
// // // // // // //           <MenuIcon className="h-6 w-6" />
// // // // // // //         ) : (
// // // // // // //           <XIcon className="h-6 w-6" />
// // // // // // //         )}
// // // // // // //       </button>
      
// // // // // // //       {/* Logo and Title */}
// // // // // // //       <div className="p-4 bg-[#374E70] flex items-center justify-center">
// // // // // // //         {!isCollapsed && (
// // // // // // //           <h1 className="text-[#A5D4DC] text-xl font-bold">Patient Records</h1>
// // // // // // //         )}
// // // // // // //         {isCollapsed && (
// // // // // // //           <span className="text-[#A5D4DC] text-xl font-bold">PR</span>
// // // // // // //         )}
// // // // // // //       </div>
      
// // // // // // //       {/* Main Navigation */}
// // // // // // //       <div className="mt-6">
// // // // // // //         <h2 className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${isCollapsed ? 'text-center' : ''}`}>
// // // // // // //           {!isCollapsed && 'MAIN MENU'}
// // // // // // //         </h2>
        
// // // // // // //         <nav className="mt-2">
// // // // // // //           <NavItem 
// // // // // // //             icon={<HomeIcon className="h-6 w-6" />} 
// // // // // // //             title="Dashboard" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             isActive={true}
// // // // // // //             href="/patient-records"
// // // // // // //           />
// // // // // // //           <NavItem 
// // // // // // //             icon={<PlusCircleIcon className="h-6 w-6" />} 
// // // // // // //             title="Add New Patient" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/new"
// // // // // // //           />
// // // // // // //           <NavItem 
// // // // // // //             icon={<SearchIcon className="h-6 w-6" />} 
// // // // // // //             title="Search Records" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/search"
// // // // // // //           />
// // // // // // //           <NavItem 
// // // // // // //             icon={<CalendarIcon className="h-6 w-6" />} 
// // // // // // //             title="Appointments" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/appointments"
// // // // // // //           />
// // // // // // //         </nav>
        
// // // // // // //         <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>
        
// // // // // // //         <h2 className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${isCollapsed ? 'text-center' : ''}`}>
// // // // // // //           {!isCollapsed && 'MEDICAL RECORDS'}
// // // // // // //         </h2>
        
// // // // // // //         <nav className="mt-2">
// // // // // // //           <NavItem 
// // // // // // //             icon={<ClipboardListIcon className="h-6 w-6" />} 
// // // // // // //             title="Medical History" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/history"
// // // // // // //           />
// // // // // // //           <NavItem 
// // // // // // //             icon={<DocumentTextIcon className="h-6 w-6" />} 
// // // // // // //             title="Prescriptions" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/prescriptions"
// // // // // // //           />
// // // // // // //           <NavItem 
// // // // // // //             icon={<DocumentReportIcon className="h-6 w-6" />} 
// // // // // // //             title="Lab Reports" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/lab-reports"
// // // // // // //           />
// // // // // // //           <NavItem 
// // // // // // //             icon={<UploadIcon className="h-6 w-6" />} 
// // // // // // //             title="Upload Documents" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/upload"
// // // // // // //           />
// // // // // // //         </nav>
        
// // // // // // //         <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>
        
// // // // // // //         <h2 className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${isCollapsed ? 'text-center' : ''}`}>
// // // // // // //           {!isCollapsed && 'ANALYTICS'}
// // // // // // //         </h2>
        
// // // // // // //         <nav className="mt-2">
// // // // // // //           <NavItem 
// // // // // // //             icon={<ChartBarIcon className="h-6 w-6" />} 
// // // // // // //             title="Patient Statistics" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/statistics"
// // // // // // //           />
// // // // // // //           <NavItem 
// // // // // // //             icon={<DocumentReportIcon className="h-6 w-6" />} 
// // // // // // //             title="Reports" 
// // // // // // //             isCollapsed={isCollapsed}
// // // // // // //             href="/patient-records/reports"
// // // // // // //           />
// // // // // // //         </nav>
// // // // // // //       </div>
      
// // // // // // //       {/* User Profile */}
// // // // // // //       <div className="absolute bottom-0 w-full bg-[#374E70] p-4">
// // // // // // //         <div className="flex items-center">
// // // // // // //           <div className="w-10 h-10 rounded-full bg-[#A5D4DC] text-[#415A80] flex items-center justify-center font-bold mr-3">
// // // // // // //             DR
// // // // // // //           </div>
// // // // // // //           {!isCollapsed && (
// // // // // // //             <div>
// // // // // // //               <h3 className="font-medium">Dr. Sarah Johnson</h3>
// // // // // // //               <p className="text-sm text-[#D7E2E9] text-opacity-80">Cardiologist</p>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // // NavItem Component
// // // // // // // const NavItem = ({ icon, title, isCollapsed, isActive = false, href }) => {
// // // // // // //   return (
// // // // // // //     <Link href={href}>
// // // // // // //       <a className={`flex items-center px-4 py-3 ${isActive ? 'bg-[#374E70] border-l-4 border-[#A5D4DC]' : 'hover:bg-[#374E70]'}`}>
// // // // // // //         <span className="text-[#A5D4DC] mr-3">{icon}</span>
// // // // // // //         {!isCollapsed && <span className="font-medium">{title}</span>}
// // // // // // //       </a>
// // // // // // //     </Link>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SidebarDoctor;
// // // // // // // components/PatientRecordsSidebar.jsx
// // // // // // 'use client'
// // // // // // import { useState } from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import { 
// // // // // //   HomeIcon, 
// // // // // //   UserIcon,
// // // // // //   DocumentTextIcon,
// // // // // //   PlusCircleIcon,
// // // // // //   SearchIcon,
// // // // // //   CalendarIcon,
// // // // // //   ClipboardListIcon,
// // // // // //   ChartBarIcon,
// // // // // //   DocumentReportIcon,
// // // // // //   UploadIcon,
// // // // // //   XIcon,
// // // // // //   MenuIcon
// // // // // // } from '@heroicons/react/outline';

// // // // // // const SidebarDoctor = () => {
// // // // // //   const [isCollapsed, setIsCollapsed] = useState(false);
  
// // // // // //   const toggleSidebar = () => {
// // // // // //     setIsCollapsed(!isCollapsed);
// // // // // //   };
// // // // // // // NavItem Component
// // // // // // const NavItem = ({ icon, title, isCollapsed, isActive = false, href }) => {
// // // // // //   return (
// // // // // //     <Link href={href}>
// // // // // //       <a className={`flex items-center px-4 py-3 ${isActive ? 'bg-[#374E70] border-l-4 border-[#A5D4DC]' : 'hover:bg-[#374E70]'}`}>
// // // // // //         <span className="text-[#A5D4DC] mr-3">{icon}</span>
// // // // // //         {!isCollapsed && <span className="font-medium">{title}</span>}
// // // // // //       </a>
// // // // // //     </Link>
// // // // // //   );
// // // // // // };
// // // // // //   return (
// // // // // //     <div className={`h-screen bg-[#415A80] text-white fixed top-0 left-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} shadow-lg z-50`}>
// // // // // //       {/* Toggle Button */}
// // // // // //       <button 
// // // // // //         className="absolute top-4 left-4 lg:hidden p-2 rounded-full bg-[#374E70] text-[#A5D4DC]"
// // // // // //         onClick={toggleSidebar}
// // // // // //       >
// // // // // //         {isCollapsed ? (
// // // // // //           <MenuIcon className="h-6 w-6" />
// // // // // //         ) : (
// // // // // //           <XIcon className="h-6 w-6" />
// // // // // //         )}
// // // // // //       </button>
      
// // // // // //       {/* Logo and Title */}
// // // // // //       <div className="p-4 bg-[#374E70] flex items-center justify-center">
// // // // // //         {!isCollapsed && (
// // // // // //           <h1 className="text-[#A5D4DC] text-xl font-bold">Patient Records</h1>
// // // // // //         )}
// // // // // //         {isCollapsed && (
// // // // // //           <span className="text-[#A5D4DC] text-xl font-bold">PR</span>
// // // // // //         )}
// // // // // //       </div>
      
// // // // // //       {/* Main Navigation */}
// // // // // //       <div className="mt-6">
// // // // // //         <h2 className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${isCollapsed ? 'text-center' : ''}`}>
// // // // // //           {!isCollapsed && 'MAIN MENU'}
// // // // // //         </h2>
        
// // // // // //         <nav className="mt-2">
// // // // // //           <NavItem 
// // // // // //             icon={<HomeIcon className="h-6 w-6" />} 
// // // // // //             title="Dashboard" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             isActive={true}
// // // // // //             href="/patient-records"
// // // // // //           />
// // // // // //           <NavItem 
// // // // // //             icon={<PlusCircleIcon className="h-6 w-6" />} 
// // // // // //             title="Add New Patient" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/new"
// // // // // //           />
// // // // // //           <NavItem 
// // // // // //             icon={<SearchIcon className="h-6 w-6" />} 
// // // // // //             title="Search Records" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/search"
// // // // // //           />
// // // // // //           <NavItem 
// // // // // //             icon={<CalendarIcon className="h-6 w-6" />} 
// // // // // //             title="Appointments" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/appointments"
// // // // // //           />
// // // // // //         </nav>
        
// // // // // //         <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>
        
// // // // // //         <h2 className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${isCollapsed ? 'text-center' : ''}`}>
// // // // // //           {!isCollapsed && 'MEDICAL RECORDS'}
// // // // // //         </h2>
        
// // // // // //         <nav className="mt-2">
// // // // // //           <NavItem 
// // // // // //             icon={<ClipboardListIcon className="h-6 w-6" />} 
// // // // // //             title="Medical History" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/history"
// // // // // //           />
// // // // // //           <NavItem 
// // // // // //             icon={<DocumentTextIcon className="h-6 w-6" />} 
// // // // // //             title="Prescriptions" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/prescriptions"
// // // // // //           />
// // // // // //           <NavItem 
// // // // // //             icon={<DocumentReportIcon className="h-6 w-6" />} 
// // // // // //             title="Lab Reports" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/lab-reports"
// // // // // //           />
// // // // // //           <NavItem 
// // // // // //             icon={<UploadIcon className="h-6 w-6" />} 
// // // // // //             title="Upload Documents" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/upload"
// // // // // //           />
// // // // // //         </nav>
        
// // // // // //         <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>
        
// // // // // //         <h2 className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${isCollapsed ? 'text-center' : ''}`}>
// // // // // //           {!isCollapsed && 'ANALYTICS'}
// // // // // //         </h2>
        
// // // // // //         <nav className="mt-2">
// // // // // //           <NavItem 
// // // // // //             icon={<ChartBarIcon className="h-6 w-6" />} 
// // // // // //             title="Patient Statistics" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/statistics"
// // // // // //           />
// // // // // //           <NavItem 
// // // // // //             icon={<DocumentReportIcon className="h-6 w-6" />} 
// // // // // //             title="Reports" 
// // // // // //             isCollapsed={isCollapsed}
// // // // // //             href="/patient-records/reports"
// // // // // //           />
// // // // // //         </nav>
// // // // // //       </div>
      
// // // // // //       {/* User Profile */}
// // // // // //       <div className="absolute bottom-0 w-full bg-[#374E70] p-4">
// // // // // //         <div className="flex items-center">
// // // // // //           <div className="w-10 h-10 rounded-full bg-[#A5D4DC] text-[#415A80] flex items-center justify-center font-bold mr-3">
// // // // // //             DR
// // // // // //           </div>
// // // // // //           {!isCollapsed && (
// // // // // //             <div>
// // // // // //               <h3 className="font-medium">Dr. Sarah Johnson</h3>
// // // // // //               <p className="text-sm text-[#D7E2E9] text-opacity-80">Cardiologist</p>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };



// // // // // // export default SidebarDoctor;
// // // // // // components/PatientRecordsSidebar.jsx
// // // // // import { useState } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { 
// // // // //   HomeIcon, 
// // // // //   PlusCircleIcon,
// // // // //   SearchIcon,
// // // // //   CalendarIcon,
// // // // //   ClipboardListIcon,
// // // // //   DocumentTextIcon,
// // // // //   DocumentReportIcon,
// // // // //   UploadIcon,
// // // // //   ChartBarIcon,
// // // // //   MenuIcon,
// // // // //   XIcon
// // // // // } from '@heroicons/react/outline';

// // // // // const SidebarDoctor = () => {
// // // // //   const [isCollapsed, setIsCollapsed] = useState(false);
  
// // // // //   const toggleSidebar = () => {
// // // // //     setIsCollapsed(!isCollapsed);
// // // // //   };
// // // // // // NavItem Component
// // // // // const NavItem = ({ icon, title, isCollapsed, href }) => {
// // // // //   return (
// // // // //     <Link href={href}>
// // // // //       <a className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // // // //         <span className="text-[#A5D4DC] mr-3">{icon}</span>
// // // // //         {!isCollapsed && <span className="font-medium">{title}</span>}
// // // // //       </a>
// // // // //     </Link>
// // // // //   );
// // // // // };
// // // // //   return (
// // // // //     <div className={`h-screen bg-[#415A80] text-white fixed top-0 left-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} shadow-lg z-50`}>
// // // // //       {/* Toggle Button */}
// // // // //       <button 
// // // // //         className="absolute top-4 left-4 lg:hidden p-2 rounded-full bg-[#374E70] text-[#A5D4DC]"
// // // // //         onClick={toggleSidebar}
// // // // //       >
// // // // //         {isCollapsed ? (
// // // // //           <MenuIcon className="h-6 w-6" />
// // // // //         ) : (
// // // // //           <XIcon className="h-6 w-6" />
// // // // //         )}
// // // // //       </button>
      
// // // // //       {/* Logo and Title */}
// // // // //       <div className="p-4 bg-[#374E70] flex items-center justify-center">
// // // // //         {!isCollapsed ? (
// // // // //           <h1 className="text-[#A5D4DC] text-xl font-bold">Patient Records</h1>
// // // // //         ) : (
// // // // //           <span className="text-[#A5D4DC] text-xl font-bold">PR</span>
// // // // //         )}
// // // // //       </div>
      
// // // // //       {/* Main Navigation */}
// // // // //       <div className="mt-6">
// // // // //         <nav>
// // // // //           {/* Main Menu */}
// // // // //           {!isCollapsed && (
// // // // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">MAIN MENU</h2>
// // // // //           )}
// // // // //           <NavItem icon={<HomeIcon className="h-6 w-6" />} title="Dashboard" isCollapsed={isCollapsed} href="/patient-records" />
// // // // //           <NavItem icon={<PlusCircleIcon className="h-6 w-6" />} title="Add New Patient" isCollapsed={isCollapsed} href="/patient-records/new" />
// // // // //           <NavItem icon={<SearchIcon className="h-6 w-6" />} title="Search Records" isCollapsed={isCollapsed} href="/patient-records/search" />
// // // // //           <NavItem icon={<CalendarIcon className="h-6 w-6" />} title="Appointments" isCollapsed={isCollapsed} href="/patient-records/appointments" />

// // // // //           <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

// // // // //           {/* Medical Records Menu */}
// // // // //           {!isCollapsed && (
// // // // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">MEDICAL RECORDS</h2>
// // // // //           )}
// // // // //           <NavItem icon={<ClipboardListIcon className="h-6 w-6" />} title="Medical History" isCollapsed={isCollapsed} href="/patient-records/history" />
// // // // //           <NavItem icon={<DocumentTextIcon className="h-6 w-6" />} title="Prescriptions" isCollapsed={isCollapsed} href="/patient-records/prescriptions" />
// // // // //           <NavItem icon={<DocumentReportIcon className="h-6 w-6" />} title="Lab Reports" isCollapsed={isCollapsed} href="/patient-records/lab-reports" />
// // // // //           <NavItem icon={<UploadIcon className="h-6 w-6" />} title="Upload Documents" isCollapsed={isCollapsed} href="/patient-records/upload" />

// // // // //           <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

// // // // //           {/* Analytics Menu */}
// // // // //           {!isCollapsed && (
// // // // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">ANALYTICS</h2>
// // // // //           )}
// // // // //           <NavItem icon={<ChartBarIcon className="h-6 w-6" />} title="Patient Statistics" isCollapsed={isCollapsed} href="/patient-records/statistics" />
// // // // //           <NavItem icon={<DocumentReportIcon className="h-6 w-6" />} title="Reports" isCollapsed={isCollapsed} href="/patient-records/reports" />
// // // // //         </nav>
// // // // //       </div>
      
// // // // //       {/* User Profile */}
// // // // //       <div className="absolute bottom-0 w-full bg-[#374E70] p-4">
// // // // //         <div className="flex items-center">
// // // // //           <div className="w-10 h-10 rounded-full bg-[#A5D4DC] text-[#415A80] flex items-center justify-center font-bold mr-3">
// // // // //             DR
// // // // //           </div>
// // // // //           {!isCollapsed && (
// // // // //             <div>
// // // // //               <h3 className="font-medium">Dr. Sarah Johnson</h3>
// // // // //               <p className="text-sm text-[#D7E2E9] text-opacity-80">Cardiologist</p>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };



// // // // // export default SidebarDoctor;
// // // // 'use client'
// // // // import {  useState } from 'react';
// // // // import Link from 'next/link';
// // // // import { 
// // // //   HomeIcon, 
// // // //   PlusCircleIcon,
// // // //   SearchIcon,
// // // //   CalendarIcon,
// // // //   ClipboardListIcon,
// // // //   DocumentTextIcon,
// // // //   DocumentReportIcon,
// // // //   UploadIcon,
// // // //   ChartBarIcon,
 
// // // // } from '@heroicons/react/outline';

// // // // export default function SidebarDoctor() {
// // // //   const [isCollapsed, setIsCollapsed] = useState(false);
  
// // // //   const toggleSidebar = () => {
// // // //     setIsCollapsed(!isCollapsed);
// // // //   };

// // // //   const NavItem = ({ icon, title, href }) => {
// // // //     return (
// // // //         <Link href={href} className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // // //         <span className="text-[#A5D4DC] mr-3">{icon}</span>
// // // //         {!isCollapsed && <span className="font-medium">{title}</span>}
// // // //       </Link>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div className={`h-screen bg-[#415A80] text-white fixed top-0 left-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} shadow-lg z-50`}>
// // // //       {/* Toggle Button */}
// // // //       <button 
// // // //         className="absolute top-4 left-4 lg:hidden p-2 rounded-full bg-[#374E70] text-[#A5D4DC]"
// // // //         onClick={toggleSidebar}
// // // //       >
// // // //         {isCollapsed ? (
// // // //           <div className="h-6 w-6" />
// // // //         ) : (
// // // //           <div className="h-6 w-6" />
// // // //         )}
// // // //       </button>
      
// // // //       {/* Logo and Title */}
// // // //       <div className="p-4 bg-[#374E70] flex items-center justify-center">
// // // //         {!isCollapsed ? (
// // // //           <h1 className="text-[#A5D4DC] text-xl font-bold">Patient Records</h1>
// // // //         ) : (
// // // //           <span className="text-[#A5D4DC] text-xl font-bold">PR</span>
// // // //         )}
// // // //       </div>
      
// // // //       {/* Main Navigation */}
// // // //       <div className="mt-6">
// // // //         <nav>
// // // //           {/* Main Menu */}
// // // //           {!isCollapsed && (
// // // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">MAIN MENU</h2>
// // // //           )}
// // // //           <NavItem icon={<HomeIcon className="h-6 w-6" />} title="Dashboard" href="/patient-records" />
// // // //           <NavItem icon={<PlusCircleIcon className="h-6 w-6" />} title="Add New Patient" href="/patient-records/new" />
// // // //           <NavItem icon={<SearchIcon className="h-6 w-6" />} title="Search Records" href="/patient-records/search" />
// // // //           <NavItem icon={<CalendarIcon className="h-6 w-6" />} title="Appointments" href="/patient-records/appointments" />

// // // //           <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

// // // //           {/* Medical Records Menu */}
// // // //           {!isCollapsed && (
// // // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">MEDICAL RECORDS</h2>
// // // //           )}
// // // //           <NavItem icon={<ClipboardListIcon className="h-6 w-6" />} title="Medical History" href="/patient-records/history" />
// // // //           <NavItem icon={<DocumentTextIcon className="h-6 w-6" />} title="Prescriptions" href="/patient-records/prescriptions" />
// // // //           <NavItem icon={<DocumentReportIcon className="h-6 w-6" />} title="Lab Reports" href="/patient-records/lab-reports" />
// // // //           <NavItem icon={<UploadIcon className="h-6 w-6" />} title="Upload Documents" href="/patient-records/upload" />

// // // //           <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

// // // //           {/* Analytics Menu */}
// // // //           {!isCollapsed && (
// // // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">ANALYTICS</h2>
// // // //           )}
// // // //           <NavItem icon={<ChartBarIcon className="h-6 w-6" />} title="Patient Statistics" href="/patient-records/statistics" />
// // // //           <NavItem icon={<DocumentReportIcon className="h-6 w-6" />} title="Reports" href="/patient-records/reports" />
// // // //         </nav>
// // // //       </div>
      
// // // //       {/* User Profile */}
// // // //       <div className="absolute bottom-0 w-full bg-[#374E70] p-4">
// // // //         <div className="flex items-center">
// // // //           <div className="w-10 h-10 rounded-full bg-[#A5D4DC] text-[#415A80] flex items-center justify-center font-bold mr-3">
// // // //             DR
// // // //           </div>
// // // //           {!isCollapsed && (
// // // //             <div>
// // // //               <h3 className="font-medium">Dr. Sarah Johnson</h3>
// // // //               <p className="text-sm text-[#D7E2E9] text-opacity-80">Cardiologist</p>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };


// // // 'use client'
// // // import { useState } from 'react';
// // // import Link from 'next/link';
// // // import { 
// // //   HomeIcon, 
// // //   PlusCircleIcon,
// // //   SearchIcon,
// // //   CalendarIcon,
// // //   ClipboardListIcon,
// // //   DocumentTextIcon,
// // //   DocumentReportIcon,
// // //   UploadIcon,
// // //   ChartBarIcon,
// // //   MenuIcon,
// // //   XIcon
// // // } from '@heroicons/react/24/outline';

// // // const SidebarDoctor = () => {
// // //   const [isCollapsed, setIsCollapsed] = useState(false);
  
// // //   const toggleSidebar = () => {
// // //     setIsCollapsed(!isCollapsed);
// // //   };

// // //   return (
// // //     <div className={`h-screen bg-[#415A80] text-white fixed top-0 left-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} shadow-lg z-50`}>
// // //       {/* Toggle Button */}
// // //       <button 
// // //         className="absolute top-4 left-4 lg:hidden p-2 rounded-full bg-[#374E70] text-[#A5D4DC]"
// // //         onClick={toggleSidebar}
// // //       >
// // //         {isCollapsed ? (
// // //           <MenuIcon className="h-6 w-6" />
// // //         ) : (
// // //           <XIcon className="h-6 w-6" />
// // //         )}
// // //       </button>
      
// // //       {/* Logo and Title */}
// // //       <div className="p-4 bg-[#374E70] flex items-center justify-center">
// // //         {!isCollapsed ? (
// // //           <h1 className="text-[#A5D4DC] text-xl font-bold">Patient Records</h1>
// // //         ) : (
// // //           <span className="text-[#A5D4DC] text-xl font-bold">PR</span>
// // //         )}
// // //       </div>
      
// // //       {/* Main Navigation */}
// // //       <div className="mt-6">
// // //         <nav>
// // //           {/* Main Menu */}
// // //           {!isCollapsed && (
// // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">MAIN MENU</h2>
// // //           )}
// // //           <Link href="/patient-records" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <HomeIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Dashboard</span>}
// // //           </Link>
// // //           <Link href="/patient-records/new" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <PlusCircleIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Add New Patient</span>}
// // //           </Link>
// // //           <Link href="/patient-records/search" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <SearchIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Search Records</span>}
// // //           </Link>
// // //           <Link href="/patient-records/appointments" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <CalendarIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Appointments</span>}
// // //           </Link>

// // //           <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

// // //           {/* Medical Records Menu */}
// // //           {!isCollapsed && (
// // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">MEDICAL RECORDS</h2>
// // //           )}
// // //           <Link href="/patient-records/history" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <ClipboardListIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Medical History</span>}
// // //           </Link>
// // //           <Link href="/patient-records/prescriptions" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <DocumentTextIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Prescriptions</span>}
// // //           </Link>
// // //           <Link href="/patient-records/lab-reports" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <DocumentReportIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Lab Reports</span>}
// // //           </Link>
// // //           <Link href="/patient-records/upload" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <UploadIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Upload Documents</span>}
// // //           </Link>

// // //           <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

// // //           {/* Analytics Menu */}
// // //           {!isCollapsed && (
// // //             <h2 className="text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm">ANALYTICS</h2>
// // //           )}
// // //           <Link href="/patient-records/statistics" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <ChartBarIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Patient Statistics</span>}
// // //           </Link>
// // //           <Link href="/patient-records/reports" className={`flex items-center px-4 py-3 ${isCollapsed ? 'text-center' : ''} hover:bg-[#374E70]`}>
// // //             <DocumentReportIcon className="h-6 w-6 text-[#A5D4DC] mr-3" />
// // //             {!isCollapsed && <span className="font-medium">Reports</span>}
// // //           </Link>
// // //         </nav>
// // //       </div>
      
// // //       {/* User Profile */}
// // //       <div className="absolute bottom-0 w-full bg-[#374E70] p-4">
// // //         <div className="flex items-center">
// // //           <div className="w-10 h-10 rounded-full bg-[#A5D4DC] text-[#415A80] flex items-center justify-center font-bold mr-3">
// // //             DR
// // //           </div>
// // //           {!isCollapsed && (
// // //             <div>
// // //               <h3 className="font-medium">Dr. Sarah Johnson</h3>
// // //               <p className="text-sm text-[#D7E2E9] text-opacity-80">Cardiologist</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // export default SidebarDoctor; 
// // 'use client'
// // import { useState } from 'react';
// // import Link from 'next/link';
// // import { 
// //   HomeIcon, 
// //   UsersIcon, 
// //   CalendarIcon, 
// //   ChartBarIcon,
// //   DocumentTextIcon,
// //   CogIcon,
// //   UserCircleIcon,
// //   CurrencyDollarIcon,
// //   ArrowRightOnRectangleIcon, // بديل لـ LogoutIcon
 
// // } from '@heroicons/react/24/outline';

// // export default function SidebarDoctor() {
// //   const [isCollapsed, setIsCollapsed] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsCollapsed(!isCollapsed);
// //   };

// //   const mainMenu = [
// //     { icon: <HomeIcon className="h-6 w-6" />, title: "Dashboard", href: "/doctorDashboard", active: true },
// //     { icon: <UsersIcon className="h-6 w-6" />, title: "Patients", href: "/doctorDashboard/patients" },
// //     { icon: <CalendarIcon className="h-6 w-6" />, title: "Appointments", href: "/doctorDashboard/appointments" },
// //     { icon: <DocumentTextIcon className="h-6 w-6" />, title: "Medical Records", href: "/doctorDashboard/medical-records" },
// //     // { icon: <CurrencyDollarIcon className="h-6 w-6" />, title: "Billing", href: "/billing" },
// //   ];

// //   const reportsMenu = [
// //     { icon: <ChartBarIcon className="h-6 w-6" />, title: "Performance Stats", href: "/statistics" },
// //     { icon: <DocumentTextIcon className="h-6 w-6" />, title: "Reports", href: "/reports" },
// //   ];

// //   const settingsMenu = [
// //     { icon: <CogIcon className="h-6 w-6" />, title: "Settings", href: "/settings" },
// //     { icon: <ArrowRightOnRectangleIcon className="h-6 w-6" />, title: "Logout", href: "/logout" },
// //   ];

// //   const renderNavItem = ({ icon, title, href, active = false }) => (
// //     <Link
// //       href={href}
// //       key={href}
// //       className={`flex items-center px-4 py-3 ${active ? 'bg-[#374E70] border-r-4 border-[#A5D4DC]' : 'hover:bg-[#374E70]'}`}
// //     >
// //       <span className="text-[#A5D4DC]">{icon}</span>
// //       {!isCollapsed && <span className="font-medium ml-3">{title}</span>}
// //     </Link>
// //   );

// //   return (
// //     <div className={`h-screen bg-[#415A80] text-white fixed top-0 left-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} shadow-lg z-50`}>
// //       {/* Toggle Button */}
// //       <button 
// //         className="absolute top-4 left-4 lg:hidden p-2 rounded-full bg-[#374E70] text-[#A5D4DC]"
// //         onClick={toggleSidebar}
// //       >
// //         {isCollapsed ? (
// //           <div className="h-6 w-6" />
// //         ) : (
// //           <div className="h-6 w-6" />
// //         )}
// //       </button>
      
// //       {/* Logo and Title */}
// //       <div className="p-4 bg-[#374E70] flex items-center justify-center">
// //         {!isCollapsed ? (
// //           <h1 className="text-[#A5D4DC] text-xl font-bold">Doctor Dashboard</h1>
// //         ) : (
// //           <span className="text-[#A5D4DC] text-xl font-bold">D</span>
// //         )}
// //       </div>
      
// //       {/* Main Navigation */}
// //       <div className="mt-6">
// //         <h2 className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${isCollapsed ? 'text-center' : ''}`}>
// //           {!isCollapsed && 'Main Menu'}
// //         </h2>
// //         <nav className="mt-2">
// //           {mainMenu.map(item => renderNavItem(item))}
// //         </nav>
        
// //         <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>
        
// //         <h2 className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${isCollapsed ? 'text-center' : ''}`}>
// //           {!isCollapsed && 'Reports & Analytics'}
// //         </h2>
// //         <nav className="mt-2">
// //           {reportsMenu.map(item => renderNavItem(item))}
// //         </nav>
        
// //         <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>
        
// //         <nav className="mt-2">
// //           {settingsMenu.map(item => renderNavItem(item))}
// //         </nav>
// //       </div>
      
// //       {/* User Profile */}
// //       <div className="absolute bottom-0 w-full bg-[#374E70] p-4">
// //         <div className="flex items-center">
// //           <div className="w-10 h-10 rounded-full bg-[#A5D4DC] text-[#415A80] flex items-center justify-center font-bold ml-3">
// //             D
// //           </div>
// //           {!isCollapsed && (
// //             <div className="ml-3">
// //               <h3 className="font-medium">Dr. Sarah Johnson</h3>
// //               <p className="text-sm text-[#D7E2E9] text-opacity-80">Cardiologist</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client'
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { 
//   HomeIcon, 
//   UsersIcon, 
//   CalendarIcon, 
//   ChartBarIcon,
//   DocumentTextIcon,
//   CogIcon,
//   ArrowRightOnRectangleIcon,
//   XMarkIcon,
  
// } from '@heroicons/react/24/outline';
// import { Menu, XIcon } from 'lucide-react';

// export default function SidebarDoctor() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [doctorInfo, setDoctorInfo] = useState({ fullName: '', specialty: '' });

//   // اجلب بيانات المستخدم الحالي من endpoint
//   useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const res = await fetch('/api/current-user');
//         if (!res.ok) {
//           console.error('Failed to fetch user data');
//           return;
//         }
//         const data = await res.json();
//         console.log(data);
//         setDoctorInfo({
//           fullName: data.name || 'No Name',
//           specialty: data.specialty || 'Dentist',
//         });
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     getUserData();
//   }, []);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const mainMenu = [
//     { icon: <HomeIcon className="h-6 w-6" />, title: "Dashboard", href: "/doctorDashboard" },
//     { icon: <UsersIcon className="h-6 w-6" />, title: "Patients", href: "/doctorDashboard/patients" },
//     { icon: <CalendarIcon className="h-6 w-6" />, title: "Appointments", href: "/doctorDashboard/appointments" },
//     { icon: <DocumentTextIcon className="h-6 w-6" />, title: "Reports", href: "/doctorDashboard/reports" },
//   ];

//   const reportsMenu = [
//     { icon: <ChartBarIcon className="h-6 w-6" />, title: "video-call", href: "/doctorDashboard/video-call" },
//     { icon: <DocumentTextIcon className="h-6 w-6" />, title: "chat", href: "/doctorDashboard/chat" },
//   ];

//   const settingsMenu = [
//     // { icon: <CogIcon className="h-6 w-6" />, title: "Settings", href: "/settings" },
//     { icon: <ArrowRightOnRectangleIcon className="h-6 w-6" />, title: "Logout", href: "/" },
//   ];

//   const renderNavItem = ({ icon, title, href, active = false }) => (
//     <Link
//       href={href}
//       key={href}
//       className={`flex items-center px-4 py-3 ${
//         active ? 'bg-[#374E70] border-r-4 border-[#A5D4DC]' : 'hover:bg-[#374E70]'
//       }`}
//     >
//       <span className="text-[#A5D4DC]">{icon}</span>
//       {!isCollapsed && <span className="font-medium ml-3">{title}</span>}
//     </Link>
//   );

//   return (
//     <div
//       className={`h-screen bg-[#415A80] text-white fixed top-0 left-0 transition-all duration-300 ${
//         isCollapsed ? 'w-20' : 'w-64'
//       } shadow-lg z-50`}
//     >
//       {/* زر الإظهار والإخفاء (اختياري) */}
//       <button
//         className="absolute top-4 left-4 lg:hidden p-2 rounded-full bg-[#374E70] text-[#A5D4DC]"
//         onClick={toggleSidebar}
//       >
//         {isCollapsed ? (
//           <Menu className="h-9 w-9" />
//         ) : (
//           <XIcon className="h-6 w-6" />
//         )}
//       </button>

//       {/* العنوان */}
//       {/* <div className="p-4 bg-[#374E70] flex items-center justify-center">
//         {!isCollapsed ? (
//           <h1 className="text-[#A5D4DC] text-xl font-bold">SmiloClinic</h1>
//         ) : (
//           <span className="text-[#A5D4DC] text-xl font-bold">D</span>
//         )}
//       </div> */}
//    <div className="flex shrink-0 flex items-center justify-center p-4">
//             <Link href="/" className="flex items-center group">
//             {!isCollapsed ? (   <svg 
//                 className="h-8 w-8 mr-2 transition-transform duration-300 group-hover:scale-110" 
//                 viewBox="0 0 40 40" 
//                 fill="none" 
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect width="40" height="40" rx="8" fill="#A5D4DC"/>
//                 <path d="M12 20C12 16.13 15.13 13 19 13H29V27H19C15.13 27 12 23.87 12 20Z" fill="white"/>
//                 <path d="M24 17V23M21 20H27" stroke="#415A80" strokeWidth="2" strokeLinecap="round"/>
//               </svg> ) : (
//                 <div></div>
//                 )}
//               {!isCollapsed ? (
//               <span className="text-xl font-bold text-white drop-shadow-sm">SmiloClinic</span>
//             ) : (
//               <span className="text-[#A5D4DC] text-xl font-bold">D</span>
//             )}
//               </Link>
//             </div>
//       {/* القوائم */}
//       <div className="mt-6">
//         <h2
//           className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${
//             isCollapsed ? 'text-center' : ''
//           }`}
//         >
//           {!isCollapsed && 'Main Menu'}
//         </h2>
//         <nav className="mt-2">
//           {mainMenu.map((item) => renderNavItem(item))}
//         </nav>

//         <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

//         <h2
//           className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${
//             isCollapsed ? 'text-center' : ''
//           }`}
//         >
//           {!isCollapsed && 'communication'}
//         </h2>
//         <nav className="mt-2">
//           {reportsMenu.map((item) => renderNavItem(item))}
//         </nav>

//         <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

//         <nav className="mt-2">
//           {settingsMenu.map((item) => renderNavItem(item))}
//         </nav>
//       </div>

//       {/* معلومات الطبيب في الأسفل */}
//       <div className="absolute bottom-0 w-full bg-[#374E70] p-4">
//         <div className="flex items-center">
//           <div className="w-10 h-10 rounded-full bg-[#A5D4DC] text-[#415A80] flex items-center justify-center font-bold ml-3">
//            {doctorInfo.fullName?.charAt(0).toUpperCase() || 'D'}
//           </div>
//           {!isCollapsed && (
//             <div className="ml-3">
//               <h3 className="font-medium">Dr. {doctorInfo.fullName || 'Dr. Name'}</h3>
//               <p className="text-sm text-[#D7E2E9] text-opacity-80">
//                 {doctorInfo.specialty || 'Dentist'}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // أضف هذا الاستيراد
import { 
  HomeIcon, 
  UsersIcon, 
  CalendarIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { Menu, XIcon } from 'lucide-react';

export default function SidebarDoctor() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [doctorInfo, setDoctorInfo] = useState({ fullName: '', specialty: '' });
  const pathname = usePathname(); // احصل على المسار الحالي

  // اجلب بيانات المستخدم الحالي من endpoint
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch('/api/current-user');
        if (!res.ok) {
          console.error('Failed to fetch user data');
          return;
        }
        const data = await res.json();
        console.log(data);
        setDoctorInfo({
          fullName: data.name || 'No Name',
          specialty: data.specialty || 'Dentist',
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const mainMenu = [
    { icon: <HomeIcon className="h-6 w-6" />, title: "Dashboard", href: "/doctorDashboard" },
    { icon: <UsersIcon className="h-6 w-6" />, title: "Patients", href: "/doctorDashboard/patients" },
    { icon: <CalendarIcon className="h-6 w-6" />, title: "Appointments", href: "/doctorDashboard/appointments" },
    { icon: <DocumentTextIcon className="h-6 w-6" />, title: "Reports", href: "/doctorDashboard/reports" },
  ];

  const reportsMenu = [
    { icon: <ChartBarIcon className="h-6 w-6" />, title: "video-call", href: "/doctorDashboard/video-call" },
    { icon: <DocumentTextIcon className="h-6 w-6" />, title: "chat", href: "/doctorDashboard/chat" },
  ];

  const settingsMenu = [
    { icon: <ArrowRightOnRectangleIcon className="h-6 w-6" />, title: "Logout", href: "/" },
  ];

  const renderNavItem = ({ icon, title, href }) => (
    <Link
      href={href}
      key={href}
      className={`flex items-center px-4 py-3 ${
        pathname === href ? 'bg-[#374E70] border-r-4 border-[#A5D4DC]' : 'hover:bg-[#374E70]'
      }`}
    >
      <span className="text-[#A5D4DC]">{icon}</span>
      {!isCollapsed && <span className="font-medium ml-3">{title}</span>}
    </Link>
  );

  // ... باقي الكود بدون تغيير
  return (
    <div
      className={`h-screen bg-[#415A80] text-white fixed top-0 left-0 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      } shadow-lg z-50`}
    >
      {/* زر الإظهار والإخفاء (اختياري) */}
      <button
        className="absolute top-4 left-4 lg:hidden p-2 rounded-full bg-[#374E70] text-[#A5D4DC]"
        onClick={toggleSidebar}
      >
        {isCollapsed ? (
          <Menu className="h-9 w-9" />
        ) : (
          <XIcon className="h-6 w-6" />
        )}
      </button>

      {/* العنوان */}
      <div className="flex shrink-0 flex items-center justify-center p-4">
        <Link href="/" className="flex items-center group">
          {!isCollapsed ? (
            <svg 
              className="h-8 w-8 mr-2 transition-transform duration-300 group-hover:scale-110" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="8" fill="#A5D4DC"/>
              <path d="M12 20C12 16.13 15.13 13 19 13H29V27H19C15.13 27 12 23.87 12 20Z" fill="white"/>
              <path d="M24 17V23M21 20H27" stroke="#415A80" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <div></div>
          )}
          {!isCollapsed ? (
            <span className="text-xl font-bold text-white drop-shadow-sm">SmiloClinic</span>
          ) : (
            <span className="text-[#A5D4DC] text-xl font-bold">D</span>
          )}
        </Link>
      </div>

      {/* القوائم */}
      <div className="mt-6">
        <h2
          className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${
            isCollapsed ? 'text-center' : ''
          }`}
        >
          {!isCollapsed && 'Main Menu'}
        </h2>
        <nav className="mt-2">
          {mainMenu.map((item) => renderNavItem(item))}
        </nav>

        <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

        <h2
          className={`text-[#D7E2E9] text-opacity-80 px-4 py-2 text-sm ${
            isCollapsed ? 'text-center' : ''
          }`}
        >
          {!isCollapsed && 'communication'}
        </h2>
        <nav className="mt-2">
          {reportsMenu.map((item) => renderNavItem(item))}
        </nav>

        <div className="border-b border-[#D7E2E9] border-opacity-20 my-4"></div>

        <nav className="mt-2">
          {settingsMenu.map((item) => renderNavItem(item))}
        </nav>
      </div>

      {/* معلومات الطبيب في الأسفل */}
      <div className="absolute bottom-0 w-full bg-[#374E70] p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#A5D4DC] text-[#415A80] flex items-center justify-center font-bold ml-3">
            {doctorInfo.fullName?.charAt(0).toUpperCase() || 'D'}
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <h3 className="font-medium">Dr. {doctorInfo.fullName || 'Dr. Name'}</h3>
              <p className="text-sm text-[#D7E2E9] text-opacity-80">
                {doctorInfo.specialty || 'Dentist'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}