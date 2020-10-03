var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var count1=randomNumber1;
var randomDice="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice);



var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
var count2=randomNumber2;
randomDice="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice);

if(count1>count2)
{
 document.querySelector("h1").innerHTML="player 1 wins";

}
else if(count1==count2)
{
   document.querySelector("h1").innerHTML="Draw";
}
else{
   document.querySelector("h1").innerHTML="player 2 wins";
}
