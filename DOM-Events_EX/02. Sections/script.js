function create(words) {
   const content = document.getElementById('content');
   [...words].forEach((word) => {
      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');
      newParagraph.textContent = word;
      newParagraph.style.display = 'none';

      newDiv.addEventListener('click' , () => {
         newParagraph.style.display = 'block';

      })//Attaching to DOM tree

   newDiv.appendChild(newParagraph);
   content.appendChild(newDiv);
   })

}