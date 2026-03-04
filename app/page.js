import Link from "next/link";

export const metadata = {
  title: "EasyTech — AI Infrastructure & Apps",
  description:
    "AI tech company building SaaS products, AI pipelines, autonomous agents, and mobile apps. Based in Annecy, France.",
};

export default function Home() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="company-hero">
        <div className="hero-tag stagger-1">AI-First Engineering</div>
        <h1 className="stagger-2">
          We build the <span className="accent-cyan">AI layer</span> your
          product needs
        </h1>
        <p className="hero-description stagger-3">
          From production-grade AI pipelines to autonomous agent systems, we
          design, ship, and scale intelligent software that works.
        </p>
        <div className="hero-location stagger-4">
          <span className="loc-dot"></span>
          Annecy, France
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="services-section">
        <div className="section-header">
          <span className="section-label">What we build</span>
          <h2 className="section-title">
            End-to-end AI infrastructure
          </h2>
        </div>

        <div className="services-grid">
          <div className="service-card stagger-1">
            <div className="service-icon">⚡</div>
            <h3>SaaS Products</h3>
            <p>
              Full-stack SaaS applications from zero to production. We handle
              architecture, backend, frontend, payments, and ongoing
              infrastructure.
            </p>
            <div className="service-tags">
              <span className="service-tag">Next.js</span>
              <span className="service-tag">Node</span>
              <span className="service-tag">Stripe</span>
              <span className="service-tag">Vercel</span>
            </div>
          </div>

          <div className="service-card stagger-2">
            <div className="service-icon">🔀</div>
            <h3>AI Pipelines</h3>
            <p>
              Image generation, video processing, data transformation — deployed
              as scalable, cost-efficient pipelines you can call from anywhere.
            </p>
            <div className="service-tags">
              <span className="service-tag">ComfyUI</span>
              <span className="service-tag">Diffusion</span>
              <span className="service-tag">FFmpeg</span>
              <span className="service-tag">GPU</span>
            </div>
          </div>

          <div className="service-card stagger-3">
            <div className="service-icon">🤖</div>
            <h3>Autonomous Agents</h3>
            <p>
              Custom agent wrappers that reason, decide, and act. Multi-step
              workflows, tool-use orchestration, and human-in-the-loop when it
              matters.
            </p>
            <div className="service-tags">
              <span className="service-tag">LLM</span>
              <span className="service-tag">RAG</span>
              <span className="service-tag">Tool Use</span>
              <span className="service-tag">MCP</span>
            </div>
          </div>

          <div className="service-card stagger-4">
            <div className="service-icon">📱</div>
            <h3>Mobile Apps</h3>
            <p>
              Native iOS and Android apps — from personal development to
              creative tools. Published on both stores with millions of
              impressions.
            </p>
            <div className="service-tags">
              <span className="service-tag">Swift</span>
              <span className="service-tag">Kotlin</span>
              <span className="service-tag">Firebase</span>
              <span className="service-tag">RevenueCat</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">14+</div>
          <div className="stat-label">Apps Published</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2</div>
          <div className="stat-label">Platforms</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">AI Pipelines Running</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">∞</div>
          <div className="stat-label">Tokens Processed</div>
        </div>
      </div>

      {/* ─── TERMINAL ─── */}
      <div className="terminal-block">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
        </div>
        <div className="terminal-body">
          <div>
            <span className="comment">
              # Deploy an image generation pipeline
            </span>
          </div>
          <div>
            <span className="cmd">easytech</span>{" "}
            <span className="flag">deploy</span>{" "}
            <span className="string">--pipeline image-gen</span>{" "}
            <span className="flag">--gpu</span> a100{" "}
            <span className="flag">--scale</span> auto
          </div>
          <div style={{ marginTop: 8 }}>
            <span className="comment">
              # Wrap an LLM agent with tools and memory
            </span>
          </div>
          <div>
            <span className="cmd">easytech</span>{" "}
            <span className="flag">agent</span>{" "}
            <span className="string">--model claude-opus</span>{" "}
            <span className="flag">--tools</span> search,code,browse{" "}
            <span className="flag">--memory</span> persistent
          </div>
        </div>
      </div>

      {/* ─── TECH STACK ─── */}
      <section className="tech-section">
        <div className="section-header">
          <span className="section-label">Stack</span>
          <h2 className="section-title">Tools we work with</h2>
        </div>
        <div className="tech-grid">
          {[
            "Python",
            "TypeScript",
            "Swift",
            "Kotlin",
            "React",
            "Next.js",
            "Node.js",
            "FastAPI",
            "PyTorch",
            "ComfyUI",
            "Claude API",
            "OpenAI",
            "Firebase",
            "PostgreSQL",
            "Redis",
            "Docker",
            "AWS",
            "Vercel",
            "Cloudflare",
            "Stripe",
          ].map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ─── APPS PREVIEW ─── */}
      <section className="apps-preview">
        <div className="section-header">
          <span className="section-label">Mobile</span>
          <h2 className="section-title">Our published apps</h2>
        </div>
        <p className="apps-preview-desc">
          14+ apps on the App Store and Google Play — from AI-powered creative
          tools to personal development companions.
        </p>
        <div className="apps-preview-grid">
          {[
            { icon: "🎯", name: "Hibi" },
            { icon: "💗", name: "Aether" },
            { icon: "🍱", name: "Bento Streaks" },
            { icon: "📄", name: "PDF Marmot" },
            { icon: "🎤", name: "VocalCoach" },
            { icon: "🧠", name: "Debate Coach" },
            { icon: "💅", name: "AI Nail Design" },
            { icon: "📊", name: "LightMeter" },
            { icon: "🧘", name: "Sculpt" },
            { icon: "🌬️", name: "Breathly" },
            { icon: "🖼️", name: "Compose" },
            { icon: "📷", name: "ScanCode" },
            { icon: "🎨", name: "Widgetly" },
            { icon: "📖", name: "HolyVerse" },
          ].map((app) => (
            <div key={app.name} className="app-preview-tile">
              <div className="app-preview-icon">{app.icon}</div>
              <div className="app-preview-name">{app.name}</div>
            </div>
          ))}
        </div>
        <Link href="/apps" className="btn">
          View All Apps →
        </Link>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>
            Need AI infrastructure?
          </h2>
          <p>
            Tell us what you&apos;re building. We&apos;ll figure out how to make
            it work.
          </p>
          <a href="mailto:contact@easytech-agency.net" className="btn btn-primary">
            contact@easytech-agency.net
          </a>
        </div>
      </section>
    </div>
  );
}
