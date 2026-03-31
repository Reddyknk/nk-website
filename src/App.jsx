
import './App.css'

function App() {
  const services = [
    {
      title: 'Product Design and CAD',
      description:
        'From concept sketches to production-ready assemblies with clear DFM decisions.'
    },
    {
      title: 'FEA and Simulation',
      description:git 
        'Static, fatigue, thermal, and vibration analysis to reduce physical prototyping cycles.'
    },
    {
      title: 'Manufacturing Readiness',
      description:
        'Tolerance stacks, supplier handoff packages, and quality-focused drawing standards.'
    }
  ]

  const metrics = [
    { value: '120+', label: 'Projects Delivered' },
    { value: '35%', label: 'Average Time-to-Market Reduction' },
    { value: '98%', label: 'First Pass Design Approval' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      detail: 'Scope, constraints, compliance targets, and technical risk mapping.'
    },
    {
      step: '02',
      title: 'Engineering Sprint',
      detail: 'Rapid concepting, CAD development, and simulation-driven iteration.'
    },
    {
      step: '03',
      title: 'Transfer to Production',
      detail:
        'Supplier-ready documentation, validation planning, and launch support.'
    }
  ]

  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">Northforge Mechanical Consulting</div>
        <a className="topbar-cta" href="#contact">
          Book a Technical Call
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">MECHANICAL ENGINEERING CONSULTING</p>
            <h1>Build reliable products faster with senior mechanical engineers.</h1>
            <p>
              We help startups and industrial teams move from idea to production
              with better design decisions, lower prototyping cost, and fewer
              surprises in manufacturing.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Start a Project
              </a>
              <a href="#services" className="btn btn-ghost">
                Explore Services
              </a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Featured outcomes">
            <h2>Recent Client Outcomes</h2>
            <ul>
              <li>Reduced actuator housing weight by 22% without stiffness loss.</li>
              <li>Cut BOM cost by 17% through material and process selection.</li>
              <li>Passed first validation run in under 8 weeks.</li>
            </ul>
          </aside>
        </section>

        <section className="metrics" aria-label="Business metrics">
          {metrics.map((item) => (
            <article key={item.label} className="metric">
              <p className="metric-value">{item.value}</p>
              <p className="metric-label">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="services" id="services">
          <div className="section-head">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Engineering support where it impacts schedule and margin.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-head">
            <p className="eyebrow">HOW WE WORK</p>
            <h2>A clear engineering process built for fast-moving teams.</h2>
          </div>
          <div className="process-list">
            {process.map((item) => (
              <article key={item.step} className="process-step">
                <p className="process-index">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial" aria-label="Client testimonial">
          <blockquote>
            "Northforge helped us stabilize our design before tooling. Their
            simulation-first approach saved two prototype rounds and gave our
            investors confidence in launch timing."
          </blockquote>
          <p className="quote-attribution">
            Director of Hardware, Mobility Systems Client
          </p>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">START HERE</p>
            <h2>Need mechanical engineering support this quarter?</h2>
            <p>
              Share your target timeline, product stage, and technical
              constraints. We will reply with a practical engagement approach.
            </p>
          </div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Jane Patel" required />

            <label htmlFor="email">Work Email</label>
            <input
              id="email"
              type="email"
              placeholder="jane@company.com"
              required
            />

            <label htmlFor="project">Project Brief</label>
            <textarea
              id="project"
              rows="4"
              placeholder="Current challenge, product type, and timeline"
              required
            />

            <button type="submit" className="btn btn-primary">
              Send Inquiry
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>Northforge Mechanical Consulting</p>
        <p>Serving product teams across robotics, energy, and industrial equipment.</p>
      </footer>
    </div>
  )
}

export default App
