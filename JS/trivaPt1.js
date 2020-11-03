function randomList(length) { //function name with designated perameter
  var itter = length;
  var list = [];
  for (var j = 0; j < itter; j ++ ) {
           list.push(j);
  }
  console.log(list)
  var splicedstuff = [];
  var index = list.length;
  for (var i = 0; i < index; i++) {
    var randmtah = Math.floor(Math.random() * (list.length-1));
    var newList = list.splice(randmtah,1);
    splicedstuff.push(newList[0]);
  }
return splicedstuff;
}
