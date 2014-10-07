'use strict';

angular.module('fancyURL', []).provider('httpFancyURL', function() {

  this.$$shortcuts = {};

  this.use = function(shortcuts) {
    this.$$shortcuts = shortcuts;
  };


  this.$get = function() {

    var $$compiledShortcuts = {};

    angular.forEach(this.$$shortcuts, function(url, namespace) {
      $$compiledShortcuts[url] = new RegExp('^' + namespace + ':\\/\\/');
    });

    return {
      request : function(config) {

        angular.forEach($$compiledShortcuts, function(regex, url) {
          if (regex.test(config.url)) {
            config.url = config.url.replace(regex, url);
          }
        });

        return config;
      }
    };

  };

});