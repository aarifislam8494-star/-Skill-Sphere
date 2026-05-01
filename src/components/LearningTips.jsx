import React from "react";

export default function LearningTips() {
  const tips = [
    { title: "Pomodoro Technique", desc: "Study for 25 minutes, then take a 5-minute break.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-primary", bg: "bg-primary/10" },
    { title: "Active Recall", desc: "Test yourself on what you've learned instead of just re-reading.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-secondary", bg: "bg-secondary/10" },
    { title: "Spaced Repetition", desc: "Review material at increasing intervals to improve retention.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", color: "text-accent", bg: "bg-accent/10" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Master Your Study Habits</h2>
        <p className="text-base-content/60 text-lg font-medium">Science-backed techniques to help you learn faster and retain more information.</p>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tips.map((tip, idx) => (

          <div key={idx} className="group p-8 rounded-[2.5rem] bg-base-100 border border-base-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 ${tip.bg} rounded-bl-[5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700 opacity-50`}></div>
            
            <div className="relative z-10">
              <div className={`w-16 h-16 ${tip.bg} ${tip.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tip.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3">{tip.title}</h3>
              <p className="text-base-content/60 font-medium leading-relaxed">{tip.desc}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-base-200 relative z-10 flex items-center gap-2 text-sm font-bold text-primary cursor-pointer hover:gap-3 transition-all">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}