"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "../../../lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center py-40">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    router.push("/login?callbackUrl=/profile/update");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { data, error } = await authClient.updateUser({
      name: name,
      image: image
    });
    
    setLoading(false);
    
    if (error) {
      toast.error(error.message || "Failed to update profile.");
    } else {
      toast.success("Profile updated successfully!");
      router.push("/profile");
      router.refresh();
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-base-200/30 py-12 px-4 flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link href="/profile" className="btn btn-ghost btn-sm gap-2 pl-0 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Profile
            </Link>
            <h1 className="text-4xl font-black text-base-content">Edit Profile</h1>
          </div>
           </div>

        <div className="card bg-base-100 shadow-2xl rounded-[2.5rem] border border-base-300 overflow-hidden">
          <div className="card-body p-8 sm:p-12">
            <form onSubmit={handleUpdate} className="space-y-8">
              {/* Avatar Section */}
              <div className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-base-200/50 rounded-3xl border border-base-300/50">
                <div className="avatar ring-offset-4 ring-offset-base-100 ring-4 ring-primary rounded-full overflow-hidden shadow-2xl">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-base-300">
                    <img 
                      src={image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                      alt="Avatar Preview" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-1">Your Profile Photo</h3>
                  <p className="text-sm text-base-content/60 mb-4">This will be displayed on your public profile and course interactions.</p>
                </div>
              </div>

               {/* Form Fields */}
              <div className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-base-content/70">Display Name</span>
                  </label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:bg-base-100 transition-all pl-12"
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-base-content/70">Avatar Image URL</span>
                  </label>
                  <div className="relative group">
                    <input 
                      type="url" 
                      placeholder="https://example.com/your-photo.jpg" 
                      className="input input-bordered w-full h-14 rounded-2xl bg-base-200/50 border-base-300 focus:bg-base-100 transition-all pl-12"
                      value={image} 
                      onChange={(e) => setImage(e.target.value)} 
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <label className="label">
                    <span className="label-text-alt text-base-content/50 italic">Provide a direct link to an image file (PNG, JPG).</span>
                  </label>
                </div>
              </div>

                {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-base-200">
                <Link href="/profile" className="btn btn-ghost h-14 rounded-2xl flex-1 font-bold order-2 sm:order-1">
                  Discard Changes
                </Link>
                <button type="submit" className="btn btn-primary h-14 rounded-2xl flex-1 text-white font-bold text-lg shadow-lg shadow-primary/30 order-1 sm:order-2" disabled={loading}>
                  {loading ? <span className="loading loading-spinner loading-md"></span> : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}