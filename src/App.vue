<script setup>
const tabs = [
  { to: '/home', label: 'Home' },
  { to: '/project', label: 'Project' },
  { to: '/deploy', label: 'How To Deploy' },
]
</script>

<template>
  <div class="app-shell">
    <div class="bg-blob bg-blob-1" />
    <div class="bg-blob bg-blob-2" />

    <header class="masthead">
      <p class="eyebrow">DSCI 554 • Spring Build</p>
      <h1>Visual Analytics Studio</h1>
      <p class="tagline">
        Building a modern data visualization experience with Vue, practical chart tooling, and AI-assisted workflows.
      </p>

      <nav class="tabbar" aria-label="Primary">
        <RouterLink
          v-for="tab in tabs"
          :key="tab.to"
          :to="tab.to"
          class="tab"
        >
          {{ tab.label }}
        </RouterLink>
      </nav>
    </header>

    <main class="content-frame">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;
}

.bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.36;
  pointer-events: none;
}

.bg-blob-1 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle at 30% 30%, #ff8e4b, #f04438);
  top: -140px;
  left: -160px;
}

.bg-blob-2 {
  width: 360px;
  height: 360px;
  background: radial-gradient(circle at 30% 30%, #52b788, #2d6a4f);
  top: 120px;
  right: -120px;
}

.masthead {
  position: relative;
  z-index: 1;
  max-width: 1120px;
  width: calc(100% - 2rem);
  margin: 1.5rem auto 0;
  padding: 1.3rem 1.4rem;
  background: linear-gradient(120deg, rgba(12, 31, 46, 0.9), rgba(17, 76, 95, 0.86));
  color: #f5fbff;
  border-radius: 20px;
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.24);
}

.eyebrow {
  margin: 0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.74rem;
  color: #b3e5fc;
}

h1 {
  margin: 0.45rem 0 0;
  font-size: clamp(1.8rem, 3.4vw, 2.7rem);
  line-height: 1.08;
}

.tagline {
  margin: 0.65rem 0 0;
  max-width: 72ch;
  color: #def4ff;
  font-size: 0.99rem;
}

.tabbar {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.tab {
  border-radius: 999px;
  padding: 0.48rem 0.95rem;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.36);
  color: #f5fbff;
  font-size: 0.92rem;
  text-decoration: none;
  transition: background-color 180ms ease, transform 180ms ease;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.tab.router-link-exact-active {
  background: #ffffff;
  color: #123241;
  border-color: #ffffff;
}

.content-frame {
  position: relative;
  z-index: 1;
  max-width: 1120px;
  width: calc(100% - 2rem);
  margin: 0 auto 1.8rem;
  padding: 1.35rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 16px 44px rgba(15, 23, 42, 0.16);
}

@media (max-width: 720px) {
  .masthead {
    margin-top: 1rem;
    padding: 1.1rem;
  }

  .content-frame {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .tab {
    font-size: 0.87rem;
  }
}
</style>