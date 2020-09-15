$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 10000 } );
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

$(document).ready(function() {
  var Menu = {
    el: {
      ham: $(".menu"),
      menuTop: $(".menu-top"),
      menuMiddle: $(".menu-middle"),
      menuBottom: $(".menu-bottom")
    },

    init: function () {
      Menu.bindUIactions();
    },

    bindUIactions: function () {
      Menu.el.ham.on("click", function (event) {
        Menu.activateMenu(event);
        event.preventDefault();
      });
    },

    activateMenu: function () {
      Menu.el.menuTop.toggleClass("menu-top-click");
      Menu.el.menuMiddle.toggleClass("menu-middle-click");
      Menu.el.menuBottom.toggleClass("menu-bottom-click");
    }
  };

  Menu.init();

  });
