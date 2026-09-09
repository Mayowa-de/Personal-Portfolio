import { ArrowDownRight, ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";
import Acm from "../assets/acm.svg";
import CodeShip from "../assets/codeship.svg";
import ReasonStudio from "../assets/reasonstudios.svg";
import Laptop from "../assets/laptop.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <motion.div className="hero-copy" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65, ease: 'easeOut' }}>
        <p className="eyebrow"><span /> FULL STACK DEVELOPER <span /></p>
        <h1>I build digital experiences that solve <em>real problems.</em></h1>
        <p className="hero-lede">Helping startups and businesses build fast, scalable, and beautiful web applications.</p>
        <div className="button-row">
          <motion.a whileHover={{ y: -3 }} whileTap={{ scale: .98 }} className="button button-primary" href="#contact">Let's Build Something <ArrowRight size={18} /></motion.a>
          <motion.a whileHover={{ y: -3 }} whileTap={{ scale: .98 }} className="button button-secondary" href="#work">View My Work</motion.a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a target="_blank" href="https://github.com/Mayowa-de" aria-label="GitHub"><FaGithub /></a><a target="_blank" href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a><a target="_blank" href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </motion.div>
      <motion.div className="hero-visual" aria-label="Laptop showing a code editor" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .8, ease: 'easeOut' }}>
        <div className="hero-grid" />
        <div className="laptop-stage"><img src={Laptop} alt="Laptop with code on screen" /></div>
        <div className="floating-stat stat-one"><Code2 size={16} /><strong>28+</strong><span>Projects shipped</span></div>
        <div className="floating-stat stat-two"><Layers3 size={16} /><strong>3 yrs</strong><span>Building for web</span></div>
        <div className="floating-stat stat-three"><Sparkles size={16} /><strong>1M+</strong><span>Users impacted</span></div>
      </motion.div>
      <div className="trusted"><p>TRUSTED BY INNOVATIVE COMPANIES</p><div>{[[Acm, 'AcmeCorp'], [CodeShip, 'Shippo'], [ReasonStudio, 'loopstudio']].map(([logo, name]) => <span key={name}><img src={logo} alt="logo-image" />{name}</span>)}</div></div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><ArrowDownRight size={17} /> scroll to explore</a>
    </section>
  );
}
