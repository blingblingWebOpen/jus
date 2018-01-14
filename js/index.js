// JavaScript Document
$(document).on("pagecreate","#ch_ad",function(){
	$(".list_address li").on("swipeleft",function(){
		$(this).animate({marginLeft:'-.9rem'});
		$(this).find('a.edit').animate({right:'.76rem'});
		$(this).find('.delete').animate({right:'-.9rem'});
		$(this).find('.tel').hide();
	});
	$(".list_address li").on("swiperight",function(){
		$(this).animate({marginLeft:'0rem'});
		$(this).find('a.edit').animate({right:'.12rem'});
		$(this).find('.delete').animate({right:'-.9rem'});
		$(this).find('.tel').show();
	});
});

