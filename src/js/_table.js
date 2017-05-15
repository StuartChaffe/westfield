
var table = function() {

    var mtOne = $('.mt-levelOneLink').attr('href');
    var mtTwo = $('.mt-levelTwoLink').attr('href');
    var mtThree = $('.mt-levelThreeLink').attr('href');
    var mtFour = $('.mt-levelFourLink').attr('href');
    var mtFive = $('.mt-levelFiveLink').attr('href');
    console.log(mtThree);

    $('.tableSection-item').click(function(){
      if ($(this).hasClass('mt-levelOne')) {
        window.location = mtOne;
      }
      if ($(this).hasClass('mt-levelTwo')) {
        window.location = mtTwo;
      }
      if ($(this).hasClass('mt-levelThree')) {
        window.location = mtThree;
      }
      if ($(this).hasClass('mt-levelFour')) {
        window.location = mtFour;
      }
      if ($(this).hasClass('mt-levelFive')) {
        window.location = mtFive;
      }
    });

    $(window).on('load', function(){
        var topofDiv = $(".benefits-head").offset().top;
        var bottomofDiv = $(".benefits-head").offset().top + $('.benefits-table-height').outerHeight(true);

        $(window).scroll(function(){
            if($(window).scrollTop() > (topofDiv)){
            $(".benefits-table-sticky").addClass('is-active');
            }
            else{
            $(".benefits-table-sticky").removeClass('is-active');
            }
            if($(window).scrollTop() > (bottomofDiv - 150)){
                $(".benefits-table-sticky").removeClass('is-active');
            }
        });
    });

    $('.plan-level-one').hover(function() {
        $('.plan-level-one').toggleClass('is-hover');
    });
    $('.plan-level-two').hover(function() {
        $('.plan-level-two').toggleClass('is-hover');
    });
    $('.plan-level-three').hover(function() {
        $('.plan-level-three').toggleClass('is-hover');
    });
    $('.plan-level-four').hover(function() {
        $('.plan-level-four').toggleClass('is-hover');
    });
    $('.plan-level-five').hover(function() {
        $('.plan-level-five').toggleClass('is-hover');
    });

    $('.plan-level').click(function(){
        $('.buy-bar').addClass('is-active');
        $('.plan-level').removeClass('is-active');
        if ($(this).hasClass('plan-level-one')) {
            $('.plan-level-one').addClass('is-active');
            var title = $('.plan-data.plan-level-one').data("title");
            var link = $('.plan-data.plan-level-one').data("link");
            $('.buy-bar--inner strong').fadeOut(500, function() {
                $(this).text(title).fadeIn(500);
            });
            $('.buy-bar--inner a').prop("href", link)
        }
        if ($(this).hasClass('plan-level-two')) {
            $('.plan-level-two').addClass('is-active');
            var title = $('.plan-data.plan-level-two').data("title");
            var link = $('.plan-data.plan-level-two').data("link");
            $('.buy-bar--inner strong').fadeOut(500, function() {
                $(this).text(title).fadeIn(500);
            });
            $('.buy-bar--inner a').prop("href", link)
        }
        if ($(this).hasClass('plan-level-three')) {
            $('.plan-level-three').addClass('is-active');
            var title = $('.plan-data.plan-level-three').data("title");
            var link = $('.plan-data.plan-level-three').data("link");
            $('.buy-bar--inner strong').fadeOut(500, function() {
                $(this).text(title).fadeIn(500);
            });
            $('.buy-bar--inner a').prop("href", link)
        }
        if ($(this).hasClass('plan-level-four')) {
            $('.plan-level-four').addClass('is-active');
            var title = $('.plan-data.plan-level-four').data("title");
            var link = $('.plan-data.plan-level-four').data("link");
            $('.buy-bar--inner strong').fadeOut(500, function() {
                $(this).text(title).fadeIn(500);
            });
            $('.buy-bar--inner a').prop("href", link)

        }
        if ($(this).hasClass('plan-level-five')) {
            $('.plan-level-five').addClass('is-active');
            var title = $('.plan-data.plan-level-five').data("title");
            var link = $('.plan-data.plan-level-five').data("link");
            $('.buy-bar--inner strong').fadeOut(500, function() {
                $(this).text(title).fadeIn(500);
            });
            $('.buy-bar--inner a').prop("href", link)
        }
    });

    $('.buy-bar--close').click(function(){
        $('.buy-bar').removeClass('is-active');
        $('.plan-level').removeClass('is-active');
    });

};

module.exports = table;
