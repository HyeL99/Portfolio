const elFooter = document.querySelector('footer');
const elHeader = document.querySelector('header');
const elMain = document.querySelector('main');
const wrap = document.querySelector('#wrap');
const lnbBtn = document.querySelector('.lnbBtn');

setMainH();
/*
    //jQuery event script
    $(window).on('resize', function(){
        setMainH();
    });
*/
//JavaScript event script
window.addEventListener('resize', function(){
    setMainH();
});

let click=false;
//menu script
lnbBtn.addEventListener('click', function(){
    wrap.classList.toggle('active');
})

//  메인의 세로 길이 구하기
function setMainH(){
    let footerTop = elFooter.offsetHeight;  // footer의 padding 포함 높이 
    let headerH = elHeader.offsetHeight;     // header의 높이
    let winH = $(window).height();          // 브라우저의 높이

    console.log('footerTop ? ', footerTop);
    console.log('headerH ? ', headerH);
    console.log('winH ? ', winH);


    // main의 높이는 화면 전체 세로값에서 헤더와 푸터의 높이를 빼준 값이다.
    let mainH = winH - (footerTop + headerH);
    console.log('mainH ? ',mainH);

    // main의 높이값 출력
    //$('main').css({height:mainH});
    if(document.querySelector('main').id == 'staff'){
        let elStaffMain = document.querySelector('#staff');
        if(mainH > 540){
            elStaffMain.style.height = `${mainH}px`;
        }else{
            elStaffMain.style.height = '540px';
        }
    }else{
        elMain.style.height = `${mainH}px`; // px을 꼭 붙여줘야 한다.
    }
    console.log('mainH ? ', elMain.offsetHeight);
}