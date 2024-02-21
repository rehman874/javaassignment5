var Name = prompt("Enter your name:");

function greetUser(userName) {
    return "Hello, " + userName + "! Welcome to our website.";
}
    var greetings = greetUser(Name);
    document.write(greetings);



    function isPrime(number) {
        if (number <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false; 
        }
        return true; 
    }
    const userNumber = (prompt("Enter a positive integer:"));

        const resultMessage = isPrime(userNumber) ? "is" : "is not";
        document.write(`<br>' ${userNumber} ${resultMessage} a prime number.`);
 
