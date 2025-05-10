let allProducts = [];

$.get("./Json/store.json").done(function (data) {
  allProducts = data.products;

  renderCards(allProducts);
});

function renderCards(list) {
  list.forEach(function (a) {
    let card = `
      <div class="card" style="width: 18rem draggable='true'">
        <img src="./img/${a.photo}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${a.title}</h5>
          <p class="card-text">
            <small>${a.brand}</small><br />
            <span>値段 : ${a.price}</span>
          </p>
          <button class="btn btn-dark">気に入り</button>
        </div>
      </div>`;
    $(".card_img").append(card);
  });
}
$(".search").on("input", function () {
  let value = $(this).val().trim();

  if (value === "") {
    renderCards(allProducts);
    return;
  }

  let result = allProducts.filter(
    (item) =>
      item.title.includes(value) ||
      item.brand.includes(value) ||
      item.price.toString().includes(value)
  );
  renderCards(result);
});

$(document).on("dragstart", ".card", function (e) {
  const title = $(this).find(".card-title").text();
  e.originalEvent.dataTransfer.setData("text/plain", title);
});

$(".basket_drag").on("dragover", function (e) {
  e.preventDefault();
});
let count = 1;
$(".basket_drag").on("drop", function (e) {
  e.preventDefault();

  const title = e.originalEvent.dataTransfer.getData("text/plain");
  const item = allProducts.find((p) => p.title === title);

  const existingCard = $(".basket_drag .card").filter(function () {
    return $(this).find(".card-title").text() === title;
  });

  if (existingCard.length > 0) {
    const input = existingCard.find("input");
    const currentVal = parseInt(input.val());
    input.val(currentVal + 1);
  } else {
    const newCard = `
      <div class="card card2" style="width: 300px; height: auto; margin-bottom: 10px;">
        <img src="./img/${item.photo}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
            <small>${item.brand}</small><br />
            <span>値段 : ${item.price}</span>
          </p>
          <input type="text" value="1">
        </div>
      </div>
    `;
    $(this).append(newCard);
  }
});
