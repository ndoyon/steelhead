
    $(function() {
        $(".carousel").carousel( { interval: 4000 } );
        $("#carouselButton").click(function(){
           if ($("#carouselButton").children("i").hasClass("fa-pause")) {
               $(".carousel").carousel("pause");
               $("#carouselButton").children("i").removeClass("fa-pause");
               $("#carouselButton").children("i").addClass("fa-play");
           } else {
               $(".carousel").carousel("cycle");
               $("#carouselButton").children("i").removeClass("fa-play");
               $("#carouselButton").children("i").addClass("fa-pause"); 
                   }
        });

        $("#reserveButton").on('click', () => {
            $('#reserveModal').modal('show');
            });
    });

    function checkScroll(){
        var startY = $('.navbar').height() * 8; //The point where the navbar changes in px
    
        if($(window).scrollTop() > startY){
            $('.navbar').addClass("scrolled");
        }else{
            $('.navbar').removeClass("scrolled");
        }
    }
    
    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }