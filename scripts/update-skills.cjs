const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'src', 'pages', 'index.astro');
let content = fs.readFileSync(indexPath, 'utf8');

// The new topology map HTML + CSS + JS
const newTopologyContent = `
		<!-- TOPOLOGY SKILLS SECTION -->
		<section id="skills" class="topology-section">
			<h2 class="section-title reveal">Infrastructure</h2>
			<div class="title-bar reveal"></div>
			<p
				style="color:#888;margin-bottom:2.5rem;font-size:0.95rem;max-width:600px;"
				class="reveal"
			>
				Interactive system topology. Hover to illuminate capability clusters and active data paths.
			</p>

			<div class="topology-container reveal" id="topo-container">
				<svg class="topology-svg" id="topo-svg"></svg>
				
				<!-- Group: Core Programming -->
				<div class="topo-cluster" data-x="22" data-y="30" data-mob-x="50" data-mob-y="20">
					<div class="topo-category">Core Programming</div>
					<div class="topo-nodes-grid">
						<div class="topo-node core-lang" tabindex="0">Python</div>
						<div class="topo-node" tabindex="0">C</div>
						<div class="topo-node" tabindex="0">C++</div>
						<div class="topo-node" tabindex="0">JavaScript</div>
					</div>
				</div>

				<!-- Group: Interface Systems -->
				<div class="topo-cluster" data-x="78" data-y="30" data-mob-x="50" data-mob-y="50">
					<div class="topo-category">Interface Systems</div>
					<div class="topo-nodes-grid">
						<div class="topo-node" tabindex="0">Next.js</div>
						<div class="topo-node" tabindex="0">Tailwind</div>
						<div class="topo-node" tabindex="0">Framer Motion</div>
					</div>
				</div>

				<!-- Group: Data Systems -->
				<div class="topo-cluster" data-x="50" data-y="75" data-mob-x="50" data-mob-y="80">
					<div class="topo-category">Data Systems</div>
					<div class="topo-nodes-grid">
						<div class="topo-node" tabindex="0">SQL</div>
						<div class="topo-node" tabindex="0">PostgreSQL</div>
					</div>
				</div>

				<!-- Center System Node -->
				<div class="topo-sys-node" id="node-sys">
					<div class="sys-pulse"></div>
					<span class="sys-label">YATHIN.SYS</span>
				</div>
			</div>
		</section>
`;

const cssContent = `
			/* TOPOLOGY SYSTEM */
			.topology-section {
				position: relative;
				padding: 6rem 0;
				overflow: hidden;
			}

			.topology-container {
				position: relative;
				width: 100%;
				height: 700px;
				background: radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%);
				border: 1px solid var(--glass-border);
				border-radius: 24px;
				margin-top: 2rem;
				overflow: hidden;
				/* Subtle grid overlay for spatial depth */
				background-image: 
					radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%),
					linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
					linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
				background-size: 100% 100%, 40px 40px, 40px 40px;
			}

			.topology-svg {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1;
				pointer-events: none;
			}

			.topo-path {
				fill: none;
				stroke: rgba(255,255,255,0.08);
				stroke-width: 1.5;
				transition: stroke 0.5s ease, stroke-width 0.5s ease, filter 0.5s ease;
			}

			.topo-path.active {
				stroke: var(--accent);
				stroke-width: 2.5;
				filter: drop-shadow(0 0 8px var(--accent-glow));
			}

			.topo-cluster {
				position: absolute;
				top: 0; left: 0;
				transform: translate(-50%, -50%);
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1.2rem;
				will-change: transform;
				z-index: 2;
			}

			.topo-category {
				font-size: 0.75rem;
				letter-spacing: 0.15em;
				text-transform: uppercase;
				color: rgba(255,255,255,0.5);
				background: rgba(0,0,0,0.5);
				padding: 0.4rem 1rem;
				border-radius: 20px;
				border: 1px solid rgba(255,255,255,0.05);
				backdrop-filter: blur(8px);
				transition: color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
			}

			.topo-nodes-grid {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 0.75rem;
				max-width: 280px;
			}

			.topo-node {
				padding: 0.6rem 1.2rem;
				border-radius: 12px;
				background: rgba(255,255,255,0.03);
				border: 1px solid rgba(255,255,255,0.08);
				color: #a0a0a0;
				font-size: 0.9rem;
				font-weight: 500;
				cursor: pointer;
				backdrop-filter: blur(12px);
				transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
							background 0.4s ease, 
							border-color 0.4s ease, 
							color 0.4s ease, 
							box-shadow 0.4s ease,
							opacity 0.4s ease;
				will-change: transform, opacity;
			}

			.topo-node.core-lang {
				background: rgba(249, 115, 22, 0.08);
				border-color: rgba(249, 115, 22, 0.3);
				color: #fff;
				box-shadow: 0 0 15px rgba(249, 115, 22, 0.1);
			}

			.topo-node:hover, .topo-node:focus-visible {
				transform: scale(1.1) translateY(-4px);
				background: rgba(255,255,255,0.1);
				border-color: rgba(255,255,255,0.3);
				color: #fff;
				box-shadow: 0 10px 25px rgba(0,0,0,0.4);
				outline: none;
			}

			.topo-node.core-lang:hover, .topo-node.core-lang:focus-visible {
				background: rgba(249, 115, 22, 0.2);
				border-color: var(--accent);
				box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
			}

			.topo-node.faded {
				opacity: 0.25;
				transform: scale(0.95);
				filter: grayscale(100%);
			}

			/* System Core Node */
			.topo-sys-node {
				position: absolute;
				top: 0; left: 0;
				transform: translate(-50%, -50%);
				width: 80px;
				height: 80px;
				border-radius: 50%;
				background: rgba(0,0,0,0.8);
				border: 1px solid var(--accent);
				display: flex;
				align-items: center;
				justify-content: center;
				z-index: 3;
				box-shadow: 0 0 25px var(--accent-glow), inset 0 0 15px var(--accent-glow);
				cursor: default;
				will-change: transform;
			}

			.sys-pulse {
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				border: 1px solid var(--accent);
				animation: sys-ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
			}

			.sys-label {
				font-family: 'Orbitron', sans-serif;
				font-size: 0.65rem;
				font-weight: 700;
				color: var(--accent);
				letter-spacing: 0.05em;
			}

			@keyframes sys-ping {
				75%, 100% {
					transform: scale(2.2);
					opacity: 0;
				}
			}

			@media (max-width: 768px) {
				.topology-container {
					height: 850px;
				}
			}
`;

const jsContent = `
			// TOPOLOGY PHYSICS ENGINE
			document.addEventListener("DOMContentLoaded", () => {
				const container = document.getElementById("topo-container");
				if (!container) return;

				const svg = document.getElementById("topo-svg");
				const sysNode = document.getElementById("node-sys");
				const clusters = document.querySelectorAll(".topo-cluster");
				const allNodes = document.querySelectorAll(".topo-node");
				
				// State
				let mouseX = 0, mouseY = 0;
				let isHoveringNode = false;
				
				// Mouse tracking for parallax
				container.addEventListener("mousemove", (e) => {
					const rect = container.getBoundingClientRect();
					mouseX = e.clientX - rect.left;
					mouseY = e.clientY - rect.top;
				});
				container.addEventListener("mouseleave", () => {
					const rect = container.getBoundingClientRect();
					mouseX = rect.width / 2;
					mouseY = rect.height / 2;
				});

				const clusterData = [];

				clusters.forEach((cluster) => {
					// Create path from Sys to Cluster
					const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
					path.classList.add("topo-path");
					svg.appendChild(path);

					const nodes = cluster.querySelectorAll(".topo-node");

					nodes.forEach(node => {
						const handleEnter = () => {
							isHoveringNode = true;
							allNodes.forEach(n => {
								if (n !== node) n.classList.add("faded");
							});
							path.classList.add("active");
							const cat = cluster.querySelector(".topo-category");
							cat.style.color = "#fff";
							cat.style.borderColor = "var(--accent)";
							cat.style.boxShadow = "0 0 15px var(--accent-glow)";
						};

						const handleLeave = () => {
							isHoveringNode = false;
							allNodes.forEach(n => n.classList.remove("faded"));
							path.classList.remove("active");
							const cat = cluster.querySelector(".topo-category");
							cat.style.color = "";
							cat.style.borderColor = "";
							cat.style.boxShadow = "";
						};

						node.addEventListener("mouseenter", handleEnter);
						node.addEventListener("focus", handleEnter);
						node.addEventListener("mouseleave", handleLeave);
						node.addEventListener("blur", handleLeave);
					});

					clusterData.push({
						el: cluster,
						path: path,
						baseX: 0, baseY: 0,
						currX: 0, currY: 0,
						vx: 0, vy: 0
					});
				});

				let sysBaseX = 0, sysBaseY = 0;
				let sysCurrX = 0, sysCurrY = 0;
				let sysVx = 0, sysVy = 0;

				function updateBases() {
					const rect = container.getBoundingClientRect();
					const isMobile = rect.width < 768;
					
					clusterData.forEach(cd => {
						const px = parseFloat(cd.el.getAttribute(isMobile ? "data-mob-x" : "data-x"));
						const py = parseFloat(cd.el.getAttribute(isMobile ? "data-mob-y" : "data-y"));
						cd.baseX = (px / 100) * rect.width;
						cd.baseY = (py / 100) * rect.height;
						if (cd.currX === 0) {
							cd.currX = cd.baseX;
							cd.currY = cd.baseY;
						}
					});

					// Sys node base
					sysBaseX = rect.width / 2;
					sysBaseY = isMobile ? rect.height - 80 : rect.height / 2;
					if (sysCurrX === 0) {
						sysCurrX = sysBaseX;
						sysCurrY = sysBaseY;
					}
					
					// Set initial mouse to center if not interacted
					if (mouseX === 0) {
						mouseX = rect.width / 2;
						mouseY = rect.height / 2;
					}
				}

				window.addEventListener("resize", updateBases);
				setTimeout(updateBases, 100); // ensure layout is ready
				
				// Physics Loop (Spring interpolation + Floating mechanics)
				function render() {
					const rect = container.getBoundingClientRect();
					if (rect.width === 0 || sysBaseX === 0) {
						requestAnimationFrame(render);
						return;
					}

					// System Node Physics
					const sysDx = (mouseX - sysBaseX) * 0.05;
					const sysDy = (mouseY - sysBaseY) * 0.05;
					let sTargetX = sysBaseX + sysDx;
					let sTargetY = sysBaseY + sysDy;

					const sAx = (sTargetX - sysCurrX) * 0.1;
					const sAy = (sTargetY - sysCurrY) * 0.1;
					sysVx = (sysVx + sAx) * 0.8;
					sysVy = (sysVy + sAy) * 0.8;
					sysCurrX += sysVx;
					sysCurrY += sysVy;

					sysNode.style.transform = \`translate(calc(-50% + \${sysCurrX - sysBaseX}px), calc(-50% + \${sysCurrY - sysBaseY}px))\`;

					// Clusters Physics
					const time = Date.now() * 0.001;

					clusterData.forEach((cd, i) => {
						// Mouse repel/attract parallax
						const dx = mouseX - cd.baseX;
						const dy = mouseY - cd.baseY;
						const dist = Math.sqrt(dx*dx + dy*dy);
						
						let targetX = cd.baseX;
						let targetY = cd.baseY;

						// Subtle parallax pulling towards mouse
						targetX += dx * 0.03;
						targetY += dy * 0.03;

						// Spring physics
						const ax = (targetX - cd.currX) * 0.08;
						const ay = (targetY - cd.currY) * 0.08;

						cd.vx = (cd.vx + ax) * 0.75;
						cd.vy = (cd.vy + ay) * 0.75;

						cd.currX += cd.vx;
						cd.currY += cd.vy;

						// Atmospheric floating offset
						const floatX = Math.cos(time + i * 2) * 8;
						const floatY = Math.sin(time + i * 2) * 12;

						const finalX = cd.currX + floatX;
						const finalY = cd.currY + floatY;

						cd.el.style.transform = \`translate(calc(-50% + \${finalX - cd.baseX}px), calc(-50% + \${finalY - cd.baseY}px))\`;

						// Dynamic SVG Bezier Line
						// Draw from SysNode edge to Cluster edge
						const startX = sysCurrX;
						const startY = sysCurrY;
						
						// Approximate cluster target (top or bottom center)
						const catEl = cd.el.querySelector(".topo-category");
						const isAbove = finalY < sysCurrY;
						const endY = isAbove ? finalY + 40 : finalY - 40;
						const endX = finalX;

						// Smooth S-Curve
						const ctrlY1 = startY + (endY - startY) * 0.5;
						const ctrlY2 = endY - (endY - startY) * 0.5;

						cd.path.setAttribute("d", \`M \${startX} \${startY} C \${startX} \${ctrlY1}, \${endX} \${ctrlY2}, \${endX} \${endY}\`);
					});

					requestAnimationFrame(render);
				}
				
				requestAnimationFrame(render);
			});
`;

// Replace the section logic
const startTag = '<section id="skills" class="capabilities-section">';
const endTagMarker = '<!-- ACHIEVEMENTS -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTagMarker);

if (startIndex !== -1 && endIndex !== -1) {
	// Splice in the HTML
	let before = content.substring(0, startIndex);
	let after = content.substring(endIndex);
	
	// Splice the CSS into the <style> block
	const styleEndTag = '</style>';
	const styleEndIndex = before.lastIndexOf(styleEndTag);
	if (styleEndIndex !== -1) {
		before = before.substring(0, styleEndIndex) + cssContent + '\\n' + before.substring(styleEndIndex);
	}
	
	// Splice the JS into the existing script block at the end (or add a new one before </body>)
	const scriptEndTag = '</body>';
	const scriptEndIndex = after.lastIndexOf(scriptEndTag);
	if (scriptEndIndex !== -1) {
		after = after.substring(0, scriptEndIndex) + '<script>' + jsContent + '</script>\\n' + after.substring(scriptEndIndex);
	}

	const newContent = before + newTopologyContent + '\\n\\t\\t' + after;
	
	fs.writeFileSync(indexPath, newContent, 'utf8');
	console.log("Successfully replaced the capabilities section with the new Topology Map.");
} else {
	console.log("Could not find start or end tags!");
	console.log("Start Index:", startIndex);
	console.log("End Index:", endIndex);
}
