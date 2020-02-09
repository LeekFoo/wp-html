$(function () {
    // スライダー初期化
    $('.top-slides').slick({
        autoplay: true,
        // dots: true,
        fade: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });

    // AOS初期化
    AOS.init({
        duration: 800,
        once: true,
    });

    // トップへ戻るボタンのスムーススクロール
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    const header = $('header');
    const nav = $('nav');

    // トップへ戻るボタン、グロナビの表示設定
    $(window).on('load scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }

        // サイトトップの場合
        if ($('body').hasClass('home')) {
            if ($(window).scrollTop() > 100) {
                header.addClass('bg-white');
            } else {
                header.removeClass('bg-white');
            }
        }
    });

    // ハンバーガーメニュー
    $('.navToggle').click(function () {
        nav.toggleClass('active');

        if (nav.hasClass('active')) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
    });

    // ファーストビュー
    $(window).on('load scroll', function () {
        const elem = $('.catch-inner');

        elem.each(function () {
            const isPlay = 'isPlay';
            const elemOffset = $(this).offset().top;
            const scrollPos = $(window).scrollTop();
            const wh = $(window).height();

            if (scrollPos > elemOffset - wh + (wh / 4)) {
                $(this).addClass(isPlay);
            }
        });
    });
});