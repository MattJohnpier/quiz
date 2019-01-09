/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var align= "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        
        var q1score = confrontscore(q1Result)
        var q2score = dangerscore(q2Result)
        var q3score = teamworkscore(q3Result)

        var totalScore = allscore(q1score, q2score, q3score);
        
        $("#alignment").text(totalScore);
        
    });
    
    function confrontscore(answer) {
        if (answer === "dog"){
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
    
    function dangerscore(answer) {
        if (answer === " "){
            return 1;
        }else if (answer === " "){
            return 2;
        }else if (answer === " "){
            return 3;
        }else if (answer === "chair"){
            return 4;
        }else if (answer === " "){
            return 5;
        }else{
            return 0;
        }
        
    }function teamworkscore(answer) {
        if (answer === " "){
            return 1;
        }else if (answer === " "){
            return 2;
        }else if (answer === " "){
            return 3;
        }else if (answer === "javascript"){
            return 4;
        }else if (answer === " "){
            return 5;
        }else{
            return 0;
        }
    }
    
    function allscore(confrontscore,teamworkscore,dangerscore) {
        return confrontscore + dangerscore + teamworkscore
    }
});
