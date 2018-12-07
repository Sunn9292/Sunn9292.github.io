//Validate login form

$(document).ready(function(){
    console.log('radi');
    $('#login-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                minlength: 6,
                required: true
            }
        },
        success: function(label) {
            label.text('OK!').addClass('valid');
          }
        
    })
  });
  
  