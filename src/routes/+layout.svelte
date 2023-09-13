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


header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 250, 250);
  box-shadow: 0px 10px 2em;

  margin-bottom: 40px;
  
  padding-top: 20px;
  padding-bottom: 20px;
}

nav {
	max-width: 1140px;
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

img {
	height: 7vw;
}

a {
	font-size: 1.8em;
	margin-right: 2em;
	text-decoration: none;
	color: black;
}

#hamburgerMenu {
  display: none
}

h3 {
  font-style: italic;
  display: none;
}

/* mobile mode */
@media (max-width: 800px) {
  .desktop {
    display: none;
  }

  h3 {
    display: inherit;
  }

  #hamburgerMenu {
    display: inherit;
  }

  /* Removes margin in mobile mode to center logo in header */
  #home {
    margin-right: 0;
  }

  header {
    flex-direction: column;
  }
}

#Contact {
	margin-right: 0;
}

a:hover {
	text-decoration: underline wavy red;
}

a:visited {
	color: black;
}

#logo {
	min-height: 3em;
}

</style>
