import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#223B73] text-white overflow-hidden">
      
      {/* RIGHT IMAGE WITH DIAGONAL CUT */}
      <div className="absolute top-0 right-0 h-full w-[45%] hidden md:block">
        <div
          className="h-full w-full"
          style={{
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src="https://img.freepik.com/premium-photo/two-doctors-giving-cpr-unconscious-male-patient-lying-bed-emergency-room_662251-485.jpg"
            alt="Trauma Emergency Care"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* TOP TEXT */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Immediate trauma care when <br />
            <span className="text-gray-200">every second matters</span>
          </h2>

          <button className="mt-6 bg-red-400 hover:bg-red-500 text-[#0f2b4f] font-semibold px-6 py-3 rounded-full text-sm">
            Get Emergency Help
          </button>

          {/* CONTACT ROW */}
          <div className="mt-8 flex flex-wrap gap-8 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-400" />
              Emergency: 112 / 108
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-red-400" />
              help@traumahelp.org
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-400" />
              Find Nearby Trauma Center
            </div>
          </div>
        </div>

        {/* LINKS + GRADIENT FIX */}
        <div className="relative mt-16">
          {/* GRADIENT OVER IMAGE AREA */}
          <div className="absolute -top-4 right-0 h-full w-[45%] hidden md:block 
  bg-gradient-to-l from-[#223B73]/95 via-[#223B73]/85 to-transparent 
  rounded-tr-full rounded-br-full 
  pointer-events-none" 
/>


          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold mb-3 text-white">Emergency Care</h4>
              <ul className="space-y-2">
                <li>Road Accident Help</li>
                <li>Critical Injury Care</li>
                <li>First Aid Guidance</li>
                <li>Ambulance Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Trauma Services</h4>
              <ul className="space-y-2">
                <li>24×7 Trauma Response</li>
                <li>ICU & Life Support</li>
                <li>Emergency Surgery</li>
                <li>Post-Trauma Care</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">About TraumaHelp</h4>
              <ul className="space-y-2">
                <li>Our Mission</li>
                <li>Hospital Network</li>
                <li>Medical Experts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Resources</h4>
              <ul className="space-y-2">
                <li>Emergency Guidelines</li>
                <li>Trauma Awareness</li>
                <li>Patient Stories</li>
              </ul>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 items-start">
              <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center hover:bg-red-400 transition">
                <FaFacebookF />
              </span>
              <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center hover:bg-red-400 transition">
                <FaTwitter />
              </span>
              <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center hover:bg-red-400 transition">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
