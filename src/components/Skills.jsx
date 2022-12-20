import { data } from "../skills-data/data";
import SkillCard from "../components/SkillCard";
const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full h-screen bg-primary text-gray-300 snap-center"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-secondary ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
          {data.map((item) => (
            <SkillCard key={item.id} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
