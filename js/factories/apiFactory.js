gnarApp.factory('ApiFactory',['$http', function($http) {
  var ApiFactory = function() {
    var self = this;
    $http.get('http://localhost:3000/beaches')
    .then(function(response){
      self.info = response.data;
    });
  };

  return ApiFactory;
}]);