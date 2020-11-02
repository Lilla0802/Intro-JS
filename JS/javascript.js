/*--------------- Preset output before we edit anything start ----------------*/

var output = "JavaScript Loading";
document.getElementById("output").innerHTML = output;

/*------------ preset output before we edit end should read "JavaScript Loading"
if this does not show up, and your expected result does not happen, then you
have an issue bellow. --------------------------------------------------------*/
/* [“I”, “desire”, “to”, “be”, “a”, “sentence”] */
/*var arrTwo = ["I", "desire", "to", "be", "a", "sentence."]
output = arrTwo.join(' ');*/
/*var strOne = "I really wish to be a array";
output = strOne.split(" ");*/
/*
class Car{
  constructor(type, color, year, milage){
    this.type= type;
    this.color = color;
    this.year = year;
    this.milage = milage;
    this.on = false;
  }
  ignition(){
    if(this.on == false)  {this.on = true}
    else {this.on = false;}
  }
}
class Truck extends Car{
  constructor(type, color, year, milage){
    super(type, color, year, milage, on);
    this.bed = bed;
  }
}
var iWantToEqualSeven = 7
function soNotSeven() {
  var iWantToEqualSeven = 12;
  return iWantToEqualSeven;
}
var health = 100;
function heal(health) {
  if (health < 100) {health = 100;}
  return health
  }
*/
  var dilillaTriva = [
   {statement: "Andy's mask is upside down.", value: true},
   {statement:"Andy has blue hair ", value: false},
   {statement: "These class is three periods", value:false},
   {statement: "Aidan is tall", value: true},
   {statement: "There's only one Aidan in class.", value: false},
   {statement: "Jeter wears a Trump mask.", value:true },
   {statement: "Andy doesn’t wear glasses", value:false},
   {statement: "Andy wears a button up almost everyday.", value:true},
   {statement: "Aidan is short.", value:false},
   {statement: "Mr.LaMorie is short.", value:true},
]
/*----------------------------------------- Do not make changes below this line
Output command for any changes above. If there are no changes above then it
will read "JavaScript Loading". If there is a change above, then it will output
that change, if there is an error it will output "JavaScript file not loading".
------------------------------------------------------------------------------*/

var styledOutput = "";

if (Array.isArray(output)) {
  for (var i = 0; i < output.length; i++) { styledOutput += output[i] + "<BR>";}
}

if (styledOutput.length != 0) { output = styledOutput; }

document.getElementById("output").innerHTML = output;

/* ------------------------------- End of File -------------------------------*/
