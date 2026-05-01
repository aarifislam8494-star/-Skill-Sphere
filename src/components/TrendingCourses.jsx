import React from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "../data/courses.json";

export default function TrendingCourses() {
  const trendingCourses = [...courses].reverse().slice(0, 3);

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto w-full bg-base-200/50 rounded-3xl mt-8 mb-4">
      <div className="flex items-center gap-3 mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <h2 className="text-3xl font-bold">Trending & New Releases</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingCourses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id} className="card card-side bg-base-100 shadow-sm hover:shadow-md transition-all border border-base-200">
            <figure className="w-1/3 relative shrink-0">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
            </figure>
            <div className="card-body p-4 justify-center">
              <h3 className="card-title text-base line-clamp-2">{course.title}</h3>
              <p className="text-xs text-gray-500">{course.instructor}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}