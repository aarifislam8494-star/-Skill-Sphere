"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photoUrl
    });
    
    setLoading(false);

    if (error) {
      toast.error(error.message || "Failed to register.");
    } else {
      toast.success("Account created successfully!");
      router.push("/login");
    }
  };

  const handleGoogleLogin = async () => {
     try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/"
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
     <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row bg-base-100 overflow-hidden">
      {/* Left Side: Illustration & Branding */}
      <div className="hidden md:flex md:w-5/12 bg-secondary relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="z-10 text-white max-w-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/logo.png" alt="SkillSphere" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-3xl font-black tracking-tighter">SkillSphere</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Begin Your Skill Discovery Today.</h1>
          <p className="text-xl text-secondary-content/80 leading-relaxed">
            Create an account and unlock a world of possibilities. Learn from the best and build your career.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-bold">Access to 500+ Premium Courses</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-bold">Verified Certificates of Completion</p>
            </div>
          </div>
        </div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-12 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-base-200/50">
        <div className="w-full max-w-lg bg-base-100 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-secondary/5 border border-base-300">
          <div className="mb-8">
            <h2 className="text-4xl font-black text-base-content mb-2">Create Account</h2>
            <p className="text-base-content/60 font-medium">Join SkillSphere and start learning.</p>
          </div>

          <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold text-base-content/70">Full Name</span>
              </label>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:bg-base-100 transition-all pl-12" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

              <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold text-base-content/70">Email Address</span>
              </label>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:bg-base-100 transition-all pl-12" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold text-base-content/70">Avatar URL (Optional)</span>
              </label>
              <div className="relative group">
                <input 
                  type="url" 
                  placeholder="https://example.com/photo.jpg" 
                  className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:bg-base-100 transition-all pl-12" 
                  value={photoUrl} 
                  onChange={(e) => setPhotoUrl(e.target.value)} 
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

             <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold text-base-content/70">Password</span>
              </label>
              <div className="relative group">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:bg-base-100 transition-all pl-12" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>


            <button type="submit" className="btn btn-secondary md:col-span-2 w-full h-14 rounded-2xl text-white font-bold text-lg shadow-lg shadow-secondary/30 mt-4" disabled={loading}>
              {loading ? <span className="loading loading-spinner loading-md"></span> : "Create Account"}
            </button>
          </form>

         <div className="divider my-8 text-base-content/30 text-xs font-bold uppercase tracking-widest">or register with</div>

          <button 
            type="button" 
            onClick={handleGoogleLogin} 
            className="btn btn-outline w-full h-14 rounded-2xl gap-3 border-base-300 hover:bg-base-200 hover:border-base-300 hover:text-base-content transition-all duration-300 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            <span className="font-bold">Register with Google</span>
          </button>

          <p className="text-center mt-8 font-medium text-base-content/60">
            Already have an account? <Link href="/login" className="text-secondary font-bold hover:underline">Sign in instead</Link>
          </p>
        </div>
      </div>
    </div>
  );
}