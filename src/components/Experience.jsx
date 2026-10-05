import React from "react";
import { data } from "../experience-data/data";

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-primary text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 pt-[80px] flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary">
            Experience
          </h2>
          <p className="py-4">Where I've worked</p>
        </div>

        <div className="border-l-2 border-secondary ml-2">
          {data.map((job) => (
            <div key={job.id} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#ccd6f6]">
                {job.role} <span className="text-secondary">@ {job.company}</span>
              </h3>
              <p className="text-sm text-[#8892b0] pt-1">
                {job.location} | {job.period}
              </p>
              <ul className="list-disc pl-5 pt-3 space-y-1">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
