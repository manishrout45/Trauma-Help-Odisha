import {
  FaUser,
  FaUsers,
  FaHandsHelping,
  FaUserTie,
} from "react-icons/fa";

const WhoThisIsFor = () => {
  return (
    <section className="w-full bg-[#223B73] py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – Content */}
        <div className="text-white order-2 lg:order-1">
          <span className="text-sm uppercase tracking-wider text-red-400 font-semibold">
            Support For Everyone
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            You Are Not Alone
          </h2>

          <p className="mt-5 text-gray-200 leading-relaxed text-lg">
            Trauma affects individuals and communities in many ways. This
            platform offers guidance, understanding, and resources tailored to
            the unique needs of different people involved in the healing
            journey.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="flex gap-4">
              <FaUser className="text-red-400 text-xl mt-1" />
              <p className="text-gray-200">
                <strong className="text-white">Survivors</strong> seeking understanding, validation,
                and tools for healing.
              </p>
            </div>

            <div className="flex gap-4">
              <FaUsers className="text-red-400 text-xl mt-1" />
              <p className="text-gray-200">
                <strong className="text-white">Families</strong> wanting to better support loved ones
                affected by trauma.
              </p>
            </div>

            <div className="flex gap-4">
              <FaHandsHelping className="text-red-400 text-xl mt-1" />
              <p className="text-gray-200">
                <strong className="text-white">Caregivers</strong> and support workers seeking
                compassionate guidance.
              </p>
            </div>

            <div className="flex gap-4">
              <FaUserTie className="text-red-400 text-xl mt-1" />
              <p className="text-gray-200">
                <strong className="text-white">Professionals</strong> looking for trauma-informed
                resources and education.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT – Circular Visual with Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-red-400 flex items-center justify-center shadow-lg">

            {/* Image inside the circle */}
            <div className="w-60 h-60 md:w-64 md:h-64 rounded-full overflow-hidden relative shadow-lg">
              <img
                src="/assets/images/WhoThisisForImg.jpg" 
                alt="Who This Is For"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Text overlay on image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white bg-opacity-60 p-6 rounded-full">
                <h3 className="text-xl font-bold text-[#223B73]">Who This Is For</h3>
                <p className="mt-3 text-gray-800 text-sm leading-relaxed">
                  This platform is designed to support anyone affected by trauma,
                  directly or indirectly.
                </p>
              </div>
            </div>

            {/* Badges */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#223B73] px-4 py-1 rounded-full text-xs font-medium shadow">
              Survivors
            </span>

            <span className="absolute top-1/2 -right-6 bg-white text-[#223B73] px-4 py-1 rounded-full text-xs font-medium shadow">
              Families
            </span>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#223B73] px-4 py-1 rounded-full text-xs font-medium shadow">
              Caregivers
            </span>

            <span className="absolute top-1/2 -left-6 bg-white text-[#223B73] px-4 py-1 rounded-full text-xs font-medium shadow">
              Professionals
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoThisIsFor;
