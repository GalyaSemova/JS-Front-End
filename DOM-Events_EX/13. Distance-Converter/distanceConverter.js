function attachEventsListeners() {
    
    let inputFieldElement = document.querySelector('#inputDistance');
    let unitFromElement = document.querySelector('#inputUnits');
    let outputFieldElement = document.querySelector('#outputDistance');
    let unitToElement = document.querySelector('#outputUnits');
    let convertButtonElement = document.querySelector('#convert');

// 1 km	1000 m
// 1 m	1 m
// 1 cm	0.01 m
// 1 mm	0.001 m
// 1 mi	1609.34 m
// 1 yrd	0.9144 m
// 1 ft	0.3048 m
// 1 in	0.0254 m

    
    let conversionRatesFromMeter = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254,
    }
    convertButtonElement.addEventListener('click', function() {
 
        let convertFrom = unitFromElement.value;
        let convertTo = unitToElement.value;
    
        
        let valueInMeters = inputFieldElement.value * conversionRatesFromMeter[convertFrom];
        let convertedValue = valueInMeters / conversionRatesFromMeter[convertTo];
        outputFieldElement.value = convertedValue;
        
 
    })
}