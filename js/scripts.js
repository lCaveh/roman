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
    };
    result=result.replace(/C{4}/,"CD")
    result=result.replace(/X{4}/,"XL")
    result=result.replace(/I{4}/,"IV")
    result=result.replace(/DCD/,"CM")
    result=result.replace(/LXL/,"XC")
    result=result.replace(/VIV/,"IX")

    $("#story").append("<p>"+result+"</p>");
    $("#story").append("<p>"+nextResult+"</p>");
    $("#story").show();
  });
});
