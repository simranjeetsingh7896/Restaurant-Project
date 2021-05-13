//Reference
//Author: w3schools
//Source: https://www.w3schools.com/howto/howto_js_slideshow.asp 

window.onload = pageLoaded;

function pageLoaded(){
//assign 1 to slideIndex(the order number of pictures) and call a showSlides function with silideIndex
  var slideIndex1 = 1;
  showSlides1(slideIndex1);

  var slideIndex2 = 1;
  showSlides2(slideIndex2);

  //functions to slide pictures forward
  function plusSlides1(){   
    showSlides1(slideIndex1 += 1); 
  };

  function plusSlides2(){   
    showSlides2(slideIndex2 += 1); 
  };

  //functions to slide pictures backward
  function minusSlides1(){   
    showSlides1(slideIndex1 -= 1); 
  };

  function minusSlides2(){   
    showSlides2(slideIndex2 -= 1); 
  };

  //functions to slide pictures
  function showSlides1(n){  
    var picSlides1 = document.getElementsByClassName("slides1"); 

    //if it is the last picture, it will go back to the first picture
    if(n > picSlides1.length){slideIndex1 = 1};

    //if it is the first picture, it will go to the last picture
    if(n < 1){slideIndex1 = picSlides1.length};

    //for loop to hide other pictures
    for(var i = 0; i < picSlides1.length; i++){
      picSlides1[i].style.display = "none";
    };
      
      //dispray the first picture
      picSlides1[slideIndex1-1].style.display = "block";
    };

  function showSlides2(m){  
    var picSlides2 = document.getElementsByClassName("slides2"); 

    //if it is the last picture, it will go back to the first picture
    if(m > picSlides2.length){slideIndex2 = 1};

    //if it is the first picture, it will go to the last picture
    if(m < 1){slideIndex2 = picSlides2.length};

    //for loop to hide other pictures
    for(var j = 0; j < picSlides2.length; j++){
      picSlides2[j].style.display = "none";
    };
      
    //dispray the first picture
    picSlides2[slideIndex2-1].style.display = "block";
    };

  //declare and assign previous and next button
  var prevButton1 = document.getElementById("prev1");
  var nextButton1 = document.getElementById("next1");

  var prevButton2 = document.getElementById("prev2");
  var nextButton2 = document.getElementById("next2");

  //call the functions so the pictures will slide when a user click the buttons
  prevButton1.onclick = minusSlides1;
  nextButton1.onclick = plusSlides1;

  prevButton2.onclick = minusSlides2;
  nextButton2.onclick = plusSlides2;
  
};  
