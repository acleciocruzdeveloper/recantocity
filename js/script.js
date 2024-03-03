$(document).ready(function () {
  let containerA = document.getElementById("circleA");
  let circleA = new ProgressBar.Circle(containerA, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 1400,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 60);

      circle.setText(value);
    },
  });

  let containerB = document.getElementById("circleB");
  let circleB = new ProgressBar.Circle(containerB, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 1500,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 254);

      circle.setText(value);
    },
  });

  let containerC = document.getElementById("circleC");
  let circleC = new ProgressBar.Circle(containerC, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 1600,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 32);

      circle.setText(value);
    },
  });

  let containerD = document.getElementById("circleD");
  let circleD = new ProgressBar.Circle(containerD, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 1300,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 5243);

      circle.setText(value);
    },
  });

  // iniciando loader
  let dataAreaOffset = $("#data-area").offset();
  let stop = 0;

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();
    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
  });

  // Paralax

  setTimeout(function () {
    $("#data-area").parallax({ imageSrc: "/assets/img/cidadeparallax.png" });
    $("#apply-area").parallax({ imageSrc: "/assets/img/pattern.png" });
  }, 250);

  // filtro portfólio

  $(".filter-btn").on("click", function () {
    let type = $(this).attr("id");
    let boxes = $(".project-box");

    $(".main-btn").removeClass("active");
    $(this).addClass("active");

    if (type == "dsg-btn") {
      eachBoxes("dsg", boxes);
    } else if (type == "dev-btn") {
      eachBoxes("dev", boxes);
    } else if (type == "seo-btn") {
      eachBoxes("seo", boxes);
    } else {
      eachBoxes("all", boxes);
    }
  });

  function eachBoxes(type, boxes) {
    if (type == "all") {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut("slow");
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // scroll para seções

  let navBtn = $(".nav-item");
  const sectionMap = {
    "about-menu": $("#about-area"),
    "services-menu": $("#service-area"),
    "team-menu": $("#team-area"),
    "portfolio-menu": $("#portfolio-area"),
    "contact-menu": $("#contact-area"),
  };

  $(navBtn).click(function () {
    let btnId = $(this).attr("id");
    let scrollTo = sectionMap[btnId] || $("#mainSlider");
    console.log(btnId);

    $("html, body").animate(
      {
        scrollTop: scrollTo.offset().top - 70,
      },
      1500
    );
  });
});
