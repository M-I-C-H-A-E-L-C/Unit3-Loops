function LetterGrade(score){
    if (score >= 90 && score <= 100){
        console.log(score, "-> A");
    }
    else if (score >= 80 && score <= 89){
        console.log(score, "-> B");
    }
    else if (score >= 70 && score <= 79){
        console.log(score, "-> C");
    }
    else if (score >= 60 && score <= 69){
        console.log(score, "-> D");
    }
    else if (score >= 0 && score <= 59){
        console.log(score, "-> F");
    }
    else{
        console.log(score, "-> Invalid score")
    }
}

LetterGrade(65);
LetterGrade(85);
LetterGrade(54);
LetterGrade(-12);