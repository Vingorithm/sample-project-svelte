<script>
  let count = 0
</script>

<main>
  <h1>Svelte Template</h1>
  <p>Simple starter project 🚀</p>

  <button on:click={() => count++}>
    Clicked {count} times
  </button>
</main>

<style>
  main {
    max-width: 600px;
    margin: auto;
    padding: 2rem;
    text-align: center;
  }
</style>
