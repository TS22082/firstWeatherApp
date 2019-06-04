let weatherAPIKey = '5da0c3a42a26467ed286a2264be820ff'
let giphyAPIKey = 'CB3u9m9EcYrw3EnygcS0FX4P91gsyN8N'

let giphyURL =
  'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=' +
  giphyAPIKey +
  '&limit=5'

$.ajax({
  url: giphyURL,
  method: 'GET'
}).then(function(response) {
  console.log(response)
})

$('#weatherSubmit').click(function() {
  weatherZip = $('#weatherSearch').val()
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=${weatherZip}&appid=${weatherAPIKey}&units=imperial`

  $.ajax({
    url: weatherURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response)
    $('#name').html(response.name)
    $('#temp').html(response.main.temp)
    $('#wind').html(response.wind.speed)
  })
})
