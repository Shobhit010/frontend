import React from "react";
import { Link } from "react-router-dom";

const ChangePasswordForm: React.FC = () => {
  return (
    <>
      <form>
        <div className="mb-[24px]">
          <h5 className="!text-lg !mb-[4px]">Change Password</h5>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Update your password to keep your account secure.
          </p>
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:gap-[25px]">
          <div className="mb-[20px] sm:mb-0 relative">
            <label className="mb-[8px] text-black dark:text-white font-semibold text-[13px] block">
              Old Password <span className="text-danger-500">*</span>
            </label>
            <input
              type="password"
              className="h-[42px] rounded-lg text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[16px] block w-full outline-0 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 text-[14px]"
              placeholder="Enter old password"
            />
          </div>

          <div className="mb-[20px] sm:mb-0 relative">
            <label className="mb-[8px] text-black dark:text-white font-semibold text-[13px] block">
              New Password <span className="text-danger-500">*</span>
            </label>
            <input
              type="password"
              className="h-[42px] rounded-lg text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[16px] block w-full outline-0 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 text-[14px]"
              placeholder="Enter new password"
            />
          </div>

          <div className="sm:col-span-2 mb-[20px] sm:mb-0 relative">
            <label className="mb-[8px] text-black dark:text-white font-semibold text-[13px] block">
              Confirm Password <span className="text-danger-500">*</span>
            </label>
            <input
              type="password"
              className="h-[42px] rounded-lg text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[16px] block w-full outline-0 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 text-[14px]"
              placeholder="Re-enter new password"
            />
          </div>
        </div>

        <div className="mt-[24px] flex items-center gap-4">
          <button
            type="button"
            className="font-semibold inline-flex items-center gap-2 transition-all rounded-lg text-[14px] py-[10px] px-[28px] bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25"
          >
            <i className="material-symbols-outlined text-[18px]">check</i>
            Change Password
          </button>

          <Link
            to="/authentication/forgot-password"
            className="text-primary-500 hover:text-primary-600 text-[13px] font-medium transition-colors"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </>
  );
};

export default ChangePasswordForm;