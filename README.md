# angular-fancy-url [![Build Status](https://travis-ci.org/squareteam/angular-fancy-url.svg?branch=master)](https://travis-ci.org/squareteam/angular-fancy-url)


*([Related Article](https://medium.com/french-make-beautiful/angular-fancy-configuration-tip-7210cde2b25f))*


### Just do

```js
app.service('myService', function($http) {
  // GET http://api.example.com/users
  return $http.get('api://users');
});
```

### No more

```js
app.service('myService', function($http, apiUrl) {
  // GET http://api.example.com/users
  return $http.get(apiUrl + '/users');
});
```

- Flexibility — interceptors for the win !
- Readability — no extras string concatenation or helper calls
- “Testability”


### Usage

```
bower install angular-fancy-url --save
```


then

```js
angular.module('myApplication', [
   'fancyURL'
]).config(function($httpProvider, httpFancyURLProvider) {
   $httpProvider.interceptors.push('httpFancyURL');

   httpFancyURLProvider.use({
      'api' : 'http://api.example.com/',
   });
})
```

