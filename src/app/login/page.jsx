"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";
import { toast } from "react-toastify";

  export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    setLoading(false);
    
    if (error) {
       toast.error(error.message || "Failed to log in.");
    } else {
       toast.success("Logged in successfully!");
      router.push("/");
      router.refresh();
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
      <div className="hidden md:flex md:w-1/2 bg-primary relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="z-10 text-white max-w-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/logo.png" alt="SkillSphere" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-3xl font-black tracking-tighter">SkillSphere</span>
          </div>
           <h1 className="text-5xl font-extrabold mb-6 leading-tight">Empower Your Future with Expert Knowledge.</h1>
          <p className="text-xl text-primary-content/80 leading-relaxed">
            Join thousands of learners worldwide and start your journey towards mastering new skills today.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-base-200 overflow-hidden shadow-md">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">Join 10k+ active students</p>
          </div>
        </div>
        
        {/* Floating circles for aesthetic */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-20 bg-base-200/50">
        <div className="w-full max-w-md bg-base-100 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-base-300">
          <div className="mb-10">
            <h2 className="text-4xl font-black text-base-content mb-3">Welcome Back!</h2>
            <p className="text-base-content/60 font-medium">Please enter your details to sign in.</p>
          </div>

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
            </svg>
            <span className="font-bold">Sign in with Google</span>
          </button>

          <div className="divider my-8 text-base-content/30 text-xs font-bold uppercase tracking-widest">or sign in with email</div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="form-control">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="form-control">
              <div className="flex justify-between items-center mb-1">
                <label className="label p-0">
                  <span className="label-text font-bold text-base-content/70">Password</span>
                </label>
                <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</Link>
              </div>
              <div className="relative group">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:bg-base-100 transition-all pl-12" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full h-14 rounded-2xl text-white font-bold text-lg shadow-lg shadow-primary/30 mt-4" disabled={loading}>
              {loading ? <span className="loading loading-spinner loading-md"></span> : "Sign In"}
            </button>
          </form>
           <p className="text-center mt-8 font-medium text-base-content/60">
            New to SkillSphere? <Link href="/register" className="text-primary font-bold hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}