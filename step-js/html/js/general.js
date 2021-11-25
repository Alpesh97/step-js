

jQuery(document).ready(function () {
	if (jQuery("#step-content-block").length) {
		jQuery("#step-content-block").steps({
			headerTag: ".step-navigation",
			bodyTag: ".quiz-step-content-block",
			transitionEffect: "fade",
			transitionEffectSpeed:400,
			labels: {
				next: "Next",
				previous: "Back",
				// finish : "Get Results"
			},
			onInit: function (event, current) {
				jQuery('.actions > ul > li:first-child a').attr('class', 'back-step black-btn');
				jQuery('.actions > ul > li:nth-child(2) a').attr('class', 'next-step yellow-btn disable');
				jQuery('.actions > ul > li:last-child a').attr('class', 'finish-btn yellow-btn');
				
			},
			
			onStepChanged: function (event, currentIndex, priorIndex) {
				jQuery(".custom-progress-bar span").width((((jQuery(this).find(".steps > ul > li.current").index() + 1) / jQuery(".steps > ul > li").length) * 100) +
					"%");
				if( priorIndex < currentIndex){ 
					jQuery('.actions > ul > li:nth-child(2) a').attr('class', 'next-step yellow-btn disable');
				}
				else {
					jQuery('.actions > ul > li:nth-child(2) a').attr('class', 'next-step yellow-btn');
				}
				if (currentIndex == 0) {
					jQuery(".custom-steps-block-wrapper").addClass("previous-content");
				} else {
					jQuery(".custom-steps-block-wrapper").removeClass("previous-content");
				}
				setTimeout(function () {
					var current_step_height = jQuery(".quiz-step-content-block:visible").innerHeight();
					jQuery("#step-content-block.wizard > .content").css("min-height", current_step_height);
				}, 150);
				
			},
		});

	}

	if (jQuery(".previous-content").length > 0) {
		jQuery(document).on("click", ".previous-content .back-step", function () {
			jQuery('.getting-started-block').fadeIn();
			jQuery('.custom-inner-steps-block').fadeOut();
		});
	}
	jQuery('.get-started-form .next-btn').click(function (argument) {
		jQuery(this).closest('.getting-started-block').fadeOut();
		jQuery(this).closest('.getting-started-block').siblings('.custom-inner-steps-block').fadeIn();
		setTimeout(function(){
			var current_step_height = jQuery(".quiz-step-content-block:visible").innerHeight();
			jQuery("#step-content-block.wizard > .content").css("min-height", current_step_height);
		},100)
		
	});

	if (jQuery(".custom-progress-bar span").length) {
		jQuery(".custom-progress-bar span").width((((jQuery(this).find(".steps > ul > li.current").index() + 1) / jQuery(".steps > ul > li").length) * 100) + "%");
	}
	jQuery(".custom-checkbox-radio input").change(function(){
		jQuery('.actions > ul > li:nth-child(2) a.disable').removeClass("disable");
	})

	
})
jQuery(window).on('load', function () {
	if (jQuery("#step-content-block").length) {
		setTimeout(function () {
			var first_step_height = jQuery(".quiz-step-content-block.step-1").innerHeight();
			jQuery("#step-content-block.wizard > .content").css("min-height", first_step_height);
		}, 100);
	}
})
jQuery(window).on('resize', function () {
	if (jQuery("#step-content-block").length) {
		setTimeout(function () {
			var current_step_height = jQuery(".quiz-step-content-block:visible").innerHeight();
			jQuery("#step-content-block.wizard > .content").css("min-height", current_step_height);
		}, 100);
	}
})