$(function() {

  $('.submit').on('click', function(event) {
    var _this = this;
    var userInput = $('#userInput').val();
    var url = 'https://jsonplaceholder.typicode.com/photos/' + userInput

    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(data) {
      var color = data.thumbnailUrl.split('/').pop();
      var hexColor = '#' + color
      $('body').css({'background' : hexColor});
      $('h4').css({'color' : hexColor});
      $("#color").text('Hex color: ' + hexColor);
    }).catch(function(err) {
      // try bad endpoint, see an error
      console.log('we got an error!');
      console.log(err);
    });

  });
});
