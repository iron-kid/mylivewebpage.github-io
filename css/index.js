
    $(".model .owl-carousel").owlCarousel({
        loop: true, // 循環播放
        margin: 30,// 外距 10px
        autoplay: true,
        responsiveClass:true, 
        nav: true,
        navText:["<div class='nav-button owl-prev'> &#8592</div>", "<div class='nav-button owl-next'>&#8594;</div>"],
        // navText: ["<div class='nav-button owl-prev'> &#8592</div>", "<div class='nav-button owl-next'>&#8594;</div>"], 
        responsive: {
          0: {
            items: 1 // 螢幕大小為 0~600 顯示 1 個項目
          },
          600: {
            items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
          },
          1000: {
            items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
          }
        }
      });

    //   Testominal
    $(".testmonial .owl-carousel").owlCarousel({
        loop: true, // 循環播放
        margin:10 ,// 外距 10px
        autoplay: true, 
        nav: true,
        navText: ["<div class='nav-button owl-prev'> &#8592</div>", "<div class='nav-button owl-next'>&#8594;</div>"],
        responsive: {
          0: {
            items: 1 // 螢幕大小為 0~600 顯示 1 個項目
          },
          600: {
            items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
          },
          1000: {
            items: 2 // 螢幕大小為 1000 以上 顯示 5 個項目
          }
        }
      });

      // Services
      $(".services .owl-carousel").owlCarousel({
        loop: true, // 循環播放
        margin:0,// 外距 10px
        autoplay: true, 
        nav: true,
        navText:["<div class='nav-button owl-prev'> &#8592</div>", "<div class='nav-button owl-next'>&#8594;</div>"],
        responsive: {
          0: {
            items: 1 // 螢幕大小為 0~600 顯示 1 個項目
          },
          600: {
            items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
          },
          1000: {
            items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
          }
        }
      });
      