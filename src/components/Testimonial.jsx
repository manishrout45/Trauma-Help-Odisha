import React, { useEffect, useState } from "react";
import {
  Star,
  Phone,
  User,
  Mail,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

const testimonials = [
  {
    name: "Rohit Verma",
    role: "Road Accident Survivor",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text:
      "After my accident, the Trauma Help team acted immediately. Their quick response and calm guidance saved my life when every second mattered.",
  },
  {
    name: "Ananya Singh",
    role: "Family Member of Trauma Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "We were completely overwhelmed, but Trauma Help guided us step by step. Their support during the emergency gave us strength and hope.",
  },
  {
    name: "Suresh Patel",
    role: "Workplace Injury Patient",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    text:
      "From first contact to hospital coordination, everything was handled professionally. Trauma Help truly understands emergency care.",
  },
];

export default function TraumaTestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#223B73]/5 via-white to-[#223B73]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">

          {/* LEFT — TESTIMONIALS */}
          <div className="relative flex flex-col justify-center px-6 md:px-10">

            {/* Decorative line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#223B73] to-[#223B73]/70 rounded-full hidden lg:block" />

            {/* Label */}
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 mb-6">
              <Star className="w-4 h-4" />
              Voices of Recovery
            </span>

            {/* Heading */}
            <h2 className="fade-right text-4xl md:text-5xl font-extrabold text-[#223B73] leading-tight mb-10">
              When <span className="text-red-400">Every Second</span> Matters,
              <br /> People Trust Us
            </h2>

            {/* Quote */}
            <blockquote className="fade-up relative max-w-xl">
              <span className="absolute -top-6 -left-6 text-7xl text-[#223B73]/10 font-serif">
                “
              </span>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                {current.text}
              </p>
            </blockquote>

            {/* Profile */}
            <div className="flex items-center gap-5 mt-10">
              <div className="relative">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-red-100"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-white" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#223B73]">
                  {current.name}
                </h4>
                <p className="text-sm text-red-400 font-semibold uppercase tracking-wide">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-10 bg-red-400"
                      : "w-4 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="fade-right bg-gradient-to-br from-[#223B73] to-[#223B73]/90 rounded-3xl p-10 text-white shadow-xl flex flex-col justify-center">

            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <span className="uppercase tracking-wider text-sm font-semibold">
                Need Immediate Assistance?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Contact Trauma Help Now
            </h2>

            <p className="text-white/80 mb-8 max-w-md">
              If you or someone near you is facing a medical emergency or trauma
              situation, reach out immediately. Our team responds fast.
            </p>

            <form className="space-y-4">

              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400 w-4 h-4" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-red-400 w-4 h-4" />
                <textarea
                  rows="4"
                  placeholder="Describe the situation briefly"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-red-400 text-white font-semibold py-3 rounded-xl hover:bg-red-500 transition"
              >
                Request Immediate Help
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
