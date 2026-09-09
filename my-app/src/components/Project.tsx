import { ArrowUpRight } from 'lucide-react'
import Ecommerce from '../assets/Ecommerce.png'
import Blog from '../assets/blog1.png'
import Browser from '../assets/Browser.PNG'
import Dashboard from '../assets/WeatherApp.png'
import FX_Checker from '../assets/currencyExchanger.png'


export default function Project() {
  return (
    <section className="content-section" id="work">
        <p className="section-kicker">Featured work</p>
        <h2 className="section-heading">Projects I am <em>proud of.</em></h2>
        <div className="project-grid">
          {[[Ecommerce, 'Ecommerce platform', 'A conversion-focused shopping experience.', ['React', 'Tailwind CSS']], [Blog, 'Publishing platform', 'A thoughtful space for long-form content.', ['React', 'TypeScript']], [Browser, 'Browser dashboard', 'A fast interface for managing daily work.', ['React', 'Node.js']], [Dashboard, 'Product analytics', 'Clear data stories for better decisions.', ['React', 'Charts']], [FX_Checker, 'Product analytics', 'Clear data stories for better decisions.', ['React', 'Charts']]].map(([image, title, description, tags]) => <article className="project-card" key={title as string}><img src={image as string} alt={`${title} project preview`} /><div className="project-card-body"><h3>{title}</h3><p>{description}</p><ul className="tag-list">{(tags as string[]).map((tag) => <li key={tag}>{tag}</li>)}<li aria-hidden="true"><ArrowUpRight size={14} /></li></ul></div></article>)}
        </div>
    </section>
  )
}
