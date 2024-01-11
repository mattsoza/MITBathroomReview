<script>
  const title = '18-080'

  import coverImage from '/src/assets/articles/18-080/Cover.jpg'
  
  import chair1 from '/src/assets/articles/18-080/Chair1.jpg'
  import chair2 from '/src/assets/articles/18-080/Chair2.jpg'

  import beigeTile from '/src/assets/articles/18-080/BeigeTile.jpg'

  import sink from '/src/assets/articles/18-080/Sink.jpg'
  import sealed from '/src/assets/articles/18-080/Sealed.jpg'
  import open from '/src/assets/articles/18-080/Open.jpg'
</script>

<main>
  <article>
    <h1>{ title }</h1>
    <p>Published: January 10, 2024</p>

    <figure>
      <img src={coverImage} alt="Bathroom view of sink and stall.">
    </figure>

    <p>A bathroom is a reflection of the time it was built. Today, I visited bathroom 18-080, a restroom constructed in the 1970s.</p>

    <p>Now, faithful reader, I will not jerk you around: Building 18 was remodeled in 2003. I unfortunately did not know this before spending many hours on the design of this webpage, and if you’ve ever heard of the sunk-cost fallacy, something important to know is that I am a victim of it and will not stop. So let’s press on and feign ignorance about the redesign*.</p>

    <figure>
      <img src={chair1} alt="Black folding chair in corner of restroom.">
      <img src={chair2} alt="Black wooden chair in corner of stall.">
      <figcaption>The two chairs I ran across while in the restroom. Truly a sight to behold.</figcaption>
    </figure>

    <p>This bathroom is a must-see! The first thing I ran into was multiple chairs in the restroom. Now this I respect and enjoy immensely. I have long said that bathrooms should be a social space, and even in a single-occupancy restroom, the opportunity to invite friends along is an amazing opportunity. It also allows easy rest, redress, etc.</p>

    <figure>
      <img src={beigeTile} alt="Off-white color ceiling tile similar to that of 70s design.">
      <figcaption>Never forget where you came from.</figcaption>
    </figure>

    <p>Next, though the 70’s aesthetic may have been wiped away, you can’t never forget your roots. A single ceiling panel directly above the toilet is a draw-dropping office beige, and sitting on the toilet, I smiled up for about three minutes straight at it.</p>

    <p>The sink is the final thing we need to talk about, and boy are there things to talk about. Look at this sink. Normal, right? “Of course!” you think to yourself. “That’s just a normal Aqualyn(c) drop-in sink from American Standard! What’s the problem!” you guffaw.</p>

    <figure>
      <img src={sink} alt="A normal image of a bathroom. Nothing seems amiss.">
      <figcaption>Anything strange?</figcaption>
    </figure>

    <p>You’re focused on the wrong thing, non-descript gender reader. Look at what the sink rests upon:</p>

    <figure>
      <img src={sealed} alt="View of below the sink with the sink insides covered">
      <img src={open} alt="View of below the sink with the sink insides revealed and the cover for them on the floor.">
      <figcaption>The smoking gun.</figcaption>
    </figure>

    <p>It was surprisingly easy to crack this puppy open. I’m not going to tell you though, it’s kinda my little secret place to store snacks now :)</p>

    <p>This restroom overall is worth going to but nothing amazing, even with the relics of the past and snack box. I really wish I could say more positive things about it, but it just didn’t tickle my fancy like that.</p>

    <p>VERIDCT: 2/5 plungers</p>

    <p>* While it is entirely possible that the restroom was not changed during the redesign, I believe it was based on cross-checking the design of this restroom with designs of similar restrooms modeled in the 2000s.</p>
  </article>
</main>

<style>
  h1 {
    font-size: 2em;
  }

  article {
    width: min(65ch, 95vw)
  }

  p.articleContent {
    font-weight: 500;
    font-size: 1.2em 
  }
  p {
    font-family: "miller-display", serif;
    font-weight: 300;
    font-size: 21px;

    line-height: 1.5em;
    margin-bottom: 1em;
  }
  p:first-child {
    margin-top: 3ch;
  }
  p:last-child {
    margin-bottom: 4ch;
  }
  figure {
    margin-bottom: 3ch;
  }
  figcaption {
    text-align: center;
  }

</style>