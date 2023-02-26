<script>
  export let link = '';
  export let headline = '';
  export let subheadline = '';
  export let image = '';
</script>

<div class='article'>
<a href={ link }>
  <div class='textContainer'>
    <h2 class='headline'>{ headline }</h2>
    <p class='subheadline'>{ subheadline }</p>
  </div>
  <img class='articleImage' src={ image } alt="">
</a>
</div>

<!-- Styling -->
<style>
  a {
    /* Damnnnn this is a really nice way to not worry about the 'a' styling */
    display: contents;
  }

  a:hover {
    color: rgba(255, 166, 0, 1);
    transition: color .25s;
  }

  div.article {
    display: flex;
    width: 1000px;

    min-height: 120px;
    height: 15vw;
    max-width: 90vw;

    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
  }

  .textContainer {
    /* Being a flex container */
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* Being in a flex container */
    flex: 3;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 1em;
    margin-bottom: .4em;
  }

  p {
    font-size: 1.2rem;
    color: #333333;
    font-weight: 500;
  }

  img.articleImage {
    /* width: calc(33%); */
    flex: 2;
    object-fit: contain;
  }

  @media (max-width: 1200px) {

  }

  @media (max-width: 800px) {
    h2 {
      font-size: 1.4em;
    }

    p {
      font-size: 1em;
    }
  }
</style>