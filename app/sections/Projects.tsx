"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronRight, Bot, Newspaper, ShoppingCart, Plane } from "lucide-react";
import { GitHubIcon } from "@/components/icons"

const projects = [
  {
    title: "DataForge AI",
    subtitle: "Agent-Based RAG Architecture",
    description:
      "Autonomous AI system with multiple agents for data ingestion, semantic retrieval, and reasoning. Uses LangChain orchestration with vector DB integration for context-aware responses.",
    tech: ["Python", "LangChain", "LLMs", "FastAPI", "RAG", "VectorDB"],
    icon: Bot,
    gradient: "from-cyan-500 to-blue-600",
    github: "https://github.com/himanshu2285",
  },
  {
    title: "Drone Imagery Analysis",
    subtitle: "Geospatial ML Pipeline",
    description:
      "End-to-end pipeline for processing GeoTIFF aerial images. Features GLCM texture extraction, Canny edge detection, vegetation indices, and Random Forest classification for land-cover mapping.",
    tech: ["Python", "OpenCV", "Rasterio", "Scikit-learn", "NumPy", "GeoTIFF"],
    icon: Plane,
    gradient: "from-emerald-500 to-cyan-600",
    github: "https://github.com/himanshu2285",
  },
  {
    title: "AI News Summarizer",
    subtitle: "Full-Stack LLM Application",
    description:
      "Solves information overload by transforming articles into structured summaries. Features web scraping, OpenAI API integration, PostgreSQL history, and real-time classification.",
    tech: ["React", "FastAPI", "PostgreSQL", "OpenAI API", "Web Scraping"],
    icon: Newspaper,
    gradient: "from-purple-500 to-pink-600",
    github: "https://github.com/himanshu2285",
  },
  {
    title: "Smart Shopping Cart",
    subtitle: "E-Commerce Django App",
    description:
      "Full-stack cart system with session-based persistence, real-time price calculations, and responsive JavaScript frontend for seamless checkout flows.",
    tech: ["Python", "Django", "JavaScript", "SQLite", "REST API"],
    icon: ShoppingCart,
    gradient: "from-orange-500 to-red-600",
    github: "https://github.com/himanshu2285",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400">End-to-end AI solutions built with modern tech stacks</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="glass-card p-8 group relative overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <GitHubIcon className="w-5 h-5 text-slate-400" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-1">{project.title}</h3>
              <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                {project.subtitle}
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              <motion.div
                animate={{ x: hoveredIdx === idx ? 5 : 0 }}
                className="flex items-center text-cyan-400 text-sm font-medium"
              >
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}