$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});

$(document).ready(function() {
    $("#modalLogin").click(function() {
    $("#loginModal").modal("show");
    $("#loginClose").click(function() {
    $("#loginModal").modal("hide");
    $("#loginCancel").click(function() {
    $("#loginModal").modal("hide");
    });
  });
});
});

$(document).ready(function() {
    $("#modalReservation").click(function() {
    $("#reservationModal").modal("show");
    $("#reservationClose").click(function() {
    $("#reservationModal").modal("hide");
    $("#reservationCancel").click(function() {
    $("#reservationModal").modal("hide");
    });
  });
});
});
