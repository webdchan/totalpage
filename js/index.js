$(document).ready(function(){

	//이미지 전환효과 함수생성
  let showImg=0;  //기존이미지
  let nextImg=0;  //새이미지

  function changeImg(){  /*일반함수*/

    nextImg++;
    ImgCount=$(".main_visual .visual li").length;

    if(nextImg==ImgCount){  //마지막이미지일때 다시 첫번째 이미지로  
			nextImg=0;
		}

    $(".main_visual .visual li").eq(showImg).removeClass("imgVisible");  //이미지효과준 클래스 제거(기존 이미지)
		$(".main_visual .visual li").eq(nextImg).addClass("imgVisible"); //이미지효과준 클래스 생성(새로 나타나는 이미지)
		$(".main_visual .btn>span").eq(showImg).removeClass("active"); //기존 버튼	
    $(".main_visual .btn>span").eq(nextImg).addClass("active"); //선택된 버튼
			
		showImg=nextImg;

  }

  timer1=setInterval(changeImg,5000);


  //텍스트 전환효과 함수생성
  let showText=0;  //기존이미지
  let nextText=0;  //새이미지

  function changeText(){  /*일반함수*/

    nextText++;
    TextCount=$(".main_visual .visual li").length;

    if(nextText==TextCount){  //마지막이미지일때 다시 첫번째 이미지로  
			nextText=0;
		}

    $(".main_visual .visual li .Vtext").eq(showText).removeClass("textVisible");  
		$(".main_visual .visual li .Vtext").eq(nextText).addClass("textVisible"); 
		$(".main_visual .btn>span").eq(showText).removeClass("active"); 
    $(".main_visual .btn>span").eq(nextText).addClass("active"); 
			
		showText=nextText;

  }

  timer2=setInterval(changeText,5000);


  //버튼클릭시....
  $(".main_visual .btn>span").click(function(){

    clearInterval(timer1); 
		clearInterval(timer2);

    nextImg=$(this).index();  
		nextText=$(this).index(); 

    $(".main_visual .visual li").eq(showImg).removeClass("imgVisible"); 
		$(".main_visual .visual li").eq(nextImg).addClass("imgVisible");
    $(".main_visual .visual li .Vtext").eq(showText).removeClass("textVisible");  
		$(".main_visual .visual li .Vtext").eq(nextText).addClass("textVisible"); 
		$(".main_visual .btn>span").eq(showImg).removeClass("active"); 	
    $(".main_visual .btn>span").eq(nextImg).addClass("active"); 			
		showImg=nextImg;
 
	
    timer1=setInterval(changeImg,5000);
    timer2=setInterval(changeText,5000);

  });

  /* allmenu & menu-toggle_btn  */
  
  $(".menu_toggle_btn").click(function(){
    $(this).toggleClass("menu-open");
    $(".allmenu").slideToggle(500);

  });

   /* 퀵메뉴 이미지오버 */
   $(".quick_content>li").hover(function(){
    let qnum=$(this).index()+1; //전역변수
    $(this).find(">a>img").attr({"src":"images/main_contenton_0"+qnum+".png"});
    
  },function(){
    let qnum=$(this).index()+1;
    $(this).find(">a>img").attr({"src":"images/main_content0"+qnum+".png"});

  });

  //animate부분(close/open)
  qchk=true;

  $(".quick_toggle").click(function(){

    if(qchk){
      $(this).removeClass("quick_toggle");
      $(this).addClass("quick_close"); //open 이미지 불러옴
      $(this).stop().animate({marginLeft:"-255px"},500); //close버튼 오른쪽으로 이동
      $(".quickmenu").stop(true,true).css({background:"rgba(87, 38, 80, 0.9)"}).animate({marginLeft:"-255px"},500); //퀵메뉴 오른쪽으로 이동
      qchk=false;
      $(".quickmenu>ul>li").css({borderBottom:"none"});
    }else{
      $(this).removeClass("quick_close"); //open 이미지 삭제
      $(this).addClass("quick_toggle");
      $(this).stop().animate({marginLeft:"0px"},500); //close버튼 원래 위치로 이동
      $(".quickmenu").stop(true,true).css({background:"rgba(0,0,0,0.8)"}).animate({marginLeft:"0px"},500); //퀵메뉴 원래 위치로 이동
      $(".quickmenu>ul>li").css({borderBottom:"1px solid rgba(202,202,202,0.3)"});
      qchk=true;

    }
  });

 
});