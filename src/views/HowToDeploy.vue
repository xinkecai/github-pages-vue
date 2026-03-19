<template>
  <div>
    <!-- Render the converted HTML content -->
    <div v-html="renderedHtml" />
    <br />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'

// Markdown parser
const md = new MarkdownIt()

// Holds rendered HTML
const renderedHtml = ref('Loading...')

onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}deploy-instructions.md`)
    if (response.ok) {
      const markdown = await response.text()
      renderedHtml.value = md.render(markdown)
    } else {
      console.error('Failed to fetch markdown file:', response.statusText)
    }
  } catch (error) {
    console.error('Error loading markdown file:', error)
  }
})
</script>

<style>
h1, h2, h3 {
  margin-top: 1rem;
}
</style>