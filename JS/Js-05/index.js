$(window).scroll(function () {
  let height = $(window).scrollTop();

  // 1번 카드
  let y1 = (-1 / 500) * height + 115 / 50;
  let scale1 = -0.0002 * height + 1.13;

  $(".card-box").eq(0).css("opacity", y1);
  $(".card-box").eq(0).css("scale", scale1);

  let y2 = -0.000999 * height + 2.101;
  let scale2 = -0.0002 * (height - 650) + 1.13;

  $(".card-box").eq(1).css("opacity", y2);
  $(".card-box").eq(1).css("scale", scale2);
});
