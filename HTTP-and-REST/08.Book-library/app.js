function attachEvents() {
  const loadBooks = document.getElementById('loadBooks');
  const booksContainer = document.querySelector('table > tbody');
  const [ titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'));
  const submitBtn = document.querySelector('#form > button');
  const formHeather = document.querySelector('#form > h3');
  let allBooks = {};
  let editBookId = null;
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

  //load

  loadBooks.addEventListener('click', loadBooksHandler);
  submitBtn.addEventListener('click', submitBookHandler);
  async function loadBooksHandler() {
    booksContainer.innerHTML = '';
    const bookRes = await fetch(BASE_URL);
    const booksData = await bookRes.json();
    allBooks = booksData;
    for (const bookId in booksData) {
      const { author, title} = booksData[bookId];
      const nameRow = document.createElement('tr');
      const titleCol = document.createElement('td');
      const authorCol = document.createElement('td');
      const buttonsCol = document.createElement('td');
      const editBtn = document.createElement('button');

      //edit
      editBtn.addEventListener('click', () => {
        editBookId = bookId;
        formHeather.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
        titleInput.value = title;
        authorInput.value = author;

      });

      const deleteBtn = document.createElement('button');

      //delete
      deleteBtn.id = bookId;
      deleteBtn.addEventListener('click', deleteBookHandler);


      titleCol.textContent = title;
      authorCol.textContent = author;
      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'Delete';
      buttonsCol.appendChild(editBtn);
      buttonsCol.appendChild(deleteBtn);
      nameRow.appendChild(titleCol);
      nameRow.appendChild(authorCol);
      nameRow.appendChild(buttonsCol);
      booksContainer.appendChild(nameRow);

    }



  }

  //create
   async function submitBookHandler(event) {
    //if the inputs are in a form tag => prevent to refresh after submit
    // event.preventDefault();
    const title  = titleInput.value;
    const author = authorInput.value;
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ title, author})
    };

    let url = BASE_URL;

    //edit
    if(formHeather.textContent === 'Edit FORM') {
      httpHeaders.method = 'PUT';
      url += editBookId;

    }   
                      
    const bookRes = await fetch(url, httpHeaders);
    loadBooksHandler(); 
    if(formHeather.textContent === 'Edit FORM') {
      formHeather.textContent = 'FORM';
      submitBtn.textContent = 'Submit';
    }   

    titleInput.value = '';
    authorInput.value = '';


  }

  //delete
  async function deleteBookHandler() {
    const id = this.id;

    const httpHeaders = {
      method: 'DELETE'
    };
    await fetch(BASE_URL + id, httpHeaders);
    loadBooksHandler();


  }
}

attachEvents();