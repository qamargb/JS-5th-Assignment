// Level 1
function say() {
    console.log("Hello World")
}
say()

// Question No.2

function showName(name){
    
    console.log(`Hello ${name}`)

}
showName("Ali")

// Question No.3

function add(a, b){
    return a + b;

}
console.log(add(3, 5));
// Question No.4
function substraction(a, b){
    return a - b;

}
console.log(substraction(30, 12));

// Question No.5
function multiply(a, b){
    return a * b;
}
console.log(multiply(4, 5));


// Question No.6

function square(num){
    return num * num;
} 
console.log(square(4));

function square(num){
    return num * num;

}
console.log(square(7));

// Question No.7

function cube(num){
    return num * num * num;
}
console.log(cube(4));

// Qestoion No.8

function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(getFullName("Qamar", "Ansari"));

function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(getFullName("Zaman", "Khan"));

// level 2

// Question No.1
// Write a function isEven(num) that returns true if the number is even and false otherwise.

function isEven(num){
    if(num % 2 === 0) {
        return true;
    } else {
        return false ;

    }
}
 let result = isEven(5)
 console.log(result)

// Qustion No.2
// Write a function isPositive(num) that checks whether a number is positive, negative, or zero.

function isPositive(num){
   if (num > 0){
    return "Positive"
   } else if (num < 0){
    return "Negative"
   }else{
    return "Zero"
   }
}
console.log(isPositive(3));
console.log(isPositive(0));
console.log(isPositive(-2));

// Qustion No.3
// Write a function findGreater(a, b) that returns the greater number.
function findGreater(a, b){
    if(a > b){
        return a;
    } else if(b > a){
        return b;
    }
}
console.log(findGreater(5, 4));

// Question No.4
// Write a function canVote(age) that returns "Eligible" if age is 18 or above, otherwise "Not 
function canVote(age){
    if(age >= 18){
        return "Eligible"
    } else{
        return "Not Eligible"
    }
}
console.log(canVote(18));
console.log(canVote(16));

// Question No.5
// Write a function checkNumber(num) that returns "Even" or "Odd".
function checkNumber(num){
    if(num % 2 === 0){
        return "Even"
    } else{
        return "Odd"
    }
}
console.log(checkNumber(3));
console.log(checkNumber(10));

// Question No.6
// 6. Write a function `getGrade(marks)` using these rules:

// ```
// 80+ → A
// 70+ → B
// 60+ → C
// 50+ → D
// Below 50 → Fail
// // ```

function getGrade(marks){
    if(marks >= 80){
        return "A"
    } else if(marks >= 70){
        return "B"
    } else if(marks >= 60){
        return "C"
    } else if(marks >= 50){
        return "D"
    } else{
        return "Fail"
    }
}
console.log(getGrade(99));
console.log(getGrade(78));
console.log(getGrade(65));
console.log(getGrade(56));
console.log(getGrade(47));

// Question No.7
// Write a function isDivisibleBy5(num) that returns true if the number is divisible by 5.

function isDivisibleBy5(num){
    if(num / 5 === 5){
        return true;
    } else{
        return false;
    }
}
console.log(isDivisibleBy5(25));
console.log(isDivisibleBy5(43));

// Level 3 — Functions + Strings
// Question No.1
// Write a function getLength(str) that returns the length of a string.
function getLength(str){
    return str.length;
}
console.log(getLength("AssalamuAlaikum"));
console.log(getLength("Alhamdulillah"));
console.log(getLength("Allah Hafiz"));


// Question no.2 
// Write a function `toUpperCase(str)` that returns the string in uppercase.
function toUpperCase(str){
    return str.toUpperCase();
}
console.log(toUpperCase("Hello"));

// Question No.3
// 3. Write a function `getFirstCharacter(str)` that returns the first character.
function getFirstCharacter(str){
    return str[0]
}
console.log(getFirstCharacter("Hello"));

// Question No.4
// 4. Write a function `getLastCharacter(str)` that returns the last character.
function getLastCharacter(str){
    return str[str.length -1];
}
console.log(getLastCharacter("Hello"));

// Question No.5
// 5. Write a function `isLongWord(word)` that returns `true` if the word contains more than 5 characters.
function isLongWord(word){
    return word.length > 5;
}
console.log(isLongWord("Mistake"));
console.log(isLongWord("Hi"));

// ### Level 4 — Small Problem Solving
// Question No.1
// 1. Write a function `calculateDiscount(price, discount)` that returns the final price after applying the discount percentage.

// Example:

// ```jsx
// calculateDiscount(1000, 20);
// // 800
// ```

function calculateDiscount(price, discount){
    return price - (price * discount / 100)
}
console.log(calculateDiscount(1000, 20))

// Question No.2
// Write a function calculateAge(birthYear, currentYear) that returns the person's age.
function calculateAge(birthYear, currentYear){
    return currentYear - birthYear;
}
console.log(calculateAge(2004, 2026));

// Question No.3
// Write a function convertToMinutes(hours) that converts hours into minutes.
function convertToMinutes(hours){
    return hours * 60
}
console.log(convertToMinutes(3))

// Question No.4
// Write a function getLargest(a, b, c) that returns the largest of three numbers.
function getLargest(a, b, c){
    if(a >= b && a >= c){
        return a;
    } else if(b >= a && b >= c){
        return b;
    } else{
        return c;
    }
}
console.log(getLargest(20, 21, 11));
console.log(getLargest(19, 29, 23));
console.log(getLargest(25, 20, 10));

// Question No.5
// 4. Write a function `calculator(a, b, operator)`.
function calculator(a, b, op){
    if (op === "+"){
        return a + b;
    } else if (op === "-"){
        return a - b;
    } else if (op === "/"){
        return a / b;
    } else if (op === "*"){
        return a * b
    }
}
console.log(calculator(20, 21, "+"));
console.log(calculator(20, 21, "-"));
console.log(calculator(20, 21, "*"));
console.log(calculator(20, 21, "/"));