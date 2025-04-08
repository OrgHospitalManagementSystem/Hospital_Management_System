// src/app/adminDashboard/articles/create/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddArticlePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: '',
    featuredImage: null,
    status: 'draft',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'radio' ? value : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form data
    const validationErrors = {};
    if (!formData.title) validationErrors.title = 'Title is required';
    if (!formData.content) validationErrors.content = 'Content is required';
    if (!formData.category) validationErrors.category = 'Category is required';
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real app, you would send the data to your API
      console.log('Article data:', formData);
      
      // Simulate API call
      setTimeout(() => {
        router.push('/adminDashboard/articles');
      }, 1000);
    } catch (error) {
      console.error('Error creating article:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="pb-5 border-b border-gray-200 mb-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Add New Article</h1>
        <Link 
          href="/adminDashboard/articles" 
          className="text-primary hover:text-primary-dark"
        >
          Back to Articles
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${errors.title ? 'border-red-500' : ''}`}
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <div className="mt-1">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${errors.category ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a category</option>
                  <option value="Dental Health">Dental Health</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Mental Health">Mental Health</option>
                  <option value="Allergies">Allergies</option>
                  <option value="Nutrition">Nutrition</option>
                </select>
                {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags (comma separated)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="health, wellness, diet"
                />
              </div>
            </div>

            {/* Featured Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Featured Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <div className="mt-1">
                <textarea
                  id="content"
                  name="content"
                  rows={15}
                  value={formData.content}
                  onChange={handleChange}
                  className={`shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md ${errors.content ? 'border-red-500' : ''}`}
                />
                {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write the article content using Markdown format.
              </p>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <div className="mt-2">
                <div className="flex items-center">
                  <input
                    id="status-draft"
                    name="status"
                    type="radio"
                    value="draft"
                    checked={formData.status === 'draft'}
                    onChange={handleChange}
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                  />
                  <label htmlFor="status-draft" className="ml-3 block text-sm font-medium text-gray-700">
                    Draft
                  </label>
                </div>
                <div className="mt-2 flex items-center">
                  <input
                    id="status-published"
                    name="status"
                    type="radio"
                    value="published"
                    checked={formData.status === 'published'}
                    onChange={handleChange}
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                  />
                  <label htmlFor="status-published" className="ml-3 block text-sm font-medium text-gray-700">
                    Published
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="pt-5 flex justify-end">
              <button
                type="button"
                onClick={() => router.push('/adminDashboard/articles')}
                className="mr-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {isSubmitting ? 'Saving...' : 'Save Article'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}