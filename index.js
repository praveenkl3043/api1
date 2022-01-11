function add () {
  var num1=document.getElementById("first").value;
  var num2=document.getElementById("second").value;
  result=(parseInt(num1) + parseInt(num2))
  console.log(result);

  document.getElementsByClassName("output")[0].innerHTML=
  "Ansewr  is"+" "+ result;
}

function sub () {
  var num1=document.getElementById("first").value;
  var num2=document.getElementById("second").value;
  result=(parseInt(num1) - parseInt(num2))
  console.log(result);

  document.getElementsByClassName("output")[0].innerHTML=
  "Ansewr  is"+" "+ result;
}

function mul () {
  var num1=document.getElementById("first").value;
  var num2=document.getElementById("second").value;
  result=(parseInt(num1) * parseInt(num2))
  console.log(result);

  document.getElementsByClassName("output")[0].innerHTML=
  "Ansewr  is"+" " +result;
}

function div () {
  var num1=document.getElementById("first").value;
  var num2=document.getElementById("second").value;
  result=(parseInt(num1) / parseInt(num2))
  console.log(result);

  document.getElementsByClassName("output")[0].innerHTML=
  "Ansewr  is"+" "+ result;
}