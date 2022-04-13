document.getElementById("add_information_button").onclick = function () {
  var x = document.getElementById("info");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("add_information_button").innerHTML =
      "Hide additional information.";
  } else {
    x.style.display = "none";
    document.getElementById("add_information_button").innerHTML =
      "Click here for additional information.";
  }
};
