import React from "react";

export default function LearningTips() {
  const tips = [
    { title: "Pomodoro Technique", desc: "Study for 25 minutes, then take a 5-minute break.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Active Recall", desc: "Test yourself on what you've learned instead of just re-reading.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Spaced Repetition", desc: "Review material at increasing intervals to improve retention.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }
  ];

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto w-full bg-base-200 rounded-3xl my-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Learning Tips</h2>
        <p className="text-gray-600">Boost your productivity with these proven strategies</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip, idx) => (
          <div key={idx} className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tip.icon} />
              </svg>
              <h3 className="card-title text-lg">{tip.title}</h3>
              <p className="text-sm text-gray-500">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}