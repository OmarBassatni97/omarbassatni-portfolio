import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-primary text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 pt-[80px] flex flex-col justify-center w-full min-h-screen">
        <div>
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary">
            Skills
          </h2>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
