<script setup>
const visualizationLibraries = [
  {
    name: 'D3.js',
    summary: 'Low-level grammar for custom SVG and Canvas narratives.',
    url: 'https://d3js.org/',
  },
  {
    name: 'Apache ECharts',
    summary: 'High-performance charting with polished interaction out of the box.',
    url: 'https://echarts.apache.org/',
  },
  {
    name: 'Vega-Lite',
    summary: 'Declarative spec language for fast iteration and reproducible visuals.',
    url: 'https://vega.github.io/vega-lite/',
  },
  {
    name: 'Plotly.js',
    summary: 'Interactive scientific and business charts with strong community support.',
    url: 'https://plotly.com/javascript/',
  },
]

const vueVisualizationStack = [
  {
    name: 'VueUse',
    summary: 'Utility composables for reactive data and browser APIs.',
    url: 'https://vueuse.org/',
  },
  {
    name: 'Pinia',
    summary: 'State management ideal for multi-chart filters and coordinated views.',
    url: 'https://pinia.vuejs.org/',
  },
  {
    name: 'Nuxt',
    summary: 'Meta-framework for SSR/SSG when visualization dashboards need SEO or scale.',
    url: 'https://nuxt.com/',
  },
  {
    name: 'vue-echarts',
    summary: 'Direct Vue wrapper for ECharts components and reactive updates.',
    url: 'https://github.com/ecomfe/vue-echarts',
  },
]

const aiTools = [
  {
    name: 'GitHub Copilot',
    summary: 'Accelerates component scaffolding, refactors, and chart boilerplate.',
    url: 'https://github.com/features/copilot',
  },
  {
    name: 'Observable AI',
    summary: 'Useful for brainstorming chart stories and notebook-first prototypes.',
    url: 'https://observablehq.com/',
  },
  {
    name: 'ChatGPT',
    summary: 'Supports narrative framing, metric definitions, and transformation ideas.',
    url: 'https://chat.openai.com/',
  },
  {
    name: 'Datawrapper AI Assistant',
    summary: 'Helps draft chart annotations and concise insight summaries.',
    url: 'https://www.datawrapper.de/',
  },
]
</script>

<template>
  <section class="home">
    <div class="lead">
      <p class="eyebrow">Launch Pad</p>
      <h2>Data Visualization Toolkit Before Project Build</h2>
      <p>
        This starter page collects practical tools and references so the team can move from exploration
        to implementation quickly when the real project scope is finalized.
      </p>
    </div>

    <div class="quick-stats" aria-label="Setup status">
      <article class="stat-card">
        <p class="label">Frontend Core</p>
        <p class="value">Vue 3 + Vite</p>
      </article>
      <article class="stat-card">
        <p class="label">Deployment</p>
        <p class="value">GitHub Pages</p>
      </article>
      <article class="stat-card">
        <p class="label">Focus</p>
        <p class="value">Interactive Analytics</p>
      </article>
    </div>

    <div class="topic-grid">
      <section class="topic-panel">
        <h3>Visualization Libraries</h3>
        <ul>
          <li v-for="item in visualizationLibraries" :key="item.name">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
            <p>{{ item.summary }}</p>
          </li>
        </ul>
      </section>

      <section class="topic-panel">
        <h3>Vue Ecosystem For Viz Apps</h3>
        <ul>
          <li v-for="item in vueVisualizationStack" :key="item.name">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
            <p>{{ item.summary }}</p>
          </li>
        </ul>
      </section>

      <section class="topic-panel topic-panel-dark">
        <h3>AI Coding & Assisted Visualization</h3>
        <ul>
          <li v-for="item in aiTools" :key="item.name">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
            <p>{{ item.summary }}</p>
          </li>
        </ul>
      </section>
    </div>
</section>
</template>

<style scoped>
.home {
  display: grid;
  gap: 1rem;
}

.lead {
  border-radius: 14px;
  border: 1px solid #dae4ee;
  background: linear-gradient(130deg, #eef7ff, #f8fafc);
  padding: 1rem;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  color: #0077b6;
}

.lead h2 {
  margin: 0.35rem 0 0;
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  line-height: 1.15;
}

.lead p {
  margin: 0.6rem 0 0;
  color: #475569;
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.stat-card {
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e5ebf2;
  padding: 0.8rem;
}

.label {
  margin: 0;
  color: #6b7280;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.value {
  margin: 0.3rem 0 0;
  font-size: 1.03rem;
  font-weight: 600;
  color: #0f172a;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.85rem;
}

.topic-panel {
  border-radius: 14px;
  border: 1px solid #d8e2ec;
  background: #ffffff;
  padding: 0.9rem;
}

.topic-panel-dark {
  background: linear-gradient(165deg, #14213d, #1b4965);
  border-color: rgba(255, 255, 255, 0.25);
  color: #f1f5f9;
}

.topic-panel h3 {
  margin: 0;
  font-size: 1.02rem;
}

.topic-panel ul {
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.topic-panel li {
  padding-bottom: 0.75rem;
  border-bottom: 1px dashed #d5deea;
}

.topic-panel li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.topic-panel a {
  color: #0b5f8f;
  font-weight: 600;
  text-decoration: none;
}

.topic-panel a:hover {
  text-decoration: underline;
}

.topic-panel p {
  margin: 0.28rem 0 0;
  color: #5b6472;
  font-size: 0.92rem;
}

.topic-panel-dark p {
  color: #d6e2f2;
}

.topic-panel-dark a {
  color: #86efac;
}
</style>