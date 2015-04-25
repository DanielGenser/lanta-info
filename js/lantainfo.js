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
        callbacks: {
        	onMixEnd: function(state){
                $.fn.matchHeight._update();
        	}
        },
        load: {
            filter: 'all'
        },
        selectors: {
            target: '.activity',
            filter: '.activity-filter li'
        }
    });

});