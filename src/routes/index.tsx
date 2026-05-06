import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import blobImg from "@/assets/blob.png";
import { ScrambleText } from "@/components/ScrambleText";
import { CursorRobot } from "@/components/CursorRobot";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAME = "SUSHANT GUPTA.";

const skills: { name: string; slug: string; color?: string }[] = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css", color: "1572B6" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Express", slug: "express", color: "000000" },
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
  { name: "Postman", slug: "postman", color: "FF6C37" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  { name: "Prometheus", slug: "prometheus", color: "E6522C" },
  { name: "Grafana", slug: "grafana", color: "F46800" },
  { name: "NGINX", slug: "nginx", color: "009639" },
  { name: "GitHub", slug: "github", color: "181717" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Redis", slug: "redis", color: "DC382D" },
  { name: "Kafka", slug: "apachekafka", color: "231F20" },
  //{ name: "AWS", slug: "amazonwebservices", color: "232F3E" },
  { name: "Vercel", slug: "vercel", color: "000000" },
  { name: "Cloudflare", slug: "cloudflare", color: "F38020" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
];

const projects = [
  { name: "HeartRiskX(Explainable ai)", tags: ["ML", "Explainable Ai"] },
  {
    name: "DOUBT SOLVER",
    tags: ["NextJS", "NextAuth", "PostgresSQL", "LangChain", "OpenAI", "Supabase"],
  },
  { name: "Process Behaviour Profiler", tags: ["Python", "Psutil"] },
  { name: "GymTrainer", tags: ["ReactJS", "NodeJs", "ExpressJs", "Flask"] },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between">
      <a href="#" className="font-display text-3xl tracking-tight">
        <ScrambleText text="SUSHANT" />
      </a>
      <nav className="hidden md:flex items-center gap-10 text-sm">
        <a href="#about" className="hover:opacity-60 transition">
          <ScrambleText text="About" />
        </a>
        <a href="#projects" className="hover:opacity-60 transition">
          <ScrambleText text="Projects" />
        </a>
        <a href="#contact" className="hover:opacity-60 transition">
          <ScrambleText text="Contact" />
        </a>
      </nav>
      <a
        href="/resume.pdf"
        className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm hover:opacity-80 transition"
      >
        <Download className="h-4 w-4" />
        <ScrambleText text="Resume" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="blob-float">
          <img
            src={blobImg}
            alt="3D blob"
            width={1024}
            height={1024}
            className="blob-spin w-[55vw] max-w-[520px] min-w-[260px] h-auto"
          />
        </div>
        <span
          className="absolute font-display text-5xl md:text-7xl text-background mix-blend-difference italic"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Hello
        </span>
      </div>
      <div className="px-6 md:px-10 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="bg-foreground text-background rounded-2xl p-5 w-fit">
          <div className="bg-background text-foreground h-9 w-9 rounded-full flex items-center justify-center mb-12">
            <ArrowUpRight className="h-4 w-4" />
          </div>
          <p className="text-sm opacity-70">
            <ScrambleText text="From" />
          </p>
          <p className="text-base">
            <ScrambleText text="Punjab, India" />
          </p>
        </div>

        <div className="bg-muted text-foreground rounded-2xl p-5 w-fit md:text-right">
          <div className="bg-background text-foreground h-9 w-9 rounded-full flex items-center justify-center mb-12 md:ml-auto">
            <ArrowDownRight className="h-4 w-4" />
          </div>
          <p className="text-sm opacity-70">
            <ScrambleText text="Ui/Ux" />
          </p>
          <p className="text-base">
            <ScrambleText text="Full-Stack Developer" />
          </p>
        </div>
      </div>

      <div className="marquee py-2">
        <div className="marquee-track font-display text-[18vw] leading-[0.9] whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="pr-8">
              <ScrambleText text={NAME} />
            </span>
          ))}
        </div>
        <div
          className="marquee-track font-display text-[18vw] leading-[0.9] whitespace-nowrap"
          aria-hidden
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="pr-8">
              {NAME}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const aboutText =
    "Sushant Gupta is a passionate developer with a focus on full-stack development. He excels at building efficient, scalable web solutions and is experienced in working across a wide array of modern technologies and frameworks.";
  return (
    <section id="about" className="px-4 md:px-8 py-24">
      <div className="relative rounded-3xl bg-[oklch(0.16_0_0)] text-white overflow-hidden p-10 md:p-16 about-bg">
        <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: "#ff5a4e", fontFamily: "'Caveat', cursive" }}
          >
            About
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-white/85">{aboutText}</p>
        </div>
        <div className="relative mt-12 marquee">
          <div className="marquee-track gap-12 text-3xl md:text-5xl font-display whitespace-nowrap text-white/70">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                SUSHANT GUPTA
                <span className="h-3 w-3 rounded-full bg-white/40" />
              </span>
            ))}
          </div>
          <div
            className="marquee-track gap-12 text-3xl md:text-5xl font-display whitespace-nowrap text-white/70"
            aria-hidden
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                SUSHANT GUPTA
                <span className="h-3 w-3 rounded-full bg-white/40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
      <p className="font-display text-4xl md:text-5xl mb-12">Skills</p>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-8 gap-y-10 justify-items-center items-center">
        {skills.map((s) => (
          <div
            key={s.name}
            title={s.name}
            className="group flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-transform hover:scale-110"
          >
            <img
              src={`https://cdn.simpleicons.org/${s.slug}/${s.color ?? ""}`}
              alt={s.name}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
        Featured Projects
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href="https://github.com/sushant705"
            className="group relative aspect-[4/3] rounded-3xl bg-foreground text-background p-8 flex flex-col justify-between overflow-hidden hover:scale-[0.99] transition"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-display text-5xl md:text-6xl">
                <ScrambleText text={p.name} />
              </h3>
              <ArrowUpRight className="h-6 w-6 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition" />
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-background/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="#"
          className="font-display text-2xl border-b-2 border-foreground pb-1 hover:opacity-60 transition"
        >
          <ScrambleText text="VIEW MORE" />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 md:px-8 py-24">
      <div
        className="relative rounded-3xl overflow-hidden text-white p-8 md:p-16 min-h-[600px] flex flex-col"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 70%, oklch(0.32 0.15 350 / 0.55), transparent 70%), oklch(0.08 0 0)",
        }}
      >
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <a
            href="mailto:sushantgupta705@gmail.com"
            aria-label="Email"
            className="hover:scale-110 transition"
          >
            <Mail className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a
            href="https://github.com/sushant705"
            aria-label="GitHub"
            className="hover:scale-110 transition"
          >
            <Github className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/sushant705"
            aria-label="LinkedIn"
            className="hover:scale-110 transition"
          >
            <Linkedin className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a
            href="https://x.com/Sushantcodes705"
            aria-label="Twitter"
            className="hover:scale-110 transition"
          >
            <Twitter className="h-8 w-8 md:h-10 md:w-10" />
          </a>
        </div>

        <div className="flex-1 flex items-center justify-center py-12">
          <CursorRobot />
        </div>

        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="font-display text-3xl md:text-4xl">Sushant</p>
            <p className="text-xs text-white/60 mt-1">© {new Date().getFullYear()}</p>
          </div>
          <p className="text-xs text-white/60">Designed & Built with care.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return null;
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
