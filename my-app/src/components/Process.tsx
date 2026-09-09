import { Boxes, Code2, Sigma, Gauge, Lightbulb, MessageCircle, Rocket, Search, ShieldCheck } from 'lucide-react'

const tools = [
  ['React', Code2],
  ['TypeScript', Boxes],
  ['Node.js', Rocket],
  ['Figma', Sigma],
  ['Testing', ShieldCheck],
  ['Performance', Gauge],
] as const

const steps = [
  ['01', 'Discover', 'Clarify the audience, goals, constraints, and the smallest useful first release.'],
  ['02', 'Design', 'Turn the direction into a clear interface system that works on every screen.'],
  ['03', 'Build', 'Develop in small, testable increments with clean structure and visible progress.'],
  ['04', 'Improve', 'Measure the experience, remove friction, and keep the product moving forward.'],
] as const

const testimonials = [
  ['“Mayor brought structure to a complicated product and made every decision feel intentional.”', 'Amaka O.', 'Product lead, AcmeCorp'],
  ['“Fast, thoughtful, and unusually good at translating a rough idea into a polished interface.”', 'Daniel K.', 'Founder, Shippo'],
  ['“The result was easier to use, easier to maintain, and ready for the next stage of growth.”', 'Tobi A.', 'Engineering manager, loopstudio'],
] as const

export default function Process() {
  return (
    <>
      <section className="content-section" id="process">
        <p className="section-kicker">Tools I work with</p>
        <h2 className="section-heading">A practical stack for <em>ambitious ideas.</em></h2>
        <div className="tools">{tools.map(([name, Icon]) => <div className="tool" key={name}><Icon size={17} />{name}</div>)}</div>
      </section>
      <section className="content-section process-section">
        <p className="section-kicker">How I work</p>
        <h2 className="section-heading">From first question to <em>finished product.</em></h2>
        <div className="process-grid">{steps.map(([number, title, description]) => <article className="process-card" key={number}><strong>{number}</strong><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className="content-section testimonial-section" id="testimonials">
        <p className="section-kicker">Kind words</p>
        <h2 className="section-heading">Good work should leave a <em>good feeling.</em></h2>
        <div className="testimonial-grid">{testimonials.map(([quote, name, role]) => <figure className="testimonial" key={name}><MessageCircle size={18} color="var(--accent)" /><blockquote>{quote}</blockquote><figcaption><cite>{name}</cite><span>{role}</span></figcaption></figure>)}</div>
      </section>
      <section className="content-section principles-banner">
        <Lightbulb size={22} color="var(--accent)" />
        <p>Good products are built at the intersection of clear thinking, useful technology, and care for the people using them.</p>
        <Search size={22} color="var(--accent)" />
      </section>
    </>
  )
}
