
function myFunction() {

  var x = document.getElementsByClassName("price");

  for (var i = 0; i < x.length; i++){
    if (x[i].classList.contains("hide") === true) {
      x[i].classList.remove("hide");
    } else {
      x[i].classList.add("hide");
    }
  }

}
