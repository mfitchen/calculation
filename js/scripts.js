$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      $("#triangle-type").text("Not a triangle");
    } else if (side1 === side2 && side2 === side3) {
      $("#triangle-type").text("Equilateral");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      $("#triangle-type").text("Isosceles");
    } else {
      $("#triangle-type").text("Scalene");
    }

    $("#result").show();

    event.preventDefault();
  });
});
