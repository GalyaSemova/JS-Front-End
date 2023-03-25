function solve() {
  const textInput = document.getElementById('text').value.toLowerCase();
  const typeOfConvertion = document.getElementById('naming-convention');
  const result = document.querySelector('.result-container span');

  let resultContent = '';


  if(typeOfConvertion.value === 'Camel Case') {

    resultContent = textInput.split(' ')
     .map((word, i) => i !== 0 ? word[0].toUpperCase() + word.slice(1) 
                               : word).join('');

    
  } else if(typeOfConvertion.value === 'Pascal Case') {
   resultContent = textInput.split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1))

              .join('');
      
  } else {
    resultContent = 'Error!';
    
  }

   result.textContent = resultContent;



}