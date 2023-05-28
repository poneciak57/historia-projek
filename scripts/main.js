$(document).ready(function () {


     if (!window.matchMedia || (window.matchMedia("(max-width: 767px)").matches)) {
          
     } else {
          var tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
     var tooltipInstances = tooltips.map(function(tooltip) {
          return new bootstrap.Tooltip(tooltip);
     });
     }

     var mapWrapper = $('#map-wrapper');
     var mapContainer = $('#map-container');
     var mapImage = $('#map-image');
     var isDragging = false;
     var startX;
     var scrollLeft;

     mapWrapper.on('mousedown', function (e) {
          isDragging = true;
          startX = e.pageX - mapContainer.offset().left;
          scrollLeft = mapWrapper.scrollLeft();
     });

     $(document).on('mouseleave', function () {
          isDragging = false;
     });

     $(document).on('mouseup', function () {
          isDragging = false;
     });

     mapWrapper.on('mousemove', function (e) {
          if (!isDragging) return;
          e.preventDefault();
          var x = e.pageX - mapContainer.offset().left;
          var walk = (x - startX);

          var minScrollLeft = 0;
          var maxScrollLeft = mapContainer.width() - mapWrapper.width();
          var newScrollLeft = scrollLeft - walk;
          newScrollLeft = Math.max(minScrollLeft, Math.min(newScrollLeft, maxScrollLeft));

          mapWrapper.scrollLeft(newScrollLeft);
     });

     var container = $("#map-wrapper");

     // Przesunięcie paska przewijania na środek po otwarciu strony
     var scrollLeft = (container[0].scrollWidth - container.width()) * 0.6;
     console.log(scrollLeft);
     container.scrollLeft(scrollLeft);

     $("#link-zbrodnie").on("click", function () {
          var section = $("#map-wrapper");
          if (section.length > 0) {
               var offset = section.offset().top;
               $("html, body").animate({
                    scrollTop: offset
               }, 500);
          }
     });
});
