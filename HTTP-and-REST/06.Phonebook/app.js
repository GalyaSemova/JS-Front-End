function attachEvents() {
    const phonebookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    loadBtn.addEventListener('click', loadPhoneBookHandler);
    createBtn.addEventListener('click', createPhoneContactHanmdler)

    async function loadPhoneBookHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            let phoneBookData = await phoneBookRes.json();
            phoneBookData = Object.values(phoneBookData);
            phonebookContainer.innerHTML = '';
            //Load contacts
            for (const { phone, person, _id } of phoneBookData) {
                const li = document.createElement('li');
                const deleteBtn = document.createElement('button');
                deleteBtn.id = _id;
                deleteBtn.addEventListener('click', deleteContactHandler);
                deleteBtn.textContent = 'Delete';

                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(deleteBtn);
                phonebookContainer.appendChild(li);         
            }

        } catch(err) {
            console.error(err);
        }
    
    }

    async function createPhoneContactHanmdler() {
        const person = personInput.value;
        const phone = phoneInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }

        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadPhoneBookHandler();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }
    //delete contsact

    async function deleteContactHandler() {
        //this = e.currentTarget
        const id = this.id;
        const res = await fetch(`${BASE_URL}${id}`, {method: 'DELETE'});
        let data =await loadPhoneBookHandler();

    }

}

attachEvents();