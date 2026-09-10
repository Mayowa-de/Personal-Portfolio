import { ArrowUpRight } from 'lucide-react'
import Ecommerce from '../assets/Ecommerce.png'
import Blog from '../assets/blog1.png'
import Browser from '../assets/Browser.PNG'
import Dashboard from '../assets/WeatherApp.png'
import FX_Checker from '../assets/currencyExchanger.png'
import Reveal from './Reveal'
import { motion } from 'framer-motion'


export default function Project() {
  const projects = [
    { image: Ecommerce, title: 'Ecommerce platform', description: 'A conversion-focused shopping experience.', tags: ['React', 'Tailwind CSS'] },
    { image: Blog, title: 'Publishing platform', description: 'A thoughtful space for long-form content.', tags: ['React', 'TypeScript'] },
    { image: Browser, title: 'Browser dashboard', description: 'A fast interface for managing daily work.', tags: ['React', 'Node.js'] },
    { image: Dashboard, title: 'Product analytics', description: 'Clear data stories for better decisions.', tags: ['React', 'Charts'] },
    { image: FX_Checker, title: 'Currency checker', description: 'A focused tool for fast financial comparisons.', tags: ['React', 'TypeScript'] },
  ]

  return (
    <Reveal className="content-section" id="work">
        <p className="section-kicker">Featured work</p>
        <h2 className="section-heading">Projects I am <em>proud of.</em></h2>
        <div className="project-grid">
          {projects.map(({ image, title, description, tags }, index) => <motion.article className="project-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true, amount: .12 }} transition={{ delay: index * .06, duration: .4 }}><img src={image} alt={`${title} project preview`} /><div className="project-card-body"><h3>{title}</h3><p>{description}</p><ul className="tag-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}<li aria-hidden="true"><ArrowUpRight size={14} /></li></ul></div></motion.article>)}
        </div>
    </Reveal>
  )
}
