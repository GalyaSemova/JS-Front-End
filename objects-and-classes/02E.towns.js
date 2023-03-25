function townParser(input) {
    for (const line of input) {
        let[town, latitude, longitude] = line.split(" | ");
        let townObj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(townObj);
        
    }

}

townParser(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)

townParser(['Plovdiv | 136.45 | 812.575'])


// output => { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' }