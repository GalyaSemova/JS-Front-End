function solve() {
   const searchInput = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
   
      const searchedWord = searchInput.value;
      const tableRows = Array.from(document.querySelectorAll('tbody tr'));

      tableRows
         .forEach((row) => {
            const trimmedTextContent = row.textContent.trim(); 
            //innerText => trimmed text

            if(row.classList.contains('select')) {
               row.classList.remove('select');
            }

            if(trimmedTextContent.includes(searchedWord)) {
               row.classList.add('select');
            }

         });

         searchInput.value = '';

   }
}