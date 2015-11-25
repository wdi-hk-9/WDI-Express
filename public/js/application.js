// common functions to be used accross all pages
var ErrorHandler = function(error){
  console.log(error);
  alert('API Error: ' + error.responseJSON.message);
};