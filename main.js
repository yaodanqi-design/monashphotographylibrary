
    $('.goback').click(function(){
        parent.history.back();
        return false;
    });

    

    $('.expand').hover(function(){

    	$('.infopopup').addClass('visible');

    	$indexnum = $(this).attr('data-index');
    	$book = data[$indexnum]; 
    	
    	$title = $book.title;
    	$('.booktitle').text('Title: ' + $title);
        $('.booktitle').css('font-weight','bolder');

    	$location = $book.locations;
    	$('.availability').text($location);

    }, function(){


    	$('.infopopup').removeClass('visible');
    	$('.booktitle').text('');
    	$('.availability').text(''); 

        });


