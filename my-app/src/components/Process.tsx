import { Gauge, Lightbulb, MessageCircle, Search, ShieldCheck } from 'lucide-react'
import React_logo from '../assets/reactLogo.jpeg'
import Docker from '../assets/docker_logo.jpeg'
import Js_logo from '../assets/js_logo.jpeg'
import Tailwind from '../assets/tailwind_logo.jpeg'
import Figma from '../assets/figma_logo.jpeg'
import TypeScript from '../assets/TS_logo.jpeg'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

type Tool = 
  | { type: 'image'; src: string; label: string } 
  | { type: 'icon'; component: React.ComponentType<{ size?: number }> ; label: string }

const tools: Tool[] = [
  { type: 'image', label: 'React', src: React_logo },
  { type: 'image', label: 'TypeScript', src: TypeScript },
  { type: 'image', label: 'Node.js', src: Js_logo },
  { type: 'image', label: 'Docker', src: Docker },
  { type: 'image', label: 'Tailwind', src: Tailwind },
  { type: 'image', label: 'Figma', src: Figma },
  { type: 'icon', label: 'Testing', component: ShieldCheck },
  { type: 'icon', label: 'Performance', component: Gauge },
]

const steps = [
  ['01', 'Discover', 'Clarify the audience, goals, constraints, and the smallest useful first release.'],
  ['02', 'Design', 'Turn the direction into a clear interface system that works on every screen.'],
  ['03', 'Build', 'Develop in small, testable increments with clean structure and visible progress.'],
  ['04', 'Improve', 'Measure the experience, remove friction, and keep the product moving forward.'],
] 

const testimonials = [
  ['“Mayor brought structure to a complicated product and made every decision feel intentional.”', 'Amaka O.', 'Product lead, AcmeCorp'],
  ['“Fast, thoughtful, and unusually good at translating a rough idea into a polished interface.”', 'Daniel K.', 'Founder, Shippo'],
  ['“The result was easier to use, easier to maintain, and ready for the next stage of growth.”', 'Tobi A.', 'Engineering manager, loopstudio'],
] as const

export default function Process() {
  return (
    <>
      <Reveal className="content-section" id="process">
        <p className="section-kicker">Tools I work with</p>
        <h2 className="section-heading">A practical stack for <em>ambitious ideas.</em></h2>
        <div className="tools flex flex-wrap gap-3">
          {tools.map((item, index) => {
            // Capitalize component for JSX
            const Icon = item.type === 'icon' ? item.component : null
            return (
              <motion.div 
                className="tool" 
                key={item.label} 
                initial={{ opacity: 0, scale: .94 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                whileHover={{ y: -3, borderColor: 'var(--accent)' }} 
                viewport={{ once: true }} 
                transition={{ delay: index * .08 }}
              >
                {item.type === 'image' && <img src={item.src} width={17} height={17} alt={item.label} />} 
                {item.type === 'icon' && Icon && <Icon size={17} />}
                <span>{item.label}</span>
              </motion.div>
            )
          })}
        </div>
      </Reveal>

      <Reveal className="content-section process-section">
        <p className="section-kicker">How I work</p>
        <h2 className="section-heading">From first question to <em>finished product.</em></h2>
        <div className="process-grid">
          {steps.map(([number, title, description], index) => (
            <motion.article 
              className="process-card" 
              key={number} 
              initial={{ opacity: 0, x: -12 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * .08 }}
            >
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal className="content-section testimonial-section" id="testimonials">
        <p className="section-kicker">Kind words</p>
        <h2 className="section-heading">Good work should leave a <em>good feeling.</em></h2>
        <div className="testimonial-grid grid gap-5 md:grid-cols-3">
          {testimonials.map(([quote, name, role], index) => (
            <motion.figure 
              className="testimonial" 
              key={name} 
              initial={{ opacity: 0, y: 16 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * .08 }}
            >
              <MessageCircle size={18} color="var(--accent)" />
              <blockquote>{quote}</blockquote>
              <figcaption>
                <cite>{name}</cite>
                <span>{role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Reveal>

      <Reveal className="content-section principles-banner flex items-center justify-center gap-6 text-center">
        <Lightbulb size={22} color="var(--accent)" />
        <p>Good products are built at the intersection of clear thinking, useful technology, and care for the people using them.</p>
        <Search size={22} color="var(--accent)" />
      </Reveal>
    </>
  )
}