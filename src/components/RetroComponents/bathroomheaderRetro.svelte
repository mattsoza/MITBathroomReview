<!-- Scripting :) -->
<script>
  import '/src/app.postcss';
  import logo from '/src/assets/logoScreenRes.png';
  import logoWhite from '/src/assets/logoWhite.png'
  import HamburgerMenu from '/src/components/hamburgerMenu.svelte';

  import retroLogo from '/src/assets/retro/1970Logo.png';
  
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
  <HamburgerMenu menuItems={['Articles', 'About', 'Jobs', 'Contact']}/>
</div>
<header>
  <div class='logo'>
    <a id="home" href="/"><img id="logo" src={retroLogo} alt="MIT bathroom review" /></a>
    <a id="homeWhite" href="/"><img id="logoWhite" src={logoWhite} alt="MIT bathroom review" /></a>
    <h3>Democracy Dies in Doo-Doo</h3>
  </div>
  <div class='navbarcolor desktop'>
    <nav class='desktop'>
      <a class='navlink' 
      on:mouseover={shuffleAdjacentLetters} on:focus={shuffleAdjacentLetters}
      on:mouseout={fixOut} on:blur={fixOut} id="Articles" href="/articles">Articles</a>
      
      <a class='navlink' 
      on:mouseover={shuffleAdjacentLetters} on:focus={shuffleAdjacentLetters}
      on:mouseout={fixOut} on:blur={fixOut} id="About" href="/about">About</a>
      
      <!-- <a class='navlink' 
      on:mouseover={shuffleAdjacentLetters} on:focus={shuffleAdjacentLetters}
      on:mouseout={fixOut} on:blur={fixOut} id="Map" href="/map">AMap</a> -->

      <a class='navlink' 
      on:mouseover={shuffleAdjacentLetters} on:focus={shuffleAdjacentLetters}
      on:mouseout={fixOut} on:blur={fixOut} id="Jobs" href="/jobs">Jobs</a>
      
      <a class='navlink' 
      on:mouseover={shuffleAdjacentLetters} on:focus={shuffleAdjacentLetters}
      on:mouseout={fixOut} on:blur={fixOut} id="Contact" href="/contact">Contact</a>
    </nav>
  </div>
</header>
<main>
  <slot />
</main>


<!-- Styling -->
<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
}

header {
  display: flex;
  flex-direction: column;

  align-items: center;
  
  padding-top: 20px;
  padding-bottom: 20px;
}

.navbarcolor {
  background-color: #8e7748;
  width: 94vw;
  display: flex;
  justify-content: center;
  align-self: end;

  margin-top: 20px;
  margin-bottom: 20px;

  padding-top: 5px;
  padding-bottom: 5px;
}

nav {
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px
}

img {
  /* height: 7vw; */
  height: 117px;
}

a.navlink {
  font-size: 1.4em;
  margin-right: 2em;
  text-decoration: none;
  color: white;
}

#hamburgerMenu {
  display: none
}

#logoWhite {
  display: none;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
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

  #logoWhite {
    display: inherit;
  }
  
  #logo {
    display: none;
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
  color: white;
}

#logo {
  min-height: 3em;
}

</style>
