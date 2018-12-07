// Header slider 
var myIndex = 0;
   carousel();

function carousel(){
  var sliderSlike = document.getElementsByClassName("mySlides");
  for(var i = 0; i<sliderSlike.length; i++){
   sliderSlike[i].style.display = "none";
  }
  myIndex++;

  if(myIndex > sliderSlike.length){
    myIndex = 1;
  }
  sliderSlike[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}

// Galery slider
$(document).ready(function(){
  $('#slider-galery-wrapper-inner').click(function(){
	  var scrollAmount = $(this).width() - $(this).parent().width();
    var currentPos = Math.abs(parseInt($(this).css('left')));
    var remainingScroll = scrollAmount - currentPos;
  
    // Scroll half-a-screen by default
    var nextScroll = Math.floor($(this).parent().width() / 2);
  
    // But if there isn’t a FULL scroll left, do only the remaining amount.
    if(remainingScroll < nextScroll) {
      nextScroll = remainingScroll;
    }
   
    if(currentPos < scrollAmount) {
      // Scroll left
      $(this).animate({'left':'-=' + nextScroll}, 'slow');
    }
    else{
      // Scroll right
      $(this).animate({'left':'0'}, 'fast');
    }
  });
});