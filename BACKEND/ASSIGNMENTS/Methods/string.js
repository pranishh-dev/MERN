// Create a string "Hello World" and use replace() to replace "World" with "JavaScript"
let greet = "hello World";
let res = greet.replaceAll("World","JS")
console.log(res);

//Create a variable email containing an email address and use includes() to check whether it contains the@ symbol.
let email = "pranish@gmail.com"
console.log(email.includes("@"));

// Create a variable fileName containing "assignment.pdf" and use endsWith() to check whether the file has a .pdf extension.
let fileName = "assignment.pdf"
console.log(fileName.endsWith(".pdf"));

// Create a string "JavaScript Programming" and use slice() to extract the word "JavaScript".
let program = "JavaScript Programming"
console.log(program.slice(0,10));

// Create a string "HTML,CSS,JavaScript" and use split() to separate the values.
let languages = "HTML,CSS,JavaScript"
console.log(languages.split(","));

// Create a string with extra spaces, such as " Hello JavaScript ", and use trim() to remove the spaces from the beginning and end.
let greett = " Hello JavaScript "
console.log(greett.trim());