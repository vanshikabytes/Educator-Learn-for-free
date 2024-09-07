const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

<script src="https://smtpjs.com/v3/smtp.js">
</script>

var btn= document.getElementById('bton');
btn.addEventListener('click', function(e){
  e.preventDefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var body = 'name: ' +name + '<br/> email: ' +email + '<br/> subject: ' +subject + '<br/> message: ' +message ;

  Email.send({
    Host : "smtp.gmail.com",
    Username : "royanubhav098@gmail.com",
    Password : "jxlcsgvuvqsumgya",
    To : 'royanubhav098@gmail.com',
    From : email,
    Subject : subject,
    Body : body,
}).then(
  message => alert(message)
);

})
