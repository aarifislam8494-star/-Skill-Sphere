"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "../../../lib/auth-client";
import toast from "react-hot-toast";
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
    <div className="py-16 px-4 flex justify-center items-center flex-1">
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Update Information</h2>
            <p className="text-gray-500">Modify your personal profile details below.</p>
          </div>

          <form onSubmit={handleUpdate} className="flex flex-col gap-6">
            <div className="flex justify-center mb-4">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Avatar Preview" />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Full Name</span></label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="input input-bordered w-full"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Image URL</span></label>
              <input 
                type="url" 
                placeholder="https://example.com/your-photo.jpg" 
                className="input input-bordered w-full"
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
              />
              <label className="label"><span className="label-text-alt text-gray-500">Provide a direct link to an image to update your avatar.</span></label>
            </div>
            
            <div className="flex gap-4 mt-4">
              <Link href="/profile" className="btn btn-outline flex-1">Cancel</Link>
              <button type="submit" className="btn btn-primary text-white flex-1" disabled={loading}>
                {loading ? <span className="loading loading-spinner loading-sm"></span> : "Update Information"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}