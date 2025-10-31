// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 5 for 5 of Hearts", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for King of Diamonds", () => {
  const faceCard = getCardValue("K♦");
  expect(faceCard).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Clubs", () => {
  const ace = getCardValue("A♣");
  expect(ace).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank.' for invalid card '13♠'", () => {
  const invalidCard = getCardValue("13♠");
  expect(invalidCard).toEqual("Invalid card rank.");
});
