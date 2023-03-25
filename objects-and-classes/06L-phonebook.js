function phoneBook(input) {
    let personData = {};

    for (const line of input) {
        let [name, phoneNumber] = line.split(' ');
        if(!personData.hasOwnProperty(name)) {
            personData[name] = phoneNumber;
        }
        
        
    }

    for (const key in personData) {
        console.log(`${key} -> ${personData[key]}`);

    
       
    }

}
// Tim -> 0876566344
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)