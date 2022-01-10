//Utility Logic

function noInputtedWord(word, text) {
  return ((word.trim().length === 0) || (text.trim().length === 0));
}

//Business Logic
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element){
    if (!Number(element)) {
      wordCount++;
    };
  });
  return wordCount;
}

// function numberOfOccurencesInText(word, text) {
//   if (noInputtedWord(word, text)) {
//     return 0;
//   }
//   const regex = new RegExp(word, "gi");
//   return text.match(regex).length;
// }


// function boldPassage(word, text) {
//   if (noInputtedWord(word, text)) {
//     return "";
//   }
//   const regexWord = new RegExp(word, "gi");
//   const boldedWord = "<b>" + word + "</b>";
//   const htmlString = text.replace(regexWord, boldedWord);
//   return "<p>" + htmlString + "</p>";
// }


// //User Interface
//     $(document).ready(function() {
//       $("#word-counter").submit(function(event) {
//         event.preventDefault();

//       const passage = $("#text-passage").val();
//       const word = $("#word").val();

//       const wordCount = wordCounter(passage);
//       const occuredNumber = numberOfOccurencesInText(word, passage);
//       $("#total-count").text(wordCount);
//       $("#selected-count").text(occuredNumber);
//       $("#bolded-passage").html(boldPassage(word, passage));


//   })
// })