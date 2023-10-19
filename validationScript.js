    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      function validateVal () {

        
      // Retrieve the input field value

        Val = document.getElementById('inputField').value;

      // Check if the input value matches the pattern

        let pattern = /^[a-zA-Z0-9]+$/;

        if (pattern.test(Val)) {

      // Valid input: display confirmation and submit the form

          valConfirm();

        } else {

      // Invalid input: display error message

          valInvalid();
        }
      }
        
      // Valid input: display confirmation and submit the form

    function valConfirm() {

          window.alert('Confirmation: Submitted');
          document.getElementById('myForm').submit();

        }

      // Invalid input: display error message

    function valInvalid() {

          window.alert('Invalid input, Try Again');
          event.preventDefault();

        }

        // validate when submit is clicked

        let subButton = document.querySelector('button[type="submit"]');
        subButton.addEventListener("click", validateVal);