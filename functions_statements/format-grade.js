function grade(grade) {
//     // •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"
let result = "";

if(grade<3) {
    result = "Fail";
} else if(grade>=3 && grade<3.50) {
    result = "Poor";

} else if(grade>=3.50 && grade<4.50) {
    result = "Good";

}else if(grade>=4.50 && grade<5) {
    result = "Very good";

} else {
    result = "Excellent";
}

console.log(result + ` (${formatGrade(grade)})`);

function formatGrade(grade){
    if(grade<3) {
        return 2;
    }
    return grade.toFixed(2);
}

}

grade(3.33)
grade(2.99)