async function attachEvents() {
  const submitBtn = document.getElementById('submit');
  const tBody = document.querySelector('#results > tbody');
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

  submitBtn.addEventListener('click', loadStudents);

  const response = await fetch(BASE_URL);
  if (response.ok) {
    const students = await response.json();
    
    Object.values(students).forEach((student) => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>
      </tr>`;
      tBody.appendChild(row);
    });
  }

 

  async function loadStudents() {
      const firstName = document.querySelector('#form input[name=firstName]').value;
      const lastName = document.querySelector('#form input[name=lastName]').value;
      const facultyNumber = document.querySelector('#form input[name=facultyNumber]').value;
      const grade = document.querySelector('#form input[name=grade]').value;

      if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
      }


    const student = { firstName, lastName, facultyNumber, grade };
    await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    }); 

    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.facultyNumber}</td>
      <td>${student.grade}</td>
    </tr>`;
    tBody.appendChild(row);

    

     //reset fields

      document.querySelector('#form input[name=firstName]').value = '';
      document.querySelector('#form input[name=lastName]').value = '';
      document.querySelector('#form input[name=facultyNumber]').value = '';
      document.querySelector('#form input[name=grade]').value = '';

  } 
 
}

attachEvents();

