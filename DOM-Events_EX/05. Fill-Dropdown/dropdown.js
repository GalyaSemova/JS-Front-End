function addItem() {

    const select = document.getElementById('menu');
    const textInput = document.getElementById('newItemText');
    const text = textInput.value;
    const valueInput = document.getElementById('newItemValue');
    const value = valueInput.value;
    const option = document.createElement('option');

    option.textContent = text;
    option.value = value;

    select.appendChild(option);


    textInput.value = '';
    valueInput.value = '';



}