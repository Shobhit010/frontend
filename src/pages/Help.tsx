import React, { useState } from "react";

const Help: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [showContactModal, setShowContactModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const helpTopics = [
        {
            id: 1,
            title: "Getting Started",
            icon: "rocket_launch",
            description: "Learn how to navigate the platform and access your courses.",
            articles: [
                {
                    title: "How to sign up and create an account",
                    content: "To create an account, click on 'Sign Up' in the top right corner. Fill in your details including name, email, and password. Verify your email address through the link sent to your inbox. Once verified, you can log in and start exploring courses."
                },
                {
                    title: "Navigating the dashboard",
                    content: "Your dashboard is your central hub. From here, you can access your enrolled courses, view announcements, check test results, and manage your account settings. Use the sidebar menu to navigate between different sections."
                },
                {
                    title: "Accessing your enrolled courses",
                    content: "Go to 'My Courses' from the sidebar menu to see all your enrolled courses. Click on any course card to start learning. You can track your progress and resume from where you left off."
                },
            ],
        },
        {
            id: 2,
            title: "Courses & Tests",
            icon: "school",
            description: "Everything about video courses, test series, and assessments.",
            articles: [
                {
                    title: "How to start a video course",
                    content: "Navigate to 'My Courses' and select the course you want to study. Click on the first module to begin. Videos will play in sequence, and you can use the controls to pause, rewind, or adjust playback speed."
                },
                {
                    title: "Taking tests and viewing results",
                    content: "Access available tests from your course page or the Tests section. Complete the test within the given time limit. After submission, view your detailed results in 'My Results' section with performance analytics."
                },
                {
                    title: "Understanding your performance metrics",
                    content: "Your performance is tracked through accuracy, percentile, rank, and score. These metrics help you identify strengths and areas for improvement. Detailed analytics are available in the 'My Results' section."
                },
            ],
        },
        {
            id: 3,
            title: "Purchases & Billing",
            icon: "payment",
            description: "Manage your purchases, invoices, and payment methods.",
            articles: [
                {
                    title: "How to purchase a course",
                    content: "Browse available courses, click 'Enroll Now' on your desired course. Select your payment method and complete the transaction. You'll receive a confirmation email and instant access to the course."
                },
                {
                    title: "Downloading invoices",
                    content: "Go to 'My Purchases' from the sidebar. Find your completed purchase and click 'View Invoice'. On the invoice page, you can download a PDF copy for your records."
                },
                {
                    title: "Refund and cancellation policy",
                    content: "Refunds are available within 7 days of purchase if less than 20% of the course is consumed. Contact support with your order ID to initiate a refund. Processing takes 5-7 business days."
                },
            ],
        },
        {
            id: 4,
            title: "Account Settings",
            icon: "settings",
            description: "Manage your profile, preferences, and security settings.",
            articles: [
                {
                    title: "Updating your profile information",
                    content: "Go to Settings → Account Settings. Update your name, email, phone number, and profile picture. Click 'Save Changes' to apply updates. Some changes may require email verification."
                },
                {
                    title: "Changing your password",
                    content: "Navigate to Settings → Change Password. Enter your current password, then your new password twice for confirmation. Use a strong password with at least 8 characters including letters, numbers, and symbols."
                },
                {
                    title: "Managing notifications",
                    content: "In Account Settings, scroll to the Notifications section. Toggle email and push notifications for course updates, test reminders, and announcements according to your preferences."
                },
            ],
        },
    ];

    const faqs = [
        {
            q: "How do I reset my password?",
            a: "Go to Settings → Change Password to update your password securely. You'll need to enter your current password and then set a new one. If you've forgotten your password, use the 'Forgot Password' link on the login page.",
        },
        {
            q: "Can I download course materials?",
            a: "Yes, downloadable materials are available in each course module. Look for the download icon next to PDFs, notes, and other resources. Downloaded materials are available offline for your convenience.",
        },
        {
            q: "How long do I have access to purchased courses?",
            a: "Course access validity is mentioned on each course card. Most courses offer 1-year access from the date of purchase. You can check your course expiry date in 'My Courses' section.",
        },
        {
            q: "How can I track my test performance?",
            a: "Visit 'My Results' to view detailed performance reports and analytics. You'll see your scores, accuracy, percentile, rank, and question-wise analysis. Use these insights to improve your preparation.",
        },
        {
            q: "What payment methods are accepted?",
            a: "We accept all major credit/debit cards, UPI, net banking, and digital wallets. All transactions are secured with SSL encryption for your safety.",
        },
        {
            q: "Can I access courses on mobile devices?",
            a: "Yes, our platform is fully responsive and works on all devices including smartphones and tablets. Simply log in through your mobile browser to access your courses anywhere.",
        },
    ];

    // Filter help topics based on search
    const filteredTopics = helpTopics.filter(topic =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.articles.some(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In real app, this would send to backend
        alert(`Thank you ${contactForm.name}! Your message has been sent. We'll get back to you at ${contactForm.email} soon.`);
        setShowContactModal(false);
        setContactForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-[25px] gap-[15px]">
                <div>
                    <h2 className="text-xl font-bold text-black dark:text-white mb-1">
                        Help & Support
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Find answers to common questions and get support.
                    </p>
                </div>

                <div className="relative">
                    <i className="material-symbols-outlined absolute left-[15px] top-1/2 -translate-y-1/2 text-gray-400">
                        search
                    </i>
                    <input
                        type="text"
                        placeholder="Search help articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-white dark:bg-[#0c1427] h-[45px] rounded-md outline-none pl-[45px] pr-[20px] w-full md:w-[300px] border border-gray-100 dark:border-[#172036] focus:border-primary-500 transition-all text-black dark:text-white"
                    />
                </div>
            </div>

            {/* Contact Support Banner */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 mb-[25px] text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <i className="material-symbols-outlined text-[28px]">support_agent</i>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">Need More Help?</h3>
                            <p className="text-sm text-white/90">
                                Our support team is here to assist you 24/7
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowContactModal(true)}
                        className="bg-white text-primary-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                    >
                        Contact Support
                    </button>
                </div>
            </div>

            {/* Help Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">
                {filteredTopics.map((topic) => (
                    <div
                        key={topic.id}
                        className="bg-white dark:bg-[#0c1427] rounded-lg border border-gray-100 dark:border-[#172036] p-6 hover:shadow-md transition-all"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center shrink-0">
                                <i className="material-symbols-outlined text-primary-600 dark:text-primary-400 text-[28px]">
                                    {topic.icon}
                                </i>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-black dark:text-white mb-1">
                                    {topic.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {topic.description}
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-2">
                            {topic.articles.map((article, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => setSelectedArticle(article.title)}
                                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group w-full text-left"
                                    >
                                        <i className="material-symbols-outlined text-[16px] text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                                            arrow_forward
                                        </i>
                                        {article.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-[#0c1427] rounded-lg border border-gray-100 dark:border-[#172036] p-6">
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                    Frequently Asked Questions
                </h3>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 dark:border-[#172036] rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#15203c] transition-colors"
                            >
                                <h4 className="font-semibold text-black dark:text-white text-left">
                                    {faq.q}
                                </h4>
                                <i className={`material-symbols-outlined text-gray-400 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                                    expand_more
                                </i>
                            </button>
                            {expandedFaq === index && (
                                <div className="px-4 pb-4 pt-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Support Modal */}
            {showContactModal && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
                    onClick={() => setShowContactModal(false)}
                >
                    <div
                        className="bg-white dark:bg-[#0c1427] rounded-xl max-w-md w-full p-6 my-auto animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-black dark:text-white">Contact Support</h3>
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            >
                                <i className="material-symbols-outlined">close</i>
                            </button>
                        </div>

                        <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-200 dark:border-[#172036] rounded-lg bg-white dark:bg-[#15203c] text-black dark:text-white outline-none focus:border-primary-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-200 dark:border-[#172036] rounded-lg bg-white dark:bg-[#15203c] text-black dark:text-white outline-none focus:border-primary-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={contactForm.subject}
                                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-200 dark:border-[#172036] rounded-lg bg-white dark:bg-[#15203c] text-black dark:text-white outline-none focus:border-primary-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-200 dark:border-[#172036] rounded-lg bg-white dark:bg-[#15203c] text-black dark:text-white outline-none focus:border-primary-500 resize-none"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowContactModal(false)}
                                    className="flex-1 px-4 py-2 border border-gray-200 dark:border-[#172036] rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-[#15203c] transition-colors text-black dark:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Article Detail Modal */}
            {selectedArticle && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
                    onClick={() => setSelectedArticle(null)}
                >
                    <div
                        className="bg-white dark:bg-[#0c1427] rounded-xl max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto my-auto animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-black dark:text-white pr-8">
                                {selectedArticle}
                            </h3>
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 shrink-0"
                            >
                                <i className="material-symbols-outlined">close</i>
                            </button>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-400">
                                {helpTopics
                                    .flatMap(topic => topic.articles)
                                    .find(article => article.title === selectedArticle)?.content}
                            </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#172036]">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                Was this article helpful?
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        alert("Thank you for your feedback!");
                                        setSelectedArticle(null);
                                    }}
                                    className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg font-medium hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                                >
                                    👍 Yes
                                </button>
                                <button
                                    onClick={() => {
                                        alert("We're sorry this wasn't helpful. Please contact support for more assistance.");
                                        setSelectedArticle(null);
                                    }}
                                    className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                                >
                                    👎 No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Help;
