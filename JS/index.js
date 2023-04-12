

$(document).ready(function() {

	// Using custom settings 
	
	$("a#img1").fancybox({
		overlayShow: true,
        transitionIn: 'elastic',
        transitionOut: 'elastic,'
	});

    // Single video
  /*  Fancybox.show([
        {
          src: "https://www.youtube.com/watch?v=z2X2HaTvkl8",
          type: "video",
          ratio: 16 / 10,
          width: 640,
          height: 360,
        },
      ]); */

    $(".iframe").fancybox(); 

    Fancybox.show([
        {
          src: "https://www.google.com/maps/@51.5039653,-0.1246493,14.12z",
          width: 800,
          height: 600,
        },
      ]);
	
}); 


  
