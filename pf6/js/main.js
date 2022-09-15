$(function(){
    $(document).click(function(){
        let lnb = $('#lnb');
        if($('#gnbBtn span').is(event.target) || $('#gnbBtn').is(event.target)){
            $('#lnb').css({'transform':'translateX(100%)'})
            $('#lnbBg').css('display','block');
        } else if($('#loginPopup').is(event.target)){
        } else if($('#loginPopup *').is(event.target)){
        } else if($('#lnb').is(event.target)){
        } else if($('#lnb *').is(event.target)){
        } else {
            $('#lnb').css({'transform':'translateX(0%)'});
            $('#lnbBg').css('display','none');
            $('#loginPopup').css('display','none');
        }
        console.log(event.target)
    });
    $('.menuBtn').click(function(){
        $(this).parent('li').toggleClass('active');
        $(this).siblings('div').slideToggle();
        $('#lnb').removeClass('active');
    });
    $('.popup').click(function(){
        $('#lnb').css({'transform':'translateX(0%)'});
        $('#loginPopup').css('display','block');
    });
})
function closePopup(){
    $('#loginPopup').css('display','none');
    $('#lnbBg').css('display','none');
}