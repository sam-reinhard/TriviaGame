$(document).ready(function () {

    var intervalId;
    var formattedTime;
    var time = 181;
    var right;
    var wrong;
    // var startImage = "../images/nationalParkLogo.png";


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

    // $("#startImage").html("<img src=" + startImage + " width='400px'>");

    $("#start").on("click", startQuiz);

    // Click the start button to start the timer and populate the quiz
    function startQuiz(){
        $("#start").empty();
        $("#instructions").empty();
        // $("#startImage").empty();
        beginQuestions();
        startTimer();
    };

    // Functions for starting the timer and formatting the time
    function count(){
        time--;
        var formattedTime = timeConverter(time);
        $("#timer").text("Time remaining: " + formattedTime);
    };

    function startTimer(){
        console.log("Clock's ticking!")
        var intervalId = setInterval(count, 1000);
        count();
    };

    function timeConverter(t) {
        var minutes = Math.floor(time / 60);
        var seconds = time - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
      
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
      };
      
    // Populate quiz questions and answer inputs
    function beginQuestions(){ 
        for (i=0; i<quiz.length; i++){
            $("#quiz").append(quiz[i].q);

            var ansButton = $("<button>");
            ansButton.addClass("answer");
            ansButton.attr("data-value", quiz[i].a);
            ansButton.text(quiz[i].a);
            $("#quiz").append(ansButton);

        }    

        $("#submit").append("<button>Submit</button>");
    }

    // on click functions for each answer? if correct, right++ and if not, wrong++

    // on click function for submit --> 

})