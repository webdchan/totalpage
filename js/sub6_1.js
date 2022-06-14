$(document).ready(function(){

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

  $(".quick_close").click(function(){

    if(qchk){
      $(this).removeClass("quick_close");
      $(this).addClass("quick_toggle"); //open 이미지 불러옴
      $(this).stop().animate({marginLeft:"0px"},500); //close버튼 오른쪽으로 이동
      $(".quickmenu").stop(true,true).css({background:"rgba(0,0,0,0.9)"}).animate({marginLeft:"255px"},500); //퀵메뉴 오른쪽으로 이동
      $(".quickmenu>ul>li").css({borderBottom:"1px solid rgba(202,202,202,0.3)"});
      qchk=false;
    }else{
      $(this).removeClass("quick_toggle"); //open 이미지 삭제
      $(this).addClass("quick_close");
      $(this).stop().animate({marginLeft:"0px"},500); //close버튼 원래 위치로 이동
      $(".quickmenu").stop(true,true).css({background:"rgba(87, 38, 80, 0.9)"}).animate({marginLeft:"0px"},500); //퀵메뉴 원래 위치로 이동
      $(".quickmenu>ul>li").css({borderBottom:"none"});
      qchk=true;

    }
  });

   //nav 
   $(".topmenu").mouseenter(function(){ //주메뉴영역에 오버시
    $(this).find("li>.smenu").stop().slideDown();
    $(".menu_bg_box").stop().slideDown();
  });

  $("nav").mouseleave(function(){ //헤더영역을 나갔을 때
    $(this).find("li>.smenu").stop().slideUp();
    $(".menu_bg_box").stop().slideUp();
  });

  /* tabmenu */
  $(".tab li").click(function(){

    tval=$(this).index();
    tnum=+200*tval; //가로폭 200px씩 증가됨

    $(".tab_header .tab_highlight").animate({left:tnum});
    $(".tab li a").css("color", "#333"); //탭의 모든 글자색
    $(this).find(">a").css("color","rgb(240, 240, 240)"); //선택된 탭의 글자색

    $(".panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find(">a").attr("href")).fadeIn(); //새로 선택된 내용 href 연결된 내용 보여주기

  });

  /* 고객센터 고정 창 */
  $(window).scroll(function(){

    if($(this).scrollTop()>=300 && $(this).scrollTop()<2000){
      $(".right_fix_box").css({"opacity":"1"});
    }else{
      $(".right_fix_box").css({"opacity":"0.3"});
    }
  });

  
  $(".right_fix_box").hover(function(){
    $(this).css({"opacity":"1"});
  });


});