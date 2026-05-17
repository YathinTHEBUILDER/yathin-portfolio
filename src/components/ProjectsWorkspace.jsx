import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, X, Minus, Maximize2, ExternalLink } from 'lucide-react';

const techIcons = {
  "Python": { path: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z", vb: "0 0 24 24" },
  "Groq API": { path: "M105.304012.00401184C47.7040118-.49598816.50401184 45.8040118.00401184 103.404012c-.5 57.6 45.79999996 104.8 103.40000016 105.3h36.2v-39.1h-34.3c-36.0000002.4-65.6000002-28.4-66.0000002-64.5-.4-36.1000002 28.4-65.6000002 64.5000002-66.0000002h1.5c36 0 65.2 29.2 65.4 65.2000002v96.1c0 35.7-29.1 64.8-64.7 65.2-17.1000002-.1-33.4000002-7-45.4000002-19.1l-27.7 27.7c19.2 19.3 45.2 30.3 72.4000002 30.5h1.4c56.9-.8 102.6-47 102.9-103.9v-99.1c-1.4-56.5000002-47.7-101.60000016-104.3-101.70000016Z", vb: "0 0 216 216" },
  "Tavily API": { path: "M39.5137 0C45.2842 0 48.17 2.47984e-05 50.374 1.12305C52.3127 2.11089 53.8892 3.68731 54.877 5.62598C55.9998 7.82995 56 10.7153 56 16.4854V39.5146C56 45.2847 55.9998 48.17 54.877 50.374C53.8891 52.3127 52.3127 53.8891 50.374 54.877C48.17 56 45.2842 56 39.5137 56H16.4854C10.7148 56 7.82905 56 5.625 54.877C3.68646 53.8891 2.11082 52.3126 1.12305 50.374C4.91453e-05 48.17 5.27826e-10 45.2849 0 39.5146V16.4854C4.81286e-10 10.7151 4.80472e-05 7.82999 1.12305 5.62598C2.11082 3.68739 3.68646 2.11089 5.625 1.12305C7.82905 2.47984e-05 10.7148 0 16.4854 0H39.5137ZM23.8105 30.958C23.5077 30.9581 23.2076 31.0175 22.9277 31.1338C22.6478 31.2502 22.393 31.4216 22.1787 31.6367L17.7705 36.0625L16.5986 34.8867C15.7377 34.0228 14.2649 34.4498 13.9971 35.6426L12.3271 43.0713C12.2686 43.3267 12.2752 43.593 12.3477 43.8447C12.4199 44.0956 12.555 44.3246 12.7393 44.5088L12.7383 44.5107C12.922 44.6967 13.1498 44.8324 13.4004 44.9053C13.6513 44.9782 13.9173 44.9856 14.1719 44.9268L21.5713 43.25C22.7588 42.9812 23.1851 41.502 22.3242 40.6377L21.1523 39.4619L25.5615 35.0371C25.9943 34.6025 26.2373 34.012 26.2373 33.3975C26.2372 32.783 25.9942 32.1934 25.5615 31.7588L25.5029 31.6992L25.5049 31.6982L25.4434 31.6367C25.229 31.4215 24.9744 31.2503 24.6943 31.1338C24.4144 31.0174 24.1136 30.958 23.8105 30.958ZM39.7139 28.1689C38.6842 27.5158 37.3429 28.2597 37.3428 29.4824V31.1445H27.8955C28.2111 31.7502 28.3916 32.439 28.3916 33.1699C28.3915 34.2266 28.0177 35.196 27.3965 35.9521H37.3418V37.6143C37.342 38.837 38.6843 39.58 39.7139 38.9268L46.1279 34.8613C46.6077 34.5556 46.8476 34.0509 46.8477 33.5469C46.847 33.0436 46.6067 32.5399 46.126 32.2354L39.7139 28.1689ZM24.0391 10.4062C23.778 10.4051 23.5207 10.4712 23.292 10.5977C23.063 10.7243 22.869 10.9083 22.7305 11.1309L18.6807 17.5684H18.6787C18.028 18.602 18.7694 19.9499 19.9873 19.9502H21.6436V29.5137C22.3307 29.0592 23.1537 28.794 24.0381 28.7939C24.9228 28.794 25.7453 29.0599 26.4326 29.5146V19.9502H28.0898C29.3077 19.9501 30.047 18.6028 29.3975 17.5684L25.3457 11.1309C25.0415 10.6489 24.5406 10.4068 24.0391 10.4062Z", vb: "0 0 56 56" },
  "JavaScript": { path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z", vb: "0 0 24 24" },
  "Gemini API": { path: "M12 .3c-.15 0-.31.05-.44.17-1.33 1.43-2.03 2.62-3.11 3.56-1.08.94-2.34 1.5-3.78 1.77-.15.03-.28.12-.39.23-.11.11-.17.27-.17.44 0 .17.06.32.17.45.11.13.25.22.42.27 1.4.27 2.66.84 3.77 1.72s1.78 2.03 2.01 3.42c.04.18.12.33.24.44.12.11.27.16.41.16s.29-.05.43-.16.23-.26.23-.44c.28-1.41.97-2.57 2.07-3.47s2.33-1.46 3.69-1.68c.18-.04.33-.12.43-.24s.18-.28.18-.46c0-.18-.06-.32-.19-.45s-.28-.23-.42-.23c-1.44-.27-2.68-.87-3.73-1.79-1.05-.92-1.72-2.08-2.02-3.49-.04-.15-.12-.3-.22-.39s-.28-.18-.45-.18z", vb: "0 0 24 24" },
  "OpenCV": { path: "M11.8992.8525C8.735.8525 6.17 3.4175 6.17 6.5817c0 2.102 1.1321 3.9398 2.8198 4.9366l1.6412-2.7849c.0411-.0699.0176-.1593-.0495-.2048-.6233-.4227-1.0328-1.137-1.0328-1.947 0-1.298 1.0524-2.3504 2.3505-2.3504 1.2981 0 2.3505 1.0524 2.3505 2.3505 0 .8098-.4095 1.5242-1.0328 1.947-.0671.0454-.0907.1348-.0495.2047l1.6414 2.785c1.6878-.9969 2.8199-2.8346 2.8199-4.9367 0-3.1642-2.5653-5.7292-5.7295-5.7292zm-6.17 10.8366C2.565 11.6891 0 14.2541 0 17.4183c0 3.1642 2.565 5.7292 5.7292 5.7292 3.1798 0 5.8074-2.6995 5.7275-5.8762H8.2313c-.0847 0-.1513.0717-.1519.1564-.0082 1.266-1.0644 2.3411-2.3502 2.3411-1.2981 0-2.3505-1.0524-2.3505-2.3505 0-1.2982 1.0524-2.3505 2.3505-2.3505.34 0 .663.0724.9547.2022.0713.0318.1566.0077.1962-.0595l1.6464-2.7935c-.8273-.4636-1.7815-.7279-2.7973-.7279zm15.4424.7614l-1.6366 2.7878c-.041.07-.0172.1594.05.2048.624.4217 1.0348 1.1354 1.0363 1.9452.0022 1.298-1.0483 2.352-2.3465 2.3542-1.298.0023-2.3523-1.0482-2.3545-2.3462-.0015-.8098.4068-1.5248 1.0294-1.9486.067-.0457.0905-.1353.0492-.2051l-1.6464-2.7818c-1.6859.9998-2.8146 2.8394-2.811 4.9415.0056 3.1641 2.575 5.7248 5.7393 5.7192 3.1641-.0054 5.7246-2.575 5.7192-5.7392-.0037-2.1022-1.139-3.938-2.8284-4.9318z", vb: "0 0 24 24" },
  "LiveKit": { path: "M23.02 6.012c-.13-.08-.29-.08-.42 0L12.56 12.012c-.13.08-.13.23 0 .31l10.04 6c.13.08.29.08.42 0L33.06 12.322c.13-.08.13-.23 0-.31L23.02 6.012zM12 2.012c-.13-.08-.29-.08-.42 0L1.54 8.012c-.13.08-.13.23 0 .31l10.04 6c.13.08.29.08.42 0L22.04 8.322c.13-.08.13-.23 0-.31L12 2.012zM12 21.678l-10.04-6c-.13-.08-.29-.08-.42 0L.98 16.322c-.13.08-.13.23 0 .31l10.04 6c.13.08.29.08.42 0L23.02 16.632c.13-.08.13-.23 0-.31l-.56-.344c-.13-.08-.29-.08-.42 0L12 21.678z", vb: "0 0 34 24" },
  "Vision": { path: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z", vb: "0 0 24 24" },
  "Next.js": { path: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z", vb: "0 0 24 24" },
  "Supabase": { path: "M21.4 13.14a1.72 1.72 0 0 0-1.63-1.14h-6.22l5.77-7.85A1.72 1.72 0 0 0 17.7 1.5H8.77a1.72 1.72 0 0 0-1.39 2.72l4.82 6.56H6c-.95 0-1.72.77-1.72 1.72 0 .38.12.74.34 1.04l6.56 8.95A1.72 1.72 0 0 0 12.8 23h8.92a1.72 1.72 0 0 0 1.39-2.72l-4.82-6.56h3.11c.95 0 1.72-.77 1.72-1.72a1.71 1.71 0 0 0-.12-.86z", vb: "0 0 24 24" },
  "TypeScript": { path: "M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5 20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1 23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25 25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z", vb: "0 0 128 128" },
  "Vercel": { path: "m12 1.608 12 20.784H0Z", vb: "0 0 24 24" }
};

const projectsData = [
  {
    id: 'invoiceflow',
    title: 'InvoiceFlow',
    type: 'Co-Financing Invoice Discounting Platform',
    status: 'ACTIVE',
    codeLink: 'https://github.com/YathinTHEBUILDER/InvoiceFlow',
    description: 'A platform designed to help Indian MSMEs manage cash flow. It enables retail investors to fractionally co-finance GST-verified invoices, blending reliable financial design with an intuitive user experience.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Vercel'],
    iconColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  {
    id: 'jarvis',
    title: 'J.A.R.V.I.S',
    type: 'Conversational Search Assistant',
    status: 'STABLE',
    codeLink: 'https://github.com/YathinTHEBUILDER/J.A.R.V.I.S_Stable',
    description: 'An experimental assistant exploring real-time natural language interaction. Integrates low-latency LLM inference with live search APIs to retrieve near-instant, contextual answers to complex queries.',
    tags: ['Python', 'Groq API', 'Tavily API', 'JavaScript'],
    iconColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
  },
  {
    id: 'friday',
    title: 'F.R.I.D.A.Y',
    type: 'Multimodal Vision Assistant',
    status: 'STABLE',
    codeLink: 'https://github.com/YathinTHEBUILDER/F.R.I.D.A.Y_Stable',
    description: 'A multimodal prototype that adds visual and verbal comprehension to conversational workflows. Interprets real-time camera feeds and voice commands to explore interactive, context-aware reasoning.',
    tags: ['Python', 'Gemini API', 'OpenCV', 'LiveKit', 'Vision'],
    iconColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  }
];

export default function ProjectsWorkspace() {
  const [openWindows, setOpenWindows] = useState([]);
  const [focusedWindow, setFocusedWindow] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsDesktop(window.innerWidth >= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openWindow = (id) => {
    if (!openWindows.includes(id)) {
      setOpenWindows([...openWindows, id]);
    }
    setFocusedWindow(id);
  };

  const closeWindow = (id, e) => {
    e?.stopPropagation();
    setOpenWindows(openWindows.filter(wId => wId !== id));
    if (focusedWindow === id) {
      setFocusedWindow(openWindows.find(wId => wId !== id) || null);
    }
  };

  const focusWindow = (id) => {
    if (focusedWindow !== id) {
      setFocusedWindow(id);
    }
  };

  if (!isDesktop) {
    // MOBILE VIEW: Stacked Cards
    return (
      <div className="w-full min-h-screen bg-bg flex flex-col py-24 px-[8vw] z-10 relative">
        <div className="projects-header flex flex-col space-y-2 mb-12">
          <div className="flex items-center space-x-3">
            <span className="font-mono-custom text-xs text-accent/60">003</span>
            <span className="w-12 h-[1px] bg-accent/35"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-text1">
            SELECTED WORK
          </h2>
          <span className="font-mono-custom text-xs text-text3">— chosen projects in software and design.</span>
        </div>

        <div className="flex flex-col gap-6">
          {projectsData.map((project, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={project.id}
              className="bg-surface border border-accent/10 rounded-xl p-6 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono-custom text-[0.62rem] tracking-widest text-accent bg-accent/5 px-2 py-0.5 border border-accent/15 rounded-sm uppercase">
                  {project.status}
                </span>
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono-custom text-xs text-text3 hover:text-accent tracking-widest uppercase transition-colors"
                >
                  Code ↗
                </a>
              </div>
              
              <div>
                <h3 className="font-display text-text1 text-xl font-bold uppercase tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="font-mono-custom text-[0.68rem] tracking-wider text-text3 uppercase font-light">
                  {project.type}
                </p>
              </div>

              <p className="font-display text-text2 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {project.tags.map(tag => {
                  const info = techIcons[tag];
                  return (
                    <span key={tag} className="font-mono-custom text-[0.62rem] tracking-widest text-text3 border border-white/5 bg-transparent px-3 py-1.5 rounded-sm uppercase transition-all duration-200 flex items-center gap-1.5">
                      {info && <svg viewBox={info.vb} className="w-3.5 h-3.5 fill-current text-accent/80"><path d={info.path}/></svg>}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // DESKTOP VIEW
  return (
    <div className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-bg selection:bg-accent/30 flex flex-col font-display z-10 border-t border-white/5">
      
      {/* Background Environment - Cinematic Depth */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] mix-blend-screen opacity-50"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] mix-blend-screen opacity-50"></div>
         {/* Subtle grid to maintain portfolio aesthetic */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
      </div>

      {/* Top Bar (MacOS inspired) */}
      <div className="h-7 w-full bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center px-4 justify-between z-50 text-[0.65rem] tracking-wider uppercase text-text3 font-mono-custom">
        <div className="flex items-center gap-5">
          <span className="font-bold text-text1">Portfolio OS</span>
          <span className="hidden sm:inline-block hover:text-text1 cursor-pointer transition-colors">File</span>
          <span className="hidden sm:inline-block hover:text-text1 cursor-pointer transition-colors">Edit</span>
          <span className="hidden sm:inline-block hover:text-text1 cursor-pointer transition-colors">View</span>
          <span className="hidden sm:inline-block hover:text-text1 cursor-pointer transition-colors">Go</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hover:text-text1 cursor-pointer transition-colors hidden sm:inline-block">Workspace</span>
          <span>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
      </div>

      {/* Desktop Canvas */}
      <div className="relative flex-1 w-full h-full p-8 z-10 flex">
        
        {/* Desktop Icons */}
        <div className="flex flex-col gap-8 items-start relative z-10 pt-4">
          {projectsData.map((project) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: projectsData.indexOf(project) * 0.1 }}
              key={`icon-${project.id}`}
              onClick={() => openWindow(project.id)}
              className="flex flex-col items-center gap-2 cursor-pointer group w-24"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 shadow-xl shadow-black/40 backdrop-blur-md ${project.iconColor}`}>
                <Folder size={32} className="drop-shadow-md opacity-90" />
              </div>
              <span className="text-[0.65rem] text-text2 font-mono-custom tracking-wider px-2.5 py-1 rounded-sm bg-black/60 backdrop-blur-md border border-white/5 text-center leading-tight shadow-md">
                {project.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Application Windows */}
        <AnimatePresence>
          {openWindows.map((windowId) => {
            const project = projectsData.find(p => p.id === windowId);
            const isFocused = focusedWindow === windowId;
            const index = openWindows.indexOf(windowId);
            
            return (
              <motion.div
                key={`window-${windowId}`}
                drag
                dragMomentum={false}
                dragElastic={0.1}
                onMouseDown={() => focusWindow(windowId)}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-3xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl flex flex-col cursor-auto overflow-hidden`}
                style={{ 
                  zIndex: isFocused ? 40 : 20 + index,
                  marginLeft: index * 20,
                  marginTop: index * 20,
                  boxShadow: isFocused ? '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.1)' : '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)'
                }}
              >
                {/* Window Header */}
                <div className="h-12 border-b border-white/5 bg-gradient-to-b from-white/[0.08] to-transparent flex items-center px-4 cursor-grab active:cursor-grabbing justify-between select-none">
                  <div className="flex gap-2 items-center w-20">
                    <button 
                      onClick={(e) => closeWindow(windowId, e)}
                      className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group/btn transition-colors border border-black/20"
                    >
                      <X size={8} strokeWidth={3} className="opacity-0 group-hover/btn:opacity-100 text-black/60" />
                    </button>
                    <button className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center group/btn transition-colors border border-black/20">
                      <Minus size={8} strokeWidth={3} className="opacity-0 group-hover/btn:opacity-100 text-black/60" />
                    </button>
                    <button className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center group/btn transition-colors border border-black/20">
                      <Maximize2 size={7} strokeWidth={3} className="opacity-0 group-hover/btn:opacity-100 text-black/60" />
                    </button>
                  </div>
                  <div className="font-mono-custom text-[0.65rem] tracking-widest text-text3 text-center flex-1 pr-20 opacity-70">
                    {project.title.toLowerCase()} — workspace
                  </div>
                </div>

                {/* Window Body */}
                <div className="p-8 flex-1 overflow-y-auto min-h-[350px] bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono-custom text-[0.62rem] tracking-widest text-accent bg-accent/5 px-2 py-0.5 border border-accent/15 rounded-sm uppercase shadow-sm">
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-text1 tracking-tight mb-2 drop-shadow-sm">
                        {project.title}
                      </h3>
                      <p className="font-mono-custom text-xs text-text3 tracking-wider uppercase opacity-80">
                        {project.type}
                      </p>
                    </div>
                    
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all text-text2 hover:text-white shadow-lg"
                    >
                      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                  </div>

                  <p className="text-sm sm:text-base text-text2 leading-[1.8] mb-10 font-light max-w-2xl opacity-90">
                    {project.description}
                  </p>

                  <div className="pt-6 border-t border-white/5">
                    <h4 className="font-mono-custom text-[0.65rem] tracking-widest text-text3 uppercase mb-4 opacity-70">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.map(tag => {
                        const info = techIcons[tag];
                        return (
                          <span key={tag} className="font-mono-custom text-[0.65rem] tracking-widest text-text2 bg-black/40 border border-white/10 px-3 py-1.5 rounded-sm uppercase hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-colors flex items-center gap-2 shadow-sm">
                            {info && <svg viewBox={info.vb} className="w-3.5 h-3.5 fill-current opacity-80"><path d={info.path}/></svg>}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
