"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import coursesData from "../../data/courses.json";

export default function AllCourses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setCourses(coursesData);
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
     <div className="py-12 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Discover Your Next Skill</h1>
        <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-10">
          Browse our curated selection of industry-leading courses designed to help you succeed in the digital age.
        </p>

        <div className="relative group max-w-xl mx-auto">
          <input 
            type="text" 
            placeholder="Search courses by title, instructor..." 
            className="input input-bordered w-full h-16 rounded-2xl bg-base-200/50 border-base-300 focus:bg-base-100 transition-all pl-14 text-lg shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-5 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

       {isLoading ? (
        <div className="flex flex-col justify-center items-center py-32 space-y-4">
          <span className="loading loading-spinner loading-lg text-primary scale-125"></span>
          <p className="text-base-content/40 font-bold animate-pulse">Loading amazing courses...</p>
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="text-center py-24 bg-base-200/30 rounded-[3rem] border-2 border-dashed border-base-300">
          <div className="mb-6 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-base-content/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-3xl font-black text-base-content/50 mb-4">No results for "{searchQuery}"</h3>
          <p className="text-base-content/40 mb-8 max-w-sm mx-auto">Try adjusting your keywords or browse our categories to find what you're looking for.</p>
          <button onClick={() => setSearchQuery("")} className="btn btn-primary btn-outline h-12 rounded-2xl px-8 font-bold">Clear Search</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredCourses.map((course) => (
             <div key={course.id} className="card bg-base-100 rounded-[2rem] border border-base-200/60 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden group">
              <figure className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden">
                <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary font-bold text-xs px-3 py-1.5 rounded-full shadow-sm z-10">
                  {course.category}
                </div>
                </figure>
              <div className="card-body p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="card-title text-xl md:text-2xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
                <p className="text-gray-500/90 flex-grow text-sm leading-relaxed line-clamp-3">{course.description}</p>
                
                <div className="divider my-4 opacity-50"></div>
                
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700 truncate max-w-[120px]">{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-warning shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-bold text-sm text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  
                  <Link href={`/courses/${course.id}`} className="btn btn-primary rounded-2xl px-6 text-white shadow-md hover:shadow-primary/40 transition-all font-bold">
                    Details
                  </Link>
                </div>
              </div>
            </div>
        ))}
        </div>
      )}
    </div>
  );
}