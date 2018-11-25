angular.module('ngBooksAPI',['ngRoute']).
config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'SearchController',
        templateUrl: 'views/search.html'
    }).when('/bookDetail/:volumeID', {
        controller: 'DetailController',
        templateUrl: 'views/bookDetail.html'
    }).otherwise({redirectTo: '/'});
});