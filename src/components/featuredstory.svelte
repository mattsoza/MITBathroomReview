<!-- Scripting -->
<script>
  // Props! :)
  export let headline=""
  export let subheadline=""
  export let author=""
  export let img = '../assets/logo.svg'
  export let path = '';
  export let alt=''
</script>

<!-- HTML -->
<a href='{path}'>
  <!-- Placed a parent div because of weird CSS sizing rules I couldn't easily get around -->
  <img src="{img}" id ='featuredImage' alt="a covered toilet">
  <div class='textcontainer'>
    <p>Featured</p>
    <h1>{headline}</h1>
    <h2>{subheadline}</h2>
  </div>
</a>

<!-- CSS -->
<style>
a {
  flex: 7;
  margin-right: 3rem;
}

a > div > h1 {
  color: #262626;
  transition: .2s;
}

a:hover > div > h1 {
  color: #5090a7;
  transition: .2s;
}

.textcontainer {
  padding: 4px 1em 0 1px;
}

p {
  font-size: 1.25rem;
  margin-bottom: 0;
}

h1 {
  font-size: 2em;
  position: relative;
  bottom: 5px;
  line-height: 1.2em;
}

h2 {
  font-style: italic;
  position: relative;
  bottom: 5px;
}

/* Desktop mode */
@media (min-width: 1000px) {
  img {
    max-width: 100%;
  }
}

/* Mobile/small-screen mode */
@media (max-width: 800px) {
  a {
    margin-right: 0px;
  }
}
</style>
