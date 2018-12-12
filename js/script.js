/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#confront").val();
        var dndClass= "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        
    });
    
    function confrontscore(answer) {
        if (answer === " "){
            return 1;
        }else if (answer === " "){
            return 2;
        }else if (answer === " "){
            return 3;
        }else if (answer === " "){
            return 4;
        }else if (answer === " "){
            return 5;
        }else{
            return 0;
        }
    }
});
