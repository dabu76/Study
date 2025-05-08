var load = localStorage.getItem("cart");
load = JSON.parse(load);
save(load);
function save(load) {
  load.forEach(function (a) {
    let col = "<div class='col-sm-4'>";
    let p = `<p>title : ${a}</p>`;
    let close2 = "</div>";
    let result = p;

    $(".row").append(result);
  });
}
