$(document).ready(function(){
	  $('.some-list').simpleLoadMore({
      item: 'div',
      count: 10,
      counterInBtn: true,
      btnText: 'View More {showing}/{total}',
    });      
});

