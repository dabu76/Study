let b_length = $(".tab-button").length;
for (let i = 0; i < b_length; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      tab_open(i);
    });
}
$(".list").on("click", function (e) {
  tab_open(e.target.dataset.id);
});
function tab_open(i) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(i).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(i).addClass("show");
}

// $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(1).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(1).addClass("show");
//   });
// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(2).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(2).addClass("show");
//   });

var template = "<p>hello</p>";
document.querySelector("#test").insertAdjacentHTML("beforeend", template);
$("#test").append(template);

let car = ["sonata", 50000, "white"];
let car2 = { name: "sonata", price: [50000, 3000, 4000] };
$(".Products").html(car2.name);
$(".price").html(car2.price[0]);
let p_size = "<option>26</option><option>28</option><option>30</option>";
var pants = [28, 30, 32];
var shirts = [90, 95, 100];

let option = "";
$(".p_select").change(function () {
  const value = this.value;

  $(".product").removeClass("show");

  if (value === "shirts") {
    $(".shirts").addClass("show");
  } else if (value === "hat") {
    $(".hat").addClass("show");
  } else if (value === "pants") {
    pants.forEach(function (a) {
      option += `<option>${a}</option>`;
    });
    $(".pants").html(option).addClass("show");
  }
});
let check = ["son", "ho", "cho", "kim", "lee"];
$(".check").on("change", function () {
  let c_check = this.value;
  let found = false;
  for (let i = 0; i < check.length; i++) {
    if (c_check === check[i]) {
      found = true;
    }
  }
  if (found) {
    window.alert("いる");
  } else {
    window.alert("いない");
  }
});

let cal = 0;
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    cal = i * j;
    console.log(cal);
  }
}

$(".s_Btn").on("click", function () {
  let score = 0;
  let array = $(".b_score").length;
  let result2 = 0;
  for (let i = 0; i < array; i++) {
    score += Number($(".b_score").eq(i).val());
  }
  result2 = score / array;
  let now_score = Number($(".n_score").val());
  let before_score = score;
  let result = Math.abs(now_score - result2);
  if (now_score > result2) {
    window.alert(`点数が${result}点あがった`);
  } else if (now_score < result2) {
    window.alert(`点数が${result}点さがった`);
  } else {
    window.alert("点数は変わらなかった");
  }
  console.log(now_score);
  console.log(result2);
});

// $.get("https://codingapple1.github.io/price.json ").done(function (data) {
//   console.log(data.price);
// });

// $.post("")
//   .done(function () {
//     console.log("success");
//   })
//   .fail(function () {
//     console.log("fail");
//   });
