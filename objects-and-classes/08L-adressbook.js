function adressBook(input) {
    let adressBookMap = {};
    for (const line of input) {
    let [name, adress] = line.split(":");
    adressBookMap[name] = adress;
    }

    //sort

    let sortedNames = Object.keys(adressBookMap)
                    .sort((nameA, nameB) => nameA.localeCompare(nameB) );
    sortedNames.forEach(name => console.log(`${name} -> ${adressBookMap[name]}`));                

}

adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)

adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)