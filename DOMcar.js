

var mustang = createCar("Mustang", 1969, "Red", "mustang.png", 8);
var prius = createCar("Prius", 2017, "blue", "prius.png", 0);
var lambo = createCar("Lambo", 2017, "silver", "lambo.png", 20);
var bus = createCar("VW Bus", 1960, "blue", "VW.jpg", -5 );

var cars = [mustang, prius, lambo, bus]
var index = 0
var newCar = cars[0];

function createCar(newMake, newModel, newColor, img, boostVal) {
  return {
    make: newMake,
    modelYear: newModel,
    color: newColor,
    speed: 0,
    image: img,
    boost: boostVal,
    getData: function(){ return this.color + ", " + this.modelYear + ", " + this.make},
    getSpeed: function(){ return this.speed},
    accelerate: function(){
      this.speed += (10 + this.boost)
      if (this.speed >= 85){
        this.speed = 85
      }
      console.log(this.speed)
      },
      slipBrake: function(){
          this.speed -= Math.floor(Math.random()* (this.speed/2))
          if(this.speed <= 2){
            this.speed = 0
          }
          console.log(this.speed)
        },
    brake: function(){
        this.speed -= 7
        if(this.speed < 0){
          this.speed = 0
        }
        console.log(this.speed)
      }


  //   speedUpSlowDown: function() {
  //     while (this.speed < 70) {
  //       setInterval(function(){
  //         this.accelerate();
  //         document.getElementById("speedometer").innerHTML = newCar.speed
  //       }, 1000);
  //     }
  //     while (this.speed > 0 ) {
  //       setInterval(function(){
  //         this.brake();
  //         document.getElementById("speedometer").innerHTML = newCar.speed
  //       }, 1000);
  //   }
  // }
}
}


function gas(){
  newCar.accelerate()
  document.getElementById("speedometer").innerHTML = newCar.speed
}

function btnBrake(){
  newCar.brake()
  document.getElementById("speedometer").innerHTML = newCar.speed
}

// function testDrive() {
//     myTimer = setInterval(function(){
//       newCar.accelerate();
//       document.getElementById("speedometer").innerHTML = newCar.speed;
//     }, 1000);
//   }
//   while (newCar.speed > 0 ){
//     setInterval(function(){
//       newCar.brake();
//       document.getElementById("speedometer").innerHTML = newCar.speed;
//     }, 1000);
//   }
// }

function nextCar(){
  newCar.speed = 0;
  document.getElementById("speedometer").innerHTML = newCar.speed
  if (index === 3){
    index = 0;
  }
  else {
    index += 1;
  }
  newCar = cars[index];
  document.getElementById("mainImg").src = newCar.image;
}








//
