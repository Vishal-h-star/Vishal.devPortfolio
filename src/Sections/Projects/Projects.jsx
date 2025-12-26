import { act, useState } from "react";
import {
  backendProjects,
  frontendProjects,
  upcomingProjects,
} from "../../assets/Data/projectsdata";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import ProjectCard from "../../Components/Projects/ProjectsCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section  id="projects" className="max-w-6xl mx-auto px-8 py-24">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-medium">Projects</h2>
        <p className="mt-3 text-[var(--muted)] max-w-2xl">
          Selected work across frontend and backend development.
        </p>
      </div>

      {/* Tabs (visual only) */}
      <div className="mb-10 flex gap-3">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition
      ${
        activeTab === "frontend"
          ? "bg-[var(--primary)] text-black"
          : "border border-white/15 text-[var(--muted)] hover:border-white/30"
      }`}
        >
          Frontend
        </button>

        <button
          onClick={() => setActiveTab("backend")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition
      ${
        activeTab === "backend"
          ? "bg-[var(--primary)] text-black"
          : "border border-white/15 text-[var(--muted)] hover:border-white/30"
      }`}
        >
          Backend
        </button>

        <button
          onClick={() => setActiveTab("upcoming")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition
      ${
        activeTab === "upcoming"
          ? "bg-[var(--primary)] text-black"
          : "border border-white/15 text-[var(--muted)] hover:border-white/30"
      }`}
        >
          In progress
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card */}
        {(activeTab === "frontend"
          ? frontendProjects
          : activeTab === "backend"
          ? backendProjects
          : upcomingProjects
        ).map((project) => (
            <ProjectCard  project={project} />
        ))}

      </div>
    </section>
  );
};

export default Projects;
