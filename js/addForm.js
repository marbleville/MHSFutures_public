document.getElementById("form_add_button").onclick = function () {
  var x = document.getElementById("form_add_info");
  var y = document.getElementById("student_search");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    document.getElementById("form_add_button").innerHTML = "Hide form.";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    document.getElementById("form_add_button").innerHTML =
      "Want to add yourself? Click here.";
  }
};
