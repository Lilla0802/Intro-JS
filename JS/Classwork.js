/*If we had 2 prototype objects:

startCords = {x:5, y:5};
endCords = {x: 0, y:7};

How would we get the change in x? The change in y?

If I had the array [1,2,3,4]
How would I reverse it and store it in output?
How would you make a class Student who is constructed with name, age, year, and major?


If you had the array studentInfo = [“J.R. Bob Dobbs”, 17, 2021, “Computer Science”]
And you were making a new object of the student class above, named student how would you use array in making that object?


Put your solutions in a word or google doc and share with me
*/

var startCords = {x:5, y:5};
var endCords = {x: 0, y:7};
var xchng = Math.abs(startCords.x - endCords.x);
var ychng = Math.abs(startCords.y - endCords.y);

myArr = [1,2,3,4];
output myArr.reverse();

class student {
  constructor(name, age, year, major){
    this.name = name;
    this.age = age;
    this.year = year;
    this.major = major;
  }
}


studentInfo = ["J.R. Bob Dobbs", 17, 2021,"Computer Science"]
var kid = new Student(studentInfo[0], studentInfo[1], studentInfo[2], studentInfo[3])
