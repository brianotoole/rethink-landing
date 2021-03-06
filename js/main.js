/*--------------------------------------------------------------
# Scroll to anchor on click - "scroll btn"
--------------------------------------------------------------*/

$(document).ready(function() {
   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault(); //prevent the "normal" behavior (jumping)
       
	var target = $(this).attr("href"); //Get the target
			
	//perform animated scrolling by getting top-position of target-element and set it as scroll
	$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
	     location.hash = target;  //attach the hash (#targetOfNextSection) to the pageurl
	});
		
	return false;
   });
});

/*--------------------------------------------------------------
# Scroll back to top on click - "back to top btn"
--------------------------------------------------------------*/
$('#top').click(function() {
    return $('html,body').animate({
        scrollTop: 0
    }, 600);
});