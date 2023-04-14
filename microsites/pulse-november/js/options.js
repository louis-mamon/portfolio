$(document).ready(function() {
		 //TWITTER WIDGET

  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
		 //end of twitter
		 var owl = $(".owl-carousel");
		  owl.owlCarousel({
		  items : 3, //10 items above 1000px browser width
		  itemsDesktop : [1300,3], //5 items between 1000px and 901px
		  itemsDesktopSmall : [1200,2], // 3 items betweem 900px and 601px
		  itemsTablet: [800,1], //2 items between 600 and 0;
		  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
		  navigation : true,
		  scrollPerPage: true
		  });
		  var owl2 = $(".owl-carousel2");
		  owl2.owlCarousel({
		  items : 1, //10 items above 1000px browser width
		  itemsDesktop : [1000,1], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
		  itemsTablet: [600,1], //2 items between 600 and 0;
		  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
		  navigation : false,
		  scrollPerPage: false,
			autoPlay : true,
			stopOnHover : false,
		  });
		$('.analystSpotlight').parallax({
speed : 0.20
});
$('.headertop').parallax({
speed : 0.20
});
		});

	
function navstick() {
  var window_top = $(window).scrollTop();
  var div_top = $('#changeColor').offset().top;
  if (window_top > div_top) {
    $('#navigation').addClass('stick');
	     $(".topnotice").css("display","none");
  } else {
    $('#navigation').removeClass('stick');
  }
}

$(function() {
  $(window).scroll(navstick);
  navstick();
});
 $(".flexnav").flexNav();
//FONT ICONS
window.Fonticons||(window.Fonticons={}),function(e,n){function t(e,t){var o,i="IE",a=n.createElement("B"),s=n.documentElement;return e&&(i+=" "+e,t&&(i=t+" "+i)),a.innerHTML="<!--[if "+i+']><b id="fitest"></b><![endif]-->',s.appendChild(a),o=!!n.getElementById("fitest"),s.removeChild(a),o}function o(){for(var e=[/.*/],o=n.location.hostname,i=0;i<e.length;i++)if(e[i].test(o)){var a=n.createElement("link"),s=t(8,"lte")?"ffe176a3-sd":"ffe176a3";a.href="https://fonticons-free-fonticons.netdna-ssl.com/kits/ffe176a3/"+s+".css",a.media="all",a.rel="stylesheet",n.getElementsByTagName("head")[0].appendChild(a);break}}e.Fonticons.load=o}(this,document),window.Fonticons.load();
////cookie
 if ($.cookie('noShowWelcome')) $(".topnotice").css("display","none");
    else {
		$(".topnotice").css("display","block");
		$.cookie('noShowWelcome', true, { expires: 30 });  
        $("#close-notice").click(function() {
			$('.topnotice').hide();
            //$(".topnotice").css("display","none");
            $.cookie('noShowWelcome', true, { expires: 30 });    
        });
    }

  $(document).ready(function(){
     $('.more').click(function(){
		$('.table-wrap').css("height","auto");
		$(this).hide();
		$('.morebg').hide();
	});
   });








