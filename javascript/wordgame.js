var songStorage = ["chopper", "mural", "stronger", "deliver", "fighters", "real", "manilla"];
var currentWord
var wins = 0
var guessCounter = 0
var rightLetters = [];
var wrongLetters = [];

 function reset() {
        
 }
 

document.onkeyup = function (event) {

       if (guessCounter == 0) {
              guessCounter = 12;
              rightLetters = []
              wrongLetters = []
   
              // Select Array from WordBank
              //Math.floor(Math.floor() * songStorage.length);
              currentWord = songStorage[Math.floor(Math.random() * songStorage.length)];
        }
              //creates Word order for current
             var currentWordArray = currentWord.split("")
             var underscoreArr = [];
   
             for (i = 0; i < currentWordArray.length; i++) {
                 underscoreArr.push("_")
             }

       console.log(currentWord)
       //var currentWord = "";
       var index = currentWord.indexOf(event.key.toLowerCase())


       // Check if index is -1,  add wrongLetters array,
       if (index === -1) {
              wrongLetters.push(event.key);
              alert("Wrong Word");
       }
       // Pushes correct Letters to rightLetters Array
       if (index > -1) {
              rightLetters.push(event.key);
              alert("Correct Word")
       }
       console.log(index);
       guessCounter = guessCounter - 1
       // correct letters = correct word add 1 point to wins

       console.log(rightLetters)
       console.log(currentWord)

       if (rightLetters.length > 0) {
              if (rightLetters.join("") === currentWord) {
                     wins = wins + 1
                     $("currentword").html(currentWord);
                     
              }
       }









       $("#rightletters").html(rightLetters);
       $("#wrongletters").html(wrongLetters);
       $("#guesscounter").html(guessCounter);
       $("#wins").html(wins);
       $("#currentword").html(underscoreArr);

       // if wrong letter, display wrong letter, *
       //everytime user presses letter -1 (guess),*
       // if the key id correct display in right word array,*
       // game is over when guess Counter = 0 
       // alert right or wrong letter.
       //How to get random number from items in array.

}



