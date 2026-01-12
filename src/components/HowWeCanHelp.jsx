import {
  FaBolt,
  FaClock,
  FaBrain,
} from "react-icons/fa";

const HowWeCanHelp = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Section Heading */}
        <span className="text-sm uppercase tracking-wider text-red-400 font-semibold">
          Support & Guidance
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          What is Trauma and Its Types
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          A trauma is an emotional response to an event, whether it’s due to an accident,
          a sad event, or a natural disaster, causing emotional, mental, and physical disturbances.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              title: "Acute Trauma",
              desc:
                "This type of trauma is sudden, unexpected, and lasts only for a few seconds. An accident, a natural disaster, a sudden loss of a beloved person, or sexual assault are all examples of Acute Trauma. Common symptoms include irritability, cyberchondria, anxiety, flashbacks of the event, public fear, etc.",
              icon: <FaBolt />,
              img: "https://img.freepik.com/free-photo/lonely-traumatised-frustrated-ill-woman-holding-head-hands-feeling-vulnerable_482257-10552.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
            },
            {
              title: "Chronic Trauma",
              desc:
                "This type of trauma occurs when someone is exposed to prolonged traumatic experiences. When a person undergoes domestic violence, long-term abuse, bullying, or illness, the longevity tends to mental imbalance and physical instability.",
              icon: <FaClock />,
              img: "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656083.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
            },
            {
              title: "Complex Trauma",
              desc:
                " When a person undergoes multiple traumatic events for a long time, it is called complex trauma—for example, repeated accidents, being trapped in a relationship, abuse, or neglect, etc. These conditions lead to low self-esteem, memory loss, fear of public gatherings, difficulty trusting, etc. ",
              icon: <FaBrain />,
              img: "https://img.freepik.com/free-photo/person-suffering-from-anxiety_23-2150981885.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-3 overflow-visible"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-3xl"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-white/75 rounded-3xl" />

              {/* Icon (OVER the card) */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-white text-3xl shadow-lg z-20">
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-8 pt-14">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Button */}
                <div className="mt-auto pt-6">
                  <button className="px-6 py-3 bg-red-400 text-white rounded-full font-semibold hover:bg-red-500 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelp;
