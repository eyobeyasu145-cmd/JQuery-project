
 $("document").ready(function(){

   $("#hide").click(function(){
  $("#img1").hide(3000);
  } );
  
   $("#show").click(function(){
  $("#img1").show(3000);
  } );
   
   $("#toggle").click(function(){
  $("#img1").toggle(3000);
  } );
   
  $("#fade").click(function(){
      $("#img1").fadeToggle(3000);})

  $("#fade-in").click(function(){
     $("#img1").fadeIn(3000);
  })
  $("#fade-out").click(function(){
     $("#img1").fadeOut(3000);
  })
  $("#slide-up").click(function(){
     $("#img1").slideUp(3000);
  })
  $("#slide-down").click(function(){
     $("#img1").slideDown(3000);
  })
  $("#slide-toggle").click(function(){
     $("#img1").slideToggle(3000);
  })
  $("#stop").click(function(){
     $("#img1").stop();
  })


  });