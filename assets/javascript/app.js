// Things to do
//      Add javascript that tracks whether you get a question right or wrong
//      Add a reset button
//      Finish styling the page with images and css
//      Clean up code
//          maybe write a function that is used if time = 0 or if the user clicks submit
//          Is there a way to write out all of the quiz questions and radio button answers through a for loop or for each loop?

$(document).ready(function () {

    var intervalId;
    var time = 181;
    var right = 0;
    var wrong = 0;


    // Array of quiz questions and answers
    var quiz = [
        question1 = {
            q: "1. What is the most visited national park in the United States? ",
            a: ["Yosemite National Park", "Great Smoky Mountains National Park", "Joshua Tree National Park"],
            correct: "Great Smoky Mountains National Park"
        },

        question2 = {
            q: "2. Which park was most recently designated a national park? ",
            a: ["Pinnacles National Park", "Hot Springs National Park", "American Samoa National Park"],
            correct: "Pinnacles National Park"
        },

        question3 = {
            q: "3. Which president was responsible for more than doubling the acreage of the national park system? ",
            a: ["George H.W Bush", "Calvin Coolidge", "Jimmy Carter"],
            correct: "Jimmy Carter"
        },

        question4 = {
            q: "4. Which state has the most national parks? ",
            a: ["Utah", "Alaska", "California"],
            correct: "California"
        },

        question5 = {
            q: "5. What is the closest national park to Austin, Texas? ",
            a: ["Big Bend National Park", "Guadalupe Mountains National Park", "Great Sand Dunes National Park"],
            correct: "Big Bend National Park"
        },

        question6 = {
            q: "6. What is the largest national park by land area? ",
            a: ["Glacier National Park", "Wrangell-St. Elias National Park", "Zion National Park"],
            correct: "Wrangell-St. Elias National Park"
        },

        question7 = {
            q: "7. What is the least visited national park? ",
            a: ["Gates of the Arctic National Park", "Dry Tortugas National Park", "Isle Royale National Park"],
            correct: "Gates of the Arctic National Park"
        },

        question8 = {
            q: "8. What is the oldest national park in the United States? ",
            a: ["Acadia National Park", "Rocky Mountain National Park", "Yellowstone National Park"],
            correct: "Yellowstone National Park"
        },

        question9 = {
            q: "9. Which national park contains one of the worlds largest stands of temperate rainforest? ",
            a: ["Everglades National Park", "Olympic National Park", "Redwood National Park"],
            correct: "Olympic National Park"
        },

        question10 = {
            q: "10. Which national park served as a hideout for famed outlaw Butch Cassidy? ",
            a: ["Arches National Park", "Petrified Forest National Park", "Capitol Reef National Park"],
            correct: "Capitol Reef National Park"
        },
    ];

    // Start Button appears and instructions for when it's clicked
    $("#start").append("<button>Start</button>");

    $("#instructions").text("Click 'Start' to test your knowledge of the US National Park System! You'll only have three minutes to complete the quiz, so don't waste time!");

    $("#start").on("click", startQuiz);

    //                              Click the start button to start the timer and populate the quiz
    function startQuiz(){
        $("#start").empty();
        $("#instructions").empty();
        beginQuestions();
        startTimer();
    };

    //                              Functions for starting the timer, stopping the timer, and formatting the time
    function count(){
        time--;
        var formattedTime = timeConverter(time);
        $("#timer").text("Time remaining: " + formattedTime);
        if (time === -1){
            stop();
            alert('Out of time! Click "Okay" to see your final score.')
            $(".question").empty();
            $(".answer").empty();
            $("#timer").hide();
            $("#submit").empty();
            $("#score").text('You got ' + right + ' questions right and ' + wrong + ' questions wrong.')
            if (right >= 7){
                $("#score").append(" Nice job! Now get off the internet and go visit one of our amazing National Parks!")
            } else if (right <= 3){
                $("#score").append(" You can do better than that! Want to try again?")
            } else {
                $("#score").append(" Not bad! You'll be an expert on our National Parks soon enough!")
            }
        }   
    };

    function stop(){
        clearInterval(intervalId);
    }

    function startTimer(){
        console.log("Clock's ticking!")
        intervalId = setInterval(count, 1000);
        count();
    };

    function timeConverter(t) {
        var minutes = Math.floor(time / 60);
        var seconds = time - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;

        } if (minutes === 0) {
          minutes = "00";

        } else if (minutes < 10) {
          minutes = "0" + minutes
        } 
        return minutes + ":" + seconds;
      };
          
    //                                      Populate quiz questions and answer inputs
    function beginQuestions(){

        $("#q1").append(quiz[0].q + "<br>")
        for (i=0; i < quiz[0].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[0].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[0].a[i]);
            ansButton.text(quiz[0].a[i]);
            $("#a1").append(ansButton); 
        }

        $("#q2").append(quiz[1].q + "<br>")
        for (i=0; i < quiz[1].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[1].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[1].a[i]);
            $("#a2").append(ansButton); 
        }

        $("#q3").append(quiz[2].q + "<br>")
        for (i=0; i < quiz[2].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[2].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[2].a[i]);
            $("#a3").append(ansButton); 
        }

        $("#q4").append(quiz[3].q + "<br>")
        for (i=0; i < quiz[3].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[3].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[3].a[i]);
            $("#a4").append(ansButton); 
        }

        $("#q5").append(quiz[4].q + "<br>")
        for (i=0; i < quiz[4].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[4].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[4].a[i]);
            $("#a5").append(ansButton); 
        }

        $("#q6").append(quiz[5].q + "<br>")
        for (i=0; i < quiz[5].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[5].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[5].a[i]);
            $("#a6").append(ansButton); 
        }

        $("#q7").append(quiz[6].q + "<br>")
        for (i=0; i < quiz[6].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[6].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[6].a[i]);
            $("#a7").append(ansButton); 
        }

        $("#q8").append(quiz[7].q + "<br>")
        for (i=0; i < quiz[7].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[7].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[7].a[i]);
            $("#a8").append(ansButton); 
        }

        $("#q9").append(quiz[8].q + "<br>")
        for (i=0; i < quiz[8].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[8].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[8].a[i]);
            $("#a9").append(ansButton); 
        }

        $("#q10").append(quiz[9].q + "<br>")
        for (i=0; i < quiz[9].a.length; i++) {
            var ansButton = $('<input type="radio" name="radiobtn" >' + (quiz[9].a[i] + '</input>'));
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[9].a[i]);
            $("#a10").append(ansButton); 
        }

        $("#submit").append("<button>Submit</button>");
    }

    // on click function for submit --> 

    function gradeQuiz(){
        for (var q=0; q<quiz.length; q++){
            if (quiz[q].correct === 'The button that they clicked'){
                right++;
            } else {
                wrong++;
            }

    }}

    $("#submit").on("click", function(){
        stop();
        $(".question").empty();
        $(".answer").empty();
        $("#timer").hide();
        $("#submit").empty();
        gradeQuiz();
        $("#score").text('You got ' + right + ' questions right and ' + wrong + ' questions wrong.')
        $("#score").append('<br><br>')
        if (right >= 7){
            $("#score").append(" Nice job! Now get off the internet and go visit one of our amazing National Parks!")
        } else if (right <= 3){
            $("#score").append(" You can do better than that! Want to try again?")
        } else {
            $("#score").append(" Not bad! You'll be an expert on our National Parks soon enough!")
        }
    });
})