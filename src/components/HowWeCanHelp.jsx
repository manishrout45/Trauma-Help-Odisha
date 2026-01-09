import { FaBookOpen, FaHandsHelping, FaUserShield } from "react-icons/fa";

const HowWeCanHelp = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Section Heading */}
        <span className="text-sm uppercase tracking-wider text-red-400 font-semibold">
          Support & Guidance
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          How We Can Help
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Healing from trauma takes time and care. We offer reliable information,
          practical tools, and access to professional support—so you never have
          to face it alone.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Education Card */}
          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
              <FaBookOpen />
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn what trauma is, how it affects the mind and body, and why
                your reactions are valid. Clear, compassionate information helps
                reduce fear and confusion.
              </p>
            </div>
          </div>

          {/* Coping Tools Card */}
          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
              <FaHandsHelping />
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coping Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Access gentle grounding exercises, breathing techniques, and
                self-care practices designed to help you feel safer and more
                in control during difficult moments.
              </p>
            </div>
          </div>

          {/* Professional Support Card */}
          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
              <FaUserShield />
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Find guidance on trauma-informed therapy options and learn when
                professional help may be the right step for your healing journey.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelp;
