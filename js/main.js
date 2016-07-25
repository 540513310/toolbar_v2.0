requirejs.config({
	paths:{
		 jquery:'jquery-1.10.1'//不需要.js后缀
	}
});

requirejs(['jquery'],function ($) {
	//$('body').css('background-color','red');
	$('#backTop').on('click' , move);
	$(window).on('scroll',function  () {
		checkPosition($(window).height());
	});

	checkPosition($(window).height());

	function move () {
		$('html,body').animate({
			scrollTop:0
		},800);
	}

	function checkPosition(pos){
		if ($(window).scrollTop()>pos ) {
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}	
});