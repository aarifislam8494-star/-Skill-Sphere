import React from "react";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/login?callbackUrl=/profile");
  }

  const user = session.user;

  return (
     <div className="min-h-[calc(100vh-80px)] bg-base-200/30 py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-2xl rounded-[3rem] border border-base-200 overflow-hidden">
          {/* Cover Header */}
          <div className="h-32 sm:h-48 bg-gradient-to-r from-primary via-secondary to-accent opacity-90 relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          </div>

           <div className="px-6 sm:px-12 pb-12 relative">
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-end gap-6 -mt-16 sm:-mt-24 mb-10">
              <div className="avatar">
                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-[2.5rem] ring-[12px] ring-base-100 shadow-2xl bg-base-200 overflow-hidden">
                  <img src={user.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Profile" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="flex-1 pb-4 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-1">{user.name}</h1>
                    <p className="text-base-content/50 font-bold flex items-center justify-center sm:justify-start gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                       </svg>
                       {user.email}
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <Link href="/profile/update" className="btn btn-primary rounded-2xl px-6 text-white font-bold shadow-lg shadow-primary/20">
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
               <div className="p-6 rounded-[2rem] bg-base-200/50 border border-base-300/50 group hover:bg-base-200 transition-colors">
                  <h3 className="text-xs text-base-content/40 font-black uppercase tracking-widest mb-2">Display Name</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">{user.name}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
               </div>
               
               <div className="p-6 rounded-[2rem] bg-base-200/50 border border-base-300/50 group hover:bg-base-200 transition-colors">
                  <h3 className="text-xs text-base-content/40 font-black uppercase tracking-widest mb-2">Email Identity</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">{user.email}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
               </div>

               <div className="p-6 rounded-[2rem] bg-base-200/50 border border-base-300/50 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs text-base-content/40 font-black uppercase tracking-widest mb-1">Account Status</h3>
                    <div className="badge badge-success badge-sm font-bold text-white px-3">Active Account</div>
                  </div>
                  <div className="w-12 h-12 bg-success/10 text-success rounded-2xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
               </div>

               <div className="p-6 rounded-[2rem] bg-base-200/50 border border-base-300/50 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs text-base-content/40 font-black uppercase tracking-widest mb-1">Member Journey</h3>
                    <p className="text-lg font-bold">Joined {new Date(user.createdAt).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
               </div>
            </div>
            <div className="mt-12 p-8 rounded-[2.5rem] bg-primary text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-black mb-2">Ready to learn more?</h2>
                 <p className="text-primary-content/80 font-medium mb-6 max-w-md">Continue your journey and explore our latest courses in development, design, and business.</p>
                 <Link href="/courses" className="btn btn-white bg-white text-primary border-none hover:bg-base-100 rounded-2xl px-8 font-black">
                   Browse All Courses
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}