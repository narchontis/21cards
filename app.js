let nums = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21);
let guess = 1;

function split() {
    let col1 = Array();
    let col2 = Array();
    let col3 = Array();
    let res = Array();
    nums.forEach(function (element, i) {
        switch (i % 3) {
          case 0:
            col1.push(element);
            break;
          case 1: 
            col2.push(element);
            break;
          case 2:
            col3.push(element);
            break;
        }
    });

    nums = [];
    col1.forEach(function (element, i){
      nums.push(element);
    });

    col2.forEach(function (element, i){
      nums.push(element);
    });

    col3.forEach(function (element, i){
      nums.push(element);
    });
  }
function myFunction() {
    var x = document.getElementById("form");
    
    var text = "";
    var i;
    for (i = 0; i < nums.length ; i++) {
      if ( i % 7 === 0 && i !== 0 )
        text += "<br>"
      text += nums[i] + " ";
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("guess").innerHTML = guess;
    if (guess === 3){
      document.getElementById("number").innerHTML = "Your number is: " + nums[10] + ". It's magic !!!";
    }
}

function myColumn(icol){
    let result = nums;
    idx = icol * 7;
    middle = result.splice(idx, 7);
    beg = result.splice(0, 7);
    final = result.concat(middle, beg);
    nums = final;
    split()
    myFunction();
    guess++;
}