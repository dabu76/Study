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
  } else if (!/\S+@\S+\.\S+/.test(id2)) {
    alert("メールの形式ではありません");
    return false;
  } else if (!/[A-Z]/.test(pw2)) {
    alert("PWに問題があります");
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

t_count = 4;
let timer = setInterval(() => {
  time();
}, 1000);
function time() {
  if (t_count >= 0) {
    $("#p_sec").html(t_count);
    t_count--;
  } else {
    $(".alert").hide();
    clearInterval(timer);
  }
}
// let now_page = 1;
// $(".next").on("click", () => {
//   now_page++;
//   if (now_page === 1) {
//     $(".slide-container").removeClass("slide-animation slide-animation2");
//   } else if (now_page === 2) {
//     $(".slide-container")
//       .removeClass("slide-animation2")
//       .addClass("slide-animation");
//   } else if (now_page === 3) {
//     $(".slide-container")
//       .removeClass("slide-animation")
//       .addClass("slide-animation2");
//   } else if (now_page > 3) {
//     $(".slide-container").removeClass("slide-animation slide-animation2");
//     now_page = 1;
//   }
// });
// $(".before").on("click", () => {
//   now_page--;
//   if (now_page === 1) {
//     $(".slide-container").removeClass("slide-animation slide-animation2");
//   } else if (now_page === 2) {
//     $(".slide-container")
//       .removeClass("slide-animation2")
//       .addClass("slide-animation");
//   } else if (now_page < 1) {
//     $(".slide-container").addClass("slide-animation2");
//     now_page = 3;
//   }
// });
const totalSlides = $(".slide-box").length;
let total_width = totalSlides * 100 + "vw";
let p_count = 0;
$(".slide-container").css("width", total_width);
$(".next").on("click", () => {
  p_count++;
  if (p_count < totalSlides) {
    now_page = p_count * 100 + "vw";
    $(".slide-container").css("transform", `translateX(-${now_page})`);
  } else if (p_count <= totalSlides) {
    p_count = 0;
    $(".slide-container").css("transform", "translateX(0vw)");
  }
});
$(".before").on("click", () => {
  p_count--;
  if (p_count >= 0) {
    let now_page = p_count * 100 + "vw";
    $(".slide-container").css("transform", `translateX(-${now_page})`);
  } else if (p_count < 0) {
    p_count = totalSlides - 1;
    let now_page = p_count * 100 + "vw";
    $(".slide-container").css("transform", `translateX(-${now_page})`);
  }
});
$(".slide-1").on("click", () => {
  $(".slide-container").removeClass("slide-animation slide-animation2");
});
$(".slide-2").on("click", () => {
  $(".slide-container")
    .removeClass("slide-animation2")
    .addClass("slide-animation");
});
$(".slide-3").on("click", () => {
  $(".slide-container")
    .removeClass("slide-animation")
    .addClass("slide-animation2");
});
