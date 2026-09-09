import { Atom, BriefcaseBusiness, CheckCircle2, Code2, Heart, Package, ShieldCheck, Target } from 'lucide-react'
import Profilepic from '../assets/profile.png'
import Reveal from './Reveal'

export default function About() {
  const stats = [[BriefcaseBusiness, '6+', 'Years experience'], [Package, '28+', 'Projects completed'], [ShieldCheck, '15+', 'Happy clients'], [Atom, '1M+', 'Users impacted']] as const
  const principles = [[Code2, 'Clean and maintainable'], [Target, 'Performance focused'], [CheckCircle2, 'Pixel perfect design'], [Heart, 'Scalable architecture']] as const

  return (
    <Reveal className="content-section" id="about">
      <p className="section-kicker">About me</p>
      <h2 className="section-heading">Building with purpose. <em>Designing with impact.</em></h2>
      <div className="about-grid">
        <div className="profile-frame"><img src={Profilepic} alt="Mayowa Ojomu, full stack developer" /></div>
        <div className="about-copy">
          <p>I am a full stack developer who creates performant, user-friendly applications. I care about clean code, intuitive design, and solutions that make a measurable difference.</p>
          <div className="stats-grid">{stats.map(([Icon, value, label]) => <div className="stat-card" key={label}><Icon size={18} color="var(--accent)" /><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
        <div>
          <div className="code-card">const <span className="value">developer</span> = {'{'}<br /><span>&nbsp;&nbsp;name: <span className="value">'Mayowa Ojomu'</span>,</span><br /><span>&nbsp;&nbsp;role: <span className="value">'Full Stack Developer'</span>,</span><br /><span>&nbsp;&nbsp;skills: <span className="value">['React', 'TypeScript', 'Node.js']</span>,</span><br /><span>&nbsp;&nbsp;passion: <span className="value">'Building products that matter'</span></span><br />{'}'}</div>
          <div className="principles">{principles.map(([Icon, label]) => <div key={label}><Icon size={17} />{label}</div>)}</div>
        </div>
      </div>
    </Reveal>
  );
}
