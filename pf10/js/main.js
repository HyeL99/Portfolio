const $hCon = document.querySelector('.header_container');

function toggleActive(){
    $hCon.classList.toggle('active');
}

$(function(){
    $('.gnbList ul').slideUp();
    if($(window).width() > 1169){
        $('.gnbList ul').slideDown();
        $('.header_container').removeClass('active');
    } else {
        $('.gnbList').click(function(){
            $(this).toggleClass('active');
            $(this).children('ul').slideToggle();
            $(this).siblings('li').removeClass('active');
            $(this).siblings('li').children('ul').slideUp();
        });
    };

    $('#keepBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings('button').removeClass('active');
        $('.eventContent ul').addClass('keep');
        $('.eventContent ul').removeClass('end');
        console.log('#keepBtn')
    });
    $('#endBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings('button').removeClass('active');
        $('.eventContent ul').addClass('end');
        $('.eventContent ul').removeClass('keep');
        console.log('#endBtn')
    });
});

$(window).resize(function(){
    if($(window).width() > 1169){
        $('.gnbList ul').slideDown();
        if($('.header_container').hasClass('active')){
            $('.header_container').css('left','0');
        }
    }else{
        $('.header_container').removeAttr('style');
        $('.gnbList:not(.active) ul').slideUp(0);
    }
})