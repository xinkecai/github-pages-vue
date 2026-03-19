<script setup>
const milestones = [
  {
    phase: 'Phase 1',
    title: 'Problem framing and KPI selection',
    detail: 'Define user stories, chart hypotheses, and evaluation metrics before implementation.',
  },
  {
    phase: 'Phase 2',
    title: 'Data pipeline and cleaning',
    detail: 'Create reproducible transforms and schema validation for incoming datasets.',
  },
  {
    phase: 'Phase 3',
    title: 'Interactive visualization modules',
    detail: 'Build linked charts, filters, and drill-down interactions for story discovery.',
  },
  {
    phase: 'Phase 4',
    title: 'Insight reporting and polish',
    detail: 'Ship accessibility checks, narrative summaries, and deployment documentation.',
  },
]

const placeholderCards = [
  {
    heading: 'Dataset Slot A',
    body: 'Planned: public mobility and transit metrics for trend and anomaly tracking.',
  },
  {
    heading: 'Dataset Slot B',
    body: 'Planned: environmental indicators to compare seasonal or regional signals.',
  },
  {
    heading: 'Modeling Slot',
    body: 'Planned: lightweight forecasting baseline with confidence bands for visual comparison.',
  },
]
</script>

<template>
  <section class="project-view">
    <div class="intro">
      <p class="eyebrow">Project Workspace</p>
      <h2>Prototype Roadmap</h2>
      <p>
        This tab is our staging ground before the production build. It tracks milestones,
        placeholders, and feature intentions so implementation can move quickly later.
      </p>
    </div>

    <div class="milestone-grid">
      <article v-for="item in milestones" :key="item.title" class="milestone-card">
        <p class="phase">{{ item.phase }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.detail }}</p>
      </article>
    </div>

    <div class="placeholder-panel">
      <h3>Planned Components</h3>
      <div class="placeholder-grid">
        <article v-for="card in placeholderCards" :key="card.heading" class="placeholder-card">
          <h4>{{ card.heading }}</h4>
          <p>{{ card.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-view {
  display: grid;
  gap: 1.2rem;
}

.intro h2 {
  margin: 0.2rem 0 0;
  font-size: clamp(1.3rem, 2.4vw, 1.8rem);
}

.intro p {
  margin: 0.55rem 0 0;
  color: #45556a;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  color: #0077b6;
}

.milestone-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.85rem;
}

.milestone-card {
  border-radius: 14px;
  border: 1px solid #d8e3ec;
  background: linear-gradient(180deg, #ffffff, #f5f8fb);
  padding: 0.95rem;
}

.phase {
  margin: 0;
  font-size: 0.78rem;
  color: #6b7280;
}

.milestone-card h3 {
  margin: 0.3rem 0 0;
  font-size: 1rem;
}

.milestone-card p {
  margin: 0.35rem 0 0;
  color: #4b5563;
}

.placeholder-panel {
  border-radius: 14px;
  background: #0f172a;
  color: #f8fafc;
  padding: 1rem;
}

.placeholder-panel h3 {
  margin: 0;
}

.placeholder-grid {
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
}

.placeholder-card {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.85rem;
  background: rgba(255, 255, 255, 0.08);
}

.placeholder-card h4 {
  margin: 0;
  font-size: 0.95rem;
}

.placeholder-card p {
  margin: 0.4rem 0 0;
  color: #d1d5db;
}
</style>
