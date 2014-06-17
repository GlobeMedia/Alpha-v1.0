//global variables
var magicLine;
var hoverItem;
var curremtItem;

function hoverMagicLine(){
	magicLine.stop().animate({
		left:  hoverItem.position().left,
		width: hoverItem.parent().width()  });
}

function returnMagicLine(){
	magicLine.stop().animate({
        left: magicLine.data("origLeft"),
        width:magicLine.data("origWidth")});    
}


function recalibrateMagicLine(){
	magicLine.width(currentItem.outerWidth())
        	 .css("left", currentItem.position().left)
        	 .css("top" , -3.5)
        	 .data("origLeft", currentItem.position().left)
        	 .data("origWidth", currentItem.outerWidth());
}


function makeMagicLine(){
	$("#nav_ul").append("<li id='magic-line'></li>");
	magicLine 	 = $("#magic-line");  
	currentItem  = $(".current_page_item"); 
	recalibrateMagicLine();   
}

function changeIconToActive(img){
	var src = img.attr('src');
	if (src == './images/navIcons/about.svg')
		img.attr('src', './images/navIcons/aboutActive.svg');
	else if (src == './images/navIcons/contact.svg')
		img.attr('src', './images/navIcons/contactActive.svg');
	else if (src == './images/navIcons/news.svg')
		img.attr('src', './images/navIcons/newsActive.svg');
	else if (src == './images/navIcons/projects.svg')
		img.attr('src', './images/navIcons/projectsActive.svg');
}

function changeIconToInactive(img){
	var src = img.attr('src');
	if (src == './images/navIcons/aboutActive.svg')
		img.attr('src', './images/navIcons/about.svg');
	else if (src == './images/navIcons/contactActive.svg')
		img.attr('src', './images/navIcons/contact.svg');
	else if (src == './images/navIcons/newsActive.svg')
		img.attr('src', './images/navIcons/news.svg');
	else if (src == './images/navIcons/projectsActive.svg')
		img.attr('src', './images/navIcons/projects.svg');
}

$(document).ready( function() {
	makeMagicLine();	
	// on mouse hover, move magicLine
   	$("#nav_ul li").find('a').hover( function(){
   		changeIconToInactive(currentItem.find('img'));
   		hoverItem = $(this);
   		hoverMagicLine();
   		changeIconToActive(hoverItem.find('img'));
   	},  function(){
   		returnMagicLine();
   		changeIconToInactive(hoverItem.find('img'));
   		changeIconToActive(currentItem.find('img'));
   	});
   	$("#nav_ul li").click(function() {
   		changeIconToInactive(currentItem.find('img'));
   		currentItem.attr('class', '');
   		$(this).attr('class', 'current_page_item');
   		currentItem = $(this);
   		changeIconToActive(currentItem.find('img'));
   		recalibrateMagicLine();
   	});
});


$(window).resize( function() {
   	recalibrateMagicLine(); 
});
