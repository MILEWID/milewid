$(document).ready(function()
{

  $("#profile").hover(function(e){
    $('#btn_nombre').animate({
      right: '0'
    });
    });
  $(window).scroll(function(){
    if($(this).scrollTop() >0){
      $('header').addClass('header2');
      $('h1').addClass('menu_bar2');
      $('h1').removeClass('menu_bar');
      $('#btn_nombre').animate({
        right: '0'
      });
      if($(window).width()<650){
        $("#btn_nombre").css("top", "590px");
      }
      else{
        $("#btn_nombre").css("top", "220px");
      }
    }
    else{
      $('header').removeClass('header2');
      $('h1').removeClass('menu_bar2');
      $('h1').addClass('menu_bar');
      if($(window).width()<650){

        $("#btn_nombre").css("top", "790px");
      }
      else{
        $("#btn_nombre").css("top", "420px");
      }
    }
  });
});

$(document).ready(main);

var contador = 1;
var contador2 =1;
function main(){

	$('#menu').click(function(e){
      if($( "h1" ).hasClass( "menu_bar2")== false){
        if(contador2 == 1){
          $('header').animate({
            left: '0'
          });
          contador2 = 0;
        } else {
          contador2 = 1;
          $('header').animate({
            left: '-100%'
          });
        }
      }
      else{
        if(contador== 1){
          $('header').animate({
            left: '0'
          });
          contador = 0;
        } else {
          contador = 1;
          $('header').animate({
            left: '-100%'
          });
        }
      }
	});
};
