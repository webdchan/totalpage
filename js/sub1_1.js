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
 
  $(".tab_panel>li:not(:first)").hide();
  //첫번째를 제외한 나머지 내용

  $(".tab>li").click(function(){
    $(".tab>li").removeClass("tab_selected"); //기존선택된 selected 클래스 삭제
    $(this).addClass("tab_selected"); //새로 선택된 selected 클래스 생성
    $(".tab_panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).show(); //새로 선택된 내용 href 연결된 내용 보여주기


  });


  $("dl dt").click(function(){

    $("dt").removeClass("selected"); //기존 선택된 탭메뉴 제거
    $(this).addClass("selected"); //새로 선택된 탭메뉴 제거

  });

  // tab_visual1

  $(".tab1_visual1").click(function(){
    $("#tab1 dl").css({"background":"url(../images/sub1_2_tab1_visual1.png) no-repeat center top","transition":"all 1s"});
  });
  $(".tab1_visual2").click(function(){
    $("#tab1 dl").css({"background":"url(../images/sub1_2_tab1_visual2.png) no-repeat center top","transition":"all 1s"});
  });
  $(".tab1_visual3").click(function(){
    $("#tab1 dl").css({"background":"url(../images/sub1_2_tab1_visual3.png) no-repeat center top","transition":"all 1s"});
  });
  $(".tab1_visual4").click(function(){
    $("#tab1 dl").css({"background":"url(../images/sub1_2_tab1_visual4.png) no-repeat center top","transition":"all 1s"});
  });
  $(".tab2_visual1").click(function(){
    $("#tab2 dl").css({"background":"url(../images/sub1_2_tab2_visual1.png) no-repeat center top","transition":"all 1s"});
  });
  $(".tab2_visual2").click(function(){
    $("#tab2 dl").css({"background":"url(../images/sub1_2_tab2_visual2.png) no-repeat center top","transition":"all 1s"});
  });
  $(".tab2_visual3").click(function(){
    $("#tab2 dl").css({"background":"url(../images/sub1_2_tab2_visual3.png) no-repeat center top","transition":"all 1s"});
  });

  $(".tab>li:nth-of-type(1)").click(function(){
    $("#tab1 dl").css({"background":"url(../images/sub1_2_tab1_visual1.png) no-repeat center top","transition":"all 1s"});
  });

  $(".tab>li:nth-of-type(2)").click(function(){
    $("#tab2 dl").css({"background":"url(../images/sub1_2_tab2_visual1.png) no-repeat center top","transition":"all 1s"});
  });




});