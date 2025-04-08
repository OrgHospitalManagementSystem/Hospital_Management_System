'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, fetch doctors from API
    // For now, use dummy data
    const dummyDoctors = [
      {
        id: '1',
        name: 'Dr. John Smith',
        specialization: 'Cardiology',
        experienceYears: 10,
        appointmentsCount: 156
      },
      {
        id: '2',
        name: 'Dr. Sarah Wilson',
        specialization: 'Dermatology',
        experienceYears: 8,
        appointmentsCount: 143
      },
      {
        id: '3',
        name: 'Dr. Michael Johnson',
        specialization: 'Neurology',
        experienceYears: 15,
        appointmentsCount: 210
      },
      {
        id: '4',
        name: 'Dr. Emily Brown',
        specialization: 'Pediatrics',
        experienceYears: 7,
        appointmentsCount: 132
      },
      {
        id: '5',
        name: 'Dr. David Lee',
        specialization: 'Orthopedics',
        experienceYears: 12,
        appointmentsCount: 178
      }
    ];

    setDoctors(dummyDoctors);
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center pb-5 border-b border-gray-200 mb-5">
        <h1 className="text-2xl font-bold text-gray-900">Doctors Management</h1>
        <Link 
          href="/adminDashboard/doctors/create" 
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Doctor
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="mb-5">
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-primary focus:border-primary block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md"
            placeholder="Search doctors..."
          />
        </div>
      </div>

      {/* Doctors Table */}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Specialization
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Appointments
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center">Loading doctors...</td>
                    </tr>
                  ) : doctors.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center">No doctors found.</td>
                    </tr>
                  ) : (
                    doctors.map((doctor) => (
                      <tr key={doctor.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={`https://ui-avatars.com/api/?name=${doctor.name}&background=random`} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{doctor.specialization}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{doctor.experienceYears} years</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {doctor.appointmentsCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link href={`/adminDashboard/doctors/${doctor.id}`} className="text-primary hover:text-primary-dark mr-4">
                            View
                          </Link>
                          <Link href={`/adminDashboard/doctors/${doctor.id}/edit`} className="text-primary hover:text-primary-dark mr-4">
                            Edit
                          </Link>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}