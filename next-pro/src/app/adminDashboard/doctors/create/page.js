'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddDoctorPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    experienceYears: '',
    availability: [
      { day: 'Monday', from: '', to: '' },
      { day: 'Tuesday', from: '', to: '' },
      { day: 'Wednesday', from: '', to: '' },
      { day: 'Thursday', from: '', to: '' },
      { day: 'Friday', from: '', to: '' },
      { day: 'Saturday', from: '', to: '' },
      { day: 'Sunday', from: '', to: '' }
    ],
    profilePicture: null,
    address: '',
    birthDate: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvailabilityChange = (index, field, value) => {
    const newAvailability = [...formData.availability];
    newAvailability[index] = { ...newAvailability[index], [field]: value };
    setFormData({ ...formData, availability: newAvailability });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form data
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (!formData.specialization) validationErrors.specialization = 'Specialization is required';
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // In a real application, you would send this data to your API
    console.log('Submitting doctor data:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/adminDashboard/doctors');
    }, 1000);
  };

  return (
    <div>
      <div className="pb-5 border-b border-gray-200 mb-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Add New Doctor</h1>
        <Link 
          href="/adminDashboard/doctors" 
          className="text-primary hover:text-primary-dark"
        >
          Back to Doctors
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h2>
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${errors.password ? 'border-red-500' : ''}`}
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="col-span-1 md:col-span-2 mt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Professional Information</h2>
            </div>

            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                Specialization
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="specialization"
                  id="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${errors.specialization ? 'border-red-500' : ''}`}
                />
                {errors.specialization && <p className="mt-1 text-sm text-red-600">{errors.specialization}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-700">
                Years of Experience
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="experienceYears"
                  id="experienceYears"
                  min="0"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Availability Schedule */}
            <div className="col-span-1 md:col-span-2 mt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Availability Schedule</h2>
              
              <div className="space-y-4">
                {formData.availability.map((daySchedule, index) => (
                  <div key={daySchedule.day} className="grid grid-cols-3 gap-4 items-center">
                    <div className="col-span-1">
                      <p className="text-sm font-medium text-gray-700">{daySchedule.day}</p>
                    </div>
                    <div className="col-span-1">
                      <label htmlFor={`from-${index}`} className="sr-only">From</label>
                      <input
                        type="time"
                        id={`from-${index}`}
                        value={daySchedule.from}
                        onChange={(e) => handleAvailabilityChange(index, 'from', e.target.value)}
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-1">
                      <label htmlFor={`to-${index}`} className="sr-only">To</label>
                      <input
                        type="time"
                        id={`to-${index}`}
                        value={daySchedule.to}
                        onChange={(e) => handleAvailabilityChange(index, 'to', e.target.value)}
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 mt-8">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => router.push('/adminDashboard/doctors')}
                  className="mr-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {isSubmitting ? 'Saving...' : 'Add Doctor'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}