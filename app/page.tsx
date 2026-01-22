"use client";
 
import { useState } from "react";
 
type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};
 
export default function Page() {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const name = "Sharvin Shinde";
 
  const links = {
    github: "https://github.com/sharvin-shinde1108",
    linkedin: "https://www.linkedin.com/in/sharvin-shinde/",
    email: "mailto:sharvin.s.shinde@gmail.com",
  };
 
  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+918898949804");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
 
  const skillCards: { title: string; items: string[] }[] = [
    {
      title: "Domain Expertise",
      items: [
        "GenAI & Agentic AI",
        "RAG Systems",
        "LLMs",
        "Machine Learning",
        "Deep Learning",
        "Data Visualization",
        "Startups",
        "MLOps",
      ],
    },
    {
      title: "Languages & Frameworks",
      items: [
        "Python",
        "SQL",
        "Git/GitHub",
        "Docker",
        "LangChain",
        "FastAPI",
        "Microsoft Azure",
        "API Design",
        "Tableau",
      ],
    },
  ];
 
  const projects: Project[] = [
    {
      title: "FinChat - Stock Analysis & Educational Chatbot",
      description:
        "Gradio-based financial chatbot powered by a local LLM and FAISS RAG to explain stock concepts and answer user queries, with automated technical indicator analysis and charting.",
      tech: ["Gradio", "Local LLM", "FAISS", "RAG", "yfinance", "matplotlib", "RAGAS", "LangSmith", "uv"],
      github: "https://github.com/sharvin-shinde1108/FinChat",
      demo: "https://sharvinshinde1108-fin-a-a.hf.space/",
    },
    {
      title: "Chat Persistent RAG Application",
      description:
        "Context-aware multi-PDF chat app using LangChain + RAG for semantic search and conversational memory, optimized for fast retrieval over long documents.",
      tech: ["LangChain", "RAG", "PyPDF2", "Chunking", "Embeddings", "FAISS", "Streamlit"],
      github: "https://github.com/sharvin-shinde1108/multipdf-chat-app",
      demo: "https://multidoc-rag-app.streamlit.app/",
    },
    {
      title: "CineMatch - Movie Recommendation System",
      description:
        "Content-based recommendation system using NLP + cosine similarity to suggest similar movies, with TMDb integration to display posters in a Streamlit UI.",
      tech: ["Python", "NLP", "TF-IDF", "Cosine Similarity", "TMDb API", "Streamlit"],
      github: "https://github.com/sharvin-shinde1108/cinematch",
      demo: "https://cinematch-mrs.streamlit.app/",
    },
  ];
 
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500/30">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#09090b] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
 
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="font-bold tracking-tight text-xl">
            <span className="text-zinc-100">Portfolio</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-zinc-300">
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>
 
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-28 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-start gap-5 max-w-2xl flex-1">
            <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
              Available for hire
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Building intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                data systems.
              </span>
            </h1>
            <p className="max-w-2xl text-lg font-medium text-zinc-300 leading-relaxed">
              I'm <span className="text-zinc-100 font-semibold">{name}</span>, an AI & Data Science professional.
              I specialize in constructing robust data pipelines, scalable ML/LLM applications, and
              insightful dashboards that turn raw data into decisions.
            </p>
 
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-zinc-200"
                href="#projects"
              >
                Projects
              </a>
 
              <a
                className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
 
              <a
                className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="relative shrink-0">
             <div className="h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-900 ring-2 ring-indigo-500/20 shadow-2xl shadow-indigo-500/10">
                {/*
                  NOTE:
                  1. Convert your HEIC file to PNG or JPG (web browsers don't support HEIC natively).
                  2. Name it 'profile.png' (or .jpg).
                  3. Place it in the 'public' folder of your project.
                */}
                <img
                  src="/profile.png"
                  alt={name}
                  className="h-full w-full object-cover"
                />
             </div>
          </div>
        </div>
      </section>
 
      {/* Skills (Moved Up) */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Technical Expertise</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {skillCards.map((card) => (
            <div key={card.title} className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"></div>
              <h3 className="relative text-xl font-semibold text-zinc-100">{card.title}</h3>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <span key={item} className="inline-flex items-center rounded-md border border-zinc-700/50 bg-zinc-800/50 px-2 py-1 text-xs font-medium text-zinc-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* Projects (Moved Down) */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-12 border-t border-zinc-900">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Featured Projects</h2>
 
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/80">
              <h3 className="text-lg font-bold text-zinc-100">{p.title}</h3>
 
              <p className="mt-2 flex-grow text-sm font-medium leading-relaxed text-zinc-300">
                {p.description}
              </p>
 
              <div className="mt-4 flex flex-wrap gap-2">
                {/* Show ALL tasks, no slice */}
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded border border-indigo-500/10 bg-indigo-500/5 px-2 py-0.5 text-xs font-semibold text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
 
              <div className="mt-5 flex items-center gap-4 pt-4 border-t border-zinc-800/50">
                <a
                  className="text-sm font-semibold text-zinc-200 hover:text-white flex items-center gap-2"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Github
                </a>
                {p.demo && (
                  <a
                    className="text-sm font-semibold text-zinc-200 hover:text-white flex items-center gap-2"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live App
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-12 border-t border-zinc-900">
        <div className="rounded-2xl bg-zinc-900/50 p-8 border border-zinc-800 text-center">
          <h2 className="text-2xl font-bold text-zinc-100">Ready to collaborate?</h2>
          <p className="mx-auto mt-2 max-w-lg font-medium text-zinc-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
 
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Email Button */}
            <a
              className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
              href={links.email}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Email Me
            </a>
 
            {/* Hidden Contact Card */}
            {isPhoneVisible ? (
              <div className="flex min-w-[170px] items-center justify-center gap-3 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-5 py-3 text-sm font-semibold text-indigo-200 transition">
                <span>+91 8898949804</span>
                <button
                  onClick={handleCopyPhone}
                  className="text-indigo-400 hover:text-white transition focus:outline-none"
                  aria-label="Copy phone number"
                >
                  {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                  )}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsPhoneVisible(true)}
                className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Contact No.
              </button>
            )}
 
            <div className="flex gap-4">
               <a
                className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-3 text-gray-400 transition hover:bg-zinc-800 hover:text-white"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-3 text-gray-400 transition hover:bg-zinc-800 hover:text-white"
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
 
      <footer className="border-t border-zinc-900 py-8 text-center text-sm font-medium text-zinc-500">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <p className="mt-1 text-xs">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}
 
 