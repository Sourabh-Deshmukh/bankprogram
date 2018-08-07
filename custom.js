$(document).ready(function(){

	$("div").click(function(){
	alert("its an alert");
	});

	$("#d2").css("background-color","RED");
	$(".d3").css("background-color","yellow");
	$("*").css("font-size","26px");
	$("p, #d4").css("margin-left","126px");

	$("a#specialID.specialClass").click(function(){
var a=prompt("how are you","fine");
	if(a!=null){
		document.getElementById("para").innerHTML = "I am"+a;
	}

	});




$("button").click(function(){
	var kk = $("#buttt").attr("href");
var ans=	prompt("enter your link here",""+kk);
if(ans!=kk){
		$("#buttt").attr("href", ans);
}



});

});
