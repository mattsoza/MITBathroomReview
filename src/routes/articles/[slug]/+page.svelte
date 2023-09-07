<script>
  export let data
  const { title, date, content } = data
</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <svelte:component this={content} />
</article>