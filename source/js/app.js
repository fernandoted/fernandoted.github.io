// App js of Fernando Ted personal website - fernandoted.github.io
// https://github.com/fernandoted
// 03-03-17


/*$(function() {
	$(window).scroll(function() {
		var window_scrolltop) = $(this).scrollTop();
		
		// apply on every element with "parallax" class
		$('.parallax').each(function() {
			var obj = $(this);
			
			// to guarantee that we work just on visible elements on the screen
			if ( window_scrolltop >= obj.position().top - obj.height()
				&& window_scrolltop <= obj.position().top - obj.height()) {
					
					// data-divisor atributte defines the speed of the parallax effect
					var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data-divisor');
					
					// correct the difference of the first element
					if (obj.is(':first-child')) {
						var bg-pos = (window_scrolltop - obj.position().top) / divisor;
					} else {
						var bg-pos = (window_scrolltop - obj.position().top + (obj.height() - 100)) / divisor;
					}
					
					// modifying background position
					obj.css({
						'background-position' : '50%-' + bg-pos + 'px'
					});
					
					// first text animation
					obj.children('.text').css({
						'bottom' : (window_scrolltop - obj.position().top + 100) + 'px'
					});
				} // element visible on screen
		}); // fuction in each element with "parallax" class
	}); // scroll function
}); // jQuery*/

$(function(){
	$(window).scroll(function(){
		var window_scrolltop = $(this).scrollTop();
		
		// Passa por cada elemento com a classe .parallax
		$('.parallax').each(function(){
			var obj = $(this);
			
			// Garante que apenas trabalhemos no elemento que está visível na tela
			if ( window_scrolltop >= obj.position().top - obj.height() 
				&& window_scrolltop <= obj.position().top + obj.height()) {
				
				// O atributo data-divisor vai definir a velocidade do efeito
				var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data-divisor');
				
				// Corrige a diferença do primeiro elemento
				if ( obj.is(':first-child') ) {
					var bg_pos = ( window_scrolltop - obj.position().top ) / divisor;
				} else {
					var bg_pos = ( window_scrolltop - obj.position().top + ( obj.height() ) ) / divisor;
				}
				
				// Modifica a posição do bg
				obj.css({
					'background-position' : '0% -' + bg_pos + 'px'
				});
				
				// Animação do primeiro texto
				/*obj.children('.text').css({
					'bottom' : ( window_scrolltop - obj.position().top + 100 ) + 'px'
				});*/
				
			} // Garante que apenas trabalhemos no elemento que está visível na tela
		}); // $('.parallax').each(function(){ ...
	}); // $(window).scroll(function(){ ...
}); // jQuery

