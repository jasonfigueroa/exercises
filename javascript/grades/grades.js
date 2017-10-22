// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
// const scores = [92, 91, 62, 95, 95, 98, 99, 72, 78, 94, 64, 58, 97, 90];

const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0 
}; 

scores.forEach( (grade) => {
    if(grade > 90) {
        grades.A++;
    } else if(grade < 91 && grade > 80) {
        grades.B++;
    } else if(grade < 81 && grade > 70) {
        grades.C++;
    } else if(grade < 71 && grade > 60) {
        grades.D++;
    } else {
        grades.F++;
    }
});

console.log(grades);