import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full py-16 bg-gray-100" >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="fade-right relative">
          <img
            src="https://img.freepik.com/free-photo/team-doctors-putting-oxygen-mask-male-senior-patient-face_107420-63866.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80" // replace with your image path
            alt="Understanding Trauma"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div>
          <span className="text-sm uppercase tracking-wider text-red-400 font-semibold">
            About Us
          </span>

          <h2 className="fade-left mt-3 text-3xl md:text-4xl font-bold text-[#223B73] leading-tight">
            TraumaHelp Odisha- A Guide to Trauma Care!
          </h2>

          <p className="fade-up mt-5 text-gray-800 leading-relaxed text-lg">
  Whether you have undergone an accident, a sudden sad moment, or any traumatic
  event, Traumahelp Odisha helps you recognize trauma types and manage trauma
  aftereffects.
</p>

<p className="fade-up mt-4 text-gray-800 leading-relaxed">
  It is an initiative of Dr. Somanath Prasad Jena, a leading neurologist and
  trauma care specialist in Odisha. Through this page, you can access:
</p>

<ul className="fade-right mt-4 list-disc list-inside text-gray-800 space-y-2">
  <li>Emergency Trauma Care</li>
  <li>24×7 Trauma Services, ICU, and Life Support</li>
  <li>Post-Trauma Guidance Whenever You Need</li>
</ul>


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
