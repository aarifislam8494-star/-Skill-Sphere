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
    <div className="py-16 px-8 max-w-4xl mx-auto w-full">
      <div className="bg-base-100 shadow-xl border border-base-200 rounded-3xl overflow-hidden p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Profile" />
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-500 mb-6">{user.email}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/profile/update" className="btn btn-primary text-white">
                Update Information
              </Link>
              <Link href="/courses" className="btn btn-outline">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
        
        <div className="divider my-10">Account Information</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Full Name</h3>
              <p className="text-lg font-medium">{user.name}</p>
           </div>
           <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Email Address</h3>
              <p className="text-lg font-medium">{user.email}</p>
           </div>
           <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Account Status</h3>
              <div className="badge badge-success mt-1">Active</div>
           </div>
           <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Member Since</h3>
              <p className="text-lg font-medium">{new Date(user.createdAt).toLocaleDateString()}</p>
           </div>
        </div>
      </div>
    </div>
  );
}