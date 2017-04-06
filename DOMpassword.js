function checkBoth() {
  if (checkUser(document.getElementById("userInput").value).valid && checkPassword(document.getElementById("passInput").value).valid){
    document.getElementById("userInput").value = ""
    document.getElementById("passInput").value = ""
    document.getElementById("messageUser").innerHTML = ""
    document.getElementById("messagePass").innerHTML = ""
    document.getElementById("butt").disabled = true
    document.getElementById("bottomMsg").innerHTML = "Credentials Accepted"
  }
  else if (checkUser(document.getElementById("userInput").value).valid){
    document.getElementById("userInput").value = ""
    document.getElementById("passInput").value = ""
    document.getElementById("messageUser").innerHTML = ""
    document.getElementById("bottomMsg").innerHTML = "Password Invalid"
    document.getElementById("messagePass").innerHTML = checkPassword(document.getElementById("passInput").value).reason
  }
  else if (checkPassword(document.getElementById("passInput").value).valid){
    document.getElementById("userInput").value = ""
    document.getElementById("passInput").value = ""
    document.getElementById("messagePass").innerHTML = ""
    document.getElementById("bottomMsg").innerHTML = "Username Invalid"
    document.getElementById("messageUser").innerHTML = checkUser(document.getElementById("userInput").value).reason
  }
  else {
    document.getElementById("userInput").value = ""
    document.getElementById("passInput").value = ""
    document.getElementById("bottomMsg").innerHTML = "Username and Password Invalid"
    document.getElementById("messagePass").innerHTML = checkPassword(document.getElementById("passInput").value).reason
    document.getElementById("messageUser").innerHTML = checkUser(document.getElementById("userInput").value).reason
  }

}
function checkPassword(pass){
  var errors = "";
  var valid = true;
  if (pass.length < 6){
    errors = errors + "Password must be at least 6 characters.\n"
    valid = false;
  }
  if (!(pass.includes("!") || pass.includes("#") || pass.includes("$"))){
    errors = errors + "Password must contain '!', '$', or '#'.\n";
    valid = false;
  }
  if (pass === "password"){
    errors = errors + "Password cannot be 'password'.\n";
    valid = false;
  }
  if (valid){
    return {
      valid: true
    };
  }
  else {
    return {
      valid: false,
      reason: errors
    }
  }
}


function checkUser(user){
  var errors =""
  var valid = true
  if (user.length <6){
    errors = errors + "Username must be at least 6 characters.\n"
    valid = false
  }
  if (user.includes("!")){
    errors = errors + "Username cannot include '!'.\n"
    valid = false
  }
  if (user.includes("#")){
    errors = errors + "Username cannot include '#'.\n"
    valid = false
  }
  if (user.includes("$")){
    errors = errors + "Username cannot include '$'.\n"
    valid = false
  }
  if (valid){
    return {
      valid: true
    }
  }
  else {
    return {
      valid: false,
      reason: errors
    }
  }
}
