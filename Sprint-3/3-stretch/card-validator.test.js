const cardValidator = require("./card-validator");
test (('valid 16digit card number passes validation'), () => {
    expect(cardValidator(2549876514523548)).toEqual("Valid card number")
});

test (('16 digit card number that has an odd last digit'), () => {
    expect(cardValidator(2547896254356557)).toEqual('Invalid card number')
});

test (('16 digit card number with all same digits'), () => {
    expect(cardValidator(1111111111111111)).toEqual('Invalid card number')
});

test (('16 digit card number with at least two different digits, last digit even,sum off digits < 16'), () => {
    expect(cardValidator(1010101010101012)).toEqual('Invalid card number')
});

test (('16 digit card number with not only numbers'), () => {
    expect(cardValidator('1df0877999954677')).toEqual('Input only numbers')
});