// Instantiate our mini API library
var API_WRAPPER = function(){
  // create variables and methods for this contructor
  this.URL_BASE = window.location.origin;

  this.getSecret = function(){
    return $.ajax({
      method: 'GET',
      url: this.URL_BASE + '/secret',
    });
  };
};

var API = new API_WRAPPER();