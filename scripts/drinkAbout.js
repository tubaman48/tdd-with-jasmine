DrinkAbout = function(age) {
    this.ageAdvice = "Sorry. I can’t tell what drink because that age is incorrect!";
    this.age = age;
}

DrinkAbout.prototype.ageCheck = function(age) {
    if(typeof(age) == "number") {
        switch (true) {
            case age < 0:
                // default ageAdvice
                break;
            case age < 14:
                this.ageAdvice = "Drink Toddy";
                break;
            case age < 18:
                this.ageAdvice = "Drink Coke";
                break;
            case age < 21:
                this.ageAdvice = "Drink Beer";
                break;
            case age < 130:
                this.ageAdvice = "Drink Whiskey";
                break;
            default:
                // default ageAdvice
        }
    } else {
        alert("Error!");
    };
    return this.ageAdvice;
}