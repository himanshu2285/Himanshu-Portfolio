"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "M.Sc. Information Technology — Artificial Intelligence",
    school: "Mulund College of Commerce, University of Mumbai",
    period: "2025 — 2027",
    grade: "8.9 CGPA (~87%)",
    current: true,
  },
  {
    degree: "B.Sc. Information Technology",
    school: "Mulund College of Commerce, University of Mumbai",
    period: "2022 — 2025",
    grade: "8.0 CGPA (~78%)",
    current: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Academics</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 relative group"
            >
              {edu.current && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                  CURRENT
                </span>
              )}
              
              <div className="flex items-center gap-3 mb-2 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
                <span className="font-mono text-sm">{edu.grade}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2">{edu.degree}</h3>
              <p className="text-slate-400 mb-4">{edu.school}</p>
              
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Mumbai, India
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}