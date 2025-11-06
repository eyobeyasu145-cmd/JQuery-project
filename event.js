
//   $("#btn").dblclick(function(){
//   $("#img1").css('width','70px')
// }); // double click

//  $(function(){
//  $("p").hide();
//  $("#btn").click(function(){
//  $("p").show();
//  });
// }); =
 $("document").ready(function(){
    //  $("#btn2").click(function(){
    //      $("#btn2").text("subscibed")
    //  });
    //  $("#btn2").dblclick(function(){
    //      $("#btn2").text("subscibe")
    //  });
//  $("#img1").mouseenter(function(){
//   $("#img1").css('width','50px')
//  })
//  $("#img1").mouseleave(function(){
//     $("#img1").css('width','220px')

//  })
  $("#img1").hover(func1,func2);
    function func1(){
 $("#img1").css('width','1200px')

    }
    function func2(){
 $("#img1").css('width','150px')

    }



  });