requirejs.config({
	paths:{
		 jquery:'jquery-1.10.1'//不需要.js后缀
	}
});

requirejs(['jquery' ,'scrollTo'],function ($,scrollto) {
	//使用已经封装的模块ScrollTo中的move和go方法
	var scroll = new scrollto.ScrollTo({

	});
	$('#backTop').on('click' ,$.proxy(scroll.move,scroll));
	//$('#backTop').on('click' , move);

	$(window).on('scroll',function  () {
		checkPosition($(window).height());
	});

	checkPosition($(window).height());

	//运动到顶部
	function move () {
		$('html,body').animate({
			scrollTop:0
		},800);
	}

	//直接到达顶部
	function go(){
		$('html,body').scrollTop(0);
	}

	function checkPosition(pos){
		if ($(window).scrollTop()>pos ) {
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}	
});