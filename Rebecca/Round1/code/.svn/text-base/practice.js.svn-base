var $first=$('.first_container');
var $logo=$('.logo');
TweenMax.to('.bg',7,{x:'-40px',ease:Ease.easeInOut})
var tl=new TimelineLite();
tl.to([$first,$logo],1,{autoAlpha:1})
  .staggerTo(['.Capital','.Customer'],0.5,{y:0,autoAlpha:1,ease:Ease.easeOut},.2)
  .to(['.Capital','.Customer'],0.5,{autoAlpha:0},'+=1.5')
  .staggerTo(['.let','.family'],0.5,{y:0,autoAlpha:1,ease:Ease.easeOut},.2)
  .to('.final_container',1,{opacity:1},"+=1.5")
  .staggerTo('.final_title',0.5,{autoAlpha:1,y:0,ease:Ease.easeOut},.2)
  .staggerTo('.final_copy',0.5,{autoAlpha:1,y:0,delay:0.3,ease:Ease.easeOut},.2)
  .to('.cta',0.5,{autoAlpha:1,y:0,delay:0.3,ease:Ease.easeOut})

$('#content').hover(function(){
	TweenMax.to('.normal',0.5,{autoAlpha:0});
	TweenMax.to('.active',0.5,{autoAlpha:1});
},function(){
	TweenMax.to('.normal',0.5,{autoAlpha:1});
	TweenMax.to('.active',0.5,{autoAlpha:0});
})