define(['jquery'],function ($) {
	function ScrollTo(opts){
		//$.extend():如果用户传递了参数opts，则用户的参数覆盖默认的参数
		//如果用户没有传参，则用默认的参数ScrollTo.DEFAULTS
		//$.extend()的第二个参数为默认提供的参数，第三个为给定的参数，第一个参数为，生成的新对象

		this.opts=$.extend({},ScrollTo.DEFAULTS,opts);

	}

	ScrollTo.prototype.move = function() {
		//判断滚动条是否已经达到目的地
		if ($(window).scrollTop() != this.opts.dest) {
			//判断是否在运动者，只有滚动条并不在运动是才执行
			if (!$('html,body').is(':animated')) {
				$('html,body').animate({
					scrollTop:this.opts.dest
				},this.opts.speed);
			}
		}
	};

	ScrollTo.prototype.go=function(){
		//只要判断滚动条还没到达目的的就可以执行
		if ($(window).scrollTop() != this.opts.dest) {
			$('html,body').scrollTop(this.opts.dest);
		}
	};

	//给函数ScrollTo添加一个属性，用来存放默认的运动属性
	ScrollTo.DEFAULTS={
		dest:0,		//运动到哪里（位置）
		speed:800	//运动的速度
	};
	return{
		ScrollTo:ScrollTo
	};

}); 