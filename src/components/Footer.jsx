import  Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-auto border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image src="/logo.png" alt="SkillSphere Logo" width={48} height={48} className="h-9 sm:h-10 md:h-12 w-auto mb-4" />
            <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
              SkillSphere Learning Platform. Providing reliable tech education and skill development since 2024.
            </p>
            <div className="flex gap-6 mt-6">
              <a className="text-gray-500 hover:text-primary transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a className="text-gray-500 hover:text-error transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
              </a>
              <a className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h6 className="font-bold text-primary uppercase tracking-wider text-sm mb-4">Quick Links</h6>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-gray-700 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/courses" className="text-sm text-gray-700 hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link href="/profile" className="text-sm text-gray-700 hover:text-primary transition-colors">My Profile</Link></li>
              <li><Link href="/login" className="text-sm text-gray-700 hover:text-primary transition-colors">Student Portal</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h6 className="font-bold text-primary uppercase tracking-wider text-sm mb-4">Contact Us</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-sm text-gray-700">skillsphere.bd@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-sm text-gray-700">+880 1712-345678</span>
              </li>
              <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-sm text-gray-700">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h6 className="font-bold text-primary uppercase tracking-wider text-sm mb-4">Legal</h6>
            <ul className="space-y-2.5">
              <li><Link href="/terms" className="text-sm text-gray-700 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-700 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm text-gray-700 text-center">Copyright © 2024 SkillSphere Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}