import React from "react";
import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import LearningTips from "../components/LearningTips";
import TopInstructors from "../components/TopInstructors";

export default function Home() {
  return (
     <div className="flex flex-col pb-16">
      <Hero />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
    </div>
  );
}