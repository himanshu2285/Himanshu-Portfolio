"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "JavaScript"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "LLMs", "RAG", "LangChain", "LangGraph"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Frameworks & Backend",
    skills: ["FastAPI", "Flask", "Django", "React.js", "Node.js", "Streamlit", "LlamaIndex"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Databases & Vector Stores",
    skills: ["PostgreSQL", "MySQL", "AstraDB", "SQL Server", "VectorDB"],
    color: "from-emerald-500 to-cyan-500",
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Git/GitHub", "AWS", "Hugging Face", "RESTful APIs", "MCP Servers"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Specializations",
    skills: ["Generative AI", "Prompt Engineering", "Computer Vision", "NLP", "Explainable AI", "MLOps"],
    color: "from-violet-500 to-purple-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-950/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and scaling AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 group"
            >
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:w-full transition-all duration-500`} />
              <h3 className="text-xl font-bold text-slate-200 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}