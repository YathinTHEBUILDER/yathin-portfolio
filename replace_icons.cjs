const fs = require('fs');
const simpleIcons = require('simple-icons');

const filePath = 'src/pages/index.astro';
let content = fs.readFileSync(filePath, 'utf8');

// The required custom logos
const customLogos = {
    'Groq API': { path: 'M105.304012.00401184C47.7040118-.49598816.50401184 45.8040118.00401184 103.404012c-.5 57.6 45.79999996 104.8 103.40000016 105.3h36.2v-39.1h-34.3c-36.0000002.4-65.6000002-28.4-66.0000002-64.5-.4-36.1000002 28.4-65.6000002 64.5000002-66.0000002h1.5c36 0 65.2 29.2 65.4 65.2000002v96.1c0 35.7-29.1 64.8-64.7 65.2-17.1000002-.1-33.4000002-7-45.4000002-19.1l-27.7 27.7c19.2 19.3 45.2 30.3 72.4000002 30.5h1.4c56.9-.8 102.6-47 102.9-103.9v-99.1c-1.4-56.5000002-47.7-101.60000016-104.3-101.70000016Z', url: 'https://groq.com' },
    'Gemini API': { path: 'M12 .3c-.15 0-.31.05-.44.17-1.33 1.43-2.03 2.62-3.11 3.56-1.08.94-2.34 1.5-3.78 1.77-.15.03-.28.12-.39.23-.11.11-.17.27-.17.44 0 .17.06.32.17.45.11.13.25.22.42.27 1.4.27 2.66.84 3.77 1.72s1.78 2.03 2.01 3.42c.04.18.12.33.24.44.12.11.27.16.41.16s.29-.05.43-.16.23-.26.23-.44c.28-1.41.97-2.57 2.07-3.47s2.33-1.46 3.69-1.68c.18-.04.33-.12.43-.24s.18-.28.18-.46c0-.18-.06-.32-.19-.45s-.28-.23-.42-.23c-1.44-.27-2.68-.87-3.73-1.79-1.05-.92-1.72-2.08-2.02-3.49-.04-.15-.12-.3-.22-.39s-.28-.18-.45-.18z', url: 'https://ai.google.dev/gemini-api/docs' },
    'Tavily API': { path: 'M39.5137 0C45.2842 0 48.17 2.47984e-05 50.374 1.12305C52.3127 2.11089 53.8892 3.68731 54.877 5.62598C55.9998 7.82995 56 10.7153 56 16.4854V39.5146C56 45.2847 55.9998 48.17 54.877 50.374C53.8891 52.3127 52.3127 53.8891 50.374 54.877C48.17 56 45.2842 56 39.5137 56H16.4854C10.7148 56 7.82905 56 5.625 54.877C3.68646 53.8891 2.11082 52.3126 1.12305 50.374C4.91453e-05 48.17 5.27826e-10 45.2849 0 39.5146V16.4854C4.81286e-10 10.7151 4.80472e-05 7.82999 1.12305 5.62598C2.11082 3.68739 3.68646 2.11089 5.625 1.12305C7.82905 2.47984e-05 10.7148 0 16.4854 0H39.5137ZM23.8105 30.958C23.5077 30.9581 23.2076 31.0175 22.9277 31.1338C22.6478 31.2502 22.393 31.4216 22.1787 31.6367L17.7705 36.0625L16.5986 34.8867C15.7377 34.0228 14.2649 34.4498 13.9971 35.6426L12.3271 43.0713C12.2686 43.3267 12.2752 43.593 12.3477 43.8447C12.4199 44.0956 12.555 44.3246 12.7393 44.5088L12.7383 44.5107C12.922 44.6967 13.1498 44.8324 13.4004 44.9053C13.6513 44.9782 13.9173 44.9856 14.1719 44.9268L21.5713 43.25C22.7588 42.9812 23.1851 41.502 22.3242 40.6377L21.1523 39.4619L25.5615 35.0371C25.9943 34.6025 26.2373 34.012 26.2373 33.3975C26.2372 32.783 25.9942 32.1934 25.5615 31.7588L25.5029 31.6992L25.5049 31.6982L25.4434 31.6367C25.229 31.4215 24.9744 31.2503 24.6943 31.1338C24.4144 31.0174 24.1136 30.958 23.8105 30.958ZM39.7139 28.1689C38.6842 27.5158 37.3429 28.2597 37.3428 29.4824V31.1445H27.8955C28.2111 31.7502 28.3916 32.439 28.3916 33.1699C28.3915 34.2266 28.0177 35.196 27.3965 35.9521H37.3418V37.6143C37.342 38.837 38.6843 39.58 39.7139 38.9268L46.1279 34.8613C46.6077 34.5556 46.8476 34.0509 46.8477 33.5469C46.847 33.0436 46.6067 32.5399 46.126 32.2354L39.7139 28.1689ZM24.0391 10.4062C23.778 10.4051 23.5207 10.4712 23.292 10.5977C23.063 10.7243 22.869 10.9083 22.7305 11.1309L18.6807 17.5684H18.6787C18.028 18.602 18.7694 19.9499 19.9873 19.9502H21.6436V29.5137C22.3307 29.0592 23.1537 28.794 24.0381 28.7939C24.9228 28.794 25.7453 29.0599 26.4326 29.5146V19.9502H28.0898C29.3077 19.9501 30.047 18.6028 29.3975 17.5684L25.3457 11.1309C25.0415 10.6489 24.5406 10.4068 24.0391 10.4062Z', url: 'https://docs.tavily.com/', vb: '0 0 56 56' },
    'LiveKit': { path: 'M23.02 6.012c-.13-.08-.29-.08-.42 0L12.56 12.012c-.13.08-.13.23 0 .31l10.04 6c.13.08.29.08.42 0L33.06 12.322c.13-.08.13-.23 0-.31L23.02 6.012zM12 2.012c-.13-.08-.29-.08-.42 0L1.54 8.012c-.13.08-.13.23 0 .31l10.04 6c.13.08.29.08.42 0L22.04 8.322c.13-.08.13-.23 0-.31L12 2.012zM12 21.678l-10.04-6c-.13-.08-.29-.08-.42 0L.98 16.322c-.13.08-.13.23 0 .31l10.04 6c.13.08.29.08.42 0L23.02 16.632c.13-.08.13-.23 0-.31l-.56-.344c-.13-.08-.29-.08-.42 0L12 21.678z', url: 'https://docs.livekit.io/', vb: '0 0 34 24' },
    'Computer Vision': { path: 'M12,4A4,4,0,0,1,16,8A4,4,0,0,1,12,12A4,4,0,0,1,8,8A4,4,0,0,1,12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z', url: 'https://en.wikipedia.org/wiki/Computer_vision' }, // Simple eye-like icon for Computer Vision
    'LLM Integration': { path: 'M15.5 11l-3.5 3.5-3.5-3.5M12 14.5v-9M12 3a9 9 0 100 18 9 9 0 000-18z', url: 'https://en.wikipedia.org/wiki/Large_language_model' } // Simple icon for LLM
};

// Aliases mapping for simple-icons
const aliases = {
    'C++': 'cplusplus',
    'HTML': 'html5',
    'CSS': 'css3',
    'VS Code': 'visualstudiocode',
    'Next.js': 'nextdotjs',
    'GitHub': 'github',
    'Git': 'git',
    'Vercel': 'vercel',
    'Linux': 'linux',
    'React': 'react',
    'Astro': 'astro',
    'TensorFlow': 'tensorflow',
    'Python': 'python',
    'C': 'c',
    'JavaScript': 'javascript',
    'OpenCV': 'opencv'
};

const defaultURLs = {
    'Python': 'https://www.python.org/',
    'C': 'https://en.cppreference.com/w/c',
    'C++': 'https://cplusplus.com/',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    'OpenCV': 'https://opencv.org/',
    'Git': 'https://git-scm.com/',
    'GitHub': 'https://github.com/',
    'VS Code': 'https://code.visualstudio.com/',
    'Vercel': 'https://vercel.com/',
    'Linux': 'https://www.kernel.org/',
    'React': 'https://react.dev/',
    'Astro': 'https://astro.build/',
    'TensorFlow': 'https://www.tensorflow.org/',
    'Next.js': 'https://nextjs.org/',
    'Google Antigravity': 'https://cloud.google.com/'
};

// Find <span class="skill-badge">...</span> and replace with <a> tag
const replacer = (match, contentName) => {
    let name = contentName.trim();
    if (name.startsWith('🌱 ')) name = name.replace('🌱 ', '');
    
    let path = '';
    let vb = '0 0 24 24';
    let url = defaultURLs[name] || '#';
    
    if (customLogos[name]) {
        path = customLogos[name].path;
        url = customLogos[name].url;
        vb = customLogos[name].vb || vb;
    } else {
        const queryName = aliases[name] || name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const siInfo = simpleIcons[`si${queryName.charAt(0).toUpperCase() + queryName.slice(1)}`];
        
        if (siInfo) {
            path = siInfo.path;
            if (url === '#') url = `https://${queryName}.org`; // Fallback
        } else if (name === 'Google Antigravity') {
            const google = simpleIcons.siGoogle;
            path = google.path;
        } else {
            console.log("NOT FOUND IN SIMPLE ICONS:", name);
        }
    }
    
    if (!path) return match; // fallback if nothing found
    
    // We recreate it safely
    let displayContent = contentName.trim();
    return `<a href="${url}" target="_blank" rel="noopener" class="skill-badge" style="display:inline-flex;align-items:center;gap:0.4rem;text-decoration:none;">
							<svg viewBox="${vb}" width="16" height="16" fill="currentColor"><path d="${path}"/></svg>
							${displayContent}
						</a>`;
};

// Do it for the skills section
const regex = /<span class="skill-badge">(.*?)<\/span>/g;
content = content.replace(regex, replacer);

// Do it for the tech-stack badges in project cards
const techBadgeRegex = /<span class="tech-badge">(.*?)<\/span>/g;
const techReplacer = (match, contentName) => {
    let name = contentName.trim();
    
    let path = '';
    let vb = '0 0 24 24';
    let url = defaultURLs[name] || '#';
    
    if (customLogos[name]) {
        path = customLogos[name].path;
        url = customLogos[name].url;
        vb = customLogos[name].vb || vb;
    } else {
        const queryName = aliases[name] || name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const siInfo = simpleIcons[`si${queryName.charAt(0).toUpperCase() + queryName.slice(1)}`];
        if (siInfo) {
            path = siInfo.path;
        }
    }
    
    if (!path) return match;
    
    return `<a href="${url}" target="_blank" rel="noopener" class="tech-badge" style="display:inline-flex;align-items:center;gap:0.3rem;text-decoration:none;">
						<svg viewBox="${vb}" width="14" height="14" fill="currentColor"><path d="${path}"/></svg>
						${name}
					</a>`;
};

content = content.replace(techBadgeRegex, techReplacer);

// Also replace emojis in the category titles
// ⚡ Languages, 🧠 AI & Machine Learning, 🛠️ Tools & Platforms, 🌱 Currently Learning
// Also Achievements header emojis, but maybe keep them as emojis, user specifically asked for "all the softwares mentioned in my profile ... use their logos instead of emojis". Not category emojis. I'll stick to tech tags.

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete.');
