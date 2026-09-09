import {  FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6"
import {ArrowUpRight} from "lucide-react"

export default function Footer() {
  return (
    <>
      <section className="content-section" id="contact">
        <div className="contact">
          <div className="contact-copy"><p className="section-kicker">Have a project in mind?</p><h2>Let&apos;s make something <em>useful.</em></h2><p>Tell me a little about your idea and I&apos;ll get back to you with the next practical step.</p><a className="button button-primary" href="mailto:hello@mayortech.dev">Start a conversation <ArrowUpRight size={17} /></a></div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}><label><span className="sr-only">Your name</span><input required placeholder="Your name" /></label><label><span className="sr-only">Email address</span><input required type="email" placeholder="Email address" /></label><label><span className="sr-only">Project details</span><textarea required placeholder="Tell me about the project" /></label><button className="button button-secondary" type="submit">Send inquiry <ArrowUpRight size={17} /></button></form>
        </div>
      </section>
      <footer className="site-footer"><span>© 2026 MayorTech. Built with care.</span><span><a href="https://github.com" aria-label="GitHub"><FaGithub size={15} /></a> <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin size={15} /></a> <a href="https://twitter.com" aria-label="Twitter"><FaTwitter size={15} /></a></span></footer>
    </>
  )
}
