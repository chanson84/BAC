$(document).ready(
    function () {

//add event handlers
        $("#calcButton").click(calculateTrip);
        // $("#alertButton").click(showPopup)
        //all other functions (program logic)
        function calculateTrip()
//Get Data from Input
        {
var beer = $("#beer").val();
        beer = parseFloat(beer);
var wine = $("#wine").val();
wine= parseFloat(wine);
var shots = $("#shots").val();
shots =  parseFloat(shots);
var weight = $("#weight").val();
weight = parseFloat(weight);
var hours = $("#hours").val();
hours = parseFloat(hours);
// Parse Numbers

//Do Math
var beerTotal = beer * 0.54;
var wineTotal = wine * 0.60;
var shotsTotal = shots * 0.60;
var totalAlcohol = beerTotal + wineTotal + shotsTotal;
var absorbsion = totalAlcohol * 7.50;
var baseBac = absorbsion / weight;
var timePassed = hours * 0.015;
var currentBac = baseBac - timePassed;
//Put in spans
$("#costOutput").text(currentBac.toFixed(3));
            $(".output").show();}
        )   }
