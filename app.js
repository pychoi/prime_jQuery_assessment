var clickCount = 0;

$(document).ready(function(){
	$('#container').append('<button class="generateButton">Generate</button');

	$('#container').on('click', '.generateButton', function(){
		clickCount++;
		$('#clickCounter').empty();
		$(this).parent().append("<div id='clickCounter'></div>");
		$('#clickCounter').append('<p id="clickCounter">The Generate Button has been clicked ' + clickCount + ' times</p>');

		$(this).parent().append("<div class='buttonContainer'></div>");
		
		var $el = $(this).parent().children().last();
		$el.append('<button class="deleteButton">Delete</button>');
		$el.append('<button class="changeButton">Change</button>'); 
		//$el.append('<p class="clickCounter">' + clickCount + '</p>');
	});


	$('#container').on('click', '.deleteButton', function(){
		$(this).parent().remove();
	});

	$('#container').on('click', '.changeButton', function(){
		$(this).parent().toggleClass('changed');;
	});

});