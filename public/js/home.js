// run a get request on ready
$(function(){
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
  API.getSecret().then(
    function(data){
      console.log('yeah:', data);
    },
    ErrorHandler
  );
});