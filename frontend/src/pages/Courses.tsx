import Header from "@/components/Header";
import React from "react";

const Courses = () => {
  const courses = [
    { id: 1, title: "Introduction to Guitar", description: "Learn the basics of guitar playing." },
    { id: 2, title: "Advanced Music Theory", description: "Dive deep into music theory concepts." },
    { id: 3, title: "Songwriting Essentials", description: "Master the art of songwriting." },
  ];

  return (
    <>
    <Header/>
    <div className="bg-background/95 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Courses;