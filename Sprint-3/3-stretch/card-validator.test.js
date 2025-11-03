const cardValidator = require("./card-validator");
test (('valid 16digit card number passes validation'), () => {
    expect(cardValidator(2549876514523548)).toEqual("Valid card number")
});
