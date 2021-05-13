var offers;
window.onload = offers;

function offers() {
     // get element button by id 
    var submit = document.getElementById("submit");
    submit.onclick = run ;
    
    function run(){
     var display_offers = document.getElementById("clickme");
     var hidebutton = document.getElementById("submit");
         display_offers.style.display = "block";   
         hidebutton.style.display = "none";      
        return false; 
    } //end of run function 
} //end of offer function 