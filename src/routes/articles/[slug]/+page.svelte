<script>
  export let data
  const { title, date, content } = data


  function dateFormat(date) {
    /**
     * Takes a date in the format 2019-11-06T00:00:00.000Z
     * and converts it into November 11, 2019
    */
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const year = date.slice(0, 4)
    const month = date.slice(5, 7)
    const day = date.slice(8, 10)

    const monthName = monthNames[Number(month) - 1]

    return monthName + " " + day + ", " + year
  }
</script>

<main>
  <article>
    <h1>{ title }</h1>
    <p>Published: {dateFormat(date)}</p>
    <svelte:component this={content} />
  </article>
</main>

<style>
  h1 {
    font-size: 2em;
  }

  article {
    width: min(65ch, 95vw)
  }

  p.articleContent {
    font-weight: 500;
    font-size: 1.2em 
  }
</style>