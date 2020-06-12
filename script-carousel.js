$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
            option: 4
        }
    );
});

$(document).ready(function(){
  $("#sp_navi_menu_btn").click(function(){
    $(".sp_navi_menu_toggle").slideToggle();
  });
});



$(document).ready(function(){
  $(".use-link-title").click(function () { //id="categories-link h4"を押したら実行
      $(this).toggleClass("openlink"); // openlinkというclassを付与する
      $(".use-link-title + ul").slideToggle(); // id="categories-link"の後にあるh4直後のulを表示させる
  });
});

$(document).ready(function(){
  $(".style-link-title").click(function () { //id="categories-link h4"を押したら実行
      $(this).toggleClass("openlink"); // openlinkというclassを付与する
      $(".style-link-title + ul").slideToggle(); // id="categories-link"の後にあるh4直後のulを表示させる
  });
});

$(document).ready(function(){
  $(".price-link-title").click(function () { //id="categories-link h4"を押したら実行
      $(this).toggleClass("openlink"); // openlinkというclassを付与する
      $(".price-link-title + ul").slideToggle(); // id="categories-link"の後にあるh4直後のulを表示させる
  });
});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});


$(document).ready(function(){
  $("#page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
  