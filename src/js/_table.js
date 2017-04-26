
var table = function() {

    $('.plan-level').click(function(){
        $('.buy-bar').addClass('is-active');
        $('.plan-level').removeClass('is-active');
        if ($(this).hasClass('plan-level-one')) {
            $('.plan-level-one').addClass('is-active');
            var title = $('.plan-data.plan-level-one').data("title");
            var link = $('.plan-data.plan-level-one').data("link");
            $('.buy-bar--inner strong').text(title);   
            $('.buy-bar--inner a').prop("href", link)     
        }
        if ($(this).hasClass('plan-level-two')) {
            $('.plan-level-two').addClass('is-active');
            var title = $('.plan-data.plan-level-two').data("title");
            var link = $('.plan-data.plan-level-two').data("link");
            $('.buy-bar--inner strong').text(title);  
            $('.buy-bar--inner a').prop("href", link)                      
        }
        if ($(this).hasClass('plan-level-three')) {
            $('.plan-level-three').addClass('is-active');
            var title = $('.plan-data.plan-level-three').data("title");
            var link = $('.plan-data.plan-level-three').data("link");
            $('.buy-bar--inner strong').text(title); 
            $('.buy-bar--inner a').prop("href", link)
        }
        if ($(this).hasClass('plan-level-four')) {
            $('.plan-level-four').addClass('is-active');  
            var title = $('.plan-data.plan-level-four').data("title");
            var link = $('.plan-data.plan-level-four').data("link");        
            $('.buy-bar--inner strong').text(title);  
            $('.buy-bar--inner a').prop("href", link)
                    
        }
        if ($(this).hasClass('plan-level-five')) {
            $('.plan-level-five').addClass('is-active');    
            var title = $('.plan-data.plan-level-five').data("title");
            var link = $('.plan-data.plan-level-five').data("link");
            $('.buy-bar--inner strong').text(title); 
            $('.buy-bar--inner a').prop("href", link)    
        }
    });

    $('.buy-bar--close').click(function(){ 
        $('.buy-bar').removeClass('is-active');
        $('.plan-level').removeClass('is-active');    
    });


var topofDiv = $(".benefits-head").offset().top;
console.log(topofDiv);

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv)){
       $(".benefits-table-sticky").addClass('is-active');
    }
    else{
       $(".benefits-table-sticky").removeClass('is-active');
    }
});

};

module.exports = table;
