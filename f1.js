function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

  const form = document.querySelector('form');
  const thankYouMessage = document.querySelector('#thank-you-message');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    thankYouMessage.classList.add('show');
  });
  async function sub(){
   document.getElementById("success").innerHTML="The form has been submitted successfully<br>You will now be redirected to another page"
   form.submit();
   form.reset();
   await sleep(1)
   document.getElementById("success").innerHTML="The form has been submitted successfully<br>You will now be redirected to another page.... in.... 3"
   await sleep(1)
   document.getElementById("success").innerHTML="The form has been submitted successfully<br>You will now be redirected to another page.... in.... 2"
   await sleep(1)
   document.getElementById("success").innerHTML="The form has been submitted successfully<br>You will now be redirected to another page.... in.... 1"
   await sleep(1)
   window.location.href="https://www.uclahealth.org/programs/marc/free-programming-resources/ucla-mindful-app"
  }