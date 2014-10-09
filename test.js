// jQuery BC Frames
// Version 0.1
// Author : Gabriel Rose
// Description: Takes a container div and stacks the content, allowing it to scroll via the creation of a 'buttons' class.
// Uses the index values of the items in the button class to determine which slide to transition to.

$( document ).ready(function() {
   
    $.fn.slideTo = function(options) {
      var defaults = {
        speed: 1000 //Transition speed
      },
          options = $.extend(defaults, options);
      
      return this.each(function() {
        
        var $this = $(this);
        var $buttonContainer = $('.buttons');
        var $buttons = $('.buttons li');
        var $locator = 0;
        
        // Image Container Styling
        $this.wrap('<div class="imgwrap" />');
        
        $this.css({
          'width' : '999999px',
          'position' : 'relative',
          'padding' : 0
        });
        
        $this.children().css({
          'float' : 'left',
          'list-style' : 'none'
        });
        
        $('.imgwrap').css({
          'width' : $this.children().width() + $('.buttons').length,
          'overflow' : 'hidden'
        });
        
        //Slideshow Button Styling
        $buttons.css({
          'padding' : 10,
          'display' : 'inline-block',
          'position' : 'relative',
          'text-align' : 'center',
          'width' : '20px',
          'height' : '20px',
          'background-color' : '#c0c0c0',
          'border-radius' : '50%',
          'color' : 'white',
          'font-size' : '20px'
        });
        
        
        $buttonContainer.css({
          'position' : 'absolute',
          'padding-left' : 160
        });
        
        $buttons.click(function() { //Call Slide function on click event
          if($locator !== $buttons.index(this)){ //Checks to see if $locator has changed since last call
          $locator = $buttons.index(this);
          if($locator < 0) { // Fixes a bug where negative index values would break the viewer
            $locator = 0;
          }
          slide();
          }
        }); // End slide call on click
        
        function slide() {
          $('#' + $locator).insertAfter($this.children(':first'));
          $this.animate({'left' : '-' + $this.parent().width()}, options.speed, function() {
            $this.css('left', 0).children(':first').appendTo($this);
          });
        } // End slide
      }); //End .each
    } //End plugin
  


$('#container').slideTo();
                       
});
