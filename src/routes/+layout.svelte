<!-- Scripting :) -->
<script>
import Bathroomheader from "../components/bathroomheader.svelte";
</script>



<!-- HTML of nav and stylesheet -->
<Bathroomheader />
<slot />



<!-- Styling -->
<style>
:global(body) {
	font-family: 'neue-haas-grotesk-display', sans-serif;
	font-weight: 600;
	font-style: normal;
	margin: 0;

  background-color: #FFFDF9;
}

:global(main) {
  display: flex;
  flex-direction: column;
  align-items: center;
	padding-left: 5vw;
  padding-right: 5vw;
}

</style>
