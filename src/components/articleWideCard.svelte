<script>
  export let path = '';
  export let title = '';
  export let description = '';
  export let coverImage = '../assets/logo.svg';
  export let category = '';
</script>

<a href={ path }>
  <img class='articleImage' src={ coverImage } alt="">
  <div class='textContainer'>
    <div class='innerTextContainer'>
      <h3>{ category }</h3>
      <h2 class='headline'>{ title }</h2>
      <p class='subheadline'>{ description }</p>
    </div>
  </div>
</a>

<style>
  a {
    width: min(1000px, 95vw);
    margin-bottom: 1.5ch;
    padding-bottom: 1.5ch;
    border-bottom: 1px solid black;
    display: flex;
  }

  /* The category */
  h3 {
    font-size: 1.2rem;
    color: #3581BA;
  }

  /* The headline */
  h2 {
    font-size: 2rem;
  }

  /* Description */
  p {
    font-style: italic;
  }

  img {
    display: block;
    width: calc(33.33% - 20px);
    height: 100%;
    align-self: center;
    flex-shrink: 0;
  }

  div.innerTextContainer {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }

  @media(max-width: 800px) {
    img {
      width: calc(44.44% - 20px);
    }

    div.innerTextContainer {
      padding-left: 15px;
    }

    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }

  @media(max-width: 600px) {
    h2 {
      line-height: 1.5rem;
    }
  }

</style>