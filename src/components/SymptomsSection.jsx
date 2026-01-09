import React from "react";
import {
  AlertCircle,
  Activity,
  Headphones,
  BatteryLow,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const traumaSymptoms = [
  { text: "Severe pain or bleeding", icon: AlertCircle },
  { text: "Dizziness, confusion, or disorientation", icon: Headphones },
  { text: "Weakness or fainting", icon: BatteryLow },
  { text: "Rapid heartbeat or shock", icon: HeartPulse },
  { text: "Emotional distress or panic", icon: Activity },
];

export default function TraumaSymptomsSection() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-[#223B73]/5 via-white to-[#223B73]/10 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-24 -left-32 w-96 h-96 bg-[#223B73] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-24 -right-32 w-96 h-96 bg-[#223B73] rounded-full blur-3xl opacity-15"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – IMAGE PANEL */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/medium-shot-paramedic-checking-man_1356031-8479.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
            alt="Trauma Awareness Illustration"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />
        </div>

        {/* RIGHT – SYMPTOMS LIST */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-100 text-red-400 text-sm font-semibold">
            <AlertCircle className="w-4 h-4" />
            Trauma Symptoms & Early Warning Signs
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#223B73] leading-tight">
            Don’t Ignore <span className="text-red-400">These Signals</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Trauma-related symptoms can appear immediately or develop over time.
            Recognizing them early helps you or your loved ones get urgent help.
          </p>

          {/* Symptom List */}
          <div className="mt-10 space-y-4">
            {traumaSymptoms.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition border border-[#223B73]/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-100 text-red-400 flex items-center justify-center group-hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-gray-800">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="#seek-help"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
              bg-red-400 text-white font-semibold 
              shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Know When to Seek Help
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
