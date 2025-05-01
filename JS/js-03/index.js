document.querySelector("list-group-item"); //一つだけ
document.querySelectorAll("list-group-item"); //全部

document
  .getElementsByClassName("navbar-toggler")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("list-group")[0].classList.toggle("show");
  });

$("#login").on("click", function () {
  $(".black-bg").addClass("show-modal");
});
$("#close").on("click", function () {
  $(".black-bg").removeClass("show-modal");
});
function check() {
  const id2 = document.getElementById("id3").value;
  const pw2 = document.getElementById("pw3").value;

  if (id2 === "" || pw2 === "") {
    alert("PWとIDを入力してください");

    return false;
  } else if (pw2.length < 6) {
    alert("PWは7分以上です");
    return false;
  } else {
    window.location.href = "success.html";
    return false;
  }
}
document.getElementById("id3").addEventListener("change", function () {});

let btn_count = 0;

$(".badge").on("click", function () {
  btn_count++;
  on_off(btn_count);
});

function on_off(count) {
  if (count % 2 == 1) {
    $("body").addClass("change-bg");
    $(".container-fluid").addClass("change-bg");
    $(".navbar-brand").css("color", "white");
    $(".badge").html("White 🔄");
  } else {
    $("body").removeClass("change-bg");
    $(".container-fluid").removeClass("change-bg");
    $(".navbar-brand").css("color", "black");
    $(".badge").html("Dark 🔄");
  }
}
