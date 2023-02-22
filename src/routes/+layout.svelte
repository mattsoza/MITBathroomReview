<!-- Scripting :) -->
<script>
import '../app.postcss';
import logo from '../assets/logo.svg';
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import HamburgerMenu from '../components/hamburgerMenu.svelte';

// Hardcore shuffle function that shuffles all letters
// @ts-ignore
function shuffledIn(evt) {
	let shuffled = '';
	let str = evt.target.innerHTML;
	let array = str.split('');
	while (array.length > 0) {
		let randomIndex = Math.floor(Math.random() * array.length);
		shuffled += array[randomIndex];
		array.splice(randomIndex, 1);
	}
	evt.target.innerHTML = shuffled;
}

// @ts-ignore
function shuffleAdjacentLetters(evt) {
	let str = evt.target.innerHTML;
	if (str.length <= 2) {
		return str;
	}

	const middleStartIndex = 1;
	const middleEndIndex = str.length - 1;
	const randomIndex =
		Math.floor(Math.random() * (middleEndIndex - middleStartIndex)) + middleStartIndex;
	const firstLetter = str[randomIndex];
	const secondLetter = str[randomIndex + 1];

	evt.target.innerHTML =
		str.slice(0, randomIndex) + secondLetter + firstLetter + str.slice(randomIndex + 2);
}

// @ts-ignore
function fixOut(evt) {
	evt.target.innerHTML = evt.target.id;
}
</script>

<!-- HTML of nav and stylesheet -->
<div id='hamburgerMenu'>
  <HamburgerMenu menuItems={['Articles', 'About', 'Map', 'Contact']}/>
</div>
<header>
  <a id="home" href="/"><img id="logo" src={logo} alt="MIT bathroom review" /></a>
  <nav class='desktop'>
    <a on:mouseover={shuffleAdjacentLetters} on:mouseout={fixOut} id="Articles" href="articles">Articles</a>
    <a on:mouseover={shuffleAdjacentLetters} on:mouseout={fixOut} id="About" href="about">About</a>
    <a on:mouseover={shuffleAdjacentLetters} on:mouseout={fixOut} id="Map" href="map">Map</a>
    <a on:mouseover={shuffleAdjacentLetters} on:mouseout={fixOut} id="Contact" href="contact">Contact</a>
  </nav>
</header>

<slot />

<!-- Styling -->
<style>
:global(body) {
	font-family: 'neue-haas-grotesk-display', sans-serif;
	font-weight: 600;
	font-style: normal;
	margin: 0;
}

header {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(230, 230, 230);
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

@media (min-width: 800px) {
  .mobile {
    display: none;
  }

  #hamburgerMenu {
    display: none
  }
}

@media (max-width: 800px) {
  .desktop {
    display: none;
  }

  /* Removes margin in mobile mode to center logo in header */
  #home {
    margin-right: 0;
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
