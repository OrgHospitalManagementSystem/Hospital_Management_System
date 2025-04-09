'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/admin/articles')
      .then((res) => {
        setArticles(res.data.data);
      })
      .catch((err) => console.error('Failed to fetch articles:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('هل أنت متأكد أنك تريد حذف هذه المقالة؟')) return;
    try {
      await axios.delete(`/api/admin/articles/${id}`);
      setArticles((prev) => prev.filter((a) => a._id !== id));
    } catch (error) {
      alert('حدث خطأ أثناء الحذف');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">إدارة المقالات</h1>
        <Link
          href="/adminDashboard/articles/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          إضافة مقالة
        </Link>
      </div>

      {loading ? (
        <p>جاري التحميل...</p>
      ) : articles.length === 0 ? (
        <p>لا توجد مقالات</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-right">العنوان</th>
              <th className="p-2 text-right">التصنيف</th>
              <th className="p-2 text-right">الحالة</th>
              <th className="p-2 text-right">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article._id} className="border-t hover:bg-gray-50">
                <td className="p-2">{article.title}</td>
                <td className="p-2">{article.category || '-'}</td>
                <td className="p-2">{article.status}</td>
                <td className="p-2 flex gap-3 justify-end">
                  <Link href={`/adminDashboard/articles/${article._id}`} className="text-blue-600 hover:underline">
                    عرض
                  </Link>
                  <Link href={`/adminDashboard/articles/${article._id}/edit`} className="text-amber-600 hover:underline">
                    تعديل
                  </Link>
                  <button onClick={() => handleDelete(article._id)} className="text-red-600 hover:underline">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
