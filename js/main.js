/* Holiii acá va tu código también */

$(document).ready(function(){
  $.$.ajax({
  	url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=22179163',
  	type: 'GET',
  	dataType: 'JSON',
  })
  .done(function() {
  	console.log("success");
  })
  .fail(function() {
  	console.log("error");
  })
  .always(function() {
  	console.log("complete");
  });
  
});


    $(document).ready(function(){
       
       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
      		e.preventDefault();
      		$('body').toggleClass('nav-expanded');
      	});
      	$('#nav-close').on('click',function(e){
      		e.preventDefault();
      		$('body').removeClass('nav-expanded');
      	});
      	
      	
      	// Initialize navgoco with default options
        $(".main-menu").navgoco({
            caret: '<span class="caret"></span>',
            accordion: false,
            openClass: 'open',
            save: true,
            cookie: {
                name: 'navgoco',
                expires: false,
                path: '/'
            },
            slide: {
                duration: 300,
                easing: 'swing'
            }
        });
  
        	
      });