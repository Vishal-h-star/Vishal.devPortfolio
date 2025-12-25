import { useMode } from "../../Context/ModeContext";
import { FiCode, FiServer, FiTool } from "react-icons/fi";
import {
  frontendSkills,
  backendSkills,
  toolsSkills,
} from "../../assets/Data/skills";
import SkillCard from "../../Components/Skills/SkillCard";

const Skills = () => {
  const { mode } = useMode();

  return (
    <section className="max-w-5xl mx-auto px-8 py-24">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-medium">Skills</h2>
        <p className="mt-3 text-[var(--muted)] max-w-2xl">
          Tools and technologies I use to build real-world web applications.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCard
          title="Frontend"
          icon={<FiCode />}
          skills={frontendSkills}
          mode={mode}
        />

        <SkillCard
          title="Backend"
          icon={<FiServer />}
          skills={backendSkills}
          mode={mode}
        />

        <SkillCard
          title="Tools"
          icon={<FiTool />}
          skills={toolsSkills}
          mode={mode}
        />
      </div>
    </section>
  );
};

export default Skills;
