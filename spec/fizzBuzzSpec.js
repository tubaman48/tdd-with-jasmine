describe("My fizzBuzz function", function() {

    beforeEach(function() {
        fBRound = new FizzBuzz();
    });

    describe("fBCheck tests", function() {
        it("should return 'Zero invalid for FizzBuzz'", function() {
            fBRound.fizzBuzzCheck(0);
            expect(fBRound.fBOutput).toBe('Zero invalid for FizzBuzz');
        }); 
        it("should return 'Buzz for -5'", function() {
            fBRound.fizzBuzzCheck(-5);
            expect(fBRound.fBOutput).toBe('Buzz');
        }); 
        it("should return '1 for 1'", function() {
            fBRound.fizzBuzzCheck(1);
            expect(fBRound.fBOutput).toBe('1');
        });
        it("should return '2 for 2'", function() {
            fBRound.fizzBuzzCheck(2);
            expect(fBRound.fBOutput).toBe('2');
        }); 
        it("should return 'Fizz for 3'", function() {
            fBRound.fizzBuzzCheck(3);
            expect(fBRound.fBOutput).toBe('Fizz');
        });
        it("should return '4 for 4'", function() {
            fBRound.fizzBuzzCheck(4);
            expect(fBRound.fBOutput).toBe('4');
        });
        it("should return 'Buzz for 5'", function() {
            fBRound.fizzBuzzCheck(5);
            expect(fBRound.fBOutput).toBe('Buzz');
        });
        it("should return 'Fizz for 6'", function() {
            fBRound.fizzBuzzCheck(6);
            expect(fBRound.fBOutput).toBe('Fizz');
        });
        it("should return '7 for 7'", function() {
            fBRound.fizzBuzzCheck(7);
            expect(fBRound.fBOutput).toBe('7');
        });
        it("should return '8 for 8'", function() {
            fBRound.fizzBuzzCheck(8);
            expect(fBRound.fBOutput).toBe('8');
        }); 
        it("should return 'Fizz for 9'", function() {
            fBRound.fizzBuzzCheck(9);
            expect(fBRound.fBOutput).toBe('Fizz');
        });
        it("should return 'Buzz for 10'", function() {
            fBRound.fizzBuzzCheck(10);
            expect(fBRound.fBOutput).toBe('Buzz');
        });
        it("should return 'FizzBuzz for 15'", function() {
            fBRound.fizzBuzzCheck(15);
            expect(fBRound.fBOutput).toBe('FizzBuzz');
        });
        it("should return an error if we don't supply valid number", function() {
            spyOn(window, "alert");
            fBRound.fizzBuzzCheck("Three");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        }); 
    });
});