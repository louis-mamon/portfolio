$(document).ready(function(){
	setTimeout(
		function(){
			animation();
		},4000
	)
if (!!navigator.userAgent.match(/Trident\/7\./)){
//do stuff for IE.
}
else
{  
$(window).blur(function(){
 location.reload();//reload IDC ecard when page tab is visited again
});
}
$(window).resize(function(){
 location.reload();//reload IDC ecard when page tab is visited again
});
window.setInterval(function(){
 animation(); 
}, 29000);
});     
function animation(){
	//alert("haha");
	 $(".bigBox").delay(50).animate(
                { top: 150 }, {
                    duration: 1600,
                    easing: 'easeInOutElastic'
                }).delay(23000).animate(
                { top: -500 }, {
                    duration: 1100,
                    easing: 'easeInOutElastic'
                });
	 $(".box2").delay(100).animate(
                { top: 200 }, {
                    duration: 1800,
                    easing: 'easeInOutElastic'
                }).delay(23000).animate(
                { top: -500 }, {
                    duration: 1100,
                    easing: 'easeInOutElastic'
                });
	 $(".ball1").delay(100).animate(
                { bottom:100}, {
                    duration: 1400,
                    easing: 'easeInOutElastic'
                }).delay(23000).animate(
                { bottom:-500}, {
                    duration:1100,
                    easing: 'easeInOutElastic'
                });
	 $(".ball2").delay(150).animate(
                { bottom:40}, {
                    duration: 1400,
                    easing: 'easeInOutElastic'
                }).delay(23000).animate(
                { bottom:-500}, {
                    duration:1100,
                    easing: 'easeInOutElastic'
                });
	 $(".ball3").delay(200).animate(
                { bottom:100}, {
                    duration: 1400,
                    easing: 'easeInOutElastic'
                }).delay(23000).animate(
                { bottom:-500}, {
                    duration:1100,
                    easing: 'easeInOutElastic'
                });
	 $(".toDoList").delay(800).animate(
                { right:50}, {
                    duration: 1000,
                    easing: 'easeInOutExpo'
                }).delay(3500).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                }).delay(20000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                });
	$(".icon1").delay(1000).animate(
                { top: 250 }, {
                    duration: 1600,
                    easing: 'easeInOutElastic'
                }).delay(1000).animate(
                { top: -500 }, {
                    duration: 1100,
                    easing: 'easeInOutElastic'
                }).delay(20000).animate(
                { top: -500 }, {
                    duration: 1100,
                    easing: 'easeInOutElastic'
                });;
	 $(".icon2").delay(1400).animate(
                { top: 250 }, {
                    duration: 1800,
                    easing: 'easeInOutElastic'
                }).delay(1000).animate(
                { top: -500 }, {
                    duration: 1100,
                    easing: 'easeInOutElastic'
                });	
	$(".icon3").delay(1600).animate(
                { top: 250 }, {
                    duration: 2000,
                    easing: 'easeInOutElastic'
                }).delay(1000).animate(
                { top: -500 }, {
                    duration: 1100,
                    easing: 'easeInOutElastic'
                });						
	 $(".eat").delay(6000).animate(
                { right:230}, {
                    duration: 1000,
                    easing: 'easeInOutExpo'
                }).delay(2000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                }).delay(15000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                });
	 $(".drink").delay(6100).animate(
                { right:195}, {
                    duration: 1000,
                    easing: 'easeInOutExpo'
                }).delay(2000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                }).delay(15000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                });
	 $(".beMerry").delay(6200).animate(
                { right:75}, {
                    duration: 1000,
                    easing: 'easeInOutExpo'
                }).delay(2000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                }).delay(15000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                });
	 $(".lensflare").delay(900).animate(
               
                { opacity:.20}, {
                    duration:10,
                    easing: ''
                }).delay(30).animate(
                { opacity:0}, {
                    duration:50,
                    easing: ''
                }).delay(20).animate(
                { opacity:.40}, {
                    duration:10,
                    easing: ''
                }).delay(10).animate(
                { opacity:0}, {
                    duration:50,
                    easing: ''
                }).delay(30).animate(
                { opacity:1}, {
                    duration:200,
                    easing: ''
                }).delay(10).animate(
                { opacity:0}, {
                    duration:1200,
                    easing: ''
                }).delay(2600).animate( //second flare
                { opacity:.40}, {
                    duration:10,
                    easing: ''
                }).delay(10).animate(
                { opacity:0}, {
                    duration:50,
                    easing: ''
                }).delay(30).animate(
                { opacity:1}, {
                    duration:200,
                    easing: ''
                }).delay(50).animate(
                { opacity:0}, {
                    duration:1600,
                    easing: ''
                }).delay(2100).animate( //third flare
                { opacity:.40}, {
                    duration:10,
                    easing: ''
                }).delay(10).animate(
                { opacity:0}, {
                    duration:50,
                    easing: ''
                }).delay(30).animate(
                { opacity:1}, {
                    duration:200,
                    easing: ''
                }).delay(50).animate(
                { opacity:0}, {
                    duration:2300,
                    easing: ''
                }).delay(8000).animate(
                { opacity:0}, {
                    duration:1500,
                    easing: ''
                });
	$(".enjoyMoment").delay(10000).animate(
                { right:45}, {
                    duration: 1000,
                    easing: 'easeInOutExpo'
                }).delay(2000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                }).delay(12000).animate(
                { right:-500}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                });
	$(".warmWishes").delay(14000).animate(
                { opacity:1, right:45}, {
                    duration: 1000,
                    easing: 'easeInOutExpo'
                }).delay(2000).animate(
                { top:190}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                }).delay(5000).animate(
                { opacity:0 }, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                }).delay(1000).animate(
                { right:-800, top:250}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                });
	$(".fromIDC").delay(17000).animate(
                { opacity:1}, {
                    duration: 1000,
                    easing: 'easeInOutExpo'
                }).delay(5000).animate(
                {  opacity:0}, {
                    duration:1200,
                    easing: 'easeInOutExpo'
                }).delay(1000).animate(
                { right:75, top:350, opacity:0}, {
                    duration:1100,
                    easing: 'easeInOutExpo'
                });
	}//end of function
	
	
	
	//for your mp3 files
	 var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'img/music.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
		audioElement.setAttribute('loop', 'infinite');
        //audioElement.load()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);




        $('.play').click(function() {
        audioElement.play();
        });


        $('.pause').click(function() {
        audioElement.pause();
        });