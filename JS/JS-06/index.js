document.querySelector("#quiz").addEventListener("click", function (e) {
  switch (e.target.innerHTML) {
    case "奥さん":
      alert("奥さんが一番大事ですね");
      break;
    case "両親":
      alert("両親が一番大事ですね");
      break;
    case "育てる犬":
      alert("育てる犬が一番大事ですね");
      break;
  }
});
