<script>

</script>

<form id="fs-frm" name="simple-contact-form" action="https://formspree.io/f/mayzorbr" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Name</label>
    <input type="text" name="name" id="full-name" placeholder="Tommy Oulette" required >

    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@email.com" required >

    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Ex: Great job with the site! It is perhaps the best website I have ever visited!" required ></textarea>
  </fieldset>
  <button type="submit" value="Submit">Submit</button>
</form>

<style>
form {
  background-color: white;
  padding: 10px;
  border-radius: .2em;
  border: 1px solid black;
  max-width: 600px;
  width: 600px;
}

fieldset {
  display: flex;
  flex-direction: column;
  
  /* max-width: 600px; */
}

input, textarea {
  margin-bottom: 1.2em;
}

button {
  background-color: #9cadff;
  padding: 5px 7px 5px 7px;
  border-radius: 4px;
}

</style>