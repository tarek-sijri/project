$(document).ready(function (){

   

$(".gear-check").click(function ()
{
 $(".color-option").fadeToggle(); 
});


var color = $(".color-option ul li");
color
.eq(0).css("background-color","red").end()
.eq(1).css("background-color","#800080").end()
.eq(2).css("background-color","blue").end()
.eq(3).css("background-color","yellow");
color.click(function ()
{
$("link[href*='theme']").attr("href",$(this).attr("data-value"));
});


var scrolltop=$("#scroll-up");
$(window).scroll(function ()
{
console.log($(this).scrollTop());
 $(this).scrollTop()>=400 ?scrolltop.show() : scrolltop.fadeOut();  



});
scrolltop.click(function ()
{
$("html,body").animate({scrollTop : 0 },600);
});
});

function myFunction(){
 console.log(5+6);
}



 