<!-- Scripting :) -->
<script>
  import logo from '../assets/logo.svg';

  // Hardcore shuffle function that shuffles all letters
  //
  // function shuffledIn(evt) {
  //   let shuffled = '';
  //   let str = evt.target.innerHTML;
  //   let array = str.split('');
  //   while (array.length > 0) {
  //     let randomIndex = Math.floor(Math.random() * array.length);
  //     shuffled += array[randomIndex];
  //     array.splice(randomIndex, 1);
  //   }
  //   evt.target.innerHTML = shuffled;
  // }

  function shuffleAdjacentLetters(evt) {
  let str = evt.target.innerHTML;
  if (str.length <= 2) {
    return str;
  }

  const middleStartIndex = 1;
  const middleEndIndex = str.length - 1;
  const randomIndex = Math.floor(Math.random() * (middleEndIndex - middleStartIndex)) + middleStartIndex;
  const firstLetter = str[randomIndex];
  const secondLetter = str[randomIndex + 1];

  evt.target.innerHTML = str.slice(0, randomIndex) + secondLetter + firstLetter + str.slice(randomIndex + 2);
  }

  function fixOut(evt) {
  evt.target.innerHTML = evt.target.id;
  }


</script>

<!-- HTML of nav and stylesheet -->
<nav>
  <a id='home' href="/"><img src={logo} alt="MIT bathroom review" /></a>
  <a on:mouseover={shuffleAdjacentLetters} on:mouseout={fixOut} id='Articles' href="articles">Articles</a>
  <a on:mouseover={shuffleAdjacentLetters} on:mouseout={fixOut} id='About' href="about">About</a>
</nav>

<slot></slot>

<!-- Styling -->
<style>
  :global(body) {
    font-family: "neue-haas-grotesk-display", sans-serif;
    font-weight: 600;
    font-style: normal; 
    margin: 0 15% 0 15%;
  }

  nav {
    display: flex;
    padding: 2em 0 0 0;
    align-items: center;
  }

  img {
    height: 7vw;
  }

  a {
    font-size: 1.8em;    
    margin-right: 2em;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline wavy red;
  }

  a:visited {
    color: black;
  }
  
</style>
