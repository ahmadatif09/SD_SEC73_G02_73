;(function($) {
    "use strict";
  
    /*----------------------------------------------------*/
    /*  Home Slider js
    /*----------------------------------------------------*/
    function home_slider(){
        if ( $('#home-slider').length ){
            $("#home-slider").revolution({
                sliderType:"fullscreen",
                sliderLayout:"false",
                delay:9000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style: "Gyges",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: false,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 10,
                            v_offset: 30
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 10,
                            v_offset: 30
                        }
                    },
                },			
                responsiveLevels:[4096,1200,992,768,480,380],
                gridwidth:[1140,940,720,450,450,290],
                gridheight:[900,900,800,700,500,480],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50],
                },
            })
        }
    }
    home_slider();
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* Optional js */
    
    /*----------------------------------------------------*/
    /*  Blog Slider
    /*----------------------------------------------------*/
    function blog_slider(){
        if ( $('.feature_slider').length ){
            $('.feature_slider').owlCarousel({
                loop:true,
                margin:30,
                items: 3,
                nav:true,
                autoplay: false,
                smartSpeed: 1800,
                navContainer: '.feature_slider',
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    768:{
                        items:3
                    }
                }
            })
        }
    }
    blog_slider();
    
    
    /*----------------------------------------------------*/
    /*  Chef Slider
    /*----------------------------------------------------*/
    function chefs_slider(){
        if ( $('.chefs_slider_active').length ){
            $('.chefs_slider_active').owlCarousel({
                loop:true,
                margin:30,
                items: 4,
                nav:true,
                autoplay: false,
                smartSpeed: 1800,
                navContainer: '.chefs_slider_active',
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    550:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                }
            })
        }
    }
    chefs_slider(); 
    
    /*----------------------------------------------------*/
    /*  Next Event Slider
    /*----------------------------------------------------*/
    function next_event_slider(){
        if ( $('.next_event_slider').length ){
            $('.next_event_slider').owlCarousel({
                loop:true,
                margin:30,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 1800,
            })
        }
    }
    next_event_slider(); 
    
    /*----------------------------------------------------*/
    /*  Blog Gallery Slider
    /*----------------------------------------------------*/
    function blog_gallery_slider(){
        if ( $('.blog_gallery_slider').length ){
            $('.blog_gallery_slider').owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                nav:true,
                autoplay: false,
                smartSpeed: 1800,
                navContainer: '.blog_gallery_slider',
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            })
        }
    }
    blog_gallery_slider(); 
    
    /*----------------------------------------------------*/
    /*  Date Active function
    /*----------------------------------------------------*/
    $(".form_datetime").datetimepicker({
        format: "dd MM yyyy",
        fontAwesome: true,
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-right"
    });
    
    /*----------------------------------------------------*/
    /*  Time Active function
    /*----------------------------------------------------*/
    $(".form_time").datetimepicker({
        format: "hh:ii",
        fontAwesome: true,
        autoclose: true,
        showMeridian: true,
        todayBtn: true,
        startView: 2,
        pickerPosition: "bottom-right"
    });
    
    
    /*----------------------------------------------------*/
    /*  Popular Recype Activate isotope in container
    /*----------------------------------------------------*/
    function popular_recype(){
        if ( $('.p_recype_item_inner').length ){
            $('.p_recype_item_inner').imagesLoaded(function(){
                $('.p_recype_item_inner').isotope({
                    itemSelector: '.portfolio-g .col-md-6',
                    layoutMode: 'fitRows',
                    percentPosition:true,
                    masonry: {
                        columnWidth: 1,
                    }            
                })
            });
        }
    }
    popular_recype();
    
    /*----------------------------------------------------*/
    /*  Popular Recype Activate isotope click function
    /*----------------------------------------------------*/
    function popular_recype_click(){
        if ( $('.popular_filter').length ){
            jQuery(".popular_filter li").click(function(){
                jQuery(".popular_filter li").removeClass("active");
                jQuery(this).addClass("active");

                var selector = jQuery(this).attr("data-filter");
                jQuery(".p_recype_item_active").isotope({
                    filter: selector,
                    animationOptions: {
                    duration: 758,
                    easing: "linear",
                    queue: false,
                    }
                });
                return false;
            });
        }
    }
    popular_recype_click();
    
    
    $('.event_shedule time').countDown();
    
    
    /*----------------------------------------------------*/
    /*  Images grid Filter
    /*----------------------------------------------------*/   
    function ImagesgridFilter(){
        if( $('.about_right_ms, .our_gallery_ms_inner').length ){
            $('.about_right_ms, .our_gallery_ms_inner').imagesLoaded(function(){
                $('.about_right_ms, .our_gallery_ms_inner').isotope({
                    itemSelector: '.about_ms_item, .col-md-4, .col-sm-4',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 1,
                    }
                })
            });
        }
    }
    ImagesgridFilter();
    
    $("#my-calendar").zabuto_calendar({
        today: true,
    });
    
    
    
    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
                styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
            });
        }
    
    
    
    /*----------------------------------------------------*/
    /*Loading function*/
    /*----------------------------------------------------*/
    
    $(window).load(function() { // makes sure the whole site is loaded
		 $('.loader').fadeOut(); // will first fade out the loading animation
		 $('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		 $('body').delay(150).css({'overflow':'visible'})
     })
    
})(jQuery)