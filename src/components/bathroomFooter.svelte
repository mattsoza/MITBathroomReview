<script>
  import githubLogo from '../assets/github-mark-white.svg'
</script>

<footer>
  <div class="linkFlexbox">
    <a href="https://github.com/mattsoza/MITBathroomReview"><img id='githubLogo' src="{githubLogo}" alt="Github Logo"></a>
  </div>
</footer>

<style>
  footer {
    background-color: #262626;
    height: 10ch;

    justify-content: center;
    display: flex;
  }

  .linkFlexbox {
    flex-grow:1;
    max-width: 1000px;
    display: flex;
    justify-content: right;
    align-items: center;
  }

  @media(max-width: 1050px) {
    .linkFlexbox {
      justify-content: center;
    }
  }

  img#githubLogo {
    height: 4ch;
  }
  
</style>
