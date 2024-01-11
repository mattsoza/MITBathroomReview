<script>

// Thanks ChatGPT for this function! I didn't want to write it myself :)
function changeButtonText(event) {
  // Get the button element from the event
  const button = event.target;

  button.textContent = 'Come on. You\'re really gonna donate to a bathroom website?? Foolish.';
}

</script>

<div class='donateBox'>
  <p>This site cost $0.02/day to keep running.</p>
  <p>It is only through donations from passionate readers like you that we can keep reviewing shitters.</p>
  <p>Please. For just the cost of a cup of coffee in the Kendall, Cambridge, MA area, we can keep this site running for one more year and a leap day.</p>
  <button on:click={changeButtonText}>Donate $7.32 Today</button>
</div>

<style>
  .donateBox {
    flex: 3;
    display: flex;
    flex-direction: column;
    background-color: #5090a7;
    padding: 1em;
    min-height: 0;
  }
  p {
    margin-bottom: 1em;
    color: white;
  }

  button {
    border-radius: 5px;
    background-color: white;
    color: black;
    padding: .5ch 1ch .5ch 1ch;
  }
</style>