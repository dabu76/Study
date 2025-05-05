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

let car = ["sonata", 50000, "white"];
let car2 = { name: "sonata", price: [50000, 3000, 4000] };
$(".Products").html(car2.name);
$(".price").html(car2.price[0]);
