window.onload = pageReady;

function pageReady() {

  //VALIABLES FOR THE MENU, THE MAIN IMAGE AND THE IMAGES TO BE SWITCHED
  var topImg = document.getElementById("topImg");
  var sideImg = document.getElementById("sideImg");
  var sweetImg = document.getElementById("sweetImg");
  var switchImg = document.getElementsByClassName("switchImg");
  var menu1 = document.getElementById("menu1");
  var menu2 = document.getElementById("menu2");
  var menu3 = document.getElementById("menu3");
  var menu4 = document.getElementById("menu4");
  var menu5 = document.getElementById("menu5");
  var menu6 = document.getElementById("menu6");
  var menu7 = document.getElementById("menu7");
  var menu8 = document.getElementById("menu8");
  var menu9 = document.getElementById("menu9");
  var menu10 = document.getElementById("menu10");
  var menu11 = document.getElementById("menu11");
  var menu12 = document.getElementById("menu12");

  //LISTENERS FOR SWITCHING THE IMAGES WHEN MOUSE OVER THE MENU NAME
  menu1.onmouseover = switchImg1;
  menu2.onmouseover = switchImg2;
  menu3.onmouseover = switchImg3;
  menu4.onmouseover = switchImg4;
  menu5.onmouseover = switchImg5;
  menu6.onmouseover = switchImg6;
  menu7.onmouseover = switchImg7;
  menu8.onmouseover = switchImg8;
  menu9.onmouseover = switchImg9;
  menu10.onmouseover = switchImg10;
  menu11.onmouseover = switchImg11;
  menu12.onmouseover = switchImg12;

  //FUNCTIONS TO CHANGE IMAGES
  function switchImg1() {
    topImg.src = switchImg[0].src;
  }

  function switchImg2() {
    topImg.src = switchImg[1].src;
  }

  function switchImg3() {
    topImg.src = switchImg[2].src;
  }

  function switchImg4() {
    topImg.src = switchImg[3].src;
  }

  function switchImg5() {
    topImg.src = switchImg[4].src;
  }

  function switchImg6() {
    topImg.src = switchImg[5].src;
  }

  function switchImg7() {
    sweetImg.src = switchImg[6].src;
  }

  function switchImg8() {
    sweetImg.src = switchImg[7].src;
  }

  function switchImg9() {
    sweetImg.src = switchImg[8].src;
  }

    function switchImg10() {
    sweetImg.src = switchImg[9].src;
  }

    function switchImg11() {
    sweetImg.src = switchImg[10].src;
  }

      function switchImg12() {
    sweetImg.src = switchImg[11].src;
  }

  //FUNCTION AND LISTENERS TO RESET IMAGE WHEN MOUSE LEAVES
  function resetImg1() {
    topImg.src = "images/pizza.jpg";
  }

  function resetImg2() {
    sweetImg.src = "images/sweet.jpg";
  }

  menu1.onmouseout = resetImg1;
  menu2.onmouseout = resetImg1;
  menu3.onmouseout = resetImg1;
  menu4.onmouseout = resetImg1;
  menu5.onmouseout = resetImg1;
  menu6.onmouseout = resetImg1; 
  menu7.onmouseout = resetImg2;
  menu8.onmouseout = resetImg2;
  menu9.onmouseout = resetImg2;
  menu10.onmouseout = resetImg2;
  menu11.onmouseout = resetImg2;
  menu12.onmouseout = resetImg2;

};