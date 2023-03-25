function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    newLi.textContent = input.value;
    newAnchor.textContent = '[Delete]';
    newAnchor.setAttribute('href', '#')
    newAnchor.addEventListener('click', deleteHandler);

    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);
    input.value = '';

    function deleteHandler(e) {
        //anchor = currenttarget
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}