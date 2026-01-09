import React from "react";
import { FaPhoneAlt, FaExclamationTriangle } from "react-icons/fa";

const EmergencyHelpSection = () => {
  return (
    <section className="w-full bg-[#223B73]">
      <div className="max-w-7xl mx-auto px-4 py-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left Content */}
          <div className="flex items-center gap-3 text-white text-center md:text-left">
            <FaExclamationTriangle className="text-yellow-400 text-2xl flex-shrink-0" />
            <p className="text-sm md:text-base font-medium leading-relaxed">
              If you or someone near you is in immediate danger, seek emergency
              assistance without delay.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">

            <a
              href="tel:112"
              className="inline-flex items-center gap-2 bg-red-400 text-white font-semibold px-5 py-2.5 rounded-lg
              hover:bg-red-500 transition shadow-md"
            >
              <FaPhoneAlt className="text-sm" />
              Emergency: 112
            </a>

            <a
              href="tel:+919999666555"
              className="inline-flex items-center gap-2 border border-white/70 text-white font-semibold px-5 py-2.5 rounded-lg
              hover:bg-white hover:text-[#223B73] transition"
            >
              Crisis Helpline
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EmergencyHelpSection;
