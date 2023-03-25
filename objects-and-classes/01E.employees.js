function parseEmployees(input) {
    let employee = {};
// // reduce
//      Object.keys(employee = input.reduce((data, person) => {
//         data[person] = person.length;
//         return data;
//      }, {})
// )..forEach((key) => console.log(`Name: ${key} -- Personal Number: ${employee[key]}`));
   for (const name of input) {
    employee[name] = name.length;
    
   }

   Object.keys(employee)
   .forEach((key) => console.log(`Name: ${key} -- Personal Number: ${employee[key]}`));

}

parseEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )

parseEmployees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )    

    // Name: Samuel Jackson -- Personal Number: 14 