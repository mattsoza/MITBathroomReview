<!-- Scripting -->
<script>
  import toilet from '../../assets/coveredToilet.png'
	import ArticleCard from '../../components/articleCard.svelte';
</script>
  
<!-- HTML -->
<h2>You want articles? We got 'em.</h2> 
<ul>
  <li>
    <ArticleCard 
    headline='How did this work?'
    subheadline='I guess Matthew is just a really good programmer'
    image={ toilet } />
  </li>
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