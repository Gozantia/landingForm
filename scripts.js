let nameField= document.querySelector("#name");
let lastNameField= document.querySelector("#last-name");
let emailField= document.querySelector("#email");
let jobField= document.querySelector("#job");
// Document is ready
$(document).ready(function () {
    
    // Validate name
        $('#nameCheck').hide();  
        $('#name').keyup(function () {
            validatename();
        });
         
        function validatename() {
          let nameValue = $('#name').val();
          if (nameValue.length == '') {
          $('#nameCheck').show();
              nameError = false;
              return false;
          }
          else if((nameValue.length < 3)) {
            $('#name').addClass("error__Input");
              $('#nameCheck').show(300);
              $('#nameCheck').html
                ("**First Name is too short");
              nameError = false;
              return false;
          }
          else {
              $('#nameCheck').hide();
              $('#name').removeClass("error__Input");
          }

          buttonActive();
        }

        // Validate lastName
        $('#lastNameCheck').hide();  
        $('#last-name').keyup(function () {
            validatelastName();
        });
         
        function validatelastName() {
          let lastNameValue = $('#last-name').val();
          if (lastNameValue.length == '') {
          $('#lastNameCheck').show();
              lastNameError = false;
              return false;
          }
          else if((lastNameValue.length < 3)) {
            $('#last-name').addClass("error__Input");
              $('#lastNameCheck').show(300);
              $('#lastNameCheck').html
                ("**Last Name is too short");
              lastNameError = false;
              return false;
          }
          else {
              $('#lastNameCheck').hide();
              $('#last-name').removeClass("error__Input");
          }
          buttonActive();
        }

         // Validate Email
        const email =document.getElementById('email');
        email.addEventListener('blur', ()=>{
            let regex =
            /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let mailUser = email.value;
        if(regex.test(mailUser)){
            email.classList.remove( 'is-invalid');
            emailError = true;
            $('#emailCheck').hide();
            }
            else{
                email.classList.add( 'is-invalid');
                emailError = false;
                $('#emailCheck').show();
            }
            buttonActive()
        })

        // Validate job
        $('#jobCheck').hide();  
        $('#job').keyup(function () {
            validatejob();
        });
         
        function validatejob() {
          let jobValue = $('#job').val();
          if (jobValue.length == '') {
          $('#jobCheck').show();
              jobError = false;
              return false;
          }
          else if((jobValue.length < 3)) {
            $('#job').addClass("error__Input");
              $('#jobCheck').show(300);
              $('#jobCheck').html
                ("**Job is too short");
              jobError = false;
              return false;
          }
          else {
              $('#jobCheck').hide();
              $('#job').removeClass("error__Input");
          }
          buttonActive()
        }
        $('#emailCheck').hide();
        $("#send").prop("disabled", true);
        
        function buttonActive() {
           
            if (nameField.value.length < 3 || lastNameField.value.length < 3 || emailField.value.length < 3 || jobField.value.length < 3 ) {
                $("#send").prop("disabled", true);
              } else {
                $("#send").addClass("button__Activated");
                $("#send").prop("disabled", false);
              }
        }

        $(document).scroll(function (e) {
          var value = $(this).scrollTop();
          if (value > 150) {
              $( "#people" ).addClass( "animation_Scroll" );
           }
          else {
              $( "#people" ).removeClass( "animation_Scroll" );
           }
          
          });

    })

    