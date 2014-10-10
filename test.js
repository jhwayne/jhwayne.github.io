
$('.slides').slidesjs({
    width: 600,
    height: 300,
    callback: {
        loaded: function(){
          // hide navigation and pagination
          $('.slidesjs-pagination, .slidesjs-navigation').hide(0); 
        }
    }
});
  
  // custom navigation/pagination links for slideshow
$(".custom-item").click(function(e){
  e.preventDefault();
  // use data-item value when triggering default pagination link
  $('a[data-slidesjs-item="' + $(this).attr("data-item") + '"]').trigger('click');
});
// $('.custom-next').click(function(e) {
//   e.preventDefault();
//   // emulate next click
//   $('.slidesjs-next').click();
// });
// $('.custom-prev').click(function(e) {
//   e.preventDefault();
//   // emulate previous click
//   $('.slidesjs-previous').click();
// });
//   