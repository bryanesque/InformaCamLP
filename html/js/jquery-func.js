$(document).ready(function() {
	$('#menu-toggle ul li a').click(function() {
		$('#main-menu').toggle();
		return false
	});

	//=================================== rotate icons features =================================//
	$('#features .item').hover(function() {
		$(this).find('img').addClass('animated rotateIn')
	}, function() {
		$(this).find('img').removeClass('animated rotateIn')
	});
	
	
	//=================================== shake button animation =================================//
	$('#about a img').hover(function() {
		$(this).addClass('animated shake')
	}, function() {
		$(this).removeClass('animated shake')
	});
	
	//=================================== animated anchors =================================//
	$('a[href*=#]').click(function() {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var $target = $(this.hash);

			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

			if ($target.length) {

				var targetOffset = $target.offset().top;

				$('html,body').animate({
					scrollTop : targetOffset
				}, 1000);

				return false;

			}

		}

	});

	//=================================== Layout fix =================================//
	function layoutResponsiveFunct() {
		var winHeight = $(window).height();
		var winWidth = $(window).width();

		if (winWidth <= 1200) {
			$('.hero .cell').removeClass("span8").removeClass("offset1").addClass('span6');
			$('.hero .desc').removeClass("span3").addClass('span6');
		} else {
			$('.hero .cell').addClass("span8").addClass("offset1").removeClass('span6');
			$('.hero .desc').addClass("span3").removeClass('span6');
		}
	}

	layoutResponsiveFunct();
	$(window).resize(function() {
		layoutResponsiveFunct();
	});
	
	
	
	//=================================== Olaceholder ie =================================//
	$('input, textarea').placeholder();




	//=================================== Slider  ===================================//
	$("#slider").responsiveSlides({
		speed : 900
	});
	
	

	//=================================== Tooltips =====================================//

	if ($.fn.tooltip()) {
		$('[class="tooltip_hover"]').tooltip();
	}
	
	
	//=================================== Menu fixed on scroll =====================================//
	$(window).scroll(function() {
		var headerBottom = 43;
		var ScrollTop = $(window).scrollTop();
		if (ScrollTop > headerBottom) {
			$("header").addClass("fixed");
		}
		if (ScrollTop < headerBottom) {
			$("header").removeClass("fixed");
		}
		
		
		
	//=================================== Show links on top =====================================//
		var ScrollTop = $(window).scrollTop();
		if (ScrollTop > 350) {
			$("#goTop").addClass("show");
		}
		if (ScrollTop < headerBottom) {
			$("#goTop").removeClass("show");
		}
	});
	
	
	//=================================== Images gallery  =================================//
	$("#gallery li a").fancybox();


	//=================================== Graphic Charts  =================================//
	function incraseEffect() {
		$('.chart').easyPieChart({
			barColor : 'rgba(255, 255, 255, 0.5)',
			trackColor : 'rgba(255, 255, 255, 0.2)',
			scaleColor : false,
			lineCap : 'square',
			size : 161,
			lineWidth : 15,
			animate : 3000
		});
		$('.chart2').easyPieChart({
			barColor : 'rgba(255, 255, 255, 0.5)',
			trackColor : 'rgba(255, 255, 255, 0.2)',
			scaleColor : false,
			lineCap : 'square',
			size : 161,
			lineWidth : 15,
			animate : 2000
		});
	}


	$('.data-charts').waypoint(function(direction) {
		incraseEffect();
		//alert(direction); // up, down, left, or right
		$('.information').waypoint('destroy');
	}, {
		triggerOnce : true,
		offset : '100%'
	});



	//=================================== responsive video  =================================//
	$(".video-wrapper").fitVids();




	//=================================== form forms =================================//
	$("#contact-form").submit(function() {
		var elem = $(this);
		var urlTarget = $(this).attr("action");
		$.ajax({
			type : "POST",
			url : urlTarget,
			dataType : "html",
			data : $(this).serialize(),
			beforeSend : function() {
				elem.prepend("<div class='loading alert'>" + "<a class='close' data-dismiss='alert'>×</a>" + "Loading" + "</div>");
			},
			success : function(response) {
				elem.prepend(response);
				elem.find(".loading").hide();
				elem.find("input[type='text'],input[type='email'],textarea").val("");
			}
		})
		return false;
	});



	//=================================== Comments rotation =================================//
	$('.text-wrapper .item:first').show();
	var delay = 4000, fade = 500;
	// tweak-able
	var logos = $('.text-wrapper .item');
	var len = logos.length;
	var i = 0;

	setTimeout(cycle, delay);
	// <-- start

	function cycle() {
		$(logos[i % len]).fadeOut(fade, function() {
			$(logos[++i % len]).fadeIn(fade, function() {// mod ftw
				setTimeout(cycle, delay);
			});
		});
	}
	
	
	
	//=================================== Twitter =================================//
    $('.twitterfeed').tweet({
        modpath: 'twitter/',
        username: "guardianproject",
        count: 1,
        loading_text: 'Loading twitter feed...',
        template : function(data){            
            var d = new Date(data.tweet_time),
                container=$(".twitter");
            container.find(".username").html("@"+data.screen_name);
            container.find(".tweet").html(data.tweet_text);
            container.find(".date").html(d.getDate()+", "+get_month(d.getMonth())+" "+d.getFullYear());           
        }  
    });
	
	
	
	
	
	
	

});
