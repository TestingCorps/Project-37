class Quiz {
    constructor(){
      this.image=loadImage("bgr.jpg");
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      //write code here to hide question elements
  question.hide();
      //write code to change the background color here
  background(this.image);
      //write code to show a heading for showing the result of Quiz
      textSize(30);
  fill("blue");
  textFont("algerian");
      text("RESULT OF THE QUIZ",330,50);
      Contestant.getPlayerInfo()
  if(allContestants!==undefined){
   
   var displayPosition=250; 
    fill("yellow");
   textSize(20);
   text("NOTE: contestant who answered correct are highlighted in green colour",130,230);
  
    for(var plr in allContestants){
      
      var correctAns="3";
      if(correctAns===allContestants[plr].answer)
      fill("green");
      else
      fill("red");
    
    
      displayPosition+=20;
      textSize(27);
      
      text(allContestants[plr].name+":"+allContestants[plr].answer,400,displayPosition)
    }
  
  }
      
    }
  
  }
  