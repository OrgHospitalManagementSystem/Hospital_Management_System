'use client'
import { useState, useEffect } from 'react';
import SidebarDoctor from './SidebarDoctor';  // تأكد من استيراد الشريط الجانبي الخاص بك
import { CalendarIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Appointments() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // محاكاة جلب البيانات من الـ API
  useEffect(() => {
    // هذه البيانات ستكون عادة من API
    const fetchAppointments = async () => {
      setLoading(true);
      // محاكاة جلب البيانات (من الممكن أن يكون هنا API endpoint)
      const response = [
        { id: 'A-001', patient: 'Emma Wilson', time: '2025-04-07 09:30', status: 'Scheduled' },
        { id: 'A-002', patient: 'John Miller', time: '2025-04-07 11:00', status: 'Confirmed' },
        { id: 'A-003', patient: 'Sophia Thomas', time: '2025-04-08 02:15', status: 'Scheduled' },
      ];
      setAppointments(response);
      setLoading(false);
    };
    fetchAppointments();
  }, []);

  const renderAppointmentsTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-6 text-left">Appointment ID</th>
              <th className="py-3 px-6 text-left">Patient Name</th>
              <th className="py-3 px-6 text-left">Time</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium text-[#415A80]">{appointment.id}</td>
                <td className="py-4 px-6 font-medium text-gray-900">{appointment.patient}</td>
                <td className="py-4 px-6 text-gray-600">{appointment.time}</td>
                <td className="py-4 px-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                    {appointment.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <Link href={`/appointments/${appointment.id}`} className="text-[#415A80] hover:text-[#374E70] text-sm font-medium">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex">
      <SidebarDoctor isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      <div className={`flex-1 p-6 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Appointments</h1>
          <button className="bg-[#415A80] text-white px-4 py-2 rounded-md hover:bg-[#374E70]">
            Add New Appointment
          </button>
        </div>

        {/* Main Content */}
        {loading ? (
          <div className="flex justify-center items-center mt-6">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-solid border-[#374E70]" role="status"></div>
          </div>
        ) : (
          <div className="mt-6">
            {renderAppointmentsTable()}
          </div>
        )}
      </div>
    </div>
  );
}
