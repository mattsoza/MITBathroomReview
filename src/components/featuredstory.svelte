<!-- Scripting -->
<script>
  // Props! :)
  export let headline="Don't forget to put a story!"
  export let subheadline="Why would the web dev forget this?"
  export let author="Matthew 'The Web Dev' Soza"
  export let img = ''
  export let alt='a covered toilet'

  // export headline;

  import image from '../assets/coveredToilet.jpeg'
</script>

<!-- HTML -->
<a href='articles/{headline}'>
  <div class='textcontainer'>
    <h1>{headline}</h1>
    <h2>{subheadline}</h2>
  </div>
  <img src="{image}" alt="a covered toilet">
</a>

<!-- CSS -->
<style>

@media (max-width: 1000px) {
  a {
    flex-direction: column-reverse;
  }

  .textcontainer {
    display: inline-block;
    position: initial;
    left: 0;
    height: 20vw;
  }
}

@media (min-width: 1000px) {
  .textcontainer {
    position: relative;
    left: 5em;
    width: 33.333%;
  }

  img {
    width: calc(66.666% + 130px);
  }
}

a {
  display: flex;
  align-items: center;
  color: black;
  transition: box-shadow .25s;
}

a:hover {
  box-shadow: 10px 10px;
  transition: box-shadow .25s;

  /* position: relative;
  right: 1em; */
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

h1 {
  color: black;
  transition: color .25s
}

a:hover>div>h1 {
  /* color: red;
  font-size: 12em;
  animation: shake 0.05s;
  animation-iteration-count: infinite; 
  transition: all 20s; */
  color: rgba(255, 166, 0, 0.801);
  transition: all .25s;
}

a:visited {
  color: black
}

.textcontainer {
  padding: 1em 1em 0 1em;
  width: 35vw;
  background-color: white;
  border: solid black 1px;
}

img {
  background: #f3f2f1 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3'%3E%3Ccircle cx='2.5' cy='2.5' r='.5' fill='%23242a49'/%3E%3C/svg%3E") repeat bottom right;
}

</style>
