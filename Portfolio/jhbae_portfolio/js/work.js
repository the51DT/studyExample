var audio = document.getElementById('audio_play'); 

addEventListener("mouseover", function(event){
	if(event.target.tagName === "LI"){
	  li = Array.from(event.target.parentElement.children);
    index = li.indexOf(event.target)
  	// console.log("index : ", index);
    Max_Font = 25;
    
    // for문을 사용하여 i가 0이고 16과 같거나 작고 (li.length 를 사용해도 된다) i는 증가한다.
    // 지정해둔 max의 값에 -4 곱하기 i를 해준다.
    // 내가 선택한 번호보다 앞의 숫자는 각각의 인덱스 값에 + i를 해주고
    // 내가 선택한 번호보다 뒤의 숫자는 각각의 인덱스 값에 - i를 해줍니다.
    // 만약 front 나 back 일시에 폰트 사이즈에 + "px"을 하여 적용 시켜줍니다.
    // 마지막으로 다시 리턴시켜줍니다.
    for(let i = 0; i <= 10; i++){
    	fontSize = Max_Font - 4 * i;
      front = li[index + i];
      back = li[index - i];
      if(front){
        front.style.fontSize = fontSize + "px";
      }
      if(back){
        back.style.fontSize = fontSize + "px";
      }
    	if(!(front || back)) return;
    }
  }
});


/* 갤러리 효과에 사용된 JS입니다. */
var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),
    
    _duration = 300, // 기본 속도.
    _addDuration = 200, // 추가 속도.

    _isAni = false,

    _galleryW = 1500,
    _cuId = 0,
    _exId = null,
    _max = null;

//블럭 단위로 기능 분리.
//이벤트 핸들러 기능.
function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    // console.log(parentEl) // 부모요소를 찾아옴.
    // console.log(index);
    if(_isAni) return;
    if(!parentEl.classList.contains("selected")) {
        //비활성화 되어있는 리스트만 선별.
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        //parentEl.classList.add("selected");
        listItemEls[_cuId].classList.add("selected"); // 위와 기능이 동일.
        //실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();
        _exId = _cuId;
    }
}
function onTransitionEnd(e) {
    console.log("Transition 완료");
    _isAni = false;
    // 애니메이션이 완료 후 버튼이 클릭 가능한 상태.
    viewContainerEl.style.removeProperty("transition"); 
    // viewContainerEl 에 부여된 transition CSS 속성을 제거.
}

//----------
//이미지 갤러리의 기능들.
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
}
function gallerySlide() {
    // 속도.
    //console.log(_exId, _cuId, _cuId - _exId);
    // 만약에 0 번째(exId) 상태인 경우, 1 번째를 클릭했을 때. 0-1 1 만큼의 갭이 발생
    // 만약에 0 번째(exId) 상태인 경우, 3 번째를 클릭했을 때. 0-3 3 만큼의 갭이 발생 + 추가 시간을 더함.

    // 절대값. - 얼마나 떨어져(갭의 차이가) 있는지 찾기 위해서.
    // Math.abs(0 - 3); // -3 -> 3.
    // Math.abs(3 - 0); // 3 -> 3.

    var duration = _duration + Math.abs(_cuId - _exId) * _addDuration;
    //console.log(duration);
    _isAni = true;
    // 애니메이션이 되는 중에는 썸네일을 클릭해도 이동되지 않도록 막기 위한 Boolean 변수.

    //viewContainerEl.style.left = _galleryW * _cuId * -1 + "px";
    viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
    viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.030, 0.515, 0.955)";
    // cubic-bezier(0.455, 0.030, 0.515, 0.955)
    // https://matthewlein.com/tools/ceaser
    // css 의 easing animation tool - 가속도 계산되어 있는 링크
}

//----------
//이벤트가 바인딩되는 기능들.
function addEvent() {
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
    // viewContainerEl 의 transition 이 완료되는 시점을 찾아 이벤트를 발생 시켜준다.
    // transitionend - transition 스타일이 있는 경우, 모든 움직임이 완료될 때 이벤트.
    // webkitTransitionend - transitionend 의 크로스 브라우징 방법.(-webkit- 엔진에서 사용되는 이벤트)
    // -webkit- -moz- -o- -ms-
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
}
//초기화 기능.
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    galleryResize();
    addEvent();
}
// 초기화 함수 호출.
init();