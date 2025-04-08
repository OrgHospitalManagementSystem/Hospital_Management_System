
// ✅ app/adminDashboard/articles/[id]/edit/page.js (تعديل المقالة)
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';

export default function EditArticlePage() {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/admin/articles/${id}`).then((res) => {
      setFormData(res.data.data);
      setLoading(false);
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/admin/articles/${id}`, formData);
    router.push('/adminDashboard/articles');
  };

  if (loading || !formData) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white rounded shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">تعديل المقالة</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="tags" value={formData.tags.join(',')} onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',') })} className="w-full border p-2 rounded" />
        <textarea name="content" value={formData.content} onChange={handleChange} rows={10} className="w-full border p-2 rounded" />
        <select name="status" value={formData.status} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">حفظ التعديلات</button>
      </form>
    </div>
  );
}
