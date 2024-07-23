// This is for Jquery
  // document.addEventListener('DOMContentLoaded', function() {
  //   const lightboxLinks = document.querySelectorAll('.lightbox-link');

  //   lightboxLinks.forEach(link => {
  //     link.addEventListener('click', function(event) {
  //       event.preventDefault(); // Prevent the default link behavior

  //       console.log('Lightbox link clicked'); // Debugging log

  //       // Open the lightbox (wrap link with jQuery)
  //       lightbox.start($(link));

  //       // Delay the navigation to the website
  //       setTimeout(function() {
  //         console.log('Navigating to:', link.getAttribute('data-href')); // Debugging log
  //         window.open(link.getAttribute('data-href'), '_blank');
  //       }, 1000); // Adjust the delay as needed (3000 milliseconds = 3 seconds)
  //     });
  //   });
  // });

  $(document).ready(function() {
    console.log('DOM fully loaded and parsed');
    
    $('.lightbox-link').on('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      console.log('Lightbox link clicked');
      
      const href = $(this).attr('href'); // Get the href attribute of the clicked link
      const dataHref = $(this).attr('data-href'); // Get the data-href attribute of the clicked link
      
      // Open the image in the lightbox
      lightbox.start($(this));
      
      // Delay the navigation to the website
      setTimeout(function() {
        console.log('Navigating to:', dataHref);
        window.open(dataHref, '_blank'); // Open in a new tab
      }, 3000); // Adjust the delay as needed (3000 milliseconds = 3 seconds)
    });
  });


