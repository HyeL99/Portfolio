const $section = document.querySelector('section');
const $filterBtns = document.querySelectorAll('.btns li'); //배열 스타일

window.addEventListener('load',function(){
  const iso = new Isotope( $section, {
    // options
    itemSelector: 'article',
    //layoutMode: 'masonry'
  });

  for(let $button of $filterBtns) { // $filterBtns의 item갯수만큼 반복
    $button.addEventListener('click',function(e){
      e.preventDefault();
      
      // 클릭할 때마다 각 아이템의 on클래스 삭제
      for(let $button of $filterBtns) {
        $button.classList.remove('on');
      }

      //클릭한 버튼에 클래스on 부여
      e.currentTarget.classList.add('on');

      //filtering
      //클릭한 버튼에 있는 a태그의 속성 href의 value값 가져옴
      const filtering = document.querySelector('.on a').getAttribute('href')
      console.log(filtering)

      //버튼을 누르면 필터링 작동 (플러그인 사용)
      iso.arrange({filter:filtering});
    })
  }

  //각 article을 클릭하면 팝업창 띄움
  const $items = document.querySelectorAll('article');  //각 article을 변수(배열)에 
  const $popup = document.querySelector('#popup');
  const $closeBtn = document.querySelector('#closeBtn')
  for(let $item of $items){
    $item.addEventListener('click', (e)=> {
      //클릭한 article img의 src값, p를 변수에 저장
      const img = e.currentTarget.querySelector('img').getAttribute('src');
      const title = e.currentTarget.querySelector('h2').innerText;
      const desc = e.currentTarget.querySelector('p').innerText;

      //화면너비
      const winW = document.body.clientWidth;
      if(winW > 767) {
        //pop에 위의 변수를 적용
        $popup.querySelector('img').setAttribute('src',img);
        $popup.querySelector('h2').innerText = title;
        $popup.querySelector('p').innerText = desc;

        $popup.classList.add('on');
      }
    })
    window.addEventListener('resize',function(){
      const $onPopup = document.querySelector('#popup.on')
      const winW = document.body.clientWidth;
          if(winW <= 767) {
            $popup.classList.remove('on');
          }
    });
    $closeBtn.addEventListener('click',function(){
      $popup.classList.remove('on');
    })
  }
})