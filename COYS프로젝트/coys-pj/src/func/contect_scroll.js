import $ from "jquery";

export function conscrollFn() {
  let footTop = $("#footer-area").offset().top;
  let user = $(".user").offset().top;
  let ins = $(".is").offset().top;
  let fk = $(".fk").offset().top;
  let yt = $(".yt").offset().top;
  let top = $(".top").offset().top;
  let logo = $("#gnb img").offset().top;
  // console.log(ins, shopTop);
  if (user < footTop) {
    $(".user").css({ color: "#000" });
  } else if (user > footTop) {
    $(".user").css({ color: "#fff" });
  }
  if (ins < footTop) {
    $(".is").css({ color: "#000" });
  } else if (ins >= footTop) {
    $(".is").css({ color: "#fff" });
  }
  if (fk < footTop) {
    $(".fk").css({ color: "#000" });
  } else if (fk >= footTop) {
    $(".fk").css({ color: "#fff" });
  }

  if (yt < footTop) {
    $(".yt").css({ color: "#000" });
  } else if (yt >= footTop) {
    $(".yt").css({ color: "#fff" });
  }

  if (top < footTop) {
    $(".top, .bottom").css({ backgroundColor: "#000" });
  } else if (top >= footTop) {
    $(".top, .bottom").css({ backgroundColor: "#fff" });
  }
  if (logo < footTop) {
    $("#gnb img").attr("src", "./images/logo.png");
  } else if (logo >= footTop) {
    $("#gnb img").attr("src", "./images/logo2.png");
  }
}
