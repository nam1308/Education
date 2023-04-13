(function($) {
    window.onload = function() {
        $(document).ready(function() {
            menuMobile();
            searchMobile();
            FreeMaterial();
        });
    };
})(jQuery);


function menuMobile(){
    $(".header__bars").click(function(){
        $(".overlay").addClass("overlay-active");
        $(".menu-mobile").addClass("menu-mobile-active");
    });

    $(".overlay").click(function() {
        $(".overlay").removeClass("overlay-active");
        $(".menu-mobile").removeClass("menu-mobile-active");
        $('.search__mobile').removeClass('active');
    });

    $(".menu-mobile-close").click(function() {
        $(".overlay").removeClass("overlay-active");
        $(".menu-mobile").removeClass("menu-mobile-active");
    });

    $('.menu-mobile').show();
    $(".menu-mobile nav ul li.menu-item-has-children>ul").before(`<span class="li-plus"></span>`);
    $(".menu-mobile nav ul li.menu-item-has-children .li-plus").addClass("clicked");
    if ($(".li-plus").length) {
        $(".li-plus").click(function(e) {
            if ($(this).hasClass("clicked")) {
                $(this).removeClass('clicked').siblings('ul').slideUp();
            } else {
                $(this).parent().siblings('li').find('.li-plus').removeClass('clicked').find("ul").slideUp();
                $(this).parent().siblings().find("ul").slideUp();
                $(this).addClass('clicked').siblings('ul').slideDown();
            }
        });
    }
}


// Search Mobile
function searchMobile() {
    $('.icon__search-mb').click(function() {
        $('.search__mobile').addClass('active');
        $('.overlay').addClass('overlay-active');
        $('.search__mobile form input').trigger('focus');
    })
    $('.search__mobile-close').click(function() {
        $('.search__mobile').removeClass('active');
        $('.overlay').removeClass('overlay-active');
    })
}

// Sự kiện click của trang tài liệu miễn phí
function FreeMaterial(){
    $(".have-free-material").click(function(e) {
        $(this).find('.free-material-drop').slideToggle();
    });
}













