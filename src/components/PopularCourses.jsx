import React from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "../data/courses.json";

export default function PopularCourses() {
  const topCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <h2 className="text-2xl md:text-3xl font-bold">Popular Courses</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {topCourses.map((course) => (
          <div key={course.id} className="card bg-base-100 rounded-2xl border border-base-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col h-full overflow-hidden group">
            <figure className="relative h-48 sm:h-56 w-full shrink-0 overflow-hidden">
              <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                {course.category}
              </div>
               </figure>
            <div className="card-body p-5 md:p-6 flex flex-col flex-grow">
              <h3 className="card-title text-lg md:text-xl font-bold leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-200/50">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm text-gray-600 truncate">{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-warning shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-sm">{course.rating}</span>
                  </div>
                </div>
                <Link href={`/courses/${course.id}`} className="btn btn-primary btn-sm rounded-full px-5 text-white shadow-sm hover:shadow-md group-hover:scale-105 transition-all">
                  Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}