 $("document").ready(function(){
	 
	 
	 var $icon = $("header .icon-wrap .icon-content ul li:last-child");
	 var modal_con =$("header .icon-wrap .modal-con");
	 
	$icon.click(function(){
		if($(modal_con).css("display") == "none"){
			
			$(modal_con).show();
			
		}else{
			$(modal_con).hide()
		}
	}) //검색창 
	 var subnav = $("nav .nav-wrap .main-menu .sub-menu ul"),
		 mainnav = $("nav .nav-wrap .main-menu > ul > li");
	 $(subnav).hover(function(){
		 var index =$(subnav).index(this);
		 
		 $(mainnav).eq(index).addClass("hover") 
	 }, function(){
		 $(mainnav).removeClass("hover")
	 })//mainnav hover 

	 
	 
	 $(window).scroll(function(){
	var pos = $(window).scrollTop();
	 if(pos >= 200){
		 $("nav").addClass("fixed");
//		 $("nav .nav-wrap ul li a").css("color","#f2f2f2");
	 }else{
		 $("nav").removeClass("fixed");
//		 $("nav .nav-wrap ul li a").css("color","#f2f2f2");
	 }
	 }) //nav scroll fixed
	 
	 
	 var idx=0,
		 $slide =$(".banner-wrap ul li"),
		 length =$slide.length,
		$slide_menu = $(".banner-wrap .button-wrap .button-content .button");
	var interval = setInterval(timer, 3000);
	
	$slide_menu.eq(0).addClass("click");
	 
	 
	function timer(){
		idx++;
		if(idx >= length)
		idx =0;
		
		$slide.hide().eq(idx).show();
		
		$slide_menu.removeClass("click").eq(idx).addClass("click");
	}//timer

	 $slide_menu.hover(function(){
		idx = $(this).index();
		
		 $slide_menu.removeClass("click").eq(idx).addClass("click");
		 
		 $slide.hide().eq(idx).show();
		 clearInterval(interval);
	 }, function(){
		 
		 clearInterval(interval);
		 interval = setInterval(timer, 3000)
	 })//banner hover
	
	 
	var swiper = new Swiper(".swiper-container",{
		autoplay :{
			delay : 2500
		},
		loop :true,
		navigation:{
			nextEl :".swiper-button-next",
			prevEl :".swiper-button-prev"
		},
	pagination:{
			el:".swiper-pagination",
			clickable : true
		}
	}) ; //태블릿,모바일롤링배너 swiper
	 
	
	
	
	 
	 
	 
	 
	 $(".item-t .item-l img").click(function(){
		 var imgSrc = $(this).attr("src");
		 $(".item-t .item-r img").attr("src",imgSrc);
	 })//click
	 
	 var $slide_tab =$(".best-wrap .best_more .best-button"),
		 $slide_txt =$(".best-wrap .best_more .best-button span"),
		 $slide_content =$(".best-wrap .button_con");
	 
        	$slide_tab.click(function(){
            $slide_content.slideToggle("slow");
			$slide_txt.text($slide_txt.text()=="-닫기"?"+더보기":"-닫기");
			});//click(베스트상품 더보기)
	 
	 var $tabs_content=$(".md-wrap .md-con .img-con .tabs-con"),
	 	$tabs_list =$(".md-wrap .md-con .btn-con .tab li")
	 
	 $tabs_content.eq(0).show();
	 var i = 0;
	 $tabs_list.click(function(){
	 i = $(this).index();
	  
		 $tabs_list.removeClass("active").eq(i).addClass("active")
		 $tabs_content.hide().eq(i).show()
		 
	 })//mdpick_click
	 
	 
	 var  reset = false;
	 
	$(".md-wrap .md-con .arrow img").click(function(){
		var a =$(this).index();
		if (reset== true) return;
		setTimeout(function(){reset = false;},1000)
		reset = true;
//		console.log(a)
		if(a == 0){
			//왼쪽화살표
			
			$(".md-wrap .md-con .img-con .tabs-con").eq(i).find("ul").stop().animate({
				left:"+=276px"  //200 + 76
			},1000)
			
			for(var k=0; k < $(".md-wrap .md-con .img-con .tabs-con ul li").length; k++){
				var list = $(".md-wrap .md-con .img-con .tabs-con ul li").eq(k).offset().left;
				
				if(list >=1600){
					list =$(".md-wrap .md-con .img-con .tabs-con ul li").eq(k).css("left","-=2208px");
				}
				//200 * 8 = 1600
				//276 * 8 = 2208
				
			}
		}else{
			//오른쪽화살표
			$(".md-wrap .md-con .img-con .tabs-con").eq(i).find("ul").stop().animate({
				left:"-=276px"
			},1000)
			
			for(var k=0; k < $(".md-wrap .md-con .img-con ul li").length; k++){
				var list = $(".md-wrap .md-con .img-con ul li").eq(k).offset().left;
				
				if(list <= -400){
					list =$(".md-wrap .md-con .img-con ul li").eq(k).css("left","+=2208px")
				} // 아마도 뒤에 두개가 -이므로 200 *2 = 400?
			}
		}
	})//md-pick arrrow click
	 
		
		
//	$(window).scroll(function(){
//		var pos = $(window).scrollTop();
////		console.log(pos);
//		if(pos> 1000){
//			$("aside").fadeIn();
//		}else{
//			$("aside").fadeOut();
//			 }
//	})//window scroll

	 
	 var $tab_content = $(".brand-wrap .brand-con .img-wrap .tab-con"),
		 $tab_list =$(".brand-wrap .brand-con .brand-button .tabs li")
	
	 $tab_content.eq(0).show();
	 var h =0;
	 $tab_list.click(function(){
		 h = $(this).index();
		 
		 $tab_list.removeClass("active").eq(h).addClass("active")
		 $tab_content.hide().eq(h).show();
	 })//brand button click
	 
	 var reset = false;
	 
	 $(".brand-wrap .brand-con .arrow img").click(function(){
		var i = $(this).index();
		 if(reset == true) return;
		 setTimeout(function(){reset=false;},1000)
		 reset = true;
		 
			 if(i == 0){
				 
				 
				 
			 $(".brand-wrap .brand-con .img-wrap .tab-con").eq(h).find("ul").stop().animate({
				 left : "+=276px"
			 },1000)
			 //alert(h)
			 for(var a = 0; a <$(".brand-wrap .brand-con .img-wrap ul li").length; a++){
				 var list =$(".brand-wrap .brand-con .img-wrap ul li").eq(a).offset().left;
				 
				 if(list >=1600){
					 list =$(".brand-wrap .brand-con .img-wrap ul li").eq(a).css("left","-=2208px");
				 }
			 }
		 } else{
			 $(".brand-wrap .brand-con .img-wrap .tab-con").eq(h).find("ul").stop().animate({
				 left:"-=276px"
			 },1000)
			 //alert(h)
			 for(var a = 0; a <$(".brand-wrap .brand-con .img-wrap ul li").length; a++){
				 var list =$(".brand-wrap .brand-con .img-wrap ul li").eq(a).offset().left;
				 
				 if(list <= -400){
					 list  = $(".brand-wrap .brand-con .img-wrap ul li").eq(a).css("left","+=2208px")
				 }
			 }
		 }
	 }) //brand arrow img click
	 
	 
	 

	var $button_scroll= $("aside .bottom") 
	$button_scroll.click(function(){
		$("html, body").stop().animate({
			scrollTop : 0}, 500);
		return false;
	})//click
	 
	 var $m_main =$(".m-nav .m-right .m-layout .m-layout-l ul li"),
		 $m_sub = $(".m-nav .m-right .m-layout .m-layout-r ul");

	$m_sub.eq(0).show();
	 var h =0;
	$m_main.click(function(){
		h =$(this).index();
//		console.log(h)
		$m_main.removeClass("open").eq(h).addClass("open");
		$m_main.removeClass("click").eq(h).addClass("click");
		$m_sub.hide().eq(h).fadeIn(500)
	}) //모바일 메뉴

	var $slide_button =$(".m-nav .m-right img"),
		$slide_close = $(".m-nav .m-right .m-layout .m-layout-t img"),
		 $slide_m_menu =$(".m-nav .m-right .m-layout");

	 
        	$slide_button.click(function(){
			$slide_m_menu.fadeIn();
			});// open_click
	 		$slide_close.click(function(){
			$slide_m_menu.fadeOut();
	 		})//close_click
	 
	 
    });//end
			