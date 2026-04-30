import React from "react";
import Image from "next/image";
import courses from "@/data/courses.json";

export default function PopularCourses() {
  const topCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-3 mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <h2 className="text-3xl font-bold">Popular Courses</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topCourses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300">
            <figure className="relative h-56 w-full">
              <Image 
                src={course.image} 
                alt={course.title}
                fill
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl h-14 items-start">{course.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm text-gray-600">{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">{course.rating}</span>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-outline btn-primary w-full group">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}