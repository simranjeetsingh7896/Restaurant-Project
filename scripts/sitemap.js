jQuery(document).ready(function () { 

//to hide answer paragraphs
$("p").hide();


$(".main a").click(function(){	
	
	$(this).next("p").slideToggle(2000);
});	


});