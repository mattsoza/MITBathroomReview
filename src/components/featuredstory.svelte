<!-- Scripting -->
<script>
  // Props! :)
  export let headline="Don't forget to put a story!"
  export let subheadline="Why would the web dev forget this? Is he about to lose his job?"
  export let author="Matthew 'The Web Dev' Soza"
  export let img = ''
  export let alt='a covered toilet'

  // export headline;

  import image from '../assets/coveredToilet.jpeg'
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

  .textcontainer {
    display: block;
    position: initial;
    left: 0;
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
  }
}

a {
  display: flex;
  /* align-items: center; */
  color: black;
  transition: box-shadow .25s;
  max-width: 1000px;
}

a>div>div {
  scale: 1;
  transition: all .25s;
}

a:hover>div>div {
  box-shadow: 15px 15px;
  transition: all .25s;
  scale: 1.1;
}

a:hover>img {
  box-shadow: 10px 10px;
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
  line-height: 1.2em;;
  font-weight: 500;
  color: #646464
}

a:hover>div>h1 {
  color: rgba(255, 166, 0, 0.801);
  transition: all .25s;
}

a:visited {
  color: black
}

.textcontainer {
  padding: 1em 1em 0 1em;
  background-color: white;
  border: solid black 1px;
}

img {
  background: #f3f2f1 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3'%3E%3Ccircle cx='2.5' cy='2.5' r='.5' fill='%23242a49'/%3E%3C/svg%3E") repeat bottom right;
}

</style>
