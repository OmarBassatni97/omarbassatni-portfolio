import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiLockClosed } from "react-icons/hi";
import { caseStudy, freelance, earlier } from "@/data/projects";
import type { Project } from "@/data/projects";

const Tags = ({ tags }: { tags: string[] }) => (
  <ul className="flex flex-wrap gap-2 pt-3">
    {tags.map((tag) => (
      <li
        key={tag}
        className="text-xs font-semibold text-secondary bg-secondary/10 rounded-full px-3 py-1"
      >
        {tag}
      </li>
    ))}
  </ul>
);

const ProjectCard = ({ project, compact = false }: { project: Project; compact?: boolean }) => (
  <article className="flex flex-col bg-[#1a1f26] rounded-md overflow-hidden shadow-lg shadow-[#040c16] hover:-translate-y-1 duration-300">
    <Image
      src={project.img}
      alt={`Screenshot of ${project.title}`}
      sizes={compact ? "(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" : "(min-width: 768px) 500px, 100vw"}
      className={`w-full object-cover object-top ${compact ? "h-[150px]" : "h-[220px]"}`}
    />
    <div className="flex flex-col flex-1 p-5">
      <h4 className="text-xl font-bold text-[#ccd6f6]">{project.title}</h4>
      <p className="pt-2 text-sm text-[#8892b0] flex-1">{project.description}</p>
      <Tags tags={project.tags} />
      <div className="flex gap-3 pt-4">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 rounded-lg px-4 py-2 bg-white text-gray-700 font-bold hover:opacity-70 duration-300"
        >
          Live <HiExternalLink aria-hidden="true" />
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-lg px-4 py-2 border-2 border-white font-bold hover:bg-white hover:text-gray-700 duration-300"
          >
            Code <FaGithub aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  </article>
);

const Work = () => {
  return (
    <section id="work" className="w-full text-gray-300 bg-primary">
      <div className="max-w-[1000px] mx-auto p-4 pt-[80px] pb-16 flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 border-secondary">
            Work
          </h2>
          <p className="py-6">A selection of professional, freelance, and earlier projects</p>
        </div>

        {/* Professional case study */}
        <h3 className="text-2xl font-bold text-[#ccd6f6] pb-4">Professional</h3>
        <article className="bg-[#1a1f26] rounded-md p-6 shadow-lg shadow-[#040c16] border-l-4 border-secondary">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-2xl font-bold text-[#ccd6f6]">
              {caseStudy.title}{" "}
              <span className="text-secondary text-lg">@ {caseStudy.company}</span>
            </h4>
            <span className="flex items-center gap-1 text-xs text-[#8892b0]">
              <HiLockClosed aria-hidden="true" /> Private product
            </span>
          </div>
          <p className="pt-3 text-[#8892b0]">{caseStudy.description}</p>
          <ul className="list-disc pl-5 pt-3 space-y-1">
            {caseStudy.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Tags tags={caseStudy.tags} />
        </article>

        <h3 className="text-2xl font-bold text-[#ccd6f6] pt-12 pb-4">Freelance</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {freelance.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-[#ccd6f6] pt-12 pb-4">Earlier projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {earlier.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
