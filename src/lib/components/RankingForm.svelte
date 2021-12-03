<script lang="ts">
  import type { Ranking } from '$lib/types';
  import { rankings } from '$lib/store';
  import { v4 as uuidv4 } from 'uuid';

  let newRanking: Ranking = {
    id: uuidv4(),
    name: '',
    score: 0,
    comment: '',
    phoneNumber: '',
  };

  const addRanking = () => {
    $rankings = [...$rankings, newRanking];
    newRanking = {
      id: uuidv4(),
      name: '',
      score: 0,
      comment: '',
      phoneNumber: '',
    };
  };
</script>

<section>
  <label>
    Navn
    <input type="text" bind:value={newRanking.name} required>
  </label>

  <label>
    Poeng
    <input type="number" bind:value={newRanking.score} required>
  </label>

  <label>
    Kommentar
    <input type="text" bind:value={newRanking.comment} required>
  </label>

  <label>
    Telefonnummer
    <input type="text" bind:value={newRanking.phoneNumber} required>
  </label>

  <div>
    <input type="submit" value="Legg til" on:click={addRanking}>
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 200px 70px 1fr auto auto;
    align-items: end;
    gap: .5rem;
  }

  input[type=submit] {
    margin: 0;
  }
</style>
