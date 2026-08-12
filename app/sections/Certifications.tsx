"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck } from "lucide-react";

const certs = [
  "Introducing Generative AI with AWS",
  "Microsoft Certified: Azure Data Fundamentals",
  "DevOps Fundamentals",
  "Web Designing",
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 flex items-center gap-4 group"
            >
              <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                <BadgeCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="font-medium text-slate-200">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}