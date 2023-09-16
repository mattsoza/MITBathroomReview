<!-- Scripting -->
<script>
  import Featuredstory from "../components/featuredstory.svelte";
  import DonateButton from "../components/DonateButton.svelte";
  import {afterUpdate, onMount} from 'svelte';

  import toiletPNG from '../assets/ToiletPNG.png'
  import plungerPNG from '../assets/PlungerPNG.png'

  export let data;

  let textBoxHeight = 0;
  let featuredHeight = 0;
</script>

<!-- HTML -->
<img class="toiletBackground" src="{toiletPNG}" alt="">
<img class="plungerBackground" src="{plungerPNG}" alt="" style='--featured-height: {featuredHeight}px'>
<main style='--slant-height: {textBoxHeight}px'>
  <div class='frontpageflex' bind:offsetHeight={featuredHeight}>
    <Featuredstory 
      headline={data.post.meta.title}
      subheadline={data.post.meta.description}
      path={data.post.path}
      img={data.post.meta.coverImage}

      />
    <DonateButton />
  </div>

  <div bind:offsetHeight={textBoxHeight} class='whyReview'>
    <h1 id='whyReviewH1'>Why Review Bathrooms?</h1>
    <p id='whyReviewP'>Because if we don’t, nobody will. It’s one of the first places you go in the morning and last places you go at night. It’s where you go when you need to cry, it’s where you go when you need to get away. A safe moment here can be the difference between the best day ever and a doo-doo day. Without bathrooms, we are not civilized, and without civility, we are animals.</p>
    <p>Democracy Dies in Doo-Doo</p>
  </div>
</main>

<!-- Styling -->
<style>
@media (max-width: 800px) {
  .frontpageflex {
    flex-direction: column;
  }
}

main {
  background: linear-gradient(4deg, #262626 0 calc(var(--slant-height) + 5ch + 3rem), #FFFDF9 calc(var(--slant-height) + 5ch + 3rem));
}

.toiletBackground {
  position: absolute;
  height: 35%;
  opacity: 60%;
  left: -5vw;
  z-index: 0;
}

.plungerBackground {
  position: absolute;
  height: 30%;
  opacity: 60%;
  right: -5vw;
  top: calc(var(--featured-height) + 90px);
  z-index: 0;
}

.frontpageflex {
  display: flex;
  z-index: 2;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin-bottom: 10ch;
}

@media(max-width: 1200px) {
  .plungerBackground {
    visibility: hidden;
  }
  .toiletBackground {
    visibility: hidden;
  }
}

.whyReview {
  max-width: 1000px;
  margin-bottom: 3rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: white;
}

p {
  font-weight: 500;
  margin-bottom: 1.2em;
  color: white;
}

</style>
