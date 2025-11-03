<template>
  <div class="min-h-screen bg-black text-gray-100 p-4 md:p-6">
    <div
      class="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-auto md:[grid-auto-flow:dense]">
      <!-- HERO -->
      <section
        class="md:col-span-7 lg:col-span-8 md:order-1 border border-white/10 rounded-2xl p-8 flex flex-col justify-end relative backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
        <div class="relative z-10 space-y-3">
          <h1 class="text-5xl font-bold tracking-tight leading-tight">Musa Kavak</h1>
          <p class="text-xl text-gray-400">Full Stack Software Engineer</p>
          <p class="mt-3 text-gray-400 max-w-2xl">
            I love building things that are simple, useful, and enjoyable to use. Most of my time goes into turning
            small ideas into real, working projects that people can actually benefit from.
          </p>
        </div>
      </section>

      <!-- TECH -->
      <section
        class="md:col-span-5 lg:col-span-4 md:order-1 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-4">
          <Cpu class="w-5 h-5 text-gray-400" />
          <h2 class="text-xl font-semibold">Tech Stack</h2>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="(t, i) in techs" :key="i"
            class="text-sm border border-white/10 px-3 py-1 rounded-full text-gray-300 hover:border-white/20 transition">{{
              t }}</span>
        </div>
      </section>

      <!-- PROJECTS -->
      <section
        class="md:col-span-8 lg:col-span-7 md:order-2 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300">
        <div class="flex items-center gap-2 p-4 md:p-5">
          <!-- <div class="flex items-center justify-between p-4 md:p-5 border-b border-white/10"> -->
          <Code class="w-5 h-5 text-gray-400" />
          <h2 class="text-xl font-semibold">Featured Projects</h2>
          <!-- <a href="#" class="text-sm text-gray-500 hover:text-gray-300">All Projects</a> -->
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-5">
          <div v-for="(p, i) in projects" :key="i" :class="[
            'group cursor-pointer rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden bg-black/20',
            i === 0 ? 'md:col-span-2 md:row-span-2' : ''
          ]" @click="openProject(p)">
            <!-- Thumbnail -->
            <div class="relative bg-black/40 flex items-center justify-center">
              <video v-if="isVideo(p.thumbnail)" :src="p.thumbnail" :class="i === 0 ? 'h-full' : 'h-48 md:h-52'"
                class="w-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                autoplay muted loop playsinline />
              <img v-else :src="p.thumbnail" :alt="p.title" :class="i === 0 ? 'h-full' : 'h-48 md:h-52'"
                class="w-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300" />
            </div>

            <!-- Title -->
            <div class="p-3 md:p-4 border-t border-white/10">
              <h3 class="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition">
                {{ p.title }}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <!-- EXPERIENCE -->
      <section
        class="md:col-span-4 lg:col-span-5 md:order-2 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-4">
          <Briefcase class="w-5 h-5 text-gray-400" />
          <h2 class="text-xl font-semibold">Experience</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(job, i) in jobs" :key="i">
            <h3 class="font-medium">{{ job.role }}</h3>
            <p class="text-gray-400 text-sm">
              {{ job.company }} — {{ job.period }}
            </p>
          </li>
        </ul>
      </section>

      <!-- CONTACT -->
      <section
        class="md:col-span-7 lg:col-span-8 md:order-3 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-4">
          <Mail class="w-5 h-5 text-gray-400" />
          <h2 class="text-xl font-semibold">Contact</h2>
        </div>
        <div class="space-y-2 text-sm text-gray-400">
          <a href="mailto:musa0kavak@gmail.com" class="hover:text-gray-200 flex items-center gap-2">
            <Mail class="w-4 h-4" /> musa0kavak@gmail.com
          </a>
          <a href="https://linkedin.com/in/musakavak" class="hover:text-gray-200 flex items-center gap-2">
            <Linkedin class="w-4 h-4" /> linkedin.com/in/musakavak/
          </a>
          <a href="https://github.com/musakavak" class="hover:text-gray-200 flex items-center gap-2">
            <Github class="w-4 h-4" /> github.com/musakavak
          </a>
        </div>
      </section>

      <!-- BLOGS -->
      <section
        class="md:col-span-5 lg:col-span-4 md:order-3 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
        <div class="flex items-center justify-between p-4">
          <!-- <div class="flex items-center justify-between p-4 border-b border-white/10"> -->
          <div class="flex items-center gap-2">
            <PenSquare class="w-5 h-5 text-gray-400" />
            <h2 class="text-xl font-semibold">Recent Posts</h2>
          </div>
          <!-- <a href="#" class="text-sm text-gray-500 hover:text-gray-300">All posts</a> -->
        </div>
        <div class="flex gap-3 p-4">
          <a v-for="(b, i) in blogs" :key="i" :href="b.url"
            class="group relative rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
            <img :src="b.thumbnail" class=" h-28 opacity-70 group-hover:opacity-100 transition" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
            </div>
            <div class="absolute bottom-2 left-2">
              <h3 class="text-sm font-medium">{{ b.title }}</h3>
            </div>
          </a>
        </div>
      </section>

      <!-- EDUCATION -->
      <section
        class="md:col-span-4 lg:col-span-5 md:order-4 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-4">
          <GraduationCap class="w-5 h-5 text-gray-400" />
          <h2 class="text-xl font-semibold">Education</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(edu, i) in education" :key="i">
            <h3 class="font-medium">{{ edu.degree }}</h3>
            <p class="text-gray-400 text-sm">{{ edu.institution }}</p>
          </li>
        </ul>
      </section>

      <!-- NOW -->
      <section
        class="md:col-span-4 lg:col-span-4 md:order-4 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-3">
          <Calendar class="w-5 h-5 text-gray-400" />
          <h2 class="text-xl font-semibold">Now</h2>
        </div>
        <p class="text-sm text-gray-400">
          Currently focused on building and experimenting with virtualization and infrastructure systems.
        </p>
      </section>

      <section
        class="md:col-span-4 lg:col-span-3 md:order-4 border border-white/10 rounded-2xl p-6 flex flex-col justify-end backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
        <p class="text-sm text-right text-gray-400">
          Built with Vue, Tailwind, Lucide @ 2025 Musa Kavak
        </p>
      </section>

      <!-- Project Modal -->
      <div v-if="activeProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div class="absolute inset-0 bg-black/60" @click="closeProject"></div>
        <div
          class="relative z-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-xl p-6 md:p-8 shadow-2xl my-8"
          role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">

          <!-- Header -->
          <div class="flex items-start justify-between gap-4 mb-6">
            <div class="flex-1">
              <h3 id="project-dialog-title" class="text-2xl md:text-3xl font-bold mb-2">{{ activeProject.title }}</h3>
              <p class="text-sm text-gray-500">{{ activeProject.year }}</p>
            </div>
            <button ref="closeBtnRef"
              class="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:border-white/20 text-gray-400 hover:text-gray-200 transition focus:outline-none focus:ring-2 focus:ring-white/20"
              @click="closeProject" aria-label="Close details">
              <X class="w-4 h-4" />
            </button>
          </div>

          <!-- Description -->
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            {{ activeProject.desc }}
          </p>

          <!-- Media -->
          <div class="mb-6 rounded-xl overflow-hidden border border-white/10">
            <template v-if="activeProject && isVideo(activeProject.thumbnail)">
              <video :src="activeProject.thumbnail" class="w-full max-h-96 object-contain bg-black/40" autoplay muted
                loop playsinline preload="auto" disablePictureInPicture
                controlslist="nodownload noplaybackrate noremoteplayback nofullscreen" @pause="$event.target.play()"
                @ended="$event.target.play()" @contextmenu.prevent />
            </template>
            <img v-else-if="activeProject && activeProject.thumbnail" :src="activeProject.thumbnail"
              :alt="activeProject.title" loading="lazy" decoding="async"
              class="w-full max-h-96 object-contain bg-black/40" />
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="(tech, i) in activeProject.technologies" :key="i"
              class="text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 transition">
              {{ tech }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex gap-3 pt-6 border-t border-white/10">
            <a v-if="activeProject.liveLink" :href="activeProject.liveLink" target="_blank" rel="noopener noreferrer"
              class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-gray-200 transition text-sm font-medium">
              <ExternalLink class="w-4 h-4" />
              Go To Site
            </a>
            <a v-if="activeProject.link" :href="activeProject.link" target="_blank" rel="noopener noreferrer"
              class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-gray-200 transition text-sm font-medium">
              <Github class="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    Code,
    Briefcase,
    GraduationCap,
    PenSquare,
    Cpu,
    Mail,
    Linkedin,
    Github,
    Calendar,
    X,
    ExternalLink,
  } from "lucide-vue-next";
  import { ref, watch, nextTick, onBeforeUnmount } from "vue";

  // Helper to detect if a thumbnail is an MP4 video
  const isVideo = (src) => typeof src === 'string' && /\.mp4(\?.*)?$/i.test(src);

  const projects = [
    {
      title: "University Map",
      desc: "A nationwide platform built with Nuxt and Vue that helps students explore universities across Türkiye. Reached over 15,000 monthly users with an interactive, map-based interface.",
      thumbnail: "/universite-haritasi.mp4",
      technologies: ["Vue.js", "Nuxt.js", "PostgreSQL", "Drizzle ORM", "Nginx", "AWS", "Docker", "Leaflet"],
      liveLink: "https://universiteharitasi.com",
      year: 2025,
    },
    {
      title: "Bir Siparişim Var",
      desc: "An all-in-one restaurant management system that connects customers, waiters, and cashiers. It handles everything from digital menus and order tracking to inventory, reports, and performance-based bonuses.",
      thumbnail: "/siparisver.webp",
      technologies: ["Vue.js", ".NET", "Web API", "WebSockets", "Multi-Tenant", "JWT", "PostgreSQL", "Chart.js"],
      year: 2024,
    },
    {
      title: "AI CV Formatter",
      desc: "A Next.js app that simplifies CV formatting and text extraction using AI. It can analyze DOCX files, edit content dynamically, and structure CV data based on defined schemas.",
      thumbnail: "/ai-cv-formatter.webp",
      technologies: ["React", "Next.js", "docx", "AI SDK"],
      link: "https://github.com/musakavak/ai-cv-formatter/",
      liveLink: "https://musakavak.github.io/ai-cv-formatter/",
      year: 2025,
    },
  ];


  const jobs = [
    {
      role: "Software Programming Instructor",
      company: "Nova IT Academy",
      period: "June 2025 – Present"
    },
    {
      role: "Co-Founder",
      company: "Softsprout",
      period: "December 2024 – Present"
    },
    {
      role: "Full Stack Developer",
      company: "Busiwapp Technology Software and Innovation",
      period: "June 2025 – August 2025"
    },
    {
      role: "Web Developer",
      company: "KTC Information Technologies",
      period: "July 2024 – August 2024"
    }
  ];

  const education = [
    {
      degree: "Computer Programming",
      institution: "Konya Technical University — 2023–2025"
    }
  ];



  const blogs = [
    {
      title: "Develop Desktop Apps With Javascript",
      url: "https://medium.com/p/e7005932e57a",
      thumbnail: "/desktop-apps.webp",
    }
  ];

  const techs = [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Tailwind CSS",
    "TypeScript",

    "C#",
    ".NET",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Rust",

    "Flutter",
    "React Native",
    "Kotlin",

    "Docker",
    "AWS",
    "Nginx",

    "Python",
    "TensorFlow",
    "PyTorch",
    "AI API",
  ];



  const activeProject = ref(null);
  const closeBtnRef = ref(null);

  const openProject = (p) => (activeProject.value = p);
  const closeProject = () => (activeProject.value = null);

  const handleKeydown = (e) => {
    if (e.key === "Escape") closeProject();
  };

  watch(activeProject, async (val) => {
    if (val) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeydown);
      await nextTick();
      closeBtnRef.value?.focus();
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    }
  });

  onBeforeUnmount(() => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", handleKeydown);
  });
</script>
