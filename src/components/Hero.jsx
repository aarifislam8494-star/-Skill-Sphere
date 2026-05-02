"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import courses from "../data/courses.json";

export default function Hero() {
  return (
    <section className="w-full relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
         modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="w-full h-auto min-h-[500px] lg:min-h-[60vh] pb-12 md:pb-16 bg-gradient-to-br from-base-200 via-base-100 to-base-300 flex items-center justify-center relative overflow-hidden">
              
              <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="max-w-7xl w-full px-4 md:px-8 py-8 md:py-12 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 z-10">
                <div className="flex-1 text-center md:text-left">
                  <span className="badge badge-primary badge-sm md:badge-lg mb-4 md:mb-6 shadow-sm font-semibold">{course.category}</span>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-base-content mb-4 md:mb-6 leading-tight tracking-tight">
                    {course.title}
                  </h1>
                  <p className="text-sm md:text-lg lg:text-xl text-base-content/70 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed line-clamp-3 md:line-clamp-none">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-6 text-base-content/80 mb-6 md:mb-10 font-medium text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 md:gap-2 bg-base-100 py-1 px-2 md:py-1.5 md:px-3 rounded-full shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="truncate max-w-[80px] md:max-w-none">{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 bg-base-100 py-1 px-2 md:py-1.5 md:px-3 rounded-full shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-warning" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 bg-base-100 py-1 px-2 md:py-1.5 md:px-3 rounded-full shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 bg-base-100 py-1 px-2 md:py-1.5 md:px-3 rounded-full shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{course.level}</span>
                    </div> 
                  </div>
                   <button className="btn btn-primary btn-sm md:btn-lg text-white group shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-full px-6 md:px-10">
                    Enroll Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                     </button>
                </div>

                <div className="flex-1 flex justify-center md:justify-end mb-4 md:mb-0">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] p-1.5 md:p-2 bg-gradient-to-tr from-primary to-secondary rounded-full shadow-2xl hover:scale-105 transition-transform duration-500 shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-base-100 bg-base-200 relative">
                      <Image 
                        src={course.image} 
                        alt={course.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-6 bg-white/95 backdrop-blur-md p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-3 border border-white/40 animate-bounce delay-150 scale-75 md:scale-100 transform origin-bottom-left z-20">
                      <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 text-white">
                          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.87a.75.75 0 00-1.151.081 9 9 0 1015.66 2.864 7.547 7.547 0 01-2.029 4.887.75.75 0 00-.056 1.054 6.969 6.969 0 001.378 1.488 4.5 4.5 0 01-5.496-5.877z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Status</p>
                        <p className="text-sm md:text-base font-extrabold text-gray-900 leading-none">Trending</p>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
            </div>
          </SwiperSlide>
           ))}
      </Swiper>
    </section>
  );
}
