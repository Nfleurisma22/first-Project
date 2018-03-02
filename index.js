var nine= document.getElementById("nine")
var output = document.getElementById("screen")
nine.addEventListener("click", function(){
     output.innerHTML += nine.textContent ;
})

var eight= document.getElementById("eight")
eight.addEventListener("click", function(){
     output.innerHTML += eight.textContent ;
})


var seven = document.getElementById("seven")
seven.addEventListener("click", function(){
   output.innerHTML += seven.textContent;
 })

var six= document.getElementById("six")
 six.addEventListener("click", function(){
   output.innerHTML += six.textContent;
  })

var five= document.getElementById("five")
five.addEventListener("click", function(){
   output.innerHTML += five.textContent;
})

var four= document.getElementById("four")
four.addEventListener("click", function(){
  output.innerHTML += four.textContent;
 })

var three= document.getElementById("three")
three.addEventListener("click", function(){
  output.innerHTML += three.textContent;
   })

var two= document.getElementById("two")
two.addEventListener("click", function(){
  output.innerHTML += two.textContent;
 })

var one= document.getElementById("one")
 one.addEventListener("click", function(){
   output.innerHTML += one.textContent;
 })

var zero= document.getElementById("zero")
 zero.addEventListener("click", function(){
    output.innerHTML += zero.textContent;
})

var addition= document.getElementById('add');
addition.addEventListener("click", function() {
  output.innerHTML += addition.innerHTML;
})

var subtraction= document.getElementById('subtract');
subtraction.addEventListener("click", function() {
  output.innerHTML += subtraction.innerHTML;
})

var divi= document.getElementById('divide');
divi.addEventListener("click", function() {
  output.innerHTML += divi.innerHTML;
})

var multi= document.getElementById('multiply');
multi.addEventListener("click", function() {
  output.innerHTML += multi.innerHTML;
})

var isEqual = document.getElementById('equals');
isEqual.addEventListener("click", function() {
  if(output.innerHTML.indexOf("÷") !== -1)
  {
        output.innerHTML = output.innerHTML.replace('÷', '/') ; output.innerHTML = eval(output.innerHTML);

  }else if(output.innerHTML.indexOf("*") !== -1) {
    output.innerHTML = output.innerHTML.replace('*','*');
    output.innerHTML = eval(output.innerHTML);
  }
  else {
    output.innerHTML = eval(output.innerHTML);
}
})

var clear= document.getElementById("clear")
clear.addEventListener("click", function(){
  output.innerHTML = " ";
 })
