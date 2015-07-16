// This event is triggered when the star rating is modified or changed
// This event also allows you to access these parameters
// value: the selected rating value
// caption: the caption for the selected rating
$('#inputRate').on('rating.change', function(event, value, caption) {
    console.log(value);
    console.log(caption);
    // we'll use this for saving rate and ...
});

$(document).ready(function() {
    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');
        
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });
    
    $('ul.setup-panel li.active a').trigger('click');
    
    $('.edit-step-1').on('click', function(e) {
        e.preventDefault();
        $('ul.setup-panel li:eq(0)').removeClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').addClass('disabled');
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
    });

    $('#activate-step-2').on('click', function(e) {
        // we must use xhr here.
        e.preventDefault();
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        //$(this).remove();
    });

    $('#activate-step-3').on('click', function(e) {
        e.preventDefault();
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        // $(this).remove();
    });
});

$("td").click(function () {
   $(this).find('input:radio').attr('checked', true);
});