"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Clock, X, Search } from "lucide-react";

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await fetch("/api/articles");
        const data = await res.json();
        setArticles(data.data);
        setFilteredArticles(data.data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const query = searchQuery.toLowerCase();
      const results = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.summary.toLowerCase().includes(query) ||
          (article.fullContent &&
            article.fullContent.toLowerCase().includes(query)) ||
          (article.tags &&
            article.tags.some((tag) => tag.toLowerCase().includes(query))) ||
          (article.category && article.category.toLowerCase().includes(query))
      );
      setFilteredArticles(results);
    }
  }, [searchQuery, articles]);

  const closePopup = () => {
    setSelectedArticle(null);
    document.body.style.overflow = "auto";
  };

  const openArticlePopup = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = "hidden";
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/92/a9/b3/92a9b380d4785c149eaeabdc49530518.jpg"
          className="absolute top-0 left-0 w-full h-[60vh] object-cover"
        />

        {/* Search Bar - Hero Overlay */}
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-4 text-lg focus:outline-none text-right"
                dir="rtl"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="mb-18 lg:px-10 bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Search Results Count */}
          {!loading && (
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              {searchQuery.trim() !== "" && (
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-800 mr-2">
                      Search Results:
                    </span>
                    <span className="bg-[#415A80] text-white text-sm px-3 py-1 rounded-full">
                      {filteredArticles.length}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <span className="text-gray-500">Keyword:</span>
                    <span className="ml-2 text-[#A5D4DC] font-medium">
                      "{searchQuery}"
                    </span>
                  </div>
                </div>
              )}
              {searchQuery.trim() !== "" && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-gray-500 hover:cursor-pointer hover:text-gray-700 flex items-center text-sm"
                >
                  <X size={16} className="mr-1" />
                  Clear Search
                </button>
              )}
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#A5D4DC]/30"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#415A80] mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs flex items-center">
                      <Clock size={14} className="mr-1" />
                      {article.readTime}
                    </span>
                    <button
                      onClick={() => openArticlePopup(article)}
                      className="text-[#415A80] hover:cursor-pointer font-medium text-sm flex items-center hover:text-[#A5D4DC] transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {!loading &&
            searchQuery.trim() !== "" &&
            filteredArticles.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                  <Search className="mx-auto h-16 w-16 text-gray-300" />
                </div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  لا توجد نتائج
                </h2>
                <p className="text-gray-500">
                  لم نتمكن من العثور على أي مقالات تطابق "{searchQuery}"
                </p>
              </div>
            )}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
            </div>
          </div>
        ) : articles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <svg
                className="mx-auto h-24 w-24 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="mt-6 text-2xl font-extrabold text-gray-700">
              No articles yet
            </h1>
          </div>
        ) : null}

        {/* Article Popup Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-[#00000053] bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white my-10 rounded-xl max-w-3xl w-full max-h-full overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-3">
                  {selectedArticle.category && (
                    <span className="text-[#A5D4DC] text-sm font-medium">
                      {selectedArticle.category}
                    </span>
                  )}
                  {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 ml-auto">
                      {selectedArticle.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#D7E2E9] px-3 py-1 rounded-full text-sm text-[#30486c]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[#415A80] mb-4">
                  {selectedArticle.title}
                </h3>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock size={16} className="mr-1" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <div className="prose prose-blue max-w-none">
                  {selectedArticle.fullContent
                    .split("\n\n")
                    .map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200">
                  <button
                    onClick={closePopup}
                    className="w-full py-3 bg-[#415A80] text-white rounded-lg font-medium hover:bg-[#415A80]/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
