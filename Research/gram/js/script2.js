// function penScrollEvent() {
//   var convertPx = {
//     vw: function(px){
//         px = parseFloat(px);
//         var ww = $(window).width();
//         return ww * px / 720;
//     }
//   }

//   let documentHeight = $(document).scrollTop();
//   let windowHeight = $(window).height();
//   let section6Top = jQuery('#section6').offset().top;
//   let section7Top = jQuery('#section7').offset().top;
//   let sectionScroll = section7Top-section6Top-windowHeight;
  
//   // console.log("windowHeight:", windowHeight);
//   // console.log("section6Top:", section6Top);
//   // console.log("section7Top:", section7Top);
//   // console.log(sectionScroll);

//   if (section6Top < documentHeight) {
//     $('.fixed-area').addClass('fixed');
//   } else {
//     $('.fixed-area').removeClass('fixed');
//   }

//   if (documentHeight >= section6Top+sectionScroll) {
//     $('.fixed-area').removeClass('fixed');
//     $('.fixed-area').addClass('absolute');
//   } else if (documentHeight < section6Top+sectionScroll && documentHeight >= section6Top){
//     $('.fixed-area').addClass('fixed');
//     $('.fixed-area').removeClass('absolute');
//   }
// }
// 윈도우가(창이) 스크롤될 때마다 실행되는 기능
// $(window).scroll(function () {
//   // mainScrollEvent 함수를 호출하여 실행시킴
//   penScrollEvent();
// })


gsap.set('.scrollDist3', {width:'100%', height:'30%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist3', start:'top bottom', end:'bottom bottom', scrub:0}})
.fromTo('.title-area', {y: 0},{y: -1000}, 0)
.fromTo('.line-area', {y: 0},{y: -1000}, 0)
.fromTo('.background-area', {y: 0},{y: -1000}, 0)
.fromTo('.sub-area', {y: 1000},{y: 0}, 0)

.fromTo('.pen1', {y: 555},{y: -300}, 0)
.fromTo('.pen1', {x: 130},{x: 500}, 0)
.fromTo('.pen1', {rotation: -50},{rotation: -40}, 0)

.fromTo('.pen2', {scale: 1},{scale: 0.15}, 0) 
.fromTo('.pen2', {y: 48},{y: -70}, 0)
.fromTo('.pen2', {x: -50},{x: -120}, 0)
.fromTo('.pen2', {rotation: -95},{rotation: -28}, 0)


gsap.set('.scrollDist2', {width:'100%', height:'30%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist2', start:'top bottom', end:'bottom bottom', scrub:0}})
.fromTo('.pen1', {y: 180},{y: 555}, 0)
.fromTo('.pen1', {x: -40},{x: 130}, 0)
.fromTo('.pen1', {rotation: -35},{rotation: -50}, 0)

.fromTo('.pen2', {y: 48},{y: 48}, 0)
.fromTo('.pen2', {x: -15},{x: -50}, 0)
.fromTo('.pen2', {rotation: -55},{rotation: -95}, 0)

gsap.set('.scrollDist1', {width:'100%', height:'30%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist1', start:'top top', end:'bottom bottom', scrub:0}})
.fromTo('.pen1', {y: 0},{y: 180}, 0)
.fromTo('.pen1', {x: 0},{x: -40}, 0)
.fromTo('.pen1', {rotation: 0},{rotation: -35}, 0)

.fromTo('.pen2', {y: 0},{y: 48}, 0) 
.fromTo('.pen2', {x: 0},{x: -15}, 0)
.fromTo('.pen2', {rotation: 0},{rotation: -55}, 0)