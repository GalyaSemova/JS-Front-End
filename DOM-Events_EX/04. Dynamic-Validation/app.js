function validate() {
    let emailRegex = /[a-z]+@[a-z]+.[a-z]+/gm;
    //<name>@<domain>.<extension>, lowercase only
   
   const input = document.getElementById('email');
   const inputAreaContent = input.value;
   input.parentElement.addEventListener('change', validation)

   

function validation(event) {
   
   if(emailRegex.test(event.target.value)) {
      event.target.removeAttribute('class');
      return;
   }
   
   event.target.className = 'error';
}

}