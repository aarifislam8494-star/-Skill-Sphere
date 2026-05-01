import React from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "../data/courses.json";

export default function TrendingCourses() {
  const trendingCourses = [...courses].reverse().slice(0, 3);

  return (
     <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full bg-base-200/40 rounded-[2.5rem] mt-8 mb-4 border border-base-300/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-10 relative z-10">
        <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl font-black tracking-tight">Trending Now</h2>
          <p className="text-base-content/50 font-medium text-sm">Most popular courses this week</p>
        </div>
      </div>
      
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {trendingCourses.map((course) => (

           <Link href={`/courses/${course.id}`} key={course.id} className="group flex bg-base-100 p-3 rounded-3xl border border-base-200 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300">
            <div className="w-24 h-24 sm:w-28 sm:h-28 relative shrink-0 rounded-2xl overflow-hidden shadow-inner bg-base-200">
              <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-col justify-center px-4 overflow-hidden">
              <span className="text-[10px] uppercase tracking-widest font-black text-secondary mb-1 opacity-70">New Release</span>
              <h3 className="text-base md:text-lg font-bold leading-tight line-clamp-2 group-hover:text-secondary transition-colors mb-1">{course.title}</h3>
              <p className="text-sm font-medium text-base-content/40 truncate">By {course.instructor}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}