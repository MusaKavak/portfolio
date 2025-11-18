<template>
  <div :data-theme="theme"
    class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] p-4 md:p-6 transition-colors duration-300">
    <button @click="toggleTheme"
      class="fixed bottom-4 right-4 p-3 rounded-full bg-[var(--color-modal-button-bg)] hover:bg-[var(--color-modal-button-bg-hover)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-[var(--color-modal-button-text)] transition-all duration-300 z-50">
      <Sun v-if="theme === 'dark'" class="w-5 h-5" />
      <Moon v-else class="w-5 h-5" />
    </button>
    <div
      class="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-auto md:[grid-auto-flow:dense]">
      <!-- HERO -->
      <section
        class="md:col-span-7 lg:col-span-8 md:order-1 border border-[var(--color-border)] rounded-2xl p-8 flex flex-col justify-end relative backdrop-blur-sm hover:shadow-[0_0_20px_var(--color-card-shadow)] transition-all duration-300">
        <div class="relative z-10 space-y-3">
          <h1 class="text-5xl font-bold tracking-tight leading-tight">{{ uiText.name }}</h1>
          <p class="text-xl text-[var(--color-icon)]">{{ uiText.title }}</p>
          <p class="mt-3 text-[var(--color-icon)] max-w-2xl">
            {{ uiText.description }}
          </p>
        </div>
      </section>

      <!-- TECH -->
      <section
        class="md:col-span-5 lg:col-span-4 md:order-1 border border-[var(--color-border)] rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_var(--color-card-shadow)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-4">
          <Cpu class="w-5 h-5 text-[var(--color-icon)]" />
          <h2 class="text-xl font-semibold">Tech Stack</h2>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="(t, i) in techs" :key="i"
            class="text-sm border border-[var(--color-border)] px-3 py-1 rounded-full text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition">{{
              t }}</span>
        </div>
      </section>

      <!-- PROJECTS -->
      <section
        class="md:col-span-8 lg:col-span-7 md:order-2 border border-[var(--color-border)] rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-[0_0_25px_var(--color-card-shadow)] transition-all duration-300">
        <div class="flex items-center gap-2 p-4 md:p-5">
          <Code class="w-5 h-5 text-[var(--color-icon)]" />
          <h2 class="text-xl font-semibold">Projects</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-5">
          <div v-for="(p, i) in (showAllProjects ? projects : projects.slice(0, 3))" :key="i" :class="[
            'group cursor-pointer rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 overflow-hidden bg-[var(--color-card-bg)] flex flex-col',
            i === 0 ? 'md:col-span-2 md:row-span-2' : ''
          ]" @click="openProject(p)">
            <!-- Thumbnail -->
            <div :class="[
              'relative bg-[var(--color-modal-media-bg)] flex items-center justify-center flex-shrink-0',
              i === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'
            ]">
              <video v-if="isVideo(p.thumbnail)" :src="p.thumbnail"
                class="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                autoplay muted loop playsinline />
              <img v-else :src="p.thumbnail" :alt="p.title"
                class="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300" />
            </div>

            <!-- Title -->
            <div class="p-3 md:p-4 border-t border-[var(--color-border)] flex-shrink-0">
              <h3
                class="text-sm md:text-base font-medium text-[var(--color-text)] group-hover:text-[var(--color-link-hover)] transition line-clamp-2">
                {{ p.title }}
              </h3>
            </div>
          </div>
        </div>

        <!-- Show More/Less Button -->
        <div v-if="projects.length > 3" class="p-4 border-t border-[var(--color-border)] flex justify-center">
          <button @click="showAllProjects = !showAllProjects"
            class="px-6 py-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-[var(--color-text)] hover:text-[var(--color-link-hover)] transition-all duration-300 flex items-center gap-2 group">
            <span>{{ showAllProjects ? 'Show Less' : `Show All Projects (${projects.length})` }}</span>
            <svg :class="['w-4 h-4 transition-transform duration-300', showAllProjects ? 'rotate-180' : '']" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      <!-- EXPERIENCE -->
      <section
        class="md:col-span-4 lg:col-span-5 md:order-2 border border-[var(--color-border)] rounded-2xl p-6 flex flex-col backdrop-blur-sm hover:shadow-[0_0_15px_var(--color-card-shadow)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-4">
          <Briefcase class="w-5 h-5 text-[var(--color-icon)]" />
          <h2 class="text-xl font-semibold">Experience</h2>
        </div>
        <ul class="space-y-3 sticky bottom-6 mt-auto pt-15">
          <li v-for="(job, i) in jobs" :key="i">
            <h3 class="font-medium">{{ job.role }}</h3>
            <p class="text-[var(--color-icon)] text-sm">
              {{ job.company }}, {{ job.period }}
            </p>
          </li>
        </ul>
      </section>

      <!-- CONTACT -->
      <section
        class="md:col-span-7 lg:col-span-8 md:order-3 border border-[var(--color-border)] rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_var(--color-card-shadow)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-4">
          <Mail class="w-5 h-5 text-[var(--color-icon)]" />
          <h2 class="text-xl font-semibold">Contact</h2>
        </div>
        <div class="space-y-2 text-sm text-[var(--color-icon)]">
          <a :href="`mailto:${uiText.contactEmail}`" target="_blank"
            class="hover:text-[var(--color-link-hover)] flex items-center gap-2">
            <Mail class="w-4 h-4" /> {{ uiText.contactEmail }}
          </a>
          <a :href="uiText.linkedinUrl" target="_blank"
            class="hover:text-[var(--color-link-hover)] flex items-center gap-2">
            <Linkedin class="w-4 h-4" /> {{ uiText.linkedinUrl.replace('https://', '') }}
          </a>
          <a :href="uiText.githubUrl" target="_blank"
            class="hover:text-[var(--color-link-hover)] flex items-center gap-2">
            <Github class="w-4 h-4" /> {{ uiText.githubUrl.replace('https://', '') }}
          </a>
        </div>
      </section>

      <!-- BLOGS -->
      <section
        class="md:col-span-5 lg:col-span-4 md:order-3 border border-[var(--color-border)] rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-[0_0_20px_var(--color-card-shadow)] transition-all duration-300">
        <div class="flex items-center justify-between p-4">
          <!-- <div class="flex items-center justify-between p-4 border-b border-[var(--color-border)]"> -->
          <div class="flex items-center gap-2">
            <PenSquare class="w-5 h-5 text-[var(--color-icon)]" />
            <h2 class="text-xl font-semibold">Recent Posts</h2>
          </div>
          <!-- <a href="#" class="text-sm text-[var(--color-icon)] hover:text-[var(--color-link-hover)]">All posts</a> -->
        </div>
        <div class="flex gap-3 p-4">
          <a v-for="(b, i) in blogs" :key="i" :href="b.url" target="_blank"
            class="group relative rounded-lg overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300">
            <img :src="b.thumbnail" class=" h-28 opacity-70 group-hover:opacity-100 transition" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[var(--color-card-bg)] opacity-50 to-transparent transition">
            </div>
            <div class="absolute bottom-2 left-2">
              <h3 class="text-sm font-medium">{{ b.title }}</h3>
            </div>
          </a>
        </div>
      </section>

      <!-- EDUCATION -->
      <section
        class="md:col-span-4 lg:col-span-5 md:order-4 border border-[var(--color-border)] rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_var(--color-card-shadow)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-4">
          <GraduationCap class="w-5 h-5 text-[var(--color-icon)]" />
          <h2 class="text-xl font-semibold">Education</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(edu, i) in education" :key="i">
            <h3 class="font-medium">{{ edu.degree }}</h3>
            <p class="text-[var(--color-icon)] text-sm">{{ edu.institution }}</p>
          </li>
        </ul>
      </section>

      <!-- NOW -->
      <section
        class="md:col-span-4 lg:col-span-4 md:order-4 border border-[var(--color-border)] rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_15px_var(--color-card-shadow)] transition-all duration-300">
        <div class="flex items-center gap-2 mb-3">
          <Calendar class="w-5 h-5 text-[var(--color-icon)]" />
          <h2 class="text-xl font-semibold">Now</h2>
        </div>
        <p class="text-sm text-[var(--color-icon)]">
          {{ uiText.nowText }}
        </p>
      </section>

      <section
        class="md:col-span-4 lg:col-span-3 md:order-4 border border-[var(--color-border)] rounded-2xl p-6 flex flex-col justify-end backdrop-blur-sm hover:shadow-[0_0_15px_var(--color-card-shadow)] transition-all duration-300">
        <p class="text-sm text-right text-[var(--color-icon)]">
          {{ uiText.footerText }}
        </p>
      </section>

      <!-- Project Modal -->
      <div v-if="activeProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div class="absolute inset-0 bg-[var(--color-modal-bg)]" @click="closeProject"></div>
        <div
          class="relative z-10 w-full max-w-5xl rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-modal-card-bg-from)] to-[var(--color-modal-card-bg-to)] backdrop-blur-xl p-6 md:p-8 shadow-2xl my-8"
          role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">

          <!-- Header -->
          <div class="flex items-start justify-between gap-4 mb-6">
            <div class="flex-1">
              <h3 id="project-dialog-title" class="text-2xl md:text-3xl font-bold mb-2 text-[var(--color-modal-title)]">
                {{ activeProject.title }}</h3>
              <p class="text-sm text-[var(--color-modal-subtitle)]">{{ activeProject.year }}</p>
            </div>
            <button ref="closeBtnRef"
              class="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-[var(--color-icon)] hover:text-[var(--color-link-hover)] transition focus:outline-none focus:ring-2 focus:ring-[var(--color-border-hover)]"
              @click="closeProject" aria-label="Close details">
              <X class="w-4 h-4" />
            </button>
          </div>

          <!-- Description -->
          <p class="text-[var(--color-modal-text)] text-lg leading-relaxed mb-6">
            {{ activeProject.desc }}
          </p>

          <!-- Media -->
          <div class="mb-6 rounded-xl overflow-hidden border border-[var(--color-border)]">
            <template v-if="activeProject && isVideo(activeProject.thumbnail)">
              <video :src="activeProject.thumbnail" class="w-full object-contain bg-[var(--color-modal-media-bg)]"
                autoplay muted loop playsinline preload="auto" disablePictureInPicture
                controlslist="nodownload noplaybackrate noremoteplayback nofullscreen" @pause="$event.target.play()"
                @ended="$event.target.play()" @contextmenu.prevent />
            </template>
            <img v-else-if="activeProject && activeProject.thumbnail" :src="activeProject.thumbnail"
              :alt="activeProject.title" loading="lazy" decoding="async"
              class="w-full object-contain bg-[var(--color-modal-media-bg)]" />
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="(tech, i) in activeProject.technologies" :key="i"
              class="text-sm px-3 py-1.5 rounded-lg bg-[var(--color-modal-button-bg)] border border-[var(--color-modal-button-border)] text-[var(--color-modal-text)] hover:bg-[var(--color-modal-button-bg-hover)] hover:border-[var(--color-modal-button-border-hover)] transition">
              {{ tech }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex gap-3 pt-6 border-t border-[var(--color-border)]">
            <a v-if="activeProject.liveLink" :href="activeProject.liveLink" target="_blank" rel="noopener noreferrer"
              class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-modal-button-bg)] hover:bg-[var(--color-modal-button-bg-hover)] border border-[var(--color-modal-button-border)] hover:border-[var(--color-modal-button-border-hover)] text-[var(--color-modal-button-text)] transition text-sm font-medium">
              <ExternalLink class="w-4 h-4" />
              Go To Site
            </a>
            <a v-if="activeProject.link" :href="activeProject.link" target="_blank" rel="noopener noreferrer"
              class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-modal-button-bg)] hover:bg-[var(--color-modal-button-bg-hover)] border border-[var(--color-modal-button-border)] hover:border-[var(--color-modal-button-border-hover)] text-[var(--color-modal-button-text)] transition text-sm font-medium">
              <Github class="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Flashbang Overlay -->
  <div v-if="showFlashbang" :class="['flashbang-overlay', { 'fade-out': !flashbangActive }]"
    :style="{ transitionDuration: flashbangDuration + 'ms' }"></div>
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
    Sun,
    Moon,
  } from "lucide-vue-next";
  import { ref, watch, nextTick, onBeforeUnmount, onMounted } from "vue";
  import { projects, jobs, education, blogs, techs, uiText } from "./config.js";

  const isVideo = (src) => typeof src === 'string' && /\.mp4(\?.*)?$/i.test(src);

  const theme = ref(localStorage.getItem('theme') || 'dark');
  const showAllProjects = ref(false)
  const showFlashbang = ref(false);
  const flashbangActive = ref(false)
  const flashbangDuration = 2500
  const flashbangSoundDelay = 0
  const flashbangVolume = 0.5

  const flashbangAudio = new Audio('/flashbang-cs.mp3');
  flashbangAudio.volume = flashbangVolume;

  const toggleTheme = () => {
    const newTheme = theme.value === 'dark' ? 'light' : 'dark';
    if (newTheme === 'light') {
      showFlashbang.value = true;
      flashbangActive.value = true
      setTimeout(() => {
        flashbangAudio.play();
      }, flashbangSoundDelay);

      setTimeout(() => {
        flashbangActive.value = false
      }, flashbangDuration)

      setTimeout(() => {
        showFlashbang.value = false;
      }, flashbangDuration + 3000)
    }
    theme.value = newTheme;
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  onMounted(() => {
    document.documentElement.setAttribute('data-theme', theme.value);
  });

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

<style>
  .flashbang-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    opacity: 1;
    z-index: 9999;
    transition: opacity;
    /* Duration will be set by JS */
  }

  .flashbang-overlay.fade-out {
    opacity: 0;
  }
</style>
