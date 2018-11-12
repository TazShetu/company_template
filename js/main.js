// copied from internet
$(function() {
  // Auto play modal video (actually not so good. video cut option nai)
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});


// img show not in the orginal link (copied from lightbox page)
$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});

// slick slider
$('.slider').slick({
  infinite: true,
  slideToShow:1,
  slideToScroll:1
});
