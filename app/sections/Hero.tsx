"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
// import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { GitHubIcon, LinkedInIcon } from "@/components/icons"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono mb-6">
            M.Sc. AI @ University of Mumbai
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Himanshu <span className="gradient-text">Mishra</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          AI Engineer crafting intelligent systems with{" "}
          <span className="text-cyan-400 font-semibold">Generative AI</span>,{" "}
          <span className="text-purple-400 font-semibold">LLMs</span>, and{" "}
          <span className="text-blue-400 font-semibold">Deep Learning</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-500 mb-10 max-w-2xl mx-auto"
        >
          Specializing in RAG pipelines, AI Agents, Computer Vision, and scalable ML deployments.
          Turning complex data into actionable intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all hover:scale-105 flex items-center gap-2"
          >
            View Projects <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/himanshu2285"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-2"
          >
            <GitHubIcon className="w-4 h-4" /> GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="https://linkedin.com/in/himanshu-mishra022" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all hover:scale-110">
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a href="mailto:mishrahimanshu2510@gmail.com"
             className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
      />
    </section>
  );
}