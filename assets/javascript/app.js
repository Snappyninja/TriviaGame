var ques = "";
var ans = [];
var ii = 0;
var wrong = 0;
var right = 0;
var qa =[{
		ques: "In 'A Glitch is a Glitch', who releases the computer virus, even though they didn't create it?",
		ans: ["Beemo","Finn and Jake","Ice King","Marceline"],
		correctanswer: 1,
	},{
		ques: "How did Jake obtain his powers?",
		ans: ["Mud Puddle","Sandwiches","A Wizzard","Inherited By His Parents"],
		correctanswer: 0,
	},{
		ques: "Who was the original Goblin King?",
		ans: ["Ice King","Xergiok","Marceline's Dad","Lemongrab"],
		correctanswer: 1,
	},{
		ques: "What was Finn's original name?",
		ans: ["Earl","Buddy","Pen","Bob"],
		correctanswer: 2,
	},{
		ques: "What is the animal that can be seen somewhere in every episode?",
		ans: ["Lion","Pig","Bat","Snail"],
		correctanswer: 3,
	},{
		ques: "Marceline is not a traditional vampire. What does she primarily eat?",
		ans: ["Fruit, like a fruit bat","Pizza, with extra red sauce","Books about violence","The color shade red"],
		correctanswer: 3,
	},{
		ques: "Which of the following is NOT a princess?",
		ans: ["Princess Bubblegum", "Flame Princess", "Ice Princess", "Marceline Abadeer"],
		correctanswer: 2,
    },
    {
        ques: "what is the name of Marceline's zombie poodle?",
        ans: ["Schwabi", "Peanut", "lemon drop", "basher"],
        correctanswer: 0,
    }
	];
    
$(document).ready(function(){

    function answerChoices(){
        $('#possAnswers').empty();
        for (var i = 0; i < qa[ii].ans.length; i++){
                $('#possAnswers').append("<button class='answer' value='"+[i]+"'>" + qa[ii].ans[i] + "</button><br>");
                
        }
    }

    var timez = {
    time: 31,
    
    start: function(){
        timez.time = 31;
        $('#startGame').empty();

        counter = setInterval(timez.count, 1000);
        if (qa[ii] === qa[8]) {
  				timez.reset();
  			}else{
        $('#question').html("<h3>" + qa[ii].ques + "</h3>");
        answerChoices();
        attachEvents();}
	
    },
    stop: function(){
        	clearInterval(counter);

    	},
    
    count: function(){
    
      timez.time--;
        var timeCD = timez.time;
        $("#displayCD").html(timeCD);
        if (timez.time === 0){
        	ii++
        	timez.stop(); 
        	timez.start();
        	alert("Times up!");
        }


    },
    
    reset: function(){
		timez.stop();
        ii = 0;
        $("#displayCD").html("");
        $('#startGame').html("<button class='center-block'>Press to start the game</button>");
		$('#question').empty();
        $('#possAnswers').empty();
        alert("Game Over!");
        alert("you got" +  right  + "right and" +  wrong + "wrong!!")
            if(right>= wrong){
                alert("good job!!!")
            }else{
                alert("Better luck next time!!")
            }
            right=0;
            wrong=0;
  		
	},
	
};
   
	function eX(){
		$('#photo').html("");

	}
	
$('#startGame').click(timez.start);


function attachEvents(){
$('.answer').on("click", function answerClick(){
    var el = $(this);
    var yy = el.text();
    var buttonClick = parseInt(el.attr('value'));
		if (buttonClick === qa[ii].correctanswer){
			right++;
			$("#displayCD").html("Good Job! Next Question!");
			$("#photo").html("<img src='http://media2.giphy.com/media/c5PHIq9sXsV6o/giphy.gif' />");
			setTimeout(eX, 2000);
			ii++;
        	timez.stop();
	        timez.start();
  			if (qa[ii] === qa[8]) {
  				timez.reset();
  			}
  		}else{
  			wrong++;
  			ii++;
  			$("#displayCD").html("Wrong! Next Question!");
  			$("#photo").html("<img src='http://25.media.tumblr.com/29bfc79b2e4a501a2f7ee3bfbd1dcf0e/tumblr_mf4y1jGtCd1rkiy6bo1_500.gif' />");
  			setTimeout(eX, 2000)
        	timez.stop();
	        timez.start();
  			if (qa[ii] === qa[8]) {
  				timez.reset();
  			}
  		 }
	})};




});
