window.onload=function(){
	var banner_slider=$('#banner_slider'),
		pics=$('#banner_slider_pics'),
		items=$('#banner_slider_pics .cards'),
		pic_width=items.eq(0).width(),
		btn_prev=$('#arrow_prev'),
		btn_next=$('#arrow_next'),
		current=0,
		timmer=null,
		size=4
	// 定义一个鼠标滑过判断事件
	banner_slider.hover(function(){
		clearInterval(timmer);
	},function(){
		timmer=setInterval(slider,3000);
	});
	function slider(){
		current++;
		doSlider();
	}
	function doSlider(){
		
		// 图片轮播
		pics.stop().animate({
			left:-(current+1)*pic_width
		},1000,function(){
			if(current==size){
				current=0;
				pics.css('left',-(current+1)*pic_width+'px');
			}else if(current==-1){				
				current=size-1;
				pics.css('left',-(size)*pic_width+'px');
			}
		});
	}
	timmer=setInterval(slider,3000);
	// 点击上一张按钮切换图片
	btn_prev.click(function(){
		current--;
		doSlider();
	});
	// 点击下一张按钮切换图片	
	btn_next.click(function(){
		current++;
		doSlider();
	});
}