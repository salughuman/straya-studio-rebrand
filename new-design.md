<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>STRAYA STUDIO | Cinematic Digital Deployments</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');
        
        /* Custom Font Simulation for PP Mori */
        @font-face {
            font-family: 'PP_Mori';
            src: local('Helvetica Neue'), local('Arial');
            font-weight: 700;
        }

        body {
            font-family: 'Instrument Sans', sans-serif;
            background-color: #F9F9F9;
            cursor: crosshair;
        }

        .grain-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.02;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .pp-mori {
            font-family: 'PP_Mori', sans-serif;
        }

        .tight-tracking {
            letter-spacing: -0.04em;
        }

        .blueprint-tracking {
            letter-spacing: 0.05em;
        }

        .custom-bezier {
            transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }

        .magnetic-cta {
            transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .magnetic-cta:hover {
            transform: translateZ(20px) scale(1.02);
        }

        .z-depth-1 { transform: translateZ(10px); }
        .z-depth-2 { transform: translateZ(20px); }
        
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-high": "#e8e8e8",
                        "on-primary": "#e5e2e1",
                        "on-surface-variant": "#474747",
                        "primary-fixed": "#5f5e5e",
                        "tertiary": "#3c3b3b",
                        "outline-variant": "#c6c6c6",
                        "on-secondary": "#ffffff",
                        "surface-container-highest": "#e2e2e2",
                        "secondary": "#006d3d",
                        "on-background": "#1a1c1c",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#2dc376",
                        "on-error-container": "#410002",
                        "surface-container-low": "#f3f3f3",
                        "surface-dim": "#dadada",
                        "inverse-surface": "#2f3131",
                        "on-primary-container": "#ffffff",
                        "tertiary-fixed-dim": "#474646",
                        "inverse-on-surface": "#f1f1f1",
                        "surface-container": "#eeeeee",
                        "surface-tint": "#5f5e5e",
                        "on-secondary-fixed-variant": "#004525",
                        "on-secondary-container": "#00210f",
                        "surface": "#f9f9f9",
                        "on-error": "#ffffff",
                        "error-container": "#ffdad6",
                        "surface-bright": "#f9f9f9",
                        "primary": "#000000",
                        "surface-container-lowest": "#ffffff",
                        "background": "#f9f9f9",
                        "inverse-primary": "#c8c6c5",
                        "on-surface": "#1a1c1c",
                        "on-primary-fixed-variant": "#e5e2e1",
                        "secondary-container": "#62ee9c",
                        "on-tertiary-fixed": "#ffffff",
                        "on-tertiary-fixed-variant": "#e5e2e1",
                        "on-primary-fixed": "#ffffff",
                        "on-secondary-fixed": "#00210f",
                        "on-tertiary-container": "#ffffff",
                        "tertiary-container": "#767474",
                        "primary-fixed-dim": "#474746",
                        "secondary-fixed": "#52df8f",
                        "tertiary-fixed": "#5f5e5e",
                        "on-tertiary": "#e5e2e1",
                        "surface-variant": "#e2e2e2",
                        "primary-container": "#3c3b3b",
                        "outline": "#777777"
                    },
                    "borderRadius": {
                        "DEFAULT": "0px",
                        "lg": "0px",
                        "xl": "0px",
                        "full": "9999px"
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-background selection:bg-secondary selection:text-on-secondary perspective-[1000px]">
<div class="grain-overlay"></div>
<!-- Navigation (Preserved from Components_3) -->
<nav class="fixed top-0 w-full z-50 bg-[#F9F9F9]/80 backdrop-blur-xl border-b border-black/5 flex justify-between items-center px-8 py-4">
<div class="pp-mori font-black text-xl tracking-tighter text-black">STRAYA STUDIO</div>
<div class="hidden md:flex items-center space-x-8">
<a class="font-['PP_Mori'] font-bold tracking-[-0.04em] uppercase text-xs text-black border-b border-black pb-1 hover:scale-[1.02] transition-transform duration-300" href="#">Work</a>
<a class="font-['PP_Mori'] font-bold tracking-[-0.04em] uppercase text-xs text-black/40 hover:text-black transition-colors duration-300 hover:scale-[1.02]" href="#">Framework</a>
<a class="font-['PP_Mori'] font-bold tracking-[-0.04em] uppercase text-xs text-black/40 hover:text-black transition-colors duration-300 hover:scale-[1.02]" href="#">Studio</a>
<a class="font-['PP_Mori'] font-bold tracking-[-0.04em] uppercase text-xs text-black/40 hover:text-black transition-colors duration-300 hover:scale-[1.02]" href="#">Archive</a>
</div>
<button class="bg-primary text-on-primary px-6 py-2 pp-mori font-bold tracking-[-0.04em] uppercase text-xs hover:bg-[#3CCD7F] transition-colors duration-300 magnetic-cta">
            Initiate Project
        </button>
</nav>
<main class="pt-24 min-h-screen overflow-x-hidden">
<!-- Hero Section -->
<section class="relative px-8 pt-20 pb-20 border-b border-black/5">
<div class="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.06]">
<div class="border-r border-black"></div>
<div class="border-r border-black"></div>
<div class="border-r border-black"></div>
<div></div>
</div>
<div class="relative z-10 max-w-7xl mx-auto">
<div class="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div class="z-depth-1">
<span class="block text-[0.6875rem] blueprint-tracking uppercase font-bold text-black/40 mb-4">EST. 2024 / MELBOURNE</span>
<h1 class="pp-mori font-bold text-6xl md:text-[7.5rem] leading-[0.9] text-black tight-tracking uppercase">
                            Cinematic<br/>Digital<br/>Deployments
                        </h1>
</div>
<div class="max-w-md text-right z-depth-1">
<p class="text-base leading-relaxed text-black/80 mb-6 font-medium">
                            Designing &amp; developing ideas into icons. From Framer to Shopify — we engineer platforms that load faster, convert higher, and look like nothing else in your market.
                        </p>
<div class="flex items-center justify-end space-x-2">
<span class="text-[0.6875rem] blueprint-tracking uppercase font-bold text-black">SALMAN ALI</span>
<span class="w-8 h-[1px] bg-black/10"></span>
<span class="text-[0.6875rem] blueprint-tracking uppercase font-bold text-black/40">Founder / Framer Expert</span>
</div>
</div>
</div>
<!-- Metrics Section (from Image_7) -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
<div class="p-8 border border-black/5 bg-surface-container-lowest">
<div class="pp-mori text-4xl font-bold mb-1">100+</div>
<div class="text-[0.625rem] blueprint-tracking uppercase font-bold text-black/40">Deployments</div>
</div>
<div class="p-8 border border-black/5 bg-surface-container-lowest">
<div class="pp-mori text-4xl font-bold mb-1">5.0</div>
<div class="text-[0.625rem] blueprint-tracking uppercase font-bold text-black/40">Rating</div>
</div>
<div class="p-8 border border-black/5 bg-surface-container-lowest">
<div class="pp-mori text-4xl font-bold mb-1">100%</div>
<div class="text-[0.625rem] blueprint-tracking uppercase font-bold text-black/40">Quality</div>
</div>
<div class="p-8 border border-black/5 bg-primary text-white">
<div class="pp-mori text-4xl font-bold mb-1">Elite</div>
<div class="text-[0.625rem] blueprint-tracking uppercase font-bold opacity-60">Status</div>
</div>
</div>
<!-- Platform Logos Marquee -->
<div class="relative overflow-hidden py-12 border-y border-black/5">
<div class="flex animate-marquee whitespace-nowrap">
<div class="flex items-center space-x-24 px-12">
<span class="pp-mori font-bold text-2xl uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">Astro</span>
<span class="pp-mori font-bold text-2xl uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">Webflow</span>
<span class="pp-mori font-bold text-2xl uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">Shopify</span>
<span class="pp-mori font-bold text-2xl uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">Framer</span>
</div>
<div class="flex items-center space-x-24 px-12">
<span class="pp-mori font-bold text-2xl uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">Astro</span>
<span class="pp-mori font-bold text-2xl uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">Webflow</span>
<span class="pp-mori font-bold text-2xl uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">Shopify</span>
<span class="pp-mori font-bold text-2xl uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">Framer</span>
</div>
</div>
</div>
</div>
</section>
<!-- Straya Method Section (formerly Deployment Hierarchy) -->
<section class="px-8 py-32 bg-surface-container-lowest overflow-hidden">
<div class="max-w-7xl mx-auto">
<div class="flex justify-between items-baseline mb-24 border-b border-black/5 pb-4">
<h2 class="text-[0.6875rem] blueprint-tracking uppercase font-bold text-black">The Straya Method</h2>
<span class="text-[0.6875rem] blueprint-tracking uppercase font-bold text-black/20">V1.0.2 / SYSTEM_STATUS: STABLE</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-0">
<!-- Discovery -->
<div class="p-10 border-r border-black/5 flex flex-col justify-between group hover:bg-surface transition-colors duration-500 min-h-[460px] relative">
<span class="absolute top-8 right-8 text-[4rem] font-bold text-black/5 leading-none">01</span>
<div>
<span class="material-symbols-outlined text-3xl mb-8 block" style="font-variation-settings: 'FILL' 0;">search</span>
<h3 class="pp-mori text-2xl font-bold tight-tracking uppercase mb-6">Discovery</h3>
<ul class="space-y-3">
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Project objectives &amp; success metrics</li>
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Brand, market, and competitor deep-dive</li>
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Technical requirements and platform fit</li>
</ul>
</div>
</div>
<!-- Architecture -->
<div class="p-10 border-r border-black/5 flex flex-col justify-between group hover:bg-surface transition-colors duration-500 min-h-[460px] relative">
<span class="absolute top-8 right-8 text-[4rem] font-bold text-black/5 leading-none">02</span>
<div>
<span class="material-symbols-outlined text-3xl mb-8 block" style="font-variation-settings: 'FILL' 0;">account_tree</span>
<h3 class="pp-mori text-2xl font-bold tight-tracking uppercase mb-6">Architecture</h3>
<ul class="space-y-3">
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Platform and technology stack selection</li>
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>CMS structure and content modeling</li>
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Performance, SEO, and conversion strategy</li>
</ul>
</div>
</div>
<!-- Engineering -->
<div class="p-10 border-r border-black/5 flex flex-col justify-between group hover:bg-surface transition-colors duration-500 min-h-[460px] relative">
<span class="absolute top-8 right-8 text-[4rem] font-bold text-black/5 leading-none">03</span>
<div>
<span class="material-symbols-outlined text-3xl mb-8 block" style="font-variation-settings: 'FILL' 0;">code</span>
<h3 class="pp-mori text-2xl font-bold tight-tracking uppercase mb-6">Engineering</h3>
<ul class="space-y-3">
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Sprint-based development with milestones</li>
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Design system and component architecture</li>
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Iteration review at every stage</li>
</ul>
</div>
</div>
<!-- Optimisation -->
<div class="p-10 flex flex-col justify-between group hover:bg-surface transition-colors duration-500 min-h-[460px] relative">
<span class="absolute top-8 right-8 text-[4rem] font-bold text-black/5 leading-none">04</span>
<div>
<span class="material-symbols-outlined text-3xl mb-8 block" style="font-variation-settings: 'FILL' 0;">speed</span>
<h3 class="pp-mori text-2xl font-bold tight-tracking uppercase mb-6">Optimisation</h3>
<ul class="space-y-3">
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>100/100 Lighthouse score tuning</li>
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Core Web Vitals and technical SEO</li>
<li class="text-xs text-black/60 flex items-start gap-2"><span class="w-1 h-1 bg-black/20 rounded-full mt-1.5"></span>Post-launch monitoring and support</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<!-- Featured Project - Bento Style -->
<section class="px-8 py-32 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-12 gap-8">
<div class="col-span-12 md:col-span-8 bg-surface-container-lowest p-8 border border-black/5 group overflow-hidden z-depth-1">
<div class="flex justify-between items-start mb-8">
<div>
<h3 class="pp-mori text-4xl font-bold tight-tracking uppercase">The Alabaster Framework</h3>
<p class="text-sm text-black/40 uppercase mt-2 blueprint-tracking font-bold">Research &amp; Development</p>
</div>
<span class="material-symbols-outlined text-black/20 group-hover:text-black transition-colors">arrow_outward</span>
</div>
<div class="aspect-video bg-surface-container overflow-hidden">
<img alt="Clean lighting" class="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-[1.05]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDw0NdN_D2irN5hpJZUo5B6i2Q7Ir6LFaLtMv6BIR5vbHLh9g_o3IGezf_muijp8tw0qV-zuXhQSn1XopKb3PQ4naDiAHrg4q8MDhg2J5jXS1Q2BogUZTzWOXHvIo-Zb14OxCPmOSNi88woj9Q68wfEGk-1Hxdo3g-HQAbss6WWpSI0caVvPH9eEnEaHmgIe3DvQuhLm2r_qkPHfbcgR-2PMu04Gi4C26I34v8thPGe7vfgcHctky2pEMU356IklstIevQXOanr8nZ"/>
</div>
</div>
<div class="col-span-12 md:col-span-4 flex flex-col gap-8">
<div class="flex-1 bg-primary p-8 flex flex-col justify-between group magnetic-cta cursor-none z-depth-2">
<p class="text-on-primary pp-mori text-2xl font-bold leading-tight uppercase">Ready to deploy your next vision?</p>
<button class="flex items-center text-on-primary group-hover:text-[#3CCD7F] transition-colors">
<span class="pp-mori font-bold uppercase text-xs blueprint-tracking mr-4">Initiate project</span>
<span class="material-symbols-outlined">east</span>
</button>
</div>
<div class="flex-1 bg-surface-container-high p-8 flex flex-col justify-between border border-black/5 z-depth-1">
<div>
<span class="text-[0.6875rem] blueprint-tracking font-bold text-black/40 uppercase">Studio Status</span>
<div class="flex items-center mt-2 space-x-2">
<span class="w-2 h-2 bg-[#3CCD7F] rounded-full"></span>
<span class="pp-mori font-bold uppercase text-sm">Accepting New Briefs</span>
</div>
</div>
<p class="text-xs text-black/60 leading-relaxed">Currently prioritizing projects with high cinematic potential and technical complexity.</p>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer (Preserved from Components_3) -->
<footer class="bg-[#F3F3F3] dark:bg-[#121212] border-t border-black/5 px-8 py-12">
<div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div class="col-span-2">
<div class="pp-mori font-bold text-lg mb-4">STRAYA STUDIO</div>
<p class="font-['Instrument_Sans'] text-[0.6875rem] leading-relaxed tracking-[0.05em] uppercase opacity-60">
                    ©2024 STRAYA STUDIO. ALL RIGHTS RESERVED. CINEMATIC DIGITAL DEPLOYMENTS BUILT BY SALMAN ALI.
                </p>
</div>
<div>
<span class="block font-['Instrument_Sans'] text-[0.6875rem] font-bold text-black/20 tracking-[0.05em] uppercase mb-4">Metadata</span>
<ul class="space-y-2">
<li class="font-['Instrument_Sans'] text-[0.6875rem] tracking-[0.05em] uppercase hover:opacity-100 transition-opacity">MELBOURNE 14:02 AEST</li>
<li class="font-['Instrument_Sans'] text-[0.6875rem] tracking-[0.05em] uppercase hover:opacity-100 transition-opacity">LAT: -37.8136</li>
</ul>
</div>
<div>
<span class="block font-['Instrument_Sans'] text-[0.6875rem] font-bold text-black/20 tracking-[0.05em] uppercase mb-4">System</span>
<ul class="space-y-2">
<li class="font-['Instrument_Sans'] text-[0.6875rem] tracking-[0.05em] uppercase hover:opacity-100 transition-opacity">STATUS: DEPLOYED</li>
<li class="font-['Instrument_Sans'] text-[0.6875rem] tracking-[0.05em] uppercase hover:opacity-100 transition-opacity">V1.0.2</li>
</ul>
</div>
</div>
</footer>
</body></html>