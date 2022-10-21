function myFunction() {
  const x = document.getElementById("myTop");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
