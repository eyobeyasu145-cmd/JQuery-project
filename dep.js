$(document).ready(function(){





// let Cs=$(".cs")
// let it=$("#it")
// let mydep=$(".deplist")
// console.log(mydep + " this is h1"+ $("h1"))
// $("li").first().css('background' , 'green')
// $("li").last().css('background' , 'green')
// $("li").odd().css('background' , 'red')
// $("li").even().css('background' , 'yellow')
// // for(let i=0 ; i<2;i++ ){
// //   $("li:eq(i)").css('background' , 'blue')

// // }
// // for (let i =0 ; i<3 ; i++){
// //        $("h1:eq(i)").hide();
// // }
$(".deplist ul").prepend("<li> Data Science</li>");

$(".deplist ul").append("<li> Informatation system</li>")

$(".deplist .se").before("<li> Aritificail Intelligence</li>")

$(".deplist #it").after("<li> Cyber security</li>")

 $("#dduBtn").click(function(){
      $(".deplist ul").prepend("<li>Mathematics</li>")});
// hove
      $(".deplist ul").on("mouseenter" , "li", function() {$(this).css("color", "red")});
      $(".deplist ul").on("mouseleave" , "li", function() {$(this).css("color", "")});

 $(".deplist ul li").dblclick(function(){
      $(this).fadeOut(500, function(){$(this).remove(); })
      
      });


      $("#numInput").on("keyup", function(){
        const value =$(this).val();
        if(value === ""){
          $("#msg").text("");
        } else if (isNaN(value)){
          $("#msg").text("Only numbers are allowed ").css("color", "red");
        } else {
           $("#msg").text("valid nuber").css("color","green");
        }
      })

})