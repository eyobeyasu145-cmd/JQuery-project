function func1(){
  // $("div").css('background-color' , 'orange');
  $(".p1").css('font-style','italic');
    // $("#div3 li").text("all list is similar now");
    $("#div3 ul").append("<li> New list<li>");
    $("#div3 ul").prepend("<li>the first list item<li>");
    $("#div3 ul").after("<li>after selector<li>");
    $("#div3 ul").before("<li>what means before selector<li>");
    

  //  $("div > p").fadeToggle();
    //  $("p:first").fadeToggle();
}
for (let i =0 ; i<3 ; i++){
       $("p:eq(i)").hide();
}
