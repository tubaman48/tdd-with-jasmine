FizzBuzz = function(number) {
    this.fBOutput = "Zero invalid for FizzBuzz";
    this.number = number;
}

FizzBuzz.prototype.fizzBuzzCheck = function(number) {
    if (typeof(number) == "number") {
        if (number != 0) {
            if (number % 3 == 0) {
                if (number % 5 == 0) {
                    this.fBOutput = "FizzBuzz";
                } else {
                    this.fBOutput = "Fizz";
                }
            } else {
                if (number % 5 == 0) {
                    this.fBOutput = "Buzz";
                } else {
                    this.fBOutput = number.toString(10);
                }
            }
        }  
    } else {
        alert("Error!");
    };
    return this.fBOutput; /* Default output - only expected when 0 provided */
}