$(document).ready(function() {
    $('.project-popup').magnificPopup({type:'image',
    gallery: {
      enabled: true,
    }
    });
    $('.counter').counterUp();
    $('.testimonials').slick();
    $('.water').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
    $('.video').magnificPopup({type:'iframe',
    gallery: {
      enable: true
    },
  });

  });

 