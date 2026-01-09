import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full py-16 bg-gray-100" >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/team-doctors-putting-oxygen-mask-male-senior-patient-face_107420-63866.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80" // replace with your image path
            alt="Understanding Trauma"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div>
          <span className="text-sm uppercase tracking-wider text-red-400 font-semibold">
            About Trauma
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#223B73] leading-tight">
            What Is Trauma?
          </h2>

          <p className="mt-5 text-gray-800 leading-relaxed text-lg">
            Trauma is a deeply distressing or disturbing experience that can
            overwhelm a person’s ability to cope. It may result from a single
            event or repeated exposure to stress, leaving lasting emotional,
            mental, and physical effects.
          </p>

          <p className="mt-4 text-gray-800 leading-relaxed">
            Everyone experiences trauma differently, and its impact may not
            always be visible. Understanding trauma is the first step toward
            healing and support.
          </p>

          <div className="mt-6">
            <Link
              to="/about-trauma"
              className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-500 transition"
            >
              Learn more about trauma
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
