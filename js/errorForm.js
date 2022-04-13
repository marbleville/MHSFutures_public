document.getElementById("form_report_button").onclick = function () {
  var x = document.getElementById("report_mistake_info");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("form_report_button").innerHTML = "Hide form.";
  } else {
    x.style.display = "none";
    document.getElementById("form_report_button").innerHTML =
      "Click here to report a mistake.";
  }
};
