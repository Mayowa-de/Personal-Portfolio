import { ArrowDownRight, ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";
import Acm from "../assets/acm.svg";
import CodeShip from "../assets/codeship.svg";
import ReasonStudio from "../assets/reasonstudios.svg";
import Laptop from "../assets/laptop.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow"><span /> FULL STACK DEVELOPER <span /></p>
        <h1>I build digital experiences that solve <em>real problems.</em></h1>
        <p className="hero-lede">Helping startups and businesses build fast, scalable, and beautiful web applications.</p>
        <div className="button-row">
          <a className="button button-primary" href="#contact">Let's Build Something <ArrowRight size={18} /></a>
          <a className="button button-secondary" href="#work">View My Work</a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a href="https://github.com" aria-label="GitHub"><FaGithub /></a><a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a><a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Laptop showing a code editor">
        <div className="hero-grid" />
        <div className="laptop-stage"><img src={Laptop} alt="Laptop with code on screen" /></div>
        <div className="floating-stat stat-one"><Code2 size={16} /><strong>28+</strong><span>Projects shipped</span></div>
        <div className="floating-stat stat-two"><Layers3 size={16} /><strong>6 yrs</strong><span>Building for web</span></div>
        <div className="floating-stat stat-three"><Sparkles size={16} /><strong>1M+</strong><span>Users impacted</span></div>
      </div>
      <div className="trusted"><p>TRUSTED BY INNOVATIVE COMPANIES</p><div>{[[Acm, 'AcmeCorp'], [CodeShip, 'Shippo'], [ReasonStudio, 'loopstudio']].map(([logo, name]) => <span key={name}><img src={logo} alt="" />{name}</span>)}</div></div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><ArrowDownRight size={17} /> scroll to explore</a>
    </section>
  );
}
