"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Award, Microscope, BookOpen } from "lucide-react";

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Research <span className="gradient-text">Publication</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-32 bg-cyan-500/5 rounded-full blur-3xl" />
          
          <div className="flex items-center gap-3 mb-6">
            <Microscope className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">PEER-REVIEWED | IJRDET | MAY 2026</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 leading-tight">
            Deep Learning–Enhanced Breast MRI for AI-Driven Diagnosis of Breast Cancer: 
            A Review and Analytical Study
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-purple-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Systematic Review</h4>
                <p className="text-sm text-slate-400">Reviewed 40+ studies (2018–2025) on CNN, U-Net, and transformer architectures</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Novel Framework</h4>
                <p className="text-sm text-slate-400">Hybrid DL integrating DCE-MRI, DWI, T2 with Grad-CAM explainability</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Clinical Impact</h4>
                <p className="text-sm text-slate-400">Roadmap for clinically deployable AI diagnostics with reduced false-positives</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Deep Learning", "MRI Analysis", "Grad-CAM", "Multimodal Fusion", "Computer Vision"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}