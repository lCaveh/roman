$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var decimal = $("#number").val();
    var romans = ["M", "D", "C", "L", "X", "V", "I"];
    var numerals = [1000, 500, 100, 50, 10, 5, 1];
    var result = "";
    for (i=0; i<7; i++){
      var quotient = Math.floor(decimal/numerals[i]);
      var remainder = decimal%numerals[i];
      for (j=0; j<quotient; j++){
        result+=romans[i];
      }
      decimal=remainder;
    }

    $("#story").append ("<p>"+result+"</p>");
    $("#story").show();
  });
});
