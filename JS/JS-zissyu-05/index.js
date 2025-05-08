let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

render(products);

let count = 0;
$("#more").on("click", function () {
  if (count === 0) {
    $.get("https://codingapple1.github.io/js/more1.json").done(function (data) {
      products = products.concat(data);
      render(data);
      count++;
    });
  } else if (count === 1) {
    $("#more").hide();

    $.get("https://codingapple1.github.io/js/more2.json").done(function (data) {
      products = products.concat(data);
      render(data);
      count++;
    });
  }
});

function render(array) {
  array.forEach(function (a) {
    let col = "<div class='col-sm-4'>";
    let img = "<img src='https://placehold.co/600' class='w-100' />";
    let h5 = `<h5 class='title'>${a.title}</h5>`;
    let p = `<p>値段 : ${a.price}</p>`;
    let button = "<button class='buy'>買う</button>";
    let close2 = "</div>";
    let result = col + img + h5 + p + button + close2;

    $(".row").append(result);
  });
}
let cart = [];

$(document).on("click", ".buy", function () {
  if (cart !== "") {
    let title = $(this).siblings(".title").text();
    cart.push(title);
  } else {
    cart = $(this).siblings(".title").text();
  }
  localStorage.setItem("cart", JSON.stringify(cart));
});

$("#price").click(function () {
  products.sort((a, b) => a.price - b.price);
  $(".row").html("");
  render(products);
});
$("#a_z").click(function () {
  products.sort(function (a, b) {
    return b.title.localeCompare(a.title, "en");
  });
  $(".row").html("");
  render(products);
});
$("#filter").click(function () {
  let even = products.filter(function (p) {
    return p.price <= 60000;
  });
  $(".row").html("");
  render(even);
});
