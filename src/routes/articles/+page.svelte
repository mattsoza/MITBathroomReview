<!-- Scripting -->
<script>
  export let data;
</script>
  
<!-- HTML -->
<h2>You want articles? We got 'em.</h2> 


<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>

<!-- Styling -->
<style>
  h2 {
    font-size: 2em;
    margin-bottom: 30px;
  }

  ul {
    /* Flexbox properties */
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Resizing properties */
    width: 1200px;
    max-width: 90vw
  }
</style>