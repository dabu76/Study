let allProducts = [];
let newCard = "";
let result2 = "";
let sum = 0;

$.get("./Json/store.json").done(function (data) {
  allProducts = data.products;
  renderCards(allProducts);
});

function renderCards(list) {
  $(".card_img").html("");
  list.forEach(function (a) {
    let card = `
      <div class="card" style="width: 18rem" draggable="true">
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
  if (value === "") return renderCards(allProducts);
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
    sum += item.price;
  } else {
    newCard = `
      <div class="card card2" style="width: 300px; height: auto; margin-bottom: 10px;">
        <img src="./img/${item.photo}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
            <small>${item.brand}</small><br />
            <span>値段 : ${item.price}</span>
          </p>
          <input type="text" value="1" readonly>
        </div>
      </div>`;
    sum += item.price;
    $(this).append(newCard);
  }

  if (result2 === "") {
    result2 = `<div class='final_price'>
      <h3>値段</h3>
      <p class='sum'>合計 <span>${sum}</span></p>
      <button class='buy'>買う</button>
    </div>`;
    $(".result_price").append(result2);
  } else {
    $(".final_price span").text(`${sum}`);
  }
});

$(document).on("click", "#close", function () {
  $(".black-bg").addClass("show");
});

$(document).on("click", ".buy", function () {
  $(".black-bg").removeClass("show");
});

$(document).on("click", ".send", function () {
  $(".black-bg").addClass("show");
  $(".black-bg2").removeClass("show");

  let total = 0;
  let summary = "<h3>receipt</h3>";

  $(".card2").each(function () {
    const title = $(this).find(".card-title").text();
    const brand = $(this).find("small").text();
    const price = parseInt($(this).find("span").text().replace(/[^\d]/g, ""));
    const quantity = parseInt($(this).find("input").val());
    const itemTotal = price * quantity;
    total += itemTotal;

    summary += `
      <div class="detail">
        <p>${title}</p>
        <p>${brand}</p>
        <p>¥${price}</p>
        <p>${quantity}</p>
        <p>¥${itemTotal}</p>
      </div>`;
  });

  summary += `<hr><p><strong>合計：¥${total}</strong></p>`;

  $(".purchase-summary").html(summary);
});

$(document).on("click", ".close", function () {
  $(".black-bg2").addClass("show");
});
$(".close").on("click", function () {
  $(".basket_drag").html("");
  $(".sum").html("");
  $(".final_price").html("");
});
