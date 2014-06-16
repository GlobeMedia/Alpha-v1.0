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
        	 .data("origLeft", magicLine.position().left)
        	 .data("origWidth", magicLine.width());
}


function makeMagicLine(){
	$("#nav_ul").append("<li id='magic-line'></li>");
	magicLine 	 = $("#magic-line");   
	currentItem  = $(".current_page_item");
	recalibrateMagicLine();   
}


$(document).ready( function() {
	makeMagicLine();	
	// on mouse hover, move magicLine
   	$("#nav_ul li").find("figure").hover( function(){
   		hoverItem = $(this);
   		hoverMagicLine();
   	},  returnMagicLine);
});


$(window).resize( function() {
   	recalibrateMagicLine(); 
});
