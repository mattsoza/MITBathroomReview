<script>
  export let headline;
</script>

<a href='articles/{headline}'>
  <!-- Placed a parent div because of weird CSS sizing rules I couldn't easily get around -->
  <img src="{image}" id ='featuredImage' alt="a covered toilet">
  <div class='textcontainer'>
    <p>Featured</p>
    <h1>{headline}</h1>
    <h2>{subheadline}</h2>
  </div>
</a>