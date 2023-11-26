<!-- Scripting :) -->
<script>
	import BathroomFooter from "../components/bathroomFooter.svelte";
  import Bathroomheader from "../components/bathroomheader.svelte";
</script>



<!-- HTML of nav and stylesheet -->
<Bathroomheader />
<slot />
<BathroomFooter />


<!-- Styling -->
<style>
:global(body) {
	font-family: 'neue-haas-grotesk-display', sans-serif;
	font-weight: 600;
	font-style: normal;
	margin: 0;

  background-color: #FFFDF9;
  min-height: 100vh;
}

:global(html, body) { 
  min-height: 100vh;
}

:global(div > footer) {
  position: sticky;
  top: 100vh;
}

:global(main) {
  display: flex;
  flex-direction: column;
  align-items: center;
	padding-left: 5vw;
  padding-right: 5vw;
}

</style>
