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

          <h2 className="fade-right mt-3 text-3xl md:text-4xl font-bold leading-tight">
            How to Manage Trauma Aftereffects
          </h2>

          <p className="fade-up mt-5 text-gray-200 leading-relaxed text-lg">
            When a person undergoes a traumatic situation, he/she may experience sudden emotional
            imbalance, including anger, anxiety, sadness, lack of concentration, or thinking about the
            traumatic event, etc. Therefore, it is essential to cope with trauma patients immediately after
            the event. Here are some tips to follow while managing traumatic effects.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="flex gap-4 items-start">
              <FaUser className="text-red-400 text-3xl shrink-0 mt-1" />
              <p className="fade-up text-gray-200">
                Try to calm the person with a simple massage, talking, a nice meal, exercise, or other
                favourite activities of that person.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <FaUsers className="text-red-400 text-3xl shrink-0 mt-1" />
              <p className="fade-up text-gray-200">
                Give prescribed medications to improve the situation that help reduce stress, anxiety,
                and help them to sleep peacefully.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <FaHandsHelping className="text-red-400 text-3xl shrink-0 mt-1" />
              <p className="fade-up text-gray-200">
                Do not use alcohol or drugs after a traumatic event, as this may lead to repeated
                thinking of that situation and anxiety.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <FaUserTie className="text-red-400 text-3xl shrink-0 mt-1" />
              <p className="fade-up text-gray-200">
                Seek professional help if the situation is uncontrollable. Contact any trauma center in
                Odisha, or simply inform TraumaHelp Odisha to get immediate access to trauma care.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT – Circular Visual with Image */}
        <div className="fade-right flex justify-center order-1 lg:order-2">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-red-400 flex items-center justify-center shadow-lg">

            <div className="w-60 h-60 md:w-64 md:h-64 rounded-full overflow-hidden relative shadow-lg">
              <img
                src="/assets/images/WhoThisisForImg.jpg"
                alt="Who This Is For"
                className="w-full h-full object-cover rounded-full"
              />
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
