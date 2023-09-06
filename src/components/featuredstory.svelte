<!-- Scripting -->
<script>
  // Props! :)
  export let headline="How the bougeiose rewrote bathroom history"
  export let subheadline="A deep dive into the machinations of the machine"
  export let author="Matthew 'The Web Dev' Soza"
  export let img = ''
  export let alt='a covered toilet'

  // export headline;

  import image from '../assets/coveredToilet.png'
</script>

<!-- HTML -->
<a href='articles/{headline}'>
  <!-- Placed a parent div because of weird CSS sizing rules I couldn't easily get around -->
  <img src="{image}" alt="a covered toilet">
  <div class='textcontainer'>
    <p>Featured</p>
    <h1>{headline}</h1>
    <h2>{subheadline}</h2>
  </div>
</a>

<!-- CSS -->
<style>

/* Mobile/small-screen mode */
@media (max-width: 1000px) {

}
/* Desktop mode */
@media (min-width: 1000px) {
  img {
    max-width: 100%;
  }
}

a > div > h1 {
  color: #262626;
  transition: .2s;
}

a:hover > div > h1 {
  color: #88B0BF;
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
}

h2 {
  font-style: italic;
  position: relative;
  bottom: 5px;
}
</style>
