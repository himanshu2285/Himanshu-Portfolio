"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s Build <span className="gradient-text">Intelligence</span> Together
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Open to AI/ML Engineering roles, research collaborations, and freelance projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 max-w-2xl mx-auto"
        >
          <div className="grid gap-6 mb-8 text-left">
            {/* <a href="mailto:mishrahimanshu2510@gmail.com"  */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mishrahimanshu2510@gmail.com"
               className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group">
              <div className="p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-0.5">Email</p>
                <p className="text-slate-200 font-medium">mishrahimanshu2510@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918853643129"
               className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group">
              <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-0.5">Phone</p>
                <p className="text-slate-200 font-medium">+91-8853643129</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-0.5">Location</p>
                <p className="text-slate-200 font-medium">Dombivli, Mumbai, India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/himanshu2285"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/30 transition-all hover:scale-105"
            >
              <GitHubIcon className="w-5 h-5" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/himanshu-mishra022"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <LinkedInIcon className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-slate-600 text-sm"
        >
          © 2026 Himanshu Mishra. Crafted with AI precision.
        </motion.p>
      </div>
    </section>
  );
}