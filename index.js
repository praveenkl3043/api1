let y=Math.floor(Math.random()* 50 + 1);
console.log(y);
var guess=1;
document.getElementById("submitguess").onclick = function() {
  let x=document.getElementById("guessfield").value;
  if(x == y) {
    alert("its right" )
  }else if(x >y){
    guess++;
    alert("Enter smaller number" );
  }else{
    guess++;
    alert("Enter larger number");
  }
}