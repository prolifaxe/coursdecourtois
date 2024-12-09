/**
 * Custom JS Functionality
 *
 */
( function( $ ) {
    jQuery( document ).ready( function() {
        // Add button to sub-menu item to show nested pages / Only used on mobile
        $( '.main-navigation li.page_item_has_children > a, .main-navigation li.menu-item-has-children > a' ).after( '<button class="menu-dropdown-btn"><i class="fas fa-angle-down"></i></button>' );
        $( '.main-navigation, .avant-header-nav' ).find( 'a' ).on( 'focus blur', function() {
            $( this ).parents( 'li' ).toggleClass( 'focus' );
        } );
        
        // Mobile nav button functionality
        $( '.menu-dropdown-btn' ).bind( 'click', function() {
            $(this).parent().toggleClass( 'open-page-item' );
        });
        // The menu button
        $( '.header-menu-button' ).click( function(e){
            $( 'body' ).toggleClass( 'show-main-menu' );
            var element = $( '#main-menu' );
            trapFocus( element );
        });
        
        $( '.main-menu-close' ).click( function(e){
            $( '.header-menu-button' ).click();
            $( '.header-menu-button' ).focus();
        });
        $( document ).on( 'keyup',function(evt) {
            if ( $( 'body' ).hasClass( 'show-main-menu' ) && evt.keyCode == 27 ) {
                $( '.header-menu-button' ).click();
                $( '.header-menu-button' ).focus();
            }
        });
        
        // Show / Hide Search
        $( '.menu-search' ).on( 'click', function() {
            $( 'body').addClass( 'show-site-search' );
            $( '.search-block input.search-field' ).focus();
        });

        // Scroll To Top Button Functionality
        $(".scroll-to-top").bind("click", function() {
            $('html, body').animate( { scrollTop: 0 }, 800 );
        });
        $(window).scroll(function(){
            if ($(this).scrollTop() > 400) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });
    });
    
    $(window).resize(function () {
        if ( $( window ).width() > 980 ) {
            $( 'body' ).removeClass( 'show-main-menu' );
        }
    });
    
    $(window).on('load',function () {
        $( '.side-aligned-social' ).removeClass( 'hide-side-social' );
    });
    
    // Hide Search if user clicks anywhere else
    $( document ).mouseup( function (e) {
        var container = $( '.search-block' );
        if ( !container.is( e.target ) && container.has( e.target ).length === 0 ) {
            $( 'body' ).removeClass( 'show-site-search' );
        }
    });
} )( jQuery );

function trapFocus( element, namespace ) {
    var focusableEls = element.find( 'a, button' );
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;

    firstFocusableEl.focus();

    element.keydown( function(e) {
        var isTabPressed = ( e.key === 'Tab' || e.keyCode === KEYCODE_TAB );

        if ( !isTabPressed ) { 
            return;
        }

        if ( e.shiftKey ) /* shift + tab */ {
            if ( document.activeElement === firstFocusableEl ) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            if ( document.activeElement === lastFocusableEl ) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }

    });
}
