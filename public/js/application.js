$(function(){

  // Instantiate our API WRAPPER
  var API = new API_WRAPPER();

  var ErrorHandler = function(error){
    console.log(error);
    alert('API Error: ' + error.responseJSON.message);
  };

  API.getSecret().then(
    function(data){
      console.log('yeah:', data)
    },
    ErrorHandler
  );

});
