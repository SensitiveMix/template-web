
 /*#imgList*/
        var imgLeftLenght = 0;   
        var movePx=580;//ÿ���л�������(����ͼƬ�������) ��ʽ�������ұ߾�+ͼƬ��ȣ�*ÿ���л���ͼƬ����  
        var imgNum=1;//ÿ����ʾ��ͼƬ����__�޸Ĵ˴�������ͬ#imgList��ʽ�Ŀ��һ���޸Ĺ�ʽ�������ұ߾�+ͼƬ��ȣ�*imgNum  
        var speedSwitch=500;//�л��ٶ�(����)  
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

/*ѡ�*/
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
