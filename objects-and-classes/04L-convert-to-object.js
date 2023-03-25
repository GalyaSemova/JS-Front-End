function convertToObj(jsonString) {
    let obj = JSON.parse(jsonString);
    for (const key in obj) {
       console.log(`${key}: ${obj[key]}`)
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}')