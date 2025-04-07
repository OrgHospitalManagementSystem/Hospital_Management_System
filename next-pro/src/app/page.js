"use client";
import React, { useState } from "react";
import {
  Shield,
  FileText,
  Calendar,
  CreditCard,
  BarChart2,
  UserPlus,
  Clipboard,
  MessageSquare,
  Stethoscope,
  LineChart,
  User,
  CalendarClock,
  FileCheck,
  ClipboardList,
  PieChart,
  Settings,
  Bell,
  ArrowRight,
  Smile,
  Coffee,
  Apple,
  Award,
  Clock,
  X,
} from "lucide-react";
export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const features = [
    {
      icon: <Shield size={28} />,
      title: "Secure Authentication",
      description:
        "Multi-level authentication system with biometric options for ultimate data protection",
    },
    {
      icon: <FileText size={28} />,
      title: "Patient Records Management",
      description:
        "Comprehensive digital health records with instant retrieval and secure sharing",
    },
    {
      icon: <Calendar size={28} />,
      title: "Smart Appointment System",
      description:
        "AI-powered scheduling with automated reminders and conflict resolution",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Digital Payments",
      description:
        "Multiple payment options with insurance verification and automated billing",
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Analytics Dashboard",
      description:
        "Comprehensive metrics and visualizations for data-driven decisions",
    },
    {
      icon: <UserPlus size={28} />,
      title: "Patient Portal",
      description:
        "Self-service platform for appointments, prescriptions and medical history",
    },
    {
      icon: <Clipboard size={28} />,
      title: "Medical Compliance",
      description:
        "Built-in compliance tools to meet healthcare regulations and standards",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Telemedicine",
      description:
        "Integrated video consultations with documentation and follow-up tools",
    },
  ];

  const userTypes = [
    {
      icon: <Stethoscope size={32} />,
      emoji: "👨‍⚕️",
      title: "For Doctors",
      color: "#003092",
      description: "Streamlined tools for healthcare professionals",
      features: [
        {
          icon: <CalendarClock size={18} />,
          text: "Manage appointments efficiently",
        },
        {
          icon: <FileCheck size={18} />,
          text: "Access complete patient records",
        },
        { icon: <ClipboardList size={18} />, text: "Generate medical reports" },
      ],
    },
    {
      icon: <LineChart size={32} />,
      emoji: "👩‍💼",
      title: "For Administrators",
      color: "#FFAB5B",
      description: "Powerful management and analytics tools",
      features: [
        { icon: <PieChart size={18} />, text: "Real-time system analytics" },
        { icon: <Settings size={18} />, text: "Configure system parameters" },
        { icon: <Bell size={18} />, text: "Monitor KPIs and alerts" },
      ],
    },
    {
      icon: <User size={32} />,
      emoji: "👨‍🦰",
      title: "For Patients",
      color: "#003092",
      description: "User-friendly self-service portal",
      features: [
        {
          icon: <Calendar size={18} />,
          text: "Book and reschedule appointments",
        },
        {
          icon: <FileText size={18} />,
          text: "View medical history and reports",
        },
        {
          icon: <CreditCard size={18} />,
          text: "Access bills and make payments",
        },
      ],
    },
  ];

  const articles = [
    {
      category: "Dental Health",
      title: "5 Effective Ways to Maintain Healthy Teeth",
      summary:
        "Discover the best daily practices for dental care and how to prevent common dental problems through simple routines",
      readTime: "5 min read",
      image:
        "https://i.pinimg.com/474x/6d/b0/12/6db012da6c2f885c3e67e6b69778fb4d.jpg",
      fullContent:
        "Maintaining healthy teeth is essential for overall wellbeing. Here are five effective ways to keep your teeth in optimal condition:\n\n1. **Brush properly twice a day** - Use fluoride toothpaste and a soft-bristled brush. Brush for two minutes, ensuring you reach all surfaces of your teeth.\n\n2. **Floss daily** - Flossing removes food particles and plaque from areas your toothbrush can't reach.\n\n3. **Limit sugary foods and drinks** - Sugar contributes to tooth decay by feeding harmful bacteria in your mouth.\n\n4. **Visit your dentist regularly** - Professional cleanings and check-ups every six months help catch problems early.\n\n5. **Use mouthwash** - Antibacterial mouthwash reduces acid in the mouth and cleans hard-to-brush areas.\n\nBy following these simple practices, you can significantly reduce your risk of cavities, gum disease, and other dental problems.",
    },
    {
      category: "Teeth Whitening",
      title: "Beverages That Cause Tooth Discoloration",
      summary:
        "A comprehensive guide on how different drinks affect your teeth color and ways to maintain a bright, white smile",
      readTime: "7 min read",
      image:
        "https://i.pinimg.com/474x/fb/9f/b6/fb9fb6c1d5b20a13f8c69d7398ce6783.jpg",
      fullContent:
        "Many favorite beverages can stain teeth over time. Understanding which drinks pose the greatest risk can help maintain a whiter smile.\n\n**Major Staining Culprits:**\n\n- **Coffee** - Contains tannins that cause color compounds to stick to teeth.\n- **Tea** - Particularly black tea, which has higher tannin content than coffee.\n- **Red Wine** - Contains chromogens, tannins, and acid that all contribute to staining.\n- **Cola** - Dark sodas contain chromogens and acids that damage enamel.\n- **Sports Drinks** - High acidity wears away enamel, making teeth more susceptible to staining.\n\n**Prevention Tips:**\n\n- Use a straw when drinking staining beverages\n- Rinse mouth with water after consumption\n- Wait 30 minutes before brushing (acidic drinks soften enamel)\n- Consider professional whitening treatments for existing stains\n\nModeration is key - you don't need to eliminate these beverages completely, but being mindful of consumption habits can help maintain a brighter smile.",
    },
    {
      category: "Nutrition",
      title: "Foods That Promote Healthy Teeth and Gums",
      summary:
        "List of the best foods that enhance your dental health and protect against decay and inflammation",
      readTime: "6 min read",
      image:
        "https://i.pinimg.com/474x/4a/84/bb/4a84bb80b019be225d09c0521187e4f2.jpg",
      fullContent:
        "Your diet plays a crucial role in dental health. These foods can help strengthen teeth and prevent dental problems:\n\n**Calcium-Rich Foods:**\n- Cheese, yogurt, and milk help neutralize acids and rebuild tooth enamel\n- Almonds and leafy greens provide calcium without added sugars\n\n**Crunchy Fruits and Vegetables:**\n- Apples, carrots, and celery act as natural toothbrushes\n- Their crisp texture helps clean teeth and massage gums\n- High water content stimulates saliva production\n\n**Vitamin C Foods:**\n- Citrus fruits, strawberries, and bell peppers strengthen blood vessels and connective tissue\n- Vitamin C is essential for gum health and preventing gingivitis\n\n**Phosphorus-Rich Foods:**\n- Eggs, fish, and lean meats contain phosphorus that works with calcium to rebuild tooth enamel\n\n**Green and Black Teas:**\n- Contain polyphenols that reduce bacteria and prevent plaque formation\n\nIncorporating these foods into your regular diet can significantly improve your oral health while benefiting your overall wellbeing.",
    },
    {
      category: "Orthodontics",
      title: "Everything You Need to Know About Modern Braces",
      summary:
        "Compare different types of dental braces and the advantages and disadvantages of each option",
      readTime: "8 min read",
      image:
        "https://i.pinimg.com/474x/b8/6d/d9/b86dd9a3ed7acb84a3c603fd0585da70.jpg",
      fullContent:
        "Modern orthodontics offers several options beyond traditional metal braces. Here's a comparison of the most common types:\n\n**Traditional Metal Braces:**\n- Most affordable option\n- Highly effective for complex issues\n- Most visible option\n- Average treatment time: 18-24 months\n\n**Ceramic Braces:**\n- Clear or tooth-colored brackets\n- Less visible than metal braces\n- Slightly more expensive\n- Can stain if not properly maintained\n- Average treatment time: 18-24 months\n\n**Lingual Braces:**\n- Attached to the back of teeth, completely hidden\n- Significantly more expensive\n- May affect speech initially\n- More difficult to clean\n- Average treatment time: 18-36 months\n\n**Clear Aligners (e.g., Invisalign):**\n- Nearly invisible removable trays\n- Can be removed for eating and cleaning\n- Requires strict compliance (20-22 hours daily wear)\n- Best for mild to moderate alignment issues\n- Average treatment time: 12-18 months\n\nThe best option depends on the complexity of your case, budget considerations, aesthetic preferences, and lifestyle factors. Consult with an orthodontist to determine which solution is right for you.",
    },
  ];

  const featuredArticle = {
    title: "Dental Implants: Process, Benefits, and Aftercare",
    summary:
      "A comprehensive guide to dental implant procedures, from surgery preparation to recovery tips and aftercare recommendations",
    image:
      "https://i.pinimg.com/474x/9e/7c/56/9e7c56b2ebe4abb027a23edddc57ab3f.jpg",
    tags: ["Dental Implants", "Oral Surgery", "Post-Op Care"],
    readTime: "10 min read",
    fullContent:
      "Dental implants have revolutionized tooth replacement, offering a permanent solution that looks, feels, and functions like natural teeth.\n\n**The Dental Implant Process:**\n\n1. **Initial Consultation** - Your dentist evaluates your oral health, takes X-rays, and determines if you're a good candidate for implants.\n\n2. **Treatment Planning** - A customized plan is created based on your specific needs. Some patients may require bone grafting if there's insufficient jawbone.\n\n3. **Implant Placement Surgery** - The titanium implant post is surgically placed into the jawbone. This outpatient procedure is typically done under local anesthesia.\n\n4. **Osseointegration** - The implant fuses with the jawbone over 3-6 months, creating a stable foundation for the replacement tooth.\n\n5. **Abutment Placement** - Once healing is complete, an abutment is attached to the implant, which will hold the crown.\n\n6. **Crown Placement** - Finally, a custom-made crown is attached to the abutment, completing the restoration.\n\n**Benefits of Dental Implants:**\n\n- Preserve facial structure and prevent bone loss\n- Look and function like natural teeth\n- Don't require modification of adjacent teeth\n- Long-lasting (can last a lifetime with proper care)\n- Improved speech and comfort compared to dentures\n- Allow normal eating and chewing\n\n**Aftercare Recommendations:**\n\n- Maintain excellent oral hygiene with regular brushing and flossing\n- Use a soft-bristled toothbrush around the implant area\n- Avoid hard or sticky foods during healing\n- Quit smoking for better healing and implant success\n- Attend regular dental check-ups\n- Consider a nightguard if you grind your teeth\n\nWhile dental implants have a high success rate (over 95%), proper aftercare is essential for long-term success and preventing complications like peri-implantitis.",
  };

  const closePopup = () => {
    setSelectedArticle(null);
    document.body.style.overflow = "auto";
  };

  const openArticlePopup = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = "hidden";
  };

  return (
    <main>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/herosection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-[#FFF2DB] text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to SmiloClinic
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Book your perfect getaway with ease
          </p>
          <a
            href="#book-now"
            className="bg-[#FFF2DB] text-[#003092] hover:text-[#FFF2DB] px-6 py-3 rounded-full font-medium hover:bg-[#003092] transition"
          >
            Book Now
          </a>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-[#FFF2DB] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-[#003092]/10 text-[#003092] font-medium text-sm mb-4">
              POWERFUL FEATURES
            </div>
            <h2 className="text-4xl font-bold text-[#003092] mb-4">
              Comprehensive Healthcare Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our integrated medical system offers cutting-edge features
              designed to streamline operations, enhance patient care, and
              optimize your healthcare facility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-[#003092]/20 hover:translate-y-[-5px] group"
              >
                <div className="bg-[#FFF2DB] text-[#003092] rounded-xl p-3 inline-flex mb-4 group-hover:bg-[#003092] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003092] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF2DB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#003092]/10 text-[#003092] font-medium text-sm mb-4">
              USER ROLES
            </span>
            <h2 className="text-4xl font-bold text-[#003092] mb-4">
              Tailored Experience For Everyone
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our system provides specialized tools and interfaces customized
              for each user type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#003092] to-[#FFAB5B] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-full text-white bg-[${type.color}]`}
                    >
                      <span className="text-3xl">{type.emoji}</span>
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-[#003092]">
                      {type.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">{type.description}</p>

                  <div className="mt-auto">
                    {type.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start mb-4 last:mb-0"
                      >
                        <div
                          className={`p-1 rounded-full bg-[${
                            index === 1 ? "#FFAB5B" : "#003092"
                          }]/10 text-[${
                            index === 1 ? "#FFAB5B" : "#003092"
                          }] mr-3 flex-shrink-0 mt-0.5`}
                        >
                          {feature.icon}
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#FFF2DB] text-[#003092] font-medium text-sm mb-4">
              KNOWLEDGE & PREVENTION
            </span>
            <h2 className="text-4xl font-bold text-[#003092] mb-4">
              Dental Tips & Useful Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the latest articles and tips in dentistry to help you
              maintain optimal oral and dental health
            </p>
          </div>

          {/* Featured Article */}
          <div className="bg-[#FFF2DB] rounded-2xl overflow-hidden mb-16 shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt="Featured dental article"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#003092] mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6">{featuredArticle.summary}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white px-3 py-1 rounded-full text-sm text-[#003092]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-1" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    <span>Published: April 5, 2025</span>
                  </div>
                </div>

                <button
                  onClick={() => openArticlePopup(featuredArticle)}
                  className="mt-8 flex items-center justify-center gap-2 bg-[#003092] text-white py-3 px-6 rounded-lg hover:bg-[#003092]/90 transition-colors"
                >
                  Read Full Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FFAB5B]/30"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003092] mb-2">
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
                      className="text-[#003092] hover:cursor-pointer font-medium text-sm flex items-center hover:text-[#FFAB5B] transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-[#FFF2DB] hover:cursor-pointer text-[#003092] rounded-lg font-medium border border-[#003092]/10 hover:bg-[#003092] hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
              View All Articles
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

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
                    <span className="text-[#FFAB5B] text-sm font-medium">
                      {selectedArticle.category}
                    </span>
                  )}
                  {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 ml-auto">
                      {selectedArticle.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#FFF2DB] px-3 py-1 rounded-full text-sm text-[#003092]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[#003092] mb-4">
                  {selectedArticle.title}
                </h3>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock size={16} className="mr-1" />
                    {selectedArticle.readTime}
                  </span>
                  {selectedArticle === featuredArticle && (
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar size={16} className="mr-1" />
                      Published: April 5, 2025
                    </span>
                  )}
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
                    className="w-full py-3 bg-[#003092] text-white rounded-lg font-medium hover:bg-[#003092]/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
