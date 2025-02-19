console.log("hello world");
console.log(typeof(24));
console.log(typeof("Some String"));

console.log('\n');

validatePassword("helloworld", "hello");
validatePassword("hello", "hello");
validatePassword("hello1234", "hello1234");
validatePassword("Hello1234", "Hello1234");
validatePassword("HELLO1234", "HELLO1234");

reversePassword("HELLO1234");

const user = new User("Clarence", "elemenopee", "qrtsuv");  // initial test
console.log(user);

console.log("Testing createUser function");

const user2 = createUser("John Cena", "hello1234", "hello1234");    // actual test case 1
const user3 = createUser("Brock Lesnar", "Hello1234", "Hello1234"); // actual test case 2
console.log(user2);
console.log(user3);

// function for creating a user
function User(name, password, newPassword) {
    this.name = name;
    this.password = password;
    this.newPassword = newPassword;
}

// function to validate passowrd
function validatePassword(password1, password2) {
    var isLongEnough1 = password1.length >= 8;  // must have at least 8 chars
    var isLongEnough2 = password2.length >= 8;

    var hasUpperCase1 = /[A-Z]/.test(password1); // Contaning ar least 1 capital letter
    var hasUpperCase2 = /[A-Z]/.test(password2);

    var hasLowerCase1 = /[a-z]/.test(password1); // Containing at least 1 small letter
    var hasLowerCase2 = /[a-z]/.test(password2);

    var hasNumber1 = /[0-9]/.test(password1);   // Containing at least 1 number
    var hasNumber2 = /[0-9]/.test(password2);

    if (isLongEnough1 && isLongEnough2 &&   // if all true, then return true
        hasLowerCase1 && hasLowerCase2 &&
        hasUpperCase1 && hasUpperCase2 &&
        hasNumber1 && hasNumber2) {
        console.log("true");
        return true;
    } else {
        console.log("false");   // else return false
        return false;
    }
}

// funtion to reverse a password
function reversePassword(password) {
    let stringedPassword = String(password);    // make the password into a string
    let temp = "";  // make a temp variable that has an empty string

    // from the back, add the chars one by one to temp to reverse it
    for (let i = stringedPassword.length - 1; i >= 0; i--) {
        temp = temp + stringedPassword[i];
    }
    return temp;  // return reversed password
}

// function to create a user
function createUser(name, password, newPassword) {
    // check if valid passowrd, make a reversed passowrd for the new pssword if valid
    if (validatePassword(password, newPassword)) {
        let passwordReverse = reversePassword(password); // capture reversed password
        const user2 = new User(name, password, passwordReverse);
        return user2;
    } else {
        const user3 = new User(name, password, newPassword);
        return user3;
    }
}