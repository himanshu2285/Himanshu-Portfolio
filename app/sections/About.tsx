"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Brain, Eye, MessageSquare } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Generative AI & LLMs",
    desc: "Building RAG systems and AI agents with LangChain, LangGraph, and OpenAI APIs",
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    desc: "CNNs, Transformers, and hybrid architectures for Computer Vision and NLP",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Medical imaging analysis, drone imagery processing, and object detection",
  },
  {
    icon: MessageSquare,
    title: "MLOps & Deployment",
    desc: "FastAPI, Docker, AWS, and scalable API development for production AI",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a Master's student in <strong className="text-cyan-400">Information Technology (AI)</strong> at 
              University of Mumbai with a passion for building intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              My expertise spans the full AI stack—from training deep learning models and fine-tuning LLMs 
              to deploying production-ready APIs with FastAPI and AWS. I've published research on 
              <strong className="text-purple-400"> AI-driven Breast Cancer MRI analysis</strong> and built 
              end-to-end solutions ranging from multi-agent RAG systems to geospatial drone imagery analysis.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently seeking opportunities as an <strong className="text-cyan-400">AI/ML Engineer</strong>, 
              <strong className="text-purple-400"> Data Scientist</strong>, or 
              <strong className="text-blue-400"> AI Analyst</strong> where I can drive innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 glow-border group cursor-default"
              >
                <item.icon className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-200 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}