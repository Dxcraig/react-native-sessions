// Student Grade Calculator 
// This program calculates student grades from 5 subject scores


// Step 1: Create an array to store 5 subject scores (hardcoded for beginners)
let scores = [85, 92, 78, 88, 76];  // You can change these numbers
let subjects = ["Math", "Science", "English", "History", "Art"];

// Display the scores
console.log("\nYour Subject Scores:");
for (let i = 0; i < scores.length; i++) {
    console.log(`${subjects[i]}: ${scores[i]}`);
}

// Step 2: Use try...catch to handle any errors
try {
    // Step 3: Use a loop to calculate the total
    let total = 0;
    
    // Loop through each score and add it to total
    for (let i = 0; i < scores.length; i++) {
        // Check if score is valid (between 0 and 100)
        if (scores[i] < 0 || scores[i] > 100) {
            throw new Error(`Invalid score: ${scores[i]}. Scores must be between 0 and 100.`);
        }
        total = total + scores[i];  // Add score to total
    }
    
    // Step 4: Calculate the average
    let average = total / scores.length;
    
   
    console.log(`Total Points: ${total}`);
    console.log(`Average Score: ${average}`);  // Show 1 decimal place
    
    // Step 5: Use if/else to assign letter grades
    let letterGrade;
    
    if (average >= 90) {
        letterGrade = "A";
        console.log(`Letter Grade: ${letterGrade}`);
    } else if (average >= 80) {
        letterGrade = "B";
        console.log(`Letter Grade: ${letterGrade}`);
    } else if (average >= 70) {
        letterGrade = "C";
        console.log(`Letter Grade: ${letterGrade}`);
    } else if (average >= 60) {
        letterGrade = "D";
        console.log(`Letter Grade: ${letterGrade}`);
    } else {
        letterGrade = "F";
        console.log(`Letter Grade: ${letterGrade}`);
    }
    
} catch (error) {
    // Step 6: Handle errors if something goes wrong
    console.log(error.message);
}




