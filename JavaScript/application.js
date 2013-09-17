// JQuery to implement the hover effect

// Hide product_desc div on document load
$(function(){
     $('.product_desc').hide();

// Show the divs to hover
    $('.hover_bc').hover(function(){
        $('#baseCamp_desc').toggle();
        $('#mainDesc').toggle();
    });

    $('.hover_hr').hover(function() {
        $('#highRise_desc').toggle();
        $('#mainDesc').toggle();
     });

    $('.hover_cf').hover(function(){
       $('#campFire_desc').toggle();
       $('#mainDesc').toggle();
     });
});