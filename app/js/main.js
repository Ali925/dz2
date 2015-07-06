$(document).ready(function(){

     $(".head-container_foot_nav-last").mouseenter(function(){
         $(".head-container_foot_nav-tri").css({"background-color":"rgb(220,230,240)"});
     });

     $(".head-container_foot_nav-last").mouseleave(function(){
         $(".head-container_foot_nav-tri").css({"background-color":"rgb(247,247,247)"});
     });

     $(".sidebar_nav-link").click(function(){
         if($(this).hasClass("sidebar_nav-active")===false){
         $(".sidebar_nav-link").removeClass("sidebar_nav-active");
         $(".sidebar_nav_open").hide();
       }
         $(this).toggleClass("sidebar_nav-active");
         $(this).next().stop(true, true).slideToggle(300);
     });

     $(".top-nav_right_opts-select").change(function(){
      if($(".top-nav_right_opts-select").val()==='grid'){
      $(".items").hide();
      $("#grid").show();
      $(".top-nav").hide();
      $(".bottom-nav").show();     
    }
     });


     $(".bottom-nav_left-select").change(function(){
      if($(".bottom-nav_left-select").val()==='lines'){
          $(".items").show();
     $("#grid").hide();
      $(".top-nav").show();
      $(".bottom-nav").hide(); 
    }
     });

});