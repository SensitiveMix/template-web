
 /*#imgList*/
        var imgLeftLenght = 0;   
        var movePx=580;//每次切换的像素(包含图片宽度与间距) 公式：（左右边距+图片宽度）*每次切换的图片数量  
        var imgNum=1;//每次显示的图片个数__修改此处必须连同#imgList样式的宽度一起修改公式：（左右边距+图片宽度）*imgNum  
        var speedSwitch=500;//切换速度(毫秒)  
        $(document).ready(function() {   
  
            var imgLiNum = $("#imgList>ul>li").length;   
            $("#swihLeft").click(function() {   
                imgLeftLenght += movePx;   
                $("#imgListUl").animate({ marginLeft: imgLeftLenght }, 500);   
                $("#swihRight").css("display", "block");   
                if (imgLeftLenght == 0) {   
                    $("#swihLeft").css("display", "none");   
                }   
            }).css("display", "none");   
  
            $("#swihRight").css("display", "none").click(function() {   
                imgLeftLenght -= movePx;   
                $("#imgListUl").animate({ marginLeft: imgLeftLenght }, speedSwitch);   
                $("#swihLeft").css("display", "block");   
                if (0 == (imgLiNum - imgNum) * movePx + imgLeftLenght) {  
                    $("#swihRight").css("display", "none");   
                }   
            });   
  
            if (imgLiNum > imgNum) {   
                $("#swihRight").css("display", "block");   
            }   
            $("#imgListUl>li").click(function() {   
                $(this).siblings().removeClass("boRed");   
                $(this).addClass("boRed");   
            })   
  
        })  
		 
/*#flexslider*/
$(function() {
    $("#flexslider").flexslider({
		directionNav: false,
		animation: "slide",
		itemWidth: 580,
		itemMargin: 40,
		controlNav: true,
		pauseOnHover: true,
		move: "2"
	});
});	

/*选项卡*/
    $(function(){
        var $div_li =$(".recruit h2 a");
        $div_li.mouseover(function(){
            $(this).addClass("on") 
                   .siblings().removeClass("on"); 
            var index =  $div_li.index(this);
            $(".recruit-ctr > div")      
                    .eq(index).show()
                    .siblings().hide();
        })
    });

/*#recruit*/
$(function() {
    $("#recruit").flexslider({
		directionNav: true,
		animation: "slide",
		itemWidth: 383,
		itemMargin:0,
		controlNav: false,
		move: "1",
	});
});	
