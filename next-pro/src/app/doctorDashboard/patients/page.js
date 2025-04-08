// 'use client'
// // components/PatientRecordsPage.jsx
// import { useState } from 'react';
// import { 
//   SearchIcon, 
//   FilterIcon, 
//   PlusCircleIcon, 
//   DocumentDownloadIcon,
//   PencilIcon,
//   TrashIcon,
//   EyeIcon
// } from '@heroicons/react/outline';

// export default function Patients() {
//   // Sample data for patient records
//   const [patients, setPatients] = useState([
//     { 
//       id: "P-1001", 
//       name: "John Smith", 
//       age: 45, 
//       gender: "Male", 
//       contact: "+1-555-123-4567", 
//       diagnosis: "Hypertension, Diabetes",
//       lastVisit: "2025-04-01",
//       status: "Active" 
//     },
//     { 
//       id: "P-1002", 
//       name: "Sarah Johnson", 
//       age: 32, 
//       gender: "Female", 
//       contact: "+1-555-234-5678", 
//       diagnosis: "Pregnancy - Third Trimester",
//       lastVisit: "2025-04-03",
//       status: "Follow-up" 
//     },
//     { 
//       id: "P-1003", 
//       name: "Michael Chen", 
//       age: 58, 
//       gender: "Male", 
//       contact: "+1-555-345-6789", 
//       diagnosis: "Post-operative Care, Arthritis",
//       lastVisit: "2025-03-25",
//       status: "Active" 
//     },
//     { 
//       id: "P-1004", 
//       name: "Emily Williams", 
//       age: 27, 
//       gender: "Female", 
//       contact: "+1-555-456-7890", 
//       diagnosis: "Migraine, Anxiety",
//       lastVisit: "2025-04-05",
//       status: "New" 
//     },
//     { 
//       id: "P-1005", 
//       name: "David Rodriguez", 
//       age: 41, 
//       gender: "Male", 
//       contact: "+1-555-567-8901", 
//       diagnosis: "Lower Back Pain",
//       lastVisit: "2025-03-30",
//       status: "Follow-up" 
//     },
//     { 
//       id: "P-1006", 
//       name: "Lisa Thompson", 
//       age: 52, 
//       gender: "Female", 
//       contact: "+1-555-678-9012", 
//       diagnosis: "Hypothyroidism",
//       lastVisit: "2025-03-28",
//       status: "Active" 
//     },
//     { 
//       id: "P-1007", 
//       name: "Robert Kim", 
//       age: 36, 
//       gender: "Male", 
//       contact: "+1-555-789-0123", 
//       diagnosis: "Asthma",
//       lastVisit: "2025-04-02",
//       status: "Active" 
//     },
//   ]);

//   // Status colors
//   const statusColors = {
//     Active: 'bg-green-100 text-green-800',
//     'Follow-up': 'bg-blue-100 text-blue-800',
//     New: 'bg-purple-100 text-purple-800',
//     Completed: 'bg-gray-100 text-gray-800'
//   };

//   // Search state
//   const [searchTerm, setSearchTerm] = useState('');
  
//   // Filter patients based on search term
//   const filteredPatients = patients.filter(patient => 
//     patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="bg-[#D7E2E9] bg-opacity-20 min-h-screen p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Patient Records</h1>
//         <p className="text-gray-600">Manage and view all patient records in the system</p>
//       </div>

//       {/* Search and Filters */}
//       <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//         <div className="flex flex-wrap gap-4">
//           <div className="flex-1 min-w-[300px]">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search patients by name, ID or diagnosis..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#415A80]"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
//             </div>
//           </div>
          
//           <div className="flex space-x-2">
//             <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
//               <FilterIcon className="h-5 w-5 mr-2" />
//               Filter
//             </button>
//             <button className="flex items-center px-4 py-2 bg-[#415A80] text-white rounded-lg hover:bg-opacity-90">
//               <PlusCircleIcon className="h-5 w-5 mr-2" />
//               Add Patient
//             </button>
//             <button className="flex items-center px-4 py-2 bg-[#A5D4DC] text-[#415A80] rounded-lg hover:bg-opacity-90">
//               <DocumentDownloadIcon className="h-5 w-5 mr-2" />
//               Export
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Patient Records Table */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-[#415A80] text-white text-sm">
//               <tr>
//                 <th className="py-3 px-6 text-left">Patient ID</th>
//                 <th className="py-3 px-6 text-left">Name</th>
//                 <th className="py-3 px-6 text-left">Age</th>
//                 <th className="py-3 px-6 text-left">Gender</th>
//                 <th className="py-3 px-6 text-left">Contact</th>
//                 <th className="py-3 px-6 text-left">Diagnosis</th>
//                 <th className="py-3 px-6 text-left">Last Visit</th>
//                 <th className="py-3 px-6 text-left">Status</th>
//                 <th className="py-3 px-6 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {filteredPatients.map((patient) => (
//                 <tr key={patient.id} className="hover:bg-[#D7E2E9] hover:bg-opacity-20">
//                   <td className="py-4 px-6 font-medium text-[#415A80]">{patient.id}</td>
//                   <td className="py-4 px-6 font-medium text-gray-900">{patient.name}</td>
//                   <td className="py-4 px-6 text-gray-600">{patient.age}</td>
//                   <td className="py-4 px-6 text-gray-600">{patient.gender}</td>
//                   <td className="py-4 px-6 text-gray-600">{patient.contact}</td>
//                   <td className="py-4 px-6 text-gray-600">{patient.diagnosis}</td>
//                   <td className="py-4 px-6 text-gray-600">{patient.lastVisit}</td>
//                   <td className="py-4 px-6">
//                     <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[patient.status]}`}>
//                       {patient.status}
//                     </span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <div className="flex justify-center space-x-2">
//                       <button className="p-1 rounded-full bg-[#D7E2E9] text-[#415A80] hover:bg-[#A5D4DC]">
//                         <EyeIcon className="h-5 w-5" />
//                       </button>
//                       <button className="p-1 rounded-full bg-[#D7E2E9] text-[#415A80] hover:bg-[#A5D4DC]">
//                         <PencilIcon className="h-5 w-5" />
//                       </button>
//                       <button className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200">
//                         <TrashIcon className="h-5 w-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//               {filteredPatients.length === 0 && (
//                 <tr>
//                   <td colSpan="9" className="py-8 text-center text-gray-500">
//                     No patients found matching your search criteria
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
        
//         {/* Pagination */}
//         <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
//           <div className="text-sm text-gray-600">
//             Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredPatients.length}</span> of <span className="font-medium">{patients.length}</span> patients
//           </div>
//           <div className="flex space-x-1">
//             <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>
//               Previous
//             </button>
//             <button className="px-3 py-1 bg-[#415A80] text-white rounded-md hover:bg-opacity-90">
//               1
//             </button>
//             <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
//               2
//             </button>
//             <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
//               3
//             </button>
//             <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'
import { useState } from 'react';
import { 
  FaSearch, 
  FaFilter, 
  FaPlusCircle, 
  FaDownload, 
  FaPencilAlt, 
  FaTrash, 
  FaEye
} from 'react-icons/fa'; // استيراد الأيقونات من مكتبة react-icons/fa

export default function Patients() {
  // Sample data for patient records
  const [patients, setPatients] = useState([
    { 
      id: "P-1001", 
      name: "John Smith", 
      age: 45, 
      gender: "Male", 
      contact: "+1-555-123-4567", 
      diagnosis: "Hypertension, Diabetes",
      lastVisit: "2025-04-01",
      status: "Active" 
    },
    { 
      id: "P-1002", 
      name: "Sarah Johnson", 
      age: 32, 
      gender: "Female", 
      contact: "+1-555-234-5678", 
      diagnosis: "Pregnancy - Third Trimester",
      lastVisit: "2025-04-03",
      status: "Follow-up" 
    },
    { 
      id: "P-1003", 
      name: "Michael Chen", 
      age: 58, 
      gender: "Male", 
      contact: "+1-555-345-6789", 
      diagnosis: "Post-operative Care, Arthritis",
      lastVisit: "2025-03-25",
      status: "Active" 
    },
    { 
      id: "P-1004", 
      name: "Emily Williams", 
      age: 27, 
      gender: "Female", 
      contact: "+1-555-456-7890", 
      diagnosis: "Migraine, Anxiety",
      lastVisit: "2025-04-05",
      status: "New" 
    },
    { 
      id: "P-1005", 
      name: "David Rodriguez", 
      age: 41, 
      gender: "Male", 
      contact: "+1-555-567-8901", 
      diagnosis: "Lower Back Pain",
      lastVisit: "2025-03-30",
      status: "Follow-up" 
    },
    { 
      id: "P-1006", 
      name: "Lisa Thompson", 
      age: 52, 
      gender: "Female", 
      contact: "+1-555-678-9012", 
      diagnosis: "Hypothyroidism",
      lastVisit: "2025-03-28",
      status: "Active" 
    },
    { 
      id: "P-1007", 
      name: "Robert Kim", 
      age: 36, 
      gender: "Male", 
      contact: "+1-555-789-0123", 
      diagnosis: "Asthma",
      lastVisit: "2025-04-02",
      status: "Active" 
    },
  ]);

  // Status colors
  const statusColors = {
    Active: 'bg-green-100 text-green-800',
    'Follow-up': 'bg-blue-100 text-blue-800',
    New: 'bg-purple-100 text-purple-800',
    Completed: 'bg-gray-100 text-gray-800'
  };

  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter patients based on search term
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#D7E2E9] bg-opacity-20 min-h-screen p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Patient Records</h1>
        <p className="text-gray-600">Manage and view all patient records in the system</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients by name, ID or diagnosis..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#415A80]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              <FaFilter className="h-5 w-5 mr-2" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-[#415A80] text-white rounded-lg hover:bg-opacity-90">
              <FaPlusCircle className="h-5 w-5 mr-2" />
              Add Patient
            </button>
            <button className="flex items-center px-4 py-2 bg-[#A5D4DC] text-[#415A80] rounded-lg hover:bg-opacity-90">
              <FaDownload className="h-5 w-5 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Patient Records Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#415A80] text-white text-sm">
              <tr>
                <th className="py-3 px-6 text-left">Patient ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Age</th>
                <th className="py-3 px-6 text-left">Gender</th>
                <th className="py-3 px-6 text-left">Contact</th>
                <th className="py-3 px-6 text-left">Diagnosis</th>
                <th className="py-3 px-6 text-left">Last Visit</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-[#D7E2E9] hover:bg-opacity-20">
                  <td className="py-4 px-6 font-medium text-[#415A80]">{patient.id}</td>
                  <td className="py-4 px-6 font-medium text-gray-900">{patient.name}</td>
                  <td className="py-4 px-6 text-gray-600">{patient.age}</td>
                  <td className="py-4 px-6 text-gray-600">{patient.gender}</td>
                  <td className="py-4 px-6 text-gray-600">{patient.contact}</td>
                  <td className="py-4 px-6 text-gray-600">{patient.diagnosis}</td>
                  <td className="py-4 px-6 text-gray-600">{patient.lastVisit}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[patient.status]}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center space-x-2">
                      <button className="p-1 rounded-full bg-[#D7E2E9] text-[#415A80] hover:bg-[#A5D4DC]">
                        <FaEye className="h-5 w-5" />
                      </button>
                      <button className="p-1 rounded-full bg-[#D7E2E9] text-[#415A80] hover:bg-[#A5D4DC]">
                        <FaPencilAlt className="h-5 w-5" />
                      </button>
                      <button className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200">
                        <FaTrash className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredPatients.length === 0 && (
                <tr>
                  <td colSpan="9" className="py-8 text-center text-gray-500">
                    No patients found matching your search criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredPatients.length}</span> of <span className="font-medium">{patients.length}</span> patients
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 bg-[#415A80] text-white rounded-md hover:bg-opacity-90">
              1
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
