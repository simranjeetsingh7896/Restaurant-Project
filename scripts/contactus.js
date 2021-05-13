var validateForm;
window.onload = validateForm;

// function for validation
function validateForm() {
    //elements 
     var thanksCustomer = document.getElementById("thanksCustomer");
     var thanks_msg = document.getElementById("thanks_msg");
    //array for form
     var Name = document.forms[0].fullname;
     var email = document.forms[0].Email;
     var Subject = document.forms[0].sub;
     var Message = document.forms[0].msg;
    
    var formAction = document.forms.contactform;
    
         formAction.onsubmit = runForm;
    
    // validation logic
    function runForm() {
        //name validation
        if(Name.value === "" || Name.value === null)
            {
                Name.style.background = "red";
                Name.focus();
                return false;
            }
        else{
            Name.style.background = "white";
        }
        
        // email validation
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
        email.style.background = "red";
        email.focus();
        return false;
        }
        else{
            email.style.background = "white";
        } 
        
        
        //subject validation
        if(Subject.value === "0")
            {
                Subject.style.background = "red";
                Subject.focus();
                return false;
            }
        else{
            Subject.style.background = "white";
        }
        
        //Message validation
        if(Message.value === "" || Message.value === null)
            {
                Message.style.background = "red";
                Message.focus();
                return false;
            }
        else{
            Message.style.background = "white";
        }
        
        formAction.style.display = "none";
        
        //thank you message
        thanksCustomer.innerHTML = Name.value;
        thanksCustomer.style.color = "#EF2D56";
        thanksCustomer.style.textTransform = "upper";
        thanks_msg.style.display = "block";
        
        return false;
    }  // end of runForm 
} // end of validateForm 