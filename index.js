let guess=(Math.floor(Math.random()*100)+1)
console.log(guess)
let attempt=0;
let reset=1;

function check(){
    let comment=document.getElementById('comments')
    let attmp=document.getElementById('attempts')
    attempt++;
    let obj1=document.forms[0]['val'].value    

if(reset==1){
  if(obj1==guess){
    comment.innerHTML="yeah,guess is correct!!"
    attmp.innerHTML="No.of guesses: "+attempt;
    document.getElementById('check_btn').innerHTML="reset"
    reset=0
}
  else if(obj1<guess){
    comment.innerHTML="try again, guess is lesser"
    attmp.innerHTML="No.of guesses: "+attempt;
}
  else{
    comment.innerHTML="try again, guess is greater"
    attmp.innerHTML="No.of guesses: "+attempt;
   }
}
else{
    reset=1;
    resett()

}
}
function resett(){
  let obj1=document.forms[0]['val'].value =null
guess=(Math.floor(Math.random()*100)+1)
console.log(guess)
document.getElementById('check_btn').innerHTML="check"
attempt=0;
let chance=document.getElementById('attempts')
chance.innerHTML='no.of attempts: '+attempt
}
