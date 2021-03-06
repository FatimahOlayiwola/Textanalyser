Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a message has two words. -->
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("       ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe:  numberOfOccurencesInText()

Text: "It should return 0 occurences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurencesInText(word, text);
Expected Output: 0

Text: "It should return 1 occurences of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurencesInText(word, text);
Expected Output: 1

Text: "It should return 0 occurences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurencesInText(word, text);
Expected Output: 0

Text: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "blue";
numberOfOccurencesInText(word, text);
Expected Output: 4

Text: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurencesInText(word, text);
Expected Output: 3

Text: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow";
const word = "Red";
numberOfOccurencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

Describe: mostCommonWord()