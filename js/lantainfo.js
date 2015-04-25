$( document ).ready(function() {
	$('a').smoothScroll();
    
    $( '.activity-inner' ).matchHeight();
    


    $( '.activity-list' ).mixItUp({
            animation: {
            enable: true,
            effects: 'fade scale'
        },
        controls: {
            enable: true,
            live: true
        },
        layout: {
            display: 'block'
        },
        load: {
            filter: 'all'
            // sort: 'order:asc'
        },
        selectors: {
            target: '.activity',
            filter: '.activity-filter li'
        }
    });

});