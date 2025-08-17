 function scores(){
  
  document.querySelector('.js-score').innerHTML=`Win:${score.win}  Lose:${score.lose}`;
 }
     
  let score=JSON.parse(localStorage.getItem('score'))||{
        win:0,
        lose:0
      };
     
  scores();

  function playgame(guess){
      let ran=Math.random();

      let result=ran<0.5?'heads':'tails';

      if(guess===result){
        score.win+=1
      }
      else{
        score.lose+=1
      }

      localStorage.setItem('score',JSON.stringify(score));
      
      scores();

      document.querySelector('.js-display').innerHTML=`You chose:<img src="images/${guess}.jpeg" class="${guess}"> Coin toss:<img src="images/${result}.jpeg" class="${result}">`;

      
      }
      
   