import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import courses from "@/data/courses.json";

export default async function CourseDetails({ params }) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("auth")?.value === "true";
  const { id } = await params;

  if (!isLoggedIn) {
    redirect(`/login?callbackUrl=/courses/${id}`);
  }

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="text-center py-20 text-2xl font-bold">Course not found</div>;
  }

  const curriculum = [
    "Introduction & Setup",
    "Core Fundamentals",
    "Advanced Concepts",
    "Real-World Projects",
    "Final Assessment"
  ];

  return (
    <div className="py-16 px-8 max-w-5xl mx-auto w-full">
      <div className="bg-base-100 shadow-xl border border-base-200 rounded-3xl overflow-hidden">
        <div className="relative h-[400px] w-full">
          <Image src={course.image} alt={course.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center p-10">
             <div className="text-white max-w-2xl">
                <span className="badge badge-primary mb-4">{course.category}</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-gray-200 mb-6">{course.description}</p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{course.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{course.level}</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
        <div className="p-10 flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <ul className="steps steps-vertical w-full">
              {curriculum.map((item, idx) => (
                <li key={idx} className="step step-primary w-full text-left">{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
             <div className="card bg-base-200 shadow-md">
               <div className="card-body">
                 <h3 className="card-title text-xl mb-4">Ready to start?</h3>
                 <p className="text-sm text-gray-600 mb-6">Join thousands of students and level up your skills today.</p>
                 <button className="btn btn-primary w-full text-white btn-lg">Enroll Now</button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}