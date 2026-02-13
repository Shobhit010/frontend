import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Invoice: React.FC = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const navigate = useNavigate();

    // Mock invoice data - in real app, this would be fetched based on orderId
    const invoiceData = {
        invoiceNumber: "INV-1023",
        orderId: orderId || "#ORD-00124",
        date: "25 Oct 2024",
        dueDate: "25 Nov 2024",
        status: "Paid",
        customer: {
            name: "Olivia John",
            email: "olivia@trigreexam.com",
            phone: "+91 98765 43210",
            address: "123 Main Street, New Delhi, 110001"
        },
        company: {
            name: "TrigreExam",
            email: "support@trigreexam.com",
            phone: "+91 11 1234 5678",
            address: "456 Education Hub, Connaught Place, New Delhi, 110001",
            gst: "29ABCDE1234F1Z5"
        },
        items: [
            {
                description: "SSC CGL Foundation Program (Comprehensive Preparation Course)",
                quantity: 1,
                price: 4999,
                total: 4999
            }
        ],
        subtotal: 4999,
        tax: 899.82,
        total: 5898.82
    };

    const handleDownload = () => {
        // In a real app, this would trigger PDF generation
        window.print();
    };

    return (
        <>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-[25px] gap-[15px]">
                <div>
                    <h2 className="text-xl font-bold text-black dark:text-white mb-1">
                        Invoice Details
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        View and download your invoice.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 bg-gray-100 dark:bg-[#172036] text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-[#1a2847] transition-colors flex items-center gap-2"
                    >
                        <i className="material-symbols-outlined text-[20px]">arrow_back</i>
                        Back
                    </button>
                    <button
                        onClick={handleDownload}
                        className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                        <i className="material-symbols-outlined text-[20px]">download</i>
                        Download PDF
                    </button>
                </div>
            </div>

            {/* Invoice Card */}
            <div className="bg-white dark:bg-[#0c1427] rounded-xl border border-gray-100 dark:border-[#172036] p-8 md:p-12 max-w-4xl mx-auto">
                {/* Invoice Header */}
                <div className="flex flex-col md:flex-row justify-between mb-8 pb-8 border-b border-gray-200 dark:border-[#172036]">
                    <div>
                        <h1 className="text-3xl font-bold text-black dark:text-white mb-2">INVOICE</h1>
                        <p className="text-gray-500 dark:text-gray-400">#{invoiceData.invoiceNumber}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-semibold">
                            {invoiceData.status}
                        </span>
                    </div>
                </div>

                {/* Company & Customer Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* From */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">From</h3>
                        <h4 className="text-lg font-bold text-black dark:text-white mb-2">{invoiceData.company.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {invoiceData.company.address}<br />
                            {invoiceData.company.email}<br />
                            {invoiceData.company.phone}<br />
                            GST: {invoiceData.company.gst}
                        </p>
                    </div>

                    {/* To */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Bill To</h3>
                        <h4 className="text-lg font-bold text-black dark:text-white mb-2">{invoiceData.customer.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {invoiceData.customer.address}<br />
                            {invoiceData.customer.email}<br />
                            {invoiceData.customer.phone}
                        </p>
                    </div>
                </div>

                {/* Invoice Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 dark:bg-[#15203c] rounded-lg">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Order ID</p>
                        <p className="font-semibold text-black dark:text-white">{invoiceData.orderId}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Invoice Date</p>
                        <p className="font-semibold text-black dark:text-white">{invoiceData.date}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Due Date</p>
                        <p className="font-semibold text-black dark:text-white">{invoiceData.dueDate}</p>
                    </div>
                </div>

                {/* Items Table */}
                <div className="mb-8">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-gray-200 dark:border-[#172036]">
                                <th className="text-left py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Description</th>
                                <th className="text-center py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Qty</th>
                                <th className="text-right py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Price</th>
                                <th className="text-right py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceData.items.map((item, index) => (
                                <tr key={index} className="border-b border-gray-100 dark:border-[#172036]">
                                    <td className="py-4 text-sm text-gray-800 dark:text-gray-200">{item.description}</td>
                                    <td className="py-4 text-sm text-gray-800 dark:text-gray-200 text-center">{item.quantity}</td>
                                    <td className="py-4 text-sm text-gray-800 dark:text-gray-200 text-right">₹{item.price.toFixed(2)}</td>
                                    <td className="py-4 text-sm font-semibold text-gray-900 dark:text-white text-right">₹{item.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Totals */}
                <div className="flex justify-end">
                    <div className="w-full md:w-80">
                        <div className="flex justify-between py-2 text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                            <span className="font-semibold text-gray-900 dark:text-white">₹{invoiceData.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-2 text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Tax (18% GST)</span>
                            <span className="font-semibold text-gray-900 dark:text-white">₹{invoiceData.tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-3 border-t-2 border-gray-200 dark:border-[#172036] mt-2">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">₹{invoiceData.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-[#172036]">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        Thank you for your purchase! For any queries, please contact us at {invoiceData.company.email}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Invoice;
