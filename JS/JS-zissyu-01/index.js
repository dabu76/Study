document.getElementById("count").addEventListener("change", function () {
  const countVal = parseInt(document.getElementById("count").value);
  const lastDigit = countVal % 10;
  console.log(lastDigit);
  if (lastDigit === 3 || lastDigit === 6 || lastDigit === 9) {
    alert("拍手");
  } else {
    alert("次");
  }
});

function scoreCal() {
  const score1 = document.getElementById("score1").value;
  const score2 = document.getElementById("score2").value;
  const score1val = parseInt(score1);
  const score2val = parseInt(score2);
  let result = score1val + score2val;
  if (!/^[0-9]+$/.test(score1) || !/^[0-9]+$/.test(score2)) {
    alert("数字じゃない");
  } else {
    if (score1val > 100 || score2val > 100) {
      alert("100点以上です");
    } else {
      if (result >= 120 && score1val >= 40 && score2val >= 40) {
        alert("合格");
      } else {
        alert("不合格");
      }
    }
  }
}
