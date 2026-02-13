
import React, { useState } from "react";

interface Announcement {
    id: number;
    title: string;
    description: string;
    detailedContent: string;
    category: "Exam Update" | "Content" | "System";
    status: "New" | "Important" | "Resolved";
    time: string;
    isNew?: boolean;
    pdfUrl?: string;
}

const Announcements: React.FC = () => {
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

    const announcements: Announcement[] = [
        {
            id: 1,
            title: "SSC CGL 2024 Exam Dates Announced",
            description: "The Staff Selection Commission has officially released the tentative schedule for the Tier-I examination.",
            detailedContent: `The Staff Selection Commission (SSC) has officially announced the exam dates for SSC CGL 2024. The Tier-I examination is scheduled to be conducted from March 15, 2024, to March 30, 2024.

Key Highlights:
• Tier-I Exam: March 15-30, 2024
• Tier-II Exam: Expected in June 2024
• Total Vacancies: 17,727 posts
• Application Deadline: February 28, 2024

Candidates are advised to start their preparation immediately and ensure all documents are ready for the application process. The admit cards will be released 15 days before the examination.

For detailed information, please refer to the official notification attached below.`,
            category: "Exam Update",
            status: "New",
            time: "2h ago",
            isNew: true,
            pdfUrl: "/pdfs/ssc-cgl-2024-notification.pdf"
        },
        {
            id: 2,
            title: "New Quantitative Aptitude Module Added",
            description: "We have updated the Advanced Mastery Program with 20 new lessons on Trigonometry and Geometry shortcuts.",
            detailedContent: `We're excited to announce the addition of a comprehensive Quantitative Aptitude module to our Advanced Mastery Program!

What's New:
• 20 new video lessons on Trigonometry
• Advanced Geometry shortcuts and tricks
• 150+ practice questions with detailed solutions
• 5 new mock tests specifically for Quant section
• Downloadable formula sheets and quick reference guides

This module is designed to help you master the most challenging topics in competitive exams. All enrolled students can access this content immediately.

Topics Covered:
1. Trigonometric Identities and Equations
2. Heights and Distances
3. Coordinate Geometry
4. Mensuration - 2D and 3D
5. Advanced Problem-Solving Techniques

Happy Learning!`,
            category: "Content",
            status: "New",
            time: "5h ago",
            isNew: true,
            pdfUrl: "/pdfs/quant-module-syllabus.pdf"
        },
        {
            id: 3,
            title: "Scheduled System Maintenance",
            description: "The platform will be undergoing scheduled maintenance on Sunday from 2 AM to 4 AM.",
            detailedContent: `Dear Students,

We will be performing scheduled system maintenance to improve platform performance and add new features.

Maintenance Schedule:
• Date: Sunday, February 18, 2024
• Time: 2:00 AM - 4:00 AM IST
• Duration: Approximately 2 hours

During this time:
❌ Platform will be temporarily unavailable
❌ Video courses and tests cannot be accessed
❌ Login functionality will be disabled

What to Expect After Maintenance:
✅ Faster video loading speeds
✅ Improved test interface
✅ Bug fixes and performance enhancements
✅ New dashboard features

We recommend downloading any study materials you need before the maintenance window. We apologize for any inconvenience and appreciate your patience.

Thank you for your understanding!`,
            category: "System",
            status: "Important",
            time: "1d ago",
        },
        {
            id: 4,
            title: "Tier-II Mock Test Results Live",
            description: "Results for the All India Mock Test held on Saturday are now available.",
            detailedContent: `The results for the All India Mock Test (Tier-II) conducted on Saturday, February 10, 2024, are now live!

Test Statistics:
• Total Participants: 45,234 students
• Average Score: 127/200
• Highest Score: 198/200
• Pass Percentage: 67%

Your Detailed Analysis Report Includes:
📊 Section-wise performance breakdown
📈 Percentile and rank analysis
🎯 Accuracy and speed metrics
📝 Question-wise solutions with explanations
🔍 Comparison with top performers
💡 Personalized improvement suggestions

How to Access:
1. Go to "My Results" section
2. Click on "All India Mock Test - Tier II"
3. Download your detailed scorecard

Top performers will receive special recognition certificates. Keep practicing and aim higher!

Best of luck for your preparation!`,
            category: "Exam Update",
            status: "Resolved",
            time: "2d ago",
            pdfUrl: "/pdfs/mock-test-analysis.pdf"
        },
        {
            id: 5,
            title: "New History Course Available",
            description: "Comprehensive Indian History course covering Ancient, Medieval, and Modern periods now available.",
            detailedContent: `We're thrilled to launch our comprehensive Indian History course, specially designed for competitive exam aspirants!

Course Highlights:
📚 100+ video lectures covering complete syllabus
📖 Ancient India - Indus Valley to Gupta Period
🏰 Medieval India - Delhi Sultanate to Mughal Empire
🇮🇳 Modern India - British Rule to Independence
📝 300+ MCQs with detailed explanations
🎯 Topic-wise tests and full-length mock exams

Special Features:
• Animated timelines for better understanding
• Mind maps for quick revision
• Important dates and events compilation
• Previous year questions analysis
• Monthly current affairs integration

Course Duration: 40 hours
Validity: 1 year from enrollment
Language: English & Hindi

Enroll now and get 20% discount for the first 100 students!`,
            category: "Content",
            status: "New",
            time: "3d ago",
            isNew: true,
            pdfUrl: "/pdfs/history-course-brochure.pdf"
        },
    ];

    const getCategoryColor = (category: Announcement["category"]) => {
        switch (category) {
            case "Exam Update":
                return "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400";
            case "Content":
                return "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400";
            case "System":
                return "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400";
            default:
                return "bg-gray-50 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400";
        }
    };

    const getStatusColor = (status: Announcement["status"]) => {
        switch (status) {
            case "New":
                return "bg-red-500 text-white";
            case "Important":
                return "bg-amber-500 text-white";
            case "Resolved":
                return "bg-green-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    const getCategoryIcon = (category: Announcement["category"]) => {
        switch (category) {
            case "Exam Update":
                return "event_note";
            case "Content":
                return "school";
            case "System":
                return "settings";
            default:
                return "notifications";
        }
    };

    return (
        <>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-[25px] gap-[15px]">
                <div>
                    <h2 className="text-xl font-bold text-black dark:text-white mb-1">
                        Announcements
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Stay updated with the latest news and platform updates.
                    </p>
                </div>

                <div className="relative">
                    <i className="material-symbols-outlined absolute left-[15px] top-1/2 -translate-y-1/2 text-gray-400">search</i>
                    <input
                        type="text"
                        placeholder="Search announcements..."
                        className="bg-white dark:bg-[#0c1427] h-[45px] rounded-md outline-none pl-[45px] pr-[20px] w-full md:w-[300px] border border-gray-100 dark:border-[#172036] focus:border-primary-500 transition-all text-black dark:text-white"
                    />
                </div>
            </div>

            {/* Announcements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {announcements.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedAnnouncement(item)}
                        className="bg-white dark:bg-[#0c1427] p-[18px] rounded-xl border border-gray-100 dark:border-[#172036] hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-500 transition-all duration-300 cursor-pointer group"
                    >
                        {/* Category Icon & Time */}
                        <div className="flex items-center justify-between mb-3">
                            <div className={`w-10 h-10 rounded-lg ${getCategoryColor(item.category)} flex items-center justify-center`}>
                                <i className="material-symbols-outlined text-[20px]">{getCategoryIcon(item.category)}</i>
                            </div>
                            <span className="text-xs text-gray-400">{item.time}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[15px] font-bold text-black dark:text-white mb-2 group-hover:text-primary-500 transition-colors line-clamp-2 leading-tight">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Footer: Category & Status */}
                        <div className="flex items-center justify-between">
                            <span className={`px-2 py-1 rounded-md text-[10px] font-semibold ${getCategoryColor(item.category)}`}>
                                {item.category}
                            </span>
                            {item.isNew && (
                                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${getStatusColor(item.status)}`}>
                                    {item.status}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal - Full Screen */}
            {selectedAnnouncement && (
                <div className="fixed inset-0 bg-white dark:bg-[#0a0e19] z-50 overflow-y-auto" onClick={() => setSelectedAnnouncement(null)}>
                    <div className="min-h-screen" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white dark:bg-[#0a0e19] border-b border-gray-200 dark:border-[#172036] z-10">
                            <div className="max-w-5xl mx-auto px-6 py-4">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-xl ${getCategoryColor(selectedAnnouncement.category)} flex items-center justify-center`}>
                                            <i className="material-symbols-outlined text-[24px]">{getCategoryIcon(selectedAnnouncement.category)}</i>
                                        </div>
                                        <div>
                                            <span className={`px-2 py-1 rounded-md text-xs font-semibold ${getCategoryColor(selectedAnnouncement.category)}`}>
                                                {selectedAnnouncement.category}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedAnnouncement(null)}
                                        className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-[#172036] flex items-center justify-center transition-colors"
                                    >
                                        <i className="material-symbols-outlined text-gray-500">close</i>
                                    </button>
                                </div>
                                <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
                                    {selectedAnnouncement.title}
                                </h2>
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <i className="material-symbols-outlined text-[16px]">schedule</i>
                                        {selectedAnnouncement.time}
                                    </span>
                                    {selectedAnnouncement.isNew && (
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${getStatusColor(selectedAnnouncement.status)}`}>
                                            {selectedAnnouncement.status}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="max-w-5xl mx-auto px-6 py-8">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-lg">
                                    {selectedAnnouncement.detailedContent}
                                </p>
                            </div>

                            {/* PDF Attachment */}
                            {selectedAnnouncement.pdfUrl && (
                                <div className="mt-8 p-6 bg-gray-50 dark:bg-[#0c1427] rounded-xl border border-gray-200 dark:border-[#172036]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                                                <i className="material-symbols-outlined text-red-600 dark:text-red-400 text-[32px]">picture_as_pdf</i>
                                            </div>
                                            <div>
                                                <p className="font-bold text-black dark:text-white text-lg">Official Document</p>
                                                <p className="text-sm text-gray-500">PDF Attachment</p>
                                            </div>
                                        </div>
                                        <a
                                            href={selectedAnnouncement.pdfUrl}
                                            download
                                            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                                        >
                                            <i className="material-symbols-outlined text-[20px]">download</i>
                                            Download PDF
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Announcements;
