import { FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative mt-10 text-gray-800 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/vector-illustration-medical-background-with-hexagons-crosses_120542-1284.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#223B73]/50"></div>

      {/* Decorative Blob */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-red-400/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
          <FaInfoCircle />
          Trauma Care Information
        </div>

        {/* Heading */}
        <h1 className="fade-right mt-6 text-3xl md:text-5xl font-bold">
          Trauma Care Awareness
        </h1>

        {/* Description */}
        <p className="fade-up mt-4 max-w-2xl mx-auto text-gray-200 text-base md:text-lg">
          Reliable information and resources related to trauma care
          and emergency preparedness in Odisha.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          {/* Primary Button */}
          <button className="bg-red-400 text-white px-6 py-3 rounded-full font-medium hover:bg-red-500 transition">
            Learn More
          </button>

          {/* Secondary Button */}
          <button className="flex items-center gap-2 border border-red-400 text-red-400 px-6 py-3 rounded-full font-medium hover:bg-red-400 hover:text-white transition">
            <FaMapMarkerAlt />
            Trauma Centers
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
