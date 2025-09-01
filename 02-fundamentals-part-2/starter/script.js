// // // // // console.log("Part 2: Functions ready!");
 
// // // // // // Functions - Declarations and Expressions
// // // // // console.log("=== FUNCTIONS ===");
// // // // // function logger(){
// // // // //     console.log("My name is Mark");
// // // // // }
 
// // // // // logger();
// // // // // logger();
// // // // // logger();
 
// // // // // function fruitProcessor(apples, oranges){
// // // // //     console.log(apples, oranges);
// // // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // // //     return juice;
// // // // // }
 
// // // // // const appleJuice = fruitProcessor(5, 3);
// // // // // console.log(appleJuice);
 
// // // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // // console.log(appleOrangeJuice);
 
// // // // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // // // const juice3 = `Juice with 3 apples and 2 oranges.`;
 
// // // // // const juice1 = fruitProcessor(5, 0);
// // // // // const juice2 = fruitProcessor(2, 4);
// // // // // const juice3 = fruitProcessor(3, 2);
 
// // // // // console.log(juice1);
 
 
// // // // // //Function Expressions
// // // // // const calcAge = function (birthyear){
// // // // //     return 2025 - birthyear;
// // // // // };
 
 
// // // // // console.log(calcAge(2005));
 
// // // // // function introduce(firstName, lastName, age) {
// // // // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // // // //   return introduction;
// // // // // }
 
// // // // // console.log(introduce("Mark", "Rosagaran", 20));
 
 
// // // // // function yearsUntilRetirement(birthyear, firstname){
// // // // //     const age = calcAge(birthyear);
// // // // //     const retirement = 65 - age;
 
// // // // //     if(retirement > 0 ){
// // // // //         return `${firstname} retires in ${retirement} years`;
// // // // //     }else {
// // // // //         return `${fristname} had already retired`;
// // // // //     }
// // // // // }
 
// // // // // console.log(yearsUntilRetirement(2005, "Mark"));
 
// // // // // //Global Scope
// // // // // const globaVar = "Ï am Global";
 
// // // // // function testScope(){
// // // // //     const localVar = "I am Local";
// // // // //     console.log(globaVar);
// // // // //     console.log(localVar);
// // // // // }
 
// // // // // testScope();
// // // // // // console.log(localVar);
// // // // // console.log(globaVar);
 
// // // // // ////////////////////////////////////
// // // // // // Coding Challenge #1
 
// // // // // // Function to calculate average of 3 scores
// // // // // function calcAverage(score1, score2, score3) {
// // // // //   return(score1 + score2 + score3) / 3;
// // // // // }
 
// // // // // // Function to check winner
// // // // // function checkWinner(avgDolphins, avgKoalas) {
// // // // // if(avgDolphins >= 2 * avgKoalas){
// // // // //     return`Dolphins win (${avgDolphins} vs ${avgKoalas})`;
// // // // // }else if(avgKoalas >= 2 * avgDolphins){
// // // // //     return`Koalas win (${avgKoalas} vs ${avgDolphins})`;
// // // // // }else {
// // // // //     return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
// // // // // }
// // // // // }
 
// // // // // // Test Data 1
// // // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // // // // Test Data 2
// // // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // // //-------------------------------------------------------------------
 
// // // // const student1Grade = 85;
// // // // const student2Grade = 92;
// // // // const student3Grade = 78;
 
// // // // const grades = [85, 92, 78, 96, 88];
// // // // console.log(grades);
 
// // // // const friends = ["Juswa", "Fons", "Adrian"];
// // // // console.log(friends);
 
// // // // const mixed = ["JUSWA", 27, true, friends];
// // // // console.log(mixed);
 
// // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // console.log(years);
 
// // // // console.log(friends[0]);
// // // // console.log(friends[1]);
// // // // console.log(friends[2]);
 
// // // // console.log(friends.length);
 
// // // // console.log(friends[friends.length - 1]);
 
// // // // friends[1] = "Mark";
// // // // console.log(friends);
 
// // // // const firstName = "Mark";
// // // // const mark = [firstName, "Rosagaran", 2025 - 2005];
// // // // console.log(mark);
 
// // // // const calcAge = function(birthyear){
// // // //     return 2025 - birthyear;
// // // // };
 
// // // // const ages = [calcAge(2000), calcAge(2003), calcAge(1991)];
// // // // console.log(ages);
 
// // // // //Array Methods - Adding Elemenents
 
// // // // const newLength = friends.push("Fons");
// // // // console.log(friends);
// // // // console.log(newLength);
// // // // const newLength2 = friends.push("Rain");
// // // // console.log(friends);
 
// // // // friends.unshift("Lester");
// // // // console.log(friends);
 
// // // // const popped = friends.pop()
// // // // const popped2 = friends.pop()
// // // // console.log(popped);
// // // // console.log(popped2);
// // // // console.log(friends);
 
// // // // const shifted = friends.shift();
// // // // console.log(shifted);
// // // // console.log(friends);
 
// // // // console.log(friends.indexOf("Juswa"));
// // // // console.log(friends.indexOf("Fons"));
 
// // // // console.log(friends.includes("Steven"));
// // // // console.log(friends.includes("Juswa"));
 
// // // // //Array Iterations Loops
 
// // // // for (let i = 0; i < friends.length; i++) {
// // // //     // const element = friends[i];
// // // //     console.log(friends[i]);
// // // // }
 
// // // // friends.forEach(
// // // //     function(friend, index){
// // // //         console.log(`Friend ${index + 1}: ${friend}`);
// // // //     }
// // // // )
 
// // // // friends.forEach((friend, index) => {
// // // //   console.log(`Friend ${index + 1}: ${friend}`);
// // // // });
 
// // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // let total = 0;
 
// // // // for (let i = 0; i < grades2.length; i++) {
// // // //    total += grades2[i];
// // // // }
 
// // // // const average = total / grades2.length;
// // // // console.log(`Average grade: ${average.toFixed(2)}`);
 
// // // // let passedCount = 0;
// // // // grades2.forEach(
// // // //     grade => {
// // // //         if (grade >= 70) passedCount++;
// // // //     }
// // // // );
 
// // // // console.log(`${passedCount} out of ${grades2.length} students passed`);
 
 
 
 
// // // ////////////////////////////////////
// // // // Coding Challenge #2 - Student Grade Manager
 
// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
// // // // Function to calculate average
// // // function calculateAverage(grades) {
// // //   // Your code here
// // //   // Hint: Sum all grades, divide by length
// // //     let sum = 0 ;
// // //     for (let i = 0; i < grades.length; i++) {
// // //         sum += grades[i];
// // //     }
// // //         return sum/grades.length;
// // // }
 
// // // // Function to find highest grade
// // // function findHighestGrade(grades) {
// // //   // Your code here
// // //   // Hint: Start with first grade, compare with each subsequent grade
 
// // //   let highest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if(grades[i]> highest){
// // //         highest = grades[i];
// // //     }
// // //   }
// // //   return highest;
// // // }
 
// // // // Function to find lowest grade
// // // function findLowestGrade(grades) {
// // //   // Your code here
// // //   // Hint: Similar to highest, but use < comparison
 
// // //   let lowest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if(grades[i] < lowest){
// // //         lowest = grades[i];
// // //     }
// // //   }
// // //   return lowest;
// // // }
 
// // // // Function to count passing students
// // // function countPassing(grades, passingGrade) {
// // //   // Your code here
// // //   // Hint: Counter pattern - increment when condition is met
// // //   let count = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     if(grades[i] >= passingGrade){
// // //         count++;
// // //     }
// // //   }
// // //   return count;
// // // }
 
// // // // Generate complete report
// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);
 
// // // console.log("=== GRADE REPORT ===");
// // // console.log(`Average: ${average.toFixed(2)}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // //---------HOUR 3-------------

// // const markArray = [
// //     "Mark",
// //     "Rosagaran",
// //     2025 - 2005,
// //     "student",
// //     ["Fons", "Adrian", "Joshua"],
// // ];

// // console.log(markArray[0]);
// // console.log(markArray[1]);

// // const markObject = {
// //     firstName: 'Mark',
// //     lastName:  'Rosagaran',
// //     age:  2025 - 2005,
// //     job:  'Student',
// //     friends:  ['Fons', 'Adrian', 'Joshua']
// // };

// // console.log(markObject);

// // //Property access methods

// // console.log(markObject.firstName);
// // console.log(markObject.lastName);
// // console.log(markObject.age);

// // //Bracket Notation

// // console.log(markObject["firstName"]);
// // console.log(markObject["lastName"]);
// // console.log(markObject["age"]);

// // const nameKey = "Name";
// // console.log(markObject["first" + nameKey]);

// // // modifying existing properties

// // markObject.job = "Programmer";
// // markObject.age = 30;
// // console.log(markObject);

// // //add new properties

// // markObject.location = "Philippines";
// // markObject["twitter"] = "markProgrammer";
// // markObject.hasDriverLicense = true;
// // console.log(markObject);

// // //Objects vs arrays

// // const listOfYears = [1991, 1984, 2008, 2020];
// // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // const testScores = [85, 92, 78, 96];

// // const person = {
// //   name: "Jonas",
// //   age: 46,
// //   occupation: "teacher",
// // };

// // const car = {
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   color: "blue",
// // };

// // const student = {
// //   name: "Sarah",
// //   grades: [85, 92, 78], // Array inside object
// //   address: {
// //     // Object inside object
// //     street: "123 Main St",
// //     city: "New York",
// //   },
// // };

// // console.log(student.grades[0]); 
// // console.log(student.address.city); 

// // //Object methods

// // const John = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   birthYear: 1995,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function (birthYear) {
// //     return 2025 - birthYear;
// //   },
// // };

// // console.log(John.calcAge(2000)); 

// // //this keyword
// // const jonhImproved = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   birthYear: 1995,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function () {
// //     console.log(this); 
// //     return 2025 - this.birthYear; 
// //   },

// //   getSummary: function(){
// //     return`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
// //   }
// // };

// // console.log(jonhImproved.calcAge()); 
// // console.log(jonhImproved.age); 
// // console.log(jonhImproved.getSummary()); 

// // //Complex object 

// // const bankAccount = {
// //     owner: "John Doe",
// //     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// //     interestRate: 1.2,
// //     pin: 1111,

// //     calcBalance: function(){
// //         this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
// //         return this.balance;
// //     },

// //     deposit: function(amount){
// //         this.movements.push(amount);
// //         this.calcBalance();
// //     },

// //     withdraw: function(amount){
// //         this.movements.push(-amount);
// //         this.calcBalance();
// //     },

// //     getStatement: function(){
// //         return`${this.owner}'s account balance: ${this.calcBalance()}`;
// //     }
// // }

// // console.log(bankAccount.getStatement());
// // bankAccount.deposit(500);
// // console.log(bankAccount.getStatement());

// // //coding challenge

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   // Calculate age method
// //   calcAge: function () {
// //     // Calculate age and store as this.age
// //     // Hint: Use new Date().getFullYear() for current year
// //     // Your code here

// //     this.age = new Date().getFullYear() - this.birthYear;
// //     return this.age;

// //   },

// //   // Add friend method
// //   addFriend: function (name, status = "active") {
// //     // Add new friend object to this.friends array
// //     // Return the new length of friends array
// //     // Your code here
// //     this.friends.push({name, status: status});
// //     return this.friends.length;
// //   },

// //   // Get active friends count
// //   getActiveFriends: function () {
// //     // Filter friends array to count only active friends
// //     // Hint: use this.friends.filter()
// //     // Your code here
// //     const activeFriends = this.friends.filter(
// //         (friend) => friend.status === "active"
// //     );
// //     return activeFriends.length;
// //   },

// //   // Toggle active status
// //   toggleStatus: function () {
// //     // Switch this.isActive between true and false
// //     // Return the new status
// //     // Your code here
// //     this.isActive = !this.isActive;
// //     return this.isActive;
// //   },

// //   // Generate profile summary
// //   getSummary: function () {
// //     // Create a social media style profile summary
// //     // Include: name, age, location, status, friend counts, interests
// //     // Use template literals for nice formatting
// //     // Your code here
// //     const age = this.calcAge();
// //     const activeFriends = this.getActiveFriends();
// //     const status = this.active ? "active" : "away";
    
// //     return `${this.firstName} ${this.lastName} (${(age)}) from ${this.location}
// //     Currently ${status}
// //     ${activeFriends} active friends out of ${this.friends.length}
// //     total Interest: ${this.interests.join(', ')}
// //     Connected and sharing life's adventures`;
// //   },
// // };

// // // Test your user profile system
// // console.log(user.getSummary());
// // user.addFriend("Alex", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());

// //----------HOUR 4----------

// const message = document.querySelector(".message");
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// //get element by id

// const buttonByID = document.getElementById("btn");
// console.log(buttonByID);
// console.log(buttonByID === button);

// //querry selector all

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

const message = document.querySelector(".message");

console.log(message.textContent);
message.textContent = "Hello from Javascript";
console.log(message.textContent);

message.innerHTML = "<strong>Bold text from JS!</strong>";

console.log(message.innerText);

const input = document.querySelector(".guess");

console.log(input.value);
input.value = "Default text";

const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = "20px";
button.style.borderRadius = "10px";

//event listener

button.addEventListener('click', function(){
    console.log('Button was clicked');
    message.textContent = "You clicked teh button";
    message.style.color = "green";
});

let clickCount = 0;

button.addEventListener('click', function(){
    clickCount++;
    button.textContent = `Clicked${clickCount} times`;
    button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

//input events
const display = document.querySelector(".message");
input.addEventListener('input', function(){
    const userText = input.value;
    display.textContent = `You typed ${userText}`;
    display.style.fontSize = `${userText.length + 10} px`;
});

//keyboard events

input.addEventListener("keydown", function(event){
    console.log(`key has been pressed ${event.key}`); 
    if(event.key === 'Enter') {
        display.textContent = `You pressed Enter! Text was ${input.value}`;
        input.value = "";
    }
});