function solve(speed, area) {

// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h

let result;
let extraSpeed= 0;
let status='';

switch(area) {
    case 'motorway':
        


        if(speed <= 130) {
            result = `Driving ${speed} km/h in a 130 zone`

        } else {

            extraSpeed = speed -130;
            if(extraSpeed<=20) {
               status='speeding';

            } else if( extraSpeed >=21 && extraSpeed <=40) {
                status='excessive speeding';

            } else {
                status='reckless driving';
            }

            result = `The speed is ${extraSpeed} km/h faster than the allowed speed of 130 - ${status}`


        }
        break;
    case 'interstate':
        if(speed <= 90) {
            result = `Driving ${speed} km/h in a 90 zone`

        } else {
            extraSpeed = speed -90;
            if(extraSpeed<=20) {
                status='speeding';
 
             } else if( extraSpeed >=21 && extraSpeed <=40) {
                 status='excessive speeding';
 
             } else {
                 status='reckless driving';
             }
 
             result = `The speed is ${extraSpeed} km/h faster than the allowed speed of 90 - ${status}`
 
            
            
        }
        break;
    case 'city':
        if(speed <= 50) {
            result = `Driving ${speed} km/h in a 50 zone`  

        } else {
            extraSpeed = speed -50;
            if(extraSpeed<=20) {
                status='speeding';
 
             } else if( extraSpeed >=21 && extraSpeed <=40) {
                 status='excessive speeding';
 
             } else {
                 status='reckless driving';
             }
 
             result = `The speed is ${extraSpeed} km/h faster than the allowed speed of 50 - ${status}`
 
            
        }
        break;
    case 'residential' :
        if(speed <= 20) {
            result = `Driving ${speed} km/h in a 20 zone`

        } else {
            extraSpeed = speed -20;
            if(extraSpeed<=20) {
                status='speeding';
 
             } else if( extraSpeed >=21 && extraSpeed <=40) {
                 status='excessive speeding';
 
             } else {
                 status='reckless driving';
             }
 
             result = `The speed is ${extraSpeed} km/h faster than the allowed speed of 20 - ${status}`
 
            
        }
        break;      
}

console.log(result);

}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')