function solve() {
    //add select options
    let selectElement = document.querySelector('#selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.text = 'Binary';
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.text = 'Hexadecimal';
    selectElement.add(binaryOption);
    selectElement.add(hexadecimalOption);
 
    //add click event
    document.querySelector('button').addEventListener('click', clickEvent)
 
    function clickEvent() {
        //get values
        let decimalNumber = +document.querySelector('#input').value;
        let selectElement = document.querySelector('#selectMenuTo');
        let convertTo = selectElement.options[selectElement.selectedIndex].text;
 
        //convert
        let result;
        switch (convertTo) {
            case 'Binary':
                result = decimalNumber.toString(2);
                break;
            case 'Hexadecimal':
                result = decimalNumber.toString(16).toUpperCase();
                break;
        }
 
        //append output
        document.querySelector('#result').value = result;
    }
}
    

    //  //add select options From
    // let selectElementFrom = document.querySelector('#selectMenuFrom');
    // let binaryOptionFrom = document.createElement('option');
    // let hexadecimalOptionFrom = document.createElement('option');
    // binaryOptionFrom.value = 'binary';
    // binaryOptionFrom.text = 'Binary';
    // hexadecimalOptionFrom.value = 'hexadecimal';
    // hexadecimalOptionFrom.text = 'Hexadecimal';
    // selectElementFrom.add(binaryOption);
    // selectElementFrom.add(hexadecimalOption);   
    // //add select options TO
    // let selectElement = document.querySelector('#selectMenuTo');
    // let binaryOption = document.createElement('option');
    // let hexadecimalOption = document.createElement('option');
    // binaryOption.value = 'binary';
    // binaryOption.text = 'Binary';
    // hexadecimalOption.value = 'hexadecimal';
    // hexadecimalOption.text = 'Hexadecimal';
    // selectElement.add(binaryOption);
    // selectElement.add(hexadecimalOption);
 
    //add click event
//     document.querySelector('button').addEventListener('click', clickEvent)
 
//     function clickEvent() {
//         //get values
//         let decimalNumber = document.querySelector('#input').value;
//         let selectElement = document.querySelector('#selectMenuTo');
//         let convertTo = selectElement.options[selectElement.selectedIndex].text;
 
//         //convert
//         // let result;
//         // switch (convertTo) {
//         //     case 'Binary':
//         //         result = decimalNumber.toString(2);
//         //         break;
//         //     case 'Hexadecimal':
//         //         result = decimalNumber.toString(16).toUpperCase();
//         //         break;
//         // }
        
 
//         //append output
//         document.querySelector('#result').value = result;
//     }
// }




// function solve() {

//     const selectMenu = document.getElementById('selectMenuTo');
//     const binaryOption = document.createElement('option');

//     binaryOption.textContent = 'Binary';
//     binaryOption.value = 'binary';
//     const hexadeicmalOption = document.createElement('option');
//     hexadeicmalOption.textContent = 'Hexadeicmal';
//     hexadeicmalOption.value = 'hexadeicmal';

//     selectMenu.appendChild(binaryOption);
//     selectMenu.appendChild(hexadeicmalOption);

//     const selectMap = {
//         'binary': num => num.toString(2),
//         'hexadeicmal': num => num.toString(16).toUpperCase()
//     }

//     const convertBtn = document.querySelector('#container > button');

//     convertBtn.addEventListener('click', (evt) => {
//         const inputData = document.getElementById('input');
//         const outputData = document.getElementById('result');

//         outputData.value = selectMap[selectMenu.value](+inputData.value);
//     })
// }
