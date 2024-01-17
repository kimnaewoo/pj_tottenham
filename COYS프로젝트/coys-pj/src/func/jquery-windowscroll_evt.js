import $ from "jquery";

export function scrollFn() {
  // if ($("#shop-area")) return;

  let shopTop = $("#shop-area").offset().top;
  let footTop = $("#footer-area").offset().top;
  // let logout = $(".logout").offset().top;
  let user = $(".user").offset().top;
  let ins = $(".is").offset().top;
  let fk = $(".fk").offset().top;
  let yt = $(".yt").offset().top;
  let top = $(".top").offset().top;
  let logo = $("#gnb img").offset().top;
  // console.log(ins, shopTop);

  // let snsMenu = document.querySelectorAll(".sns-menu > a");
  // snsMenu.forEach((v) => {
  //   console.log(v.offsetTop);
  //   console.log(footTop);
  //   if (v.offsetTop > footTop) {
  //     v.style.color = "#fff";
  //   } else {
  //     v.style.color = "#000";
  //   }
  // });
  ////////////////////////////////////////////////////////////
  // const chglogin = () => {
  //   if (localStorage.getItem("mem-data") !== null) {
  //     if (logout < footTop && logout > shopTop) {
  //       $(".logout").css({ color: "#000" });
  //     } else if (logout < shopTop || logout > footTop) {
  //       $(".logout").css({ color: "#fff" });
  //     }
  //   } else {
  //     if (user < footTop && user > shopTop) {
  //       $(".user").css({ color: "#000" });
  //     } else if (user < shopTop || user > footTop) {
  //       $(".user").css({ color: "#fff" });
  //     }
  //   }
  // };
  ////////////////////////////////////////////////////////////
  if (user < footTop && user > shopTop) {
    $(".user").css({ color: "#000" });
  } else if (user < shopTop || user > footTop) {
    $(".user").css({ color: "#fff" });
  }

  if (ins < footTop && ins > shopTop) {
    $(".is").css({ color: "#000" });
  } else if (ins < shopTop || ins > footTop) {
    $(".is").css({ color: "#fff" });
  }
  if (fk < footTop && fk > shopTop) {
    $(".fk").css({ color: "#000" });
  } else if (fk < shopTop || fk > footTop) {
    $(".fk").css({ color: "#fff" });
  }

  if (yt < footTop && yt > shopTop) {
    $(".yt").css({ color: "#000" });
  } else if (yt < shopTop || yt > footTop) {
    $(".yt").css({ color: "#fff" });
  }

  if (top < footTop && top > shopTop) {
    $(".top, .bottom").css({ backgroundColor: "#000" });
  } else if (top < shopTop || top > footTop) {
    $(".top, .bottom").css({ backgroundColor: "#fff" });
  }
  if (logo > shopTop) {
    $("#gnb img").attr("src", "./images/logo.png");
  } else if (logo < shopTop) {
    $("#gnb img").attr("src", "./images/logo2.png");
  }
  // chglogin();
}
