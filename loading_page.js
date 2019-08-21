// JavaScript Document
function myFunction() {
					myVar = setTimeout(showPage, 3000); //Set time of loading screen
				}
//Hide loading screen and show page
function showPage() {
				  document.getElementById("loader").style.display = "none !important";
				  document.getElementById("page").style.display = "block !important";
				}
function scrollDown() {
	$('html, body').animate({
        scrollTop: $("main").offset().top
    }, 1000);
}