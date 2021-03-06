describe('factory: chosenLocationFactory', function() {
  var marineFactory;
  var filterWeatherFactoryMock;
  var long;
  var lat;

  beforeEach(module('GnarApp', function($routeProvider) {
    $routeProvider.otherwise(function(){return false;});
  }));

  beforeEach(function(){
    filterWeatherFactoryMock = jasmine.createSpyObj('filterWeatherFactory', ['deleteForecasts']);
    module('GnarApp',{
      filterWeatherFactory: filterWeatherFactoryMock
    });
  });

  // beforeEach(inject(function()))

  xit('has a getMarineInfo function', function() {
    expect(marineFactory.getMarineInfo()).toBeDefined();
  });


  describe('making a request to Marine Weather Api', function(){

    var result = {swell_height: 1, swell_period: 3 };

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      long = -4.55064;
      lat = 50.8305;
      var key = 'key=13b7cf31eb9c40758b7144945162403';
      var url = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?'+ key + '&q=' + lat + ',' + long + '&tide=yes&format=json';
      httpBackend
        .expectGET(url)
        .respond(result);
    }));

    xit('returns a response from the weather api', function() {
      marineFactory.getMarineInfo(lat, long, function(data) {
        spyOn(filterWeatherFactoryMock);
        expect(filterWeatherFactoryMock.deleteForecasts).toHaveBeenCalled();
      });
    });
  });

});
