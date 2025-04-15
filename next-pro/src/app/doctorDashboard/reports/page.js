"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UploadReportForm = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [activeBookingId, setActiveBookingId] = useState(null);

  // Fetch bookings from the API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/doctorDashboard/patients");
        setBookings(response.data);
        setFilteredBookings(response.data);
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Apply filters when name or status changes
  useEffect(() => {
    filterBookings();
  }, [nameFilter, statusFilter, bookings]);

  // Function to filter bookings
  const filterBookings = () => {
    let filtered = [...bookings];

    // Filter by name
    if (nameFilter) {
      filtered = filtered.filter((booking) =>
        booking.patient.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter) {
      filtered = filtered.filter(
        (booking) => booking.patient.status === statusFilter
      );
    }

    setFilteredBookings(filtered);
  };

  // Handle file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Submit the file to the API
  const handleSubmit = async (e, bookingId, patientId) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    toast.success("Report uploaded successfully!");
    setLoading(true);
    setActiveBookingId(bookingId);
    setError(null);
    setSuccess(null);

    // Prepare FormData
    const formData = new FormData();
    formData.append("report", file);
    formData.append("bookingId", bookingId);
    formData.append("patientId", patientId);

    try {
      // Submit the request to the server
      await axios.post("/api/doctorDashboard/report", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess("Report uploaded successfully!");
      setFile(null);
toast.success("Report uploaded successfully!");
      // Reset file input value
      const fileInput = document.getElementById(`report-${bookingId}`);
      if (fileInput) fileInput.value = "";
    } catch (err) {
      setError("An error occurred while uploading the report.");
    } finally {
      setLoading(false);
      setActiveBookingId(null);
    }
  };

  // Get unique status values
  const getUniqueStatuses = () => {
    const statuses = bookings.map((booking) => booking.patient.status);
    return [...new Set(statuses)];
  };

  // Define colors based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleClearFilters = () => {
    setNameFilter("");
    setStatusFilter("");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
  
        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Patient Report Upload System
          </h1>
          <p className="mt-2 text-gray-600">
            Manage and upload patient reports in one place
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-md mb-8 overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b border-indigo-100">
            <h2 className="text-lg font-semibold text-gray-700">
              Filter Patients
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nameFilter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Search by Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="nameFilter"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                    placeholder="Enter patient name..."
                    className="block w-full pr-10 pl-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {nameFilter && (
                    <button
                      onClick={() => setNameFilter("")}
                      className="absolute inset-y-0 left-0 pl-3 flex items-center"
                    >
                      <span className="text-gray-400 hover:text-gray-500">
                        ✕
                      </span>
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="statusFilter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Filter by Status
                </label>
                <select
                  id="statusFilter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full py-2.5 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">All status</option>
                  {getUniqueStatuses().map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleClearFilters}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-md shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mr-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mr-3">
                <p className="text-sm text-green-700">{success}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && bookings.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <div className="flex justify-center items-center flex-col">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-100 border-t-indigo-600"></div>
              <p className="mt-4 text-gray-600">Loading patient data...</p>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredBookings.length === 0 && bookings.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-6 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No results found
            </h3>
            <p className="mt-1 text-gray-500">
              No results match the applied filter.
            </p>
            <div className="mt-6">
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Patient List */}
        <div className="space-y-6">
          {filteredBookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="border-b border-gray-100 bg-gray-100 px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700">
                  {booking.patient.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    booking.patient.status
                  )}`}
                >
                  {booking.patient.status}
                </span>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Patient Info */}
                  <div>
                    <h4 className="text-base font-medium text-gray-800 mb-3">
                      Patient Information
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <dl className="grid grid-cols-1 gap-3">
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">
                            Email:
                          </dt>
                          <dd className="text-sm text-gray-900">
                            {booking.patient.email}
                          </dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">
                            Booking ID:
                          </dt>
                          <dd className="text-sm text-gray-900">
                            {booking._id.slice(-6)}
                          </dd>
                        </div>
                        {booking.reason && (
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Reason for Visit:
                            </dt>
                            <dd className="text-sm text-gray-900">
                              {booking.reason}
                            </dd>
                          </div>
                        )}
                        {booking.date && (
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Appointment Date:
                            </dt>
                            <dd className="text-sm text-gray-900">
                              {booking.date}
                            </dd>
                          </div>
                        )}
                        {booking.time && (
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Appointment Time:
                            </dt>
                            <dd className="text-sm text-gray-900">
                              {booking.time}
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  </div>

                  {/* Upload Form */}
                  <div>
                    <h4 className="text-base font-medium text-gray-800 mb-3">
                      Upload Report
                    </h4>
                    <form
                      onSubmit={(e) =>
                        handleSubmit(e, booking._id, booking.patient._id)
                      }
                      className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                    >
                      <div className="mb-4">
                        <label
                          htmlFor={`report-${booking._id}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Select file (image or PDF)
                        </label>
                        <input
                          type="file"
                          id={`report-${booking._id}`}
                          name="report"
                          accept="image/*,application/pdf"
                          onChange={handleFileChange}
                          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 border border-gray-300 rounded-lg px-3 py-2 cursor-pointer"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Supported files: Images, PDF
                        </p>
                      </div>
                      <button
                        type="submit"
                        disabled={
                          loading && activeBookingId === booking._id
                        }
                        className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                          loading && activeBookingId === booking._id
                            ? "opacity-70 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {loading && activeBookingId === booking._id ? (
                          <>
                            <span className="inline-block h-4 w-4 mr-2 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                            Uploading...
                          </>
                        ) : (
                          "Upload Report"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Bookings */}
        {bookings.length === 0 && !loading && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No bookings found
            </h3>
            <p className="mt-1 text-gray-500">
              There are no bookings available for display right now.
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default UploadReportForm;
