// src/app/adminDashboard/articles/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    // In a real application, fetch articles from API
    // For now, use dummy data
    const dummyArticles = [
      {
        id: '1',
        title: 'The Importance of Regular Dental Checkups',
        author: 'Dr. John Smith',
        category: 'Dental Health',
        status: 'published',
        date: '2025-03-15',
        viewCount: 1245
      },
      {
        id: '2',
        title: 'Understanding Heart Disease: Symptoms and Prevention',
        author: 'Dr. Sarah Wilson',
        category: 'Cardiology',
        status: 'published',
        date: '2025-03-10',
        viewCount: 980
      },
      {
        id: '3',
        title: 'Managing Stress for Better Health',
        author: 'Dr. Michael Johnson',
        category: 'Mental Health',
        status: 'draft',
        date: '2025-03-05',
        viewCount: 0
      },
      {
        id: '4',
        title: 'Seasonal Allergies: Causes and Treatments',
        author: 'Dr. Emily Brown',
        category: 'Allergies',
        status: 'published',
        date: '2025-02-28',
        viewCount: 756
      },
      {
        id: '5',
        title: 'Nutrition Tips for a Healthy Lifestyle',
        author: 'Dr. David Lee',
        category: 'Nutrition',
        status: 'draft',
        date: '2025-02-20',
        viewCount: 0
      }
    ];

    setArticles(dummyArticles);
    setLoading(false);
  }, []);

  // Filter articles based on search term and category
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || article.category === categoryFilter)
  );

  return (
    <div>
      <div className="flex justify-between items-center pb-5 border-b border-gray-200 mb-5">
        <h1 className="text-2xl font-bold text-gray-900">Articles Management</h1>
        <Link 
          href="/adminDashboard/articles/create" 
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#415A80] hover:bg-[#334766] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#415A80]"
        >
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Article
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="mb-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:ring-[#415A80] focus:border-[#415A80] block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md"
              placeholder="Search articles..."
            />
          </div>
        </div>
        <div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#415A80] focus:border-[#415A80] sm:text-sm rounded-md"
          >
            <option value="">All Categories</option>
            <option value="Dental Health">Dental Health</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Allergies">Allergies</option>
            <option value="Nutrition">Nutrition</option>
          </select>
        </div>
      </div>

      {/* Articles Table */}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center">Loading articles...</td>
                    </tr>
                  ) : filteredArticles.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center">No articles found.</td>
                    </tr>
                  ) : (
                    filteredArticles.map((article) => (
                      <tr key={article.id}>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{article.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{article.author}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{article.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {article.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {article.viewCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link href={`/adminDashboard/articles/${article.id}`} className="text-[#415A80] hover:text-[#334766] mr-4">
                            View
                          </Link>
                          <Link href={`/adminDashboard/articles/${article.id}/edit`} className="text-[#415A80] hover:text-[#334766] mr-4">
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
      
      {/* Pagination */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredArticles.length}</span> of <span className="font-medium">{filteredArticles.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button aria-current="page" className="z-10 bg-[#415A80] border-[#415A80] text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                1
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}