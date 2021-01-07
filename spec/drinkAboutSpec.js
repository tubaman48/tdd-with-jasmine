describe("DrinkAbout", function() {

    beforeEach(function() {
        drinkAdvice = new DrinkAbout;
    });

    describe("Age tests", function() {
        it("should return `Sorry. I can’t tell what drink because that age is incorrect!`", function() {
            drinkAdvice.ageCheck(-5);
            expect(drinkAdvice.ageAdvice).toBe(`Sorry. I can’t tell what drink because that age is incorrect!`);
        });
        it("should return 'Drink Toddy'", function() {
            drinkAdvice.ageCheck(12);
            expect(drinkAdvice.ageAdvice).toBe('Drink Toddy');
        });
        it("should return 'Drink Coke'", function() {
            drinkAdvice.ageCheck(16);
            expect(drinkAdvice.ageAdvice).toBe('Drink Coke');
        });
        it("should return 'Drink Beer'", function() {
            drinkAdvice.ageCheck(18);
            expect(drinkAdvice.ageAdvice).toBe('Drink Beer');
        });
        it("should return 'Drink Whiskey'", function() {
            drinkAdvice.ageCheck(31);
            expect(drinkAdvice.ageAdvice).toBe('Drink Whiskey');
        });
        it("should return `Sorry. I can’t tell what drink because that age is incorrect!`", function() {
            drinkAdvice.ageCheck(150);
            expect(drinkAdvice.ageAdvice).toBe(`Sorry. I can’t tell what drink because that age is incorrect!`);
        }); 
        it("should return an error if we don't supply valid number", function() {
            spyOn(window, "alert");
            drinkAdvice.ageCheck("Three");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});