<!-- Scripting -->
<script>
  import Featuredstory from "../components/featuredstory.svelte";
  import DonateButton from "../components/DonateButton.svelte";
</script>

<!-- HTML -->
<div class='frontpagegrid'>
  <Featuredstory />
  <DonateButton />
</div>

<div class='whyReview'>
  <h1>Why Review Bathrooms?</h1>
  <p>Because if we don’t, nobody will. It’s one of the first places you go in the morning and last places you go at night. It’s where you go when you need to cry, it’s where you go when you need to get away. A safe moment here can be the difference between the best day ever and a doo-doo day. Without bathrooms, we are not civilized, and without civility, we are animals.</p>
  <p>Democracy Dies in Doo-Doo</p>
</div>

<!-- Styling -->
<style>
.frontpagegrid {
  display: grid;
  max-width: 1000px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 4rem; 
  margin-bottom: 10ch;
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
