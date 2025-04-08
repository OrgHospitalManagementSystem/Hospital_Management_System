
'use client'
import { useEffect, useState } from 'react';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch('/api/doctors');
      const data = await res.json();
      setDoctors(data);
    };

    fetchDoctors();
  }, []);

  return (
    <div className="bg-[#D7E2E9] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-semibold text-[#415A80] text-center mb-8">Meet Our Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  className="w-full h-56 object-cover"
                  src={doctor.profilePicture} // Adjust this to the actual image field
                  alt={`${doctor.name} Profile Picture`}
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-20"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#415A80]">{doctor.name}</h2>
                <p className="text-sm text-[#A5D4DC]">{doctor.specialization}</p>
                <p className="mt-4 text-gray-600">{doctor.bio}</p>
                <div className="mt-6">
                  <button className="w-full py-2 px-4 bg-[#415A80] text-white rounded-md hover:bg-[#A5D4DC] transition-colors">
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
