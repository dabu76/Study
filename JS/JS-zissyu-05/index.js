let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

for (let i = 0; i < products.length; i++) {
  let col = "<div class='col-sm-4'>";
  let img = "<img src='https://placehold.co/600' class='w-100' />";
  let h5 = `<h5>${products[i].title}</h5>`;
  let p = `<p>値段 : ${products[i].price}</p>`;
  let close2 = "</div>";
  let result = col + img + h5 + p + close2;
  result2(result);
}

let count = 0;
$("#more").on("click", function () {
  if (count <= 0) {
    $.get("https://codingapple1.github.io/js/more1.json").done(function (data) {
      data.forEach(function (a) {
        let col = "<div class='col-sm-4'>";
        let img = "<img src='https://placehold.co/600' class='w-100' />";
        let h5 = `<h5>${a.title}</h5>`;
        let p = `<p>値段 : ${a.price}</p>`;
        let close2 = "</div>";
        let result = col + img + h5 + p + close2;
        $(".row").append(result);
        count++;
      });
    });
  } else if (count > 0) {
    $("#more").css("display", "none");

    $.get("https://codingapple1.github.io/js/more2.json ").done(function (
      data
    ) {
      data.forEach(function (a) {
        let col = "<div class='col-sm-4'>";
        let img = "<img src='https://placehold.co/600' class='w-100' />";
        let h5 = `<h5>${a.title}</h5>`;
        let p = `<p>値段 : ${a.price}</p>`;
        let close2 = "</div>";
        let result = col + img + h5 + p + close2;
        $(".row").append(result);
        count++;
      });
    });
  }
});

function result2(result) {
  $(".row").append(result);
}
$("#price").click(function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  $(".row").html("");

  for (let i = 0; i < products.length; i++) {
    let col = "<div class='col-sm-4'>";
    let img = "<img src='https://placehold.co/600' class='w-100' />";
    let h5 = `<h5>${products[i].title}</h5>`;
    let p = `<p>値段 : ${products[i].price}</p>`;
    let close2 = "</div>";
    let result = col + img + h5 + p + close2;
    result2(result);
  }
});
