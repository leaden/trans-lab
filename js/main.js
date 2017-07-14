/* Holiii acá va tu código también */

/*codigo api*/
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

/*codigo nav*/
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

/*validacion usuario*/
function correo(){
        var email = $("#inputCorreo").val();
        console.log(emailValue);
        if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
            $("#espacio-error-email").append('<p class="red">Tu email es invalido</p>');
            $("#inputCorreo").val("");
            console.log("");
            return false;
        } else{
            localStorage.setItem('email',email);
            return true;
        }
    }
    /*validacion contraseña*/
    function contraseña(){
        var pass = $("#inputPass").val();
          console.log(pass);
        if (!(/^\d{8}(0-9)*$/.test("#inputPass").val())) {
        $("#error-contraseña").append('<p class="red">Tu contraseña es invalida</p>');
            $("#inputPass").val("");
            console.log("");
            return false;
        }else{
            localStorage.setItem('pass',pass);
            return true;
        }
    }



