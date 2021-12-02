<script lang="ts">
  import {rankings} from '$lib/store'
</script>

{#each $rankings as ranking}
  <article class="card">
    <h2 class="score-container">
      {ranking.score}
    </h2>
    <span class="name-container">
      {ranking.name}
    </span>
  </article>
{/each}

<style>
  article.card {
    display: flex;
    align-items: center;
  }

  article.card .score-container {
    display: inline;
  }

  article.card .name-container {
    font-size: 1.3rem;
  }
</style>
