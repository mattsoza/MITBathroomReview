<!-- Scripting -->
<script>
	import { each } from 'svelte/internal';
  import ArticleWideCard from '/src/components/articleWideCard.svelte';
	import { redirect } from '@sveltejs/kit';

  export let data;
</script>
  
<!-- HTML -->
<main>
  <h2>You want articles? We got 'em.</h2> 

  <ul>
    {#each data.posts as post}
      <ArticleWideCard
        coverImage={post.meta.coverImage}
        path={post.path}
        title={post.meta.title}
        description={post.meta.description}
        category={post.meta.category}
        />
    {/each}
  </ul>
</main>

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
    max-width: 90vw
  }

  @media(max-width: 500px) {
    h2 {
      font-size: 1.5rem;
    }
  }
</style>