<script>
  let count = 0
</script>

<main>
  <h1>Svelte Sample Project</h1>
  <p>By Kevin Philips Tanamas</p>

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
