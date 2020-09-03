// PROGRAM TO SERACH FOR PARTICULAR CHARACTER IN STRING
let a="Thunderstorm";
console.log(a[4]);

// PROGRAM TO CONVERT MINUTES INTO SECONDS
let minute=32;
let second=60*minute;
let time= `${minute} minutes has ${second} seconds` ;
console.log(time);

//PROGRAM TO SERACH FOR AN ELEMENT IN ARRAYS OR STRING
let places=["America","India","Europe","New Zeland","France"];
console.log(places[1]);

//PRINT AN ARRAY IN REVERSE ORDER
let data=["pencil","compasss","scale","eraser","geometry box"];
console.log(data.reverse(data));

// PROGARM TO DISPLAY ONLY ELEMENT CONTAINING 'a' IN THEM FROM AN ARRAY 
var out = []
var names = ["Meena", "Sam", "Bob", "Krishh"];
for(i in names)
{
  name_val = names[i]
  for(each_index in name_val)
  {
    each_char = names[i][each_index]
    if(each_char == "a")
    { 
      out.push(name_val)
    }
   
  }
 
}
 console.log("Output is " + out.join(", "));
