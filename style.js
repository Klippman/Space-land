//BOXES
//Made an array variable that starts at the last number of boxes desired
//Reversed it because this generates dom elements top down, so it goes
//From 80 to 1 rather than 1 to 80.
var boxNums = Array.from({length: 81}, (x,i) => i).reverse();
//Added an extra 'Start' index at the end of the array
boxNums.splice(boxNums.length - 1, 1, 'Start');
//This variable acts as a counter which I used for the inputHTMLs
var placeNum = 0;

//reverse elements function
//I use this on alternating rows so it flips the order of the children divs
function reverseEls(elem){
  for (var i=0;i<elem.childNodes.length;i++){
    elem.insertBefore(elem.childNodes[i], elem.firstChild);
  }
}

//ROWS
//I'm doing 8 rows of 10 boxes just because it would fit on a screen better
for(let i=0; i<8; i++){
  var row = document.createElement("div");
  //checks to see if it's the last row
  if(i==7){
    //class to determing styling of rows that you want to go left
    row.className = "rowLeft";
    //this loop is one spot longer to include the 'start' box
    for(let j=0; j<11; j++){
      var box = document.createElement("div");
      //creates boxs with the innerHTML using the counter that increments
      box.className = "box";
      box.innerHTML = boxNums[placeNum];
      placeNum++;
      //appends them to the parent row
      row.appendChild(box);
    }
    //reverses function that flips the div order
    reverseEls(row);
    document.body.appendChild(row);

    //even rows
  } else if(i<7 && i%2==0) {
    //styling for rows that float to the right
    row.className = "rowRight";
    for(let j=0; j<10; j++){
      var box = document.createElement("div");
      box.className = "box";
      box.innerHTML = boxNums[placeNum];
      placeNum++;
      row.appendChild(box);
    }
    document.body.appendChild(row);

    //odd rows
  } else {
    row.className = "rowLeft";
    for(let j=0; j<10; j++){
      var box = document.createElement("div");
      box.className = "box";
      box.innerHTML = boxNums[placeNum];
      placeNum++;
      row.appendChild(box);
    }
    reverseEls(row);
    document.body.appendChild(row);
  }
}