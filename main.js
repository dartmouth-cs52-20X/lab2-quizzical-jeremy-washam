// I used https://www.w3schools.com/howto/howto_css_modals.asp to figure out how to dislay the modal

// Get the modal, the button that opens it, and the span that closes it
var modal = document.getElementById("resultModal");
var btn = document.getElementById("results-button");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal, calculate results, and fill in the modal
$('#results-button').on('click', function(e) {
    modal.style.display = "block";

    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    if(choices.length !== 10){
        document.getElementById('modal-text').textContent='Answer All of the Questions!';
        document.getElementById('modal-image').src="img/error.gif"
    }
    else {
        var winner = calculateResults(choices);

        if (winner == 0){
        document.getElementById('modal-text').textContent='You are: DIANE NGUYEN';
        document.getElementById('modal-image').src="img/diane.gif"
        }
        if (winner == 1){
            document.getElementById('modal-text').textContent='You are: PRINCESS CAROLYN';
            document.getElementById('modal-image').src="img/pc.gif"
        }
        if (winner == 2){
            document.getElementById('modal-text').textContent='You are: TODD CHAVEZ';
            document.getElementById('modal-image').src="img/todd.gif"
        }
        if (winner == 3){
            document.getElementById('modal-text').textContent='You are: MR. PEANUT BUTTER';
            document.getElementById('modal-image').src="img/mrpeanutbutter.gif"
        }
        if (winner == 4){
            document.getElementById('modal-text').textContent='You are: BOJACK HORSEMAN';
            document.getElementById('modal-image').src="img/bojack.gif"
        }
    }  
});

// When the user clicks to try again, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Calculates the results based on which question is assigned to which character
//Lots of question answers apply to multiple characters so they aren't indexed to a specific character
//This makes it harder to calculate the resuls (I couldn't find an alternative to lots of if-statements) but more interesting
function calculateResults(choices){
    //character indexes: 0=diane, 1=pc, 2=todd, 3=pb, 4=bojack
    var results = [0, 0, 0, 0, 0];

    //First question
    if(choices[0]==1){
        results[4]++;
        results[3]++;
    }
    if(choices[0]==2){
        results[0]++;
        results[1]++;
    }
    if(choices[0]==3){
        results[0]++;
    }
    if(choices[0]==4){
        results[2]++;
        results[3]++;
    }

    //Second question
    if(choices[1]==1){
        results[0]++;
        results[4]++;
    }
    if(choices[1]==2){
        results[1]++;
    }
    if(choices[1]==3){
        results[2]++;
        results[3]++;
    }
    if(choices[1]==4){
        results[0]++;
    }

    //Third question
    if(choices[2]==1){
        results[2]++;
        results[3]++;
    }
    if(choices[2]==2){
        results[0]++;
    }
    if(choices[2]==3){
        results[1]++;
    }
    if(choices[2]==4){
        results[4]++;
    }

    //Fourth question
    if(choices[3]==1){
        results[2]++;
        results[3]++;
    }
    if(choices[3]==2){
        results[4]++;
    }
    if(choices[3]==3){
        results[1]++;
    }
    if(choices[3]==4){
        results[0]++;
    }

    //Fifth question
    if(choices[4]==1){
        results[4]++;
        results[3]++;
    }
    if(choices[4]==2){
        results[1]++;
    }
    if(choices[4]==3){
        results[0]++;
    }
    if(choices[4]==4){
        results[2]++;
    }

    //Sixth question
    if(choices[5]==1){
        results[1]++;
        results[2]++;
    }
    if(choices[5]==2){
        results[3]++;
    }
    if(choices[5]==3){
        results[0]++;
        results[4]++;
    }
    if(choices[5]==4){
        results[2]++;
    }

    //Seventh question
    if(choices[6]==1){
        results[0]++;
        results[4]++;
    }
    if(choices[6]==2){
        results[2]++;
    }
    if(choices[6]==3){
        results[1]++;
    }
    if(choices[6]==4){
        results[3]++;
    }

    //Eighth question
    if(choices[7]==1){
        results[0]++;
        results[1]++;
        results[4]++;
    }
    if(choices[7]==2){
        results[2]++;
        results[3]++;
    }
    if(choices[7]==3){
        results[0]++;
        results[4]++;
    }
    if(choices[7]==4){
        results[0]++;
        results[3]++;
        results[4]++;
    }

    //Ninth question
     if(choices[8]==1){
        results[1]++;
        results[2]++;
        results[3]++;
    }
    if(choices[8]==2){
        results[2]++;
        results[3]++;
    }
    if(choices[8]==3){
        results[1]++;
        results[3]++;
    }
    if(choices[8]==4){
        results[0]++;
    }

    //Tenth question
    if(choices[9]==1){
        results[0]++;
    }
    if(choices[9]==2){
        results[1]++;
        results[3]++;
        results[4]++;
    }
    if(choices[9]==3){
        results[2]++;
    }
    if(choices[9]==4){
        results[0]++;
        results[1]++;
        results[4]++;
    }

    var winner = indexOfMax(results);

    return winner;
}

// Found the function for the maximum index of an array here: https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
// Used in calculateResults to pick the winner
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}
