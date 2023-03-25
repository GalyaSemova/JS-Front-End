function generateReport() {
    const inputElements = Array.from(document.getElementsByTagName('input'));
    const tableRows = Array.from(document.getElementsByTagName('tr'));

    let resultArr = [];
    let checkCols = [];

    for (let i = 0; i < tableRows.length; i++) {
        const currentRow = tableRows[i];
        const obj = {};

        for (let y = 0; y < currentRow.children.length; y++) {
            const currentElement  = currentRow.children[y];

            if(i === 0) {
                if(currentElement.children[0].checked) {
                    checkCols.push(y);
                }
                continue;
            }

            if(checkCols.includes(y)) {
                let propertyName = inputElements[y].name;
                obj[propertyName] = currentElement.textContent;

            }
            
        }

        if(i !== 0) {
            resultArr.push(obj);
        }
        
    }

    document.getElementById('output').value = JSON.stringify(resultArr);

}

