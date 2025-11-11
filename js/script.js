//*sellect buttons//
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//* Save  in LocalStorage
let Score = JSON.parse(localStorage.getItem('Score'));

//* Sellect div element of html
const details = document.getElementById('showdetails');
const card = document.getElementById('score');
const reset = document.getElementById('resetScore') ;
const winOrlosse = document.getElementById('win-losse')
const choice = document.getElementById('choice')

//*Sellect MyMessage
const mymessage = document.querySelector('.myMessage') 
const commessage = document.querySelector('.comMessage') 

//*Sellect Mychoice img 
const myRock = document.getElementById("my-rock");
const myPaper = document.getElementById("my-paper");
const myScissors = document.getElementById("my-scissors");

//*Sellect COMchoice img 
const comRock = document.getElementById("com-rock");
const comPaper = document.getElementById("com-paper");
const comScissors = document.getElementById("com-scissors");




card.innerText= `wins: ${Score.MyScore}, Lossees: ${Score.ComScore},Round: ${Score.Round}`
reset.onclick = function reset() 
{   
    card.innerText= `wins: ${Score.MyScore=0} Lossees: ${Score.ComScore=0} Round: ${Score.Round=0} `
    localStorage.setItem('Score',JSON.stringify(Score));
    winOrlosse.innerText= ` `;
    choice.style.display='none';
}

function Random() 
{
   
  if (!Score) {
  Score = { MyScore: 0, ComScore: 0, Round: 0 };
}  
    const random2 =  Math.random();
    if (random2<= 1/3) {
        return  `Rock`; 
    }
    else if (random2> 1/3 && random2<= 2/3) {
         return  `Paper`;
    }
    else{
         return  `Scissors`;
    }
}

 function Play(mychoice)
{   
  
     let ran =Random();
     Score.Round++;

      if  (mychoice === ran )
        
         {  winOrlosse.style.color= 'yellow';
         
             if (mychoice === `Rock`) 
            {   
                choice.style.display='flex';
                myPaper.style.display = 'none';
                comPaper.style.display = 'none';
                myScissors.style.display = 'none';
                comScissors.style.display = 'none'; 
                mymessage.style.display= 'flex';
                myRock.style.display = 'flex';
                comRock.style.display = 'flex';
                commessage.style.display= 'flex';
                
            }
            else if (mychoice === `Paper`)

            {  
                choice.style.display='flex';
                myScissors.style.display = 'none';
                comScissors.style.display = 'none'; 
                mymessage.style.display= 'flex';
                myRock.style.display = 'none';
                comRock.style.display = 'none';
                myPaper.style.display = 'flex';
                 commessage.style.display= 'flex';
                comPaper.style.display = 'flex';
            }
            else
            {  
                choice.style.display='flex';
                myRock.style.display = 'none';
                comRock.style.display = 'none';
                mymessage.style.display= 'flex';
                myPaper.style.display = 'none';
                comPaper.style.display = 'none';
                myScissors.style.display = 'flex';
                 commessage.style.display= 'flex';
                comScissors.style.display = 'flex';            
            }

            localStorage.setItem('Score',JSON.stringify(Score));
            card.innerText= `wins: ${Score.MyScore} Lossees: ${Score.ComScore} Round: ${Score.Round} `
            winOrlosse.innerText= `DRAW`;
            
           
          
         }

        
    else if  (ran=== `Paper` && mychoice === `Scissors` || ran=== `Rock` && mychoice === `Paper` || ran=== `Scissors` && mychoice === `Rock`) 
    {   winOrlosse.style.color= 'rgb(17, 140, 99)';
        Score.MyScore++;
        localStorage.setItem('Score',JSON.stringify(Score));                        
        card.innerText= `wins: ${Score.MyScore} Lossees: ${Score.ComScore} Round: ${Score.Round} `
        winOrlosse.innerText= `You Win`;
        if (ran=== `Paper` && mychoice === `Scissors` )
             {
                choice.style.display='flex';
                myPaper.style.display = 'none';
                comRock.style.display= 'none';
                myRock.style.display='none';
                myPaper.style.display = 'none';
                comScissors.style.display = 'none'; 
                mymessage.style.display= 'flex';
                myScissors.style.display = 'flex';
                commessage.style.display= 'flex';
                comPaper.style.display = 'flex';
          }
          else if (ran=== `Rock` && mychoice === `Paper`) 
            {
                 choice.style.display='flex';
                myPaper.style.display = 'none';
                comPaper.style.display = 'none';
                myScissors.style.display = 'none';
                myRock.style.display='none';
                comScissors.style.display = 'none'; 
                mymessage.style.display= 'flex';
                myPaper.style.display = 'flex';
                commessage.style.display= 'flex';
                comRock.style.display = 'flex';
          }
           else if (ran=== `Scissors` && mychoice === `Rock`) 
            {
                choice.style.display='flex';
                comRock.style.display='none'
                myPaper.style.display = 'none';
                comPaper.style.display = 'none';
                myScissors.style.display = 'none';
                comScissors.style.display = 'none'; 
                mymessage.style.display= 'flex';
                myRock.style.display = 'flex';
                commessage.style.display= 'flex';
                comScissors.style.display = 'flex';
           }
        

    }
        else
        {   winOrlosse.style.color= 'red';
            Score.ComScore++;
            localStorage.setItem('Score',JSON.stringify(Score)); 
            card.innerText= `wins: ${Score.MyScore} Lossees: ${Score.ComScore} Round: ${Score.Round} `;
            winOrlosse.innerText= `You Losse`;

             if (ran=== `Rock` && mychoice === `Scissors` )
             {
                choice.style.display='flex';
                myPaper.style.display = 'none';
                comPaper.style.display = 'none';
                myRock.style.display = 'none';
                comScissors.style.display = 'none'; 
                mymessage.style.display= 'flex';
                myScissors.style.display = 'flex';
                commessage.style.display= 'flex';
                comRock.style.display = 'flex';
          }
          else if (ran=== `Scissors` && mychoice === `Paper`) 
            {
                 choice.style.display='flex';
                myRock.style.display = 'none';
                comPaper.style.display = 'none';
                comRock.style.display='none'
                myScissors.style.display = 'none';
                mymessage.style.display= 'flex';
                myPaper.style.display = 'flex';
                commessage.style.display= 'flex';
                comScissors.style.display = 'flex';
          }
           else if (ran=== `Paper` && mychoice === `Rock`) 
            {
                choice.style.display='flex';
                comRock.style.display='none'
                myPaper.style.display = 'none';
                myScissors.style.display = 'none';
                comScissors.style.display = 'none'; 
                mymessage.style.display= 'flex';
                myRock.style.display = 'flex';
                commessage.style.display= 'flex';
                comPaper.style.display = 'flex';
           }
        

        }
    
}

rock.onclick = () => Play("Rock");
paper.onclick = () => Play("Paper");
scissors.onclick = () => Play("Scissors");




