window.onload=function(){
	
	var index=0;
	$(".slide-nav ul li").mouseover(function(){
		index=$(this).index();
		$(".slide-nav ul li").eq(index).css({"background":"rgba(255, 255, 255, 0.3)","font-size":"15px"})
		.siblings().css({"background":"none","font-size":"16px"});
		huan(index);
	});
	
	function huan(index){
		$(".banner-content-list").eq(index).addClass("on").siblings().removeClass("on");
	};
	
	
};
