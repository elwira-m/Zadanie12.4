////////////////Random Chuck Norris Fact//////////

$(function(){  

  var url = 'https://api.icndb.com/jokes/random';
  
  $('#get-joke').click (function() {
   getJoke();
  });

  function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    $(xhr).on('load', function(){
      var response = JSON.parse(xhr.response);
      $('#joke').text(response.value.joke);
    });
    xhr.send();
  };

  getJoke();

});
