<script lang="ts">
  import { rankings } from '$lib/store';
  import RankingForm from '$lib/components/RankingForm.svelte';

  const removeRanking = (ranking) => {
    $rankings = $rankings.filter(r => r !== ranking);
  };
</script>

<RankingForm/>

<section>
  {#each $rankings as ranking, idx}
    <article class="card">
      <span class="rank-container">{idx + 1}</span>
      <span class="name-container">{ranking.name}</span>
      <span class="score-container">{ranking.score}</span>
      <span class="comment-container">{ranking.comment}</span>
      <span class="phone-number-container">{ranking.phoneNumber}</span>
      <div>
        <button class="error" on:click={() => removeRanking(ranking)}>
          Delete
        </button>
      </div>
    </article>
  {/each}
</section>

<style>
  section {
    margin-top: 2rem;
  }

  article.card {
    display: grid;
    grid-template-columns: 50px 200px 50px 1fr auto auto;
    align-items: baseline;
    gap: .5rem;
    padding: 0 .5rem;
  }
</style>
