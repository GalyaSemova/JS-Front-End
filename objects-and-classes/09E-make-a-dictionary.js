//`Term: ${term} => Definition: ${definition}`
function dictionaryParser(input) {
    //input -> JSON
    let dictionary = {};
    for (const element of input) {
        let obj = JSON.parse(element);
        dictionary = Object.assign(dictionary, obj)
        
    }

    //sorting keys

    Object.keys(dictionary)
            .sort((a, b) => a.localeCompare(b))
            .forEach(key => console.log(`Term: ${key} => Definition: ${dictionary[key]}`));



}

dictionaryParser([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )