"use client";
import { useEffect, useState } from 'react';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/doctor');
        const data = await res.json();

        if (data.success) {
          setDoctors(data.data);
        } else {
          setError('Failed to fetch doctors');
        }
      } catch (err) {
        setError('Error fetching doctors');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Get unique specializations for filter
  const specializations = [...new Set(doctors.map(doc => doc.specialization))];

  // Filter doctors based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty ? doctor.specialization === selectedSpecialty : true;
    return matchesSearch && matchesSpecialty;
  });

  if (loading) return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#D7E2E9]">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 w-16 h-16 rounded-full border-4 border-[#415A80] border-t-transparent animate-spin"></div>
        <div className="absolute top-2 left-2 w-12 h-12 rounded-full border-4 border-[#A5D4DC] border-t-transparent animate-spin"></div>
      </div>
      <div className="mt-6 text-[#415A80] text-xl font-semibold">Loading Doctors...</div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center min-h-screen bg-[#D7E2E9]">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Error</h3>
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-[#415A80] hover:bg-[#364b6c] text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D7E2E9] to-white">
      {/* Header with wave svg */}
      <div className="relative">
        <div className="bg-[#415A80] pt-16 pb-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Find Your <span className="text-[#A5D4DC]">Perfect</span> Doctor
            </h1>
            <p className="text-center text-white opacity-90 max-w-2xl mx-auto">
              Browse our extensive network of healthcare professionals to find the right specialist for your needs.
            </p>
          </div>
        </div>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="#D7E2E9"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 -mt-20 mb-12">
        {/* Search and filter bar */}
        <div className="bg-white rounded-xl shadow-xl p-6 md:flex justify-between items-center mb-12">
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A5D4DC]"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="mr-4">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A5D4DC]"
              >
                <option value="">All Specialties</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
            
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button 
                onClick={() => setIsGridView(true)}
                className={`p-2 rounded-md ${isGridView ? 'bg-white shadow-sm' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#415A80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                onClick={() => setIsGridView(false)}
                className={`p-2 rounded-md ${!isGridView ? 'bg-white shadow-sm' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#415A80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredDoctors.length}</span> doctors
            {selectedSpecialty && <span> in <span className="text-[#415A80] font-semibold">{selectedSpecialty}</span></span>}
          </p>
          
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-sm text-[#415A80] hover:text-[#364b6c] flex items-center"
            >
              Clear search
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Doctors listing */}
        {isGridView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div key={doctor._id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#415A80] to-[#A5D4DC]"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#415A80] group-hover:bg-[#A5D4DC] flex items-center justify-center text-white font-bold text-xl transition-colors duration-300 mr-4">
                      {doctor.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#415A80] group-hover:text-[#364b6c] transition-colors duration-300">{doctor.name}</h3>
                      <span className="inline-block bg-[#D7E2E9] text-[#415A80] text-sm px-2 py-1 rounded-full">
                        {doctor.specialization}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#A5D4DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {doctor.email}
                    </p>
                    
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex">
                        <span className="text-yellow-500">★★★★</span><span className="text-gray-300">★</span>
                        <span className="text-xs text-gray-500 ml-1">(4.0)</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredDoctors.map((doctor) => (
              <div key={doctor._id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex">
                <div className="w-2 bg-[#415A80]"></div>
                <div className="flex-1 p-6 flex flex-wrap md:flex-nowrap items-center">
                  <div className="w-16 h-16 rounded-full bg-[#A5D4DC] flex items-center justify-center text-white font-bold text-xl mr-6">
                    {doctor.name.charAt(0)}
                  </div>
                  
                  <div className="md:flex-1 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-[#415A80]">{doctor.name}</h3>
                    <div className="flex items-center mt-1 mb-2">
                      <span className="bg-[#D7E2E9] text-[#415A80] text-sm px-2 py-1 rounded-full mr-3">
                        {doctor.specialization}
                      </span>
                      <div className="flex text-sm">
                        <span className="text-yellow-500">★★★★</span><span className="text-gray-300">★</span>
                        <span className="text-xs text-gray-500 ml-1">(4.0)</span>
                      </div>
                    </div>
                    <p className="text-gray-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#A5D4DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {doctor.email}
                    </p>
                  </div>
                  
                  <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-4 mt-4 md:mt-0">
                    <button className="flex-1 md:flex-none bg-white text-[#415A80] border border-[#415A80] hover:bg-[#415A80] hover:text-white py-2 px-4 rounded-md transition-colors duration-300">
                      Contact
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Empty state */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-[#D7E2E9] rounded-full opacity-30 animate-ping"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#A5D4DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#415A80] mb-2">No doctors found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search criteria</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedSpecialty('');}}
              className="bg-[#415A80] hover:bg-[#364b6c] text-white py-2 px-6 rounded-md transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#415A80] py-10 text-white mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-block h-1 w-20 rounded bg-[#A5D4DC]"></span>
          </div>
          <p className="max-w-md mx-auto text-sm opacity-80">
            Find the best healthcare professionals tailored to your needs. 
            Our directory includes verified doctors across all medical specialties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoctorList;