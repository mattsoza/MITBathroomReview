<!-- Scripting -->
<script>
  // Props! :)
  export let headline="Don't forget to put a story!"
  export let subheadline="Why would the web dev forget this? Is he about to lose his job?"
  export let author="Matthew 'The Web Dev' Soza"
  export let img = ''
  export let alt='a covered toilet'

  // export headline;

  import image from '../assets/coveredToilet.png'
</script>

<!-- HTML -->
<a href='articles/{headline}'>
  <!-- Placed a parent div because of weird CSS sizing rules I couldn't easily get around -->
  <div class='parent'>
  <div class='textcontainer'>
    <h1>{headline}</h1>
    <h2>{subheadline}</h2>
  </div>
  </div>
  <img src="{image}" alt="a covered toilet">
</a>

<!-- CSS -->
<style>

/* Mobile/small-screen mode */
@media (max-width: 1000px) {
  a {
    flex-direction: column-reverse;
  }

  .parent {
    position: relative;
    bottom: 2em;
    box-sizing: border-box;
  }

  .textcontainer {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 90%;
    left: 5%;
  }
}

/* Desktop mode */
@media (min-width: 1000px) {
  .parent {
    position:relative;
    left: 4em;
    /* Something is going on with this CSS property. Having trouble figuring out how to center div in box */
    /* calc() and % both don't work very well. Needs to be fixed... */
    top: 50px;
    flex: 3;
    height:auto;
    box-sizing: border-box;
  }

  a {
    position: relative;
    right: 2em;
  }

  .textcontainer {
    /* flexbox settings for text container  */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75%;
  }

  img {
    flex: 7;
    width: calc(66.666% + 130px);
    box-sizing: border-box;
    border: 1px solid black;
  }
}

a {
  margin-top: 40px;
  display: flex;
  color: black;
  transition: box-shadow .25s;
  max-width: 1000px;
  background: transparent;
}

a>div>div {
  scale: 1;
  transition: all .25s;
}

a:hover>div>div {
  box-shadow: 10px 10px 1em;
  transition: all .25s;
  scale: 1.1;
}

a:hover>img {
  box-shadow: 5px 5px 1em;
  transition: box-shadow .25s;
}

h1 {
  color: black;
  font-weight: 700;
  font-size: 1.8em;
  line-height: 1em;
  transition: color .25s;
  padding-bottom: 30px;
}

h2 {
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: 500;
  color: #646464
}

a:hover>div>div>h1 {
  color: rgba(255, 166, 0, 1);
  transition: all .25s;
}

a:visited {
  color: black
}

.textcontainer {
  padding: 1em 1em 1em 1em;
  background-color: white;
  border: solid black 1px;
}
</style>
