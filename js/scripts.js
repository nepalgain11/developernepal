jQuery(document).ready(function(){

	jQuery(".click-bars").click(function(){
		jQuery(".bar-nav").css("left","0px");
	});
	
	jQuery(".exit-buttom").click(function(){
		jQuery(".bar-nav").css("left","-300px");
	});
	jQuery(window).resize(function(){
		var screenWidth = jQuery(window).width();
		if(screenWidth > 768){
			jQuery(".bar-nav").removeAttr("style");
		}
		});
		
		
		
				
		jQuery(".regular").slick({
			dots: true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2
		});
		
			jQuery(".scroll-bottom-top").click(function(){
				jQuery("html").animate({"scrollTop":"0"},1000);
			
		});
	
		
		jQuery(window).scroll(function(){
			var screenTop = jQuery(window).scrollTop();
			if(screenTop>235){
				jQuery(".header-bottom").addClass("fixed");
				
			}
			else{
				jQuery(".header-bottom").removeClass("fixed");
				
			}
			
			
			if(screenTop>435){
				jQuery(".scroll-bottom-top").show();
				
			}
			else{
				jQuery(".scroll-bottom-top").hide();
				
			}
			
			
			
		});
			
			
			

	
		
// file end
});
		
	
	
	
	
	
	
	
	
	
	


























