$(document).ready(main);
var contador = 1;
function main(){

	$('#menu').click(function(e){
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
	});
};
