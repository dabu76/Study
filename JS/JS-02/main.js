document.getElementById("close").addEventListener("click", function () {
  document.getElementById("alert").style.display = "none";
});

function a_Btn(par) {
  document.getElementById("alert").style.display = "block";
  document.getElementById("p-Msg").innerHTML = par;
}
