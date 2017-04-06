
var randomNum = Math.floor(Math.random()*100 + 1)
var count = 7


console.log(randomNum)
function checkGuess(){
  if (isNaN(parseInt(document.getElementById("userInput").value))){
    document.getElementById("message").innerHTML = "please enter a number"
  }
  else if (document.getElementById("userInput").value < randomNum){
    document.getElementById("message").innerHTML = "too low!, guess again"
    count -= 1
  }else if (document.getElementById("userInput").value > randomNum){
    document.getElementById("message").innerHTML = "too high!, guess again"
    count -= 1
  }else {
    document.getElementById("message").innerHTML = "You Win!!"
    document.getElementById("butt").disabled = true
    document.getElementById("playAgain").disabled = false
    document.getElementById("playAgain").style="visibility:visible"
  }

  document.getElementById("counter").innerHTML = "Tries Left: " + count
  if (count === 0 ){
    document.getElementById("message").innerHTML = "You Lose"
    document.getElementById("butt").disabled = true
    document.getElementById("playAgain").disabled = false
    document.getElementById("playAgain").style="visibility:visible"
  }
}
