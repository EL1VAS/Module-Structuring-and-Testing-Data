//Has at least 5 digits
function isAtLeastFive(password) {
    if (password.length >= 5) {
        return true;
    }
        return false;  
}

//Has at least one upper case English letter
function hasAtLeastOneUpperCase(password) {
    let index = 0; //starts from first index location to check
    while (index < password.length) { //When our location is smaller than the total str length
        const char = password.charAt(index); //This is the location of each digit at the moment of the loop
        if (char >= "A" && char <= "Z"); //To include all alphabet in capital letters in at least one location
        return true;
        index++ //Moves loop to next digit for checking
    }
    return false; //If loop is finished and there were no capitals found
}

//Has at least one lower letter in English
function hasAtLeastOneLowerCase(password) {
    let index = 0; //starts from first index location to check
    while (index < password.length) { //When our location is smaller than the total str length
        const char = password.charAt(index); //This is the location of each digit at the moment of the loop
        if (char >= "a" && char <= "z"); //To include all alphabet in lower letters in at least one location
        return true;
        index++ //Moves loop to next digit for checking
    }
    return false; //If loop is finished and there were no lower letters found
}

//Has at least one number from 0 to 9
function hasAtLeastOneNumber(password) {
    let index = 0; //starts from first index location to check
    while (index < password.length) { //When our location is smaller than the total str length
        const char = password.charAt(index); //This is the location of each digit at the moment of the loop
        if (char >= "0" && char <= "9"); //To include all numbers in at least one location
        return true;
        index++ //Moves loop to next digit for checking
    }
    return false; //If loop is finished and there were no numbers found
}

//Has at least one special character "!", "#", "$", "%", ".", "*", "&"
function hasAtLeastOneSpecialCharacter(password) {
    const specialCharacter = ["!", "#", "$", "%", "*", "&"]
    let index = 0;
    while (index < password.length) {
        const char = password.charAt(index); //This is the location of each digit at the moment of the loop
        if (specialCharacter.includes(char)); //To include a symbol in at least one location
        return true;
        index++ //Moves loop to next digit for checking
    }
    return false; //If loop is finished and there were no symbols found
}

//Must not be a previous password in passwords array
function isNewPassword(password, passwords) { //Password is the new input, passwords are the previous array
    return !passwords.includes(password); //!is a negative statement so it will return false if new password was used before
}


//Has at least 5 digits & all above conditions are met
function passwordValidator(password, passwords) {
    return (isAtLeastFive &&
        hasAtLeastOneUpperCase(password) &&
        hasAtLeastOneLowerCase(password) &&
        hasAtLeastOneNumber(password) &&
        hasAtLeastOneSpecialCharacter(password) &&
        isNewPassword(password, passwords));
}

module.exports = {isAtLeastFive,
    hasAtLeastOneUpperCase, 
    hasAtLeastOneLowerCase, 
    hasAtLeastOneNumber,
    hasAtLeastOneSpecialCharacter,
    isNewPassword,
    passwordValidator}