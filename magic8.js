var answers = ["Yup!", "Fuhgeddaboudit", "Maybe"]
var response

function ball(){
  response = answers[Math.floor(Math.random()*3)]
  document.getElementById("reply").innerHTML = response
}
