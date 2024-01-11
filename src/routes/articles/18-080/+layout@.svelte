<!-- Scripting :) -->
<script>
	import BathroomFooter from "/src/components/bathroomFooter.svelte";
  import Bathroomheader from "/src/components/RetroComponents/bathroomheaderRetro.svelte";

  let bodyHeight = 0;

  const getBodyHeight = (body) => {
    bodyHeight = body.clientHeight;
  };
</script>



<!-- HTML of nav and stylesheet -->
<svelte:body use:getBodyHeight />
<div class='vintage' style='height: {bodyHeight}px;'/>
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
  min-height: 100vh;
}

.vintage {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -3;
  background: linear-gradient(to right, #711DB0 1.5%, #C21292 1.5% 3%, #EF4040 3% 4.5%, #FFA732 4.5% 6%, #F2ECBE 6%);
}

@media(max-width: 800px) {
  .vintage {
    background: linear-gradient(#711DB0 45px, #C21292 45px 90px, #EF4040 90px 135px, #FFA732 135px 180px, #F2ECBE 180px);
    position: absolute;
  }
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