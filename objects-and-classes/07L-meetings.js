function meetings(input) {
let scheduleData = {};
for (const line of input) {
    let [day, name] = line.split(" ");
    if(!scheduleData.hasOwnProperty(day)) {
        scheduleData[day] = name;
        console.log(`Scheduled for ${day}`);
    }else {
        console.log(`Conflict on ${day}!`)
    }
    
}

for (const key in scheduleData) {
   console.log(`${key} -> ${scheduleData[key]}`)
}

}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)

// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim
