import React from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "../../data/courses.json";

export default function AllCourses() {
  return (
    <div className="py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of skill-based programs and level up your career today.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <figure className="relative h-56 w-full shrink-0">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
            </figure>
            <div className="card-body flex flex-col flex-grow">
              <h3 className="card-title text-xl items-start mb-2">{course.title}</h3>
              <p className="text-gray-600 flex-grow text-sm">{course.description}</p>
              <div className="flex items-center gap-2 mt-4">
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
              <div className="card-actions justify-end mt-4 shrink-0">
                <Link href={`/courses/${course.id}`} className="btn btn-primary w-full group">
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
    </div>
  );
}