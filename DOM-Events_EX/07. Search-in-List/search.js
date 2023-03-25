function search() {
   const liItems = Array.from(document.querySelectorAll('#towns > li'));
   let inputValue = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   let matches = 0;

   liItems
      .forEach(li => {
         let liContent = li.textContent;
         if(liContent.toLowerCase().includes(inputValue.toLowerCase())) {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            matches++;
         }
      });

      result.textContent = `${matches} matches found`
      inputValue = '';

}
