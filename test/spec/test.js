'use strict';

describe('httpFancyURLProvider', function () {

  // load the service's module
  beforeEach(module('fancyURL', function(httpFancyURLProvider, $httpProvider) {
    $httpProvider.interceptors.push('httpFancyURL');

    httpFancyURLProvider.use({
      'api' : 'http://api.example.com/'
    });
  }));

  var $http, $httpBackend;

  beforeEach(inject(function ($injector) {
    $http               = $injector.get('$http');
    $httpBackend        = $injector.get('$httpBackend');

  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('Request', function() {
    it('should do not change request url', function () {
      $httpBackend.expectGET('/auth.py').respond(200, '');
      $http.get('/auth.py').success(function(/*data, status, headers*/) {
      });

      $httpBackend.flush();
    });

    it('should change url with api url', function () {
      $httpBackend.expectGET( 'http://api.example.com/login' ).respond(200, '');
      $http.get('api://login').success(function(/*data, status, headers*/) {
      });

      $httpBackend.flush();
    });

  });

});