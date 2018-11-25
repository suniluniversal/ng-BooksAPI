angular.module('ngBooksAPI').
    factory('GoogleBooksAPIService', ['$http','$q', function($http, $q){

        var service = {
            searchBookByKey: searchBookByKey,
            getBookVolume: getBookVolume
        };

        return service;

        function searchBookByKey(searchKey){
            var deferred =$q.defer();

            //Remove all trailing whitespaces and replace spaces for an encoded URL
            var searchKeyEncoded = encodeURIComponent(searchKey.trim());

            $http({
                method : "get",
                url : "https://www.googleapis.com/books/v1/volumes?q=" + searchKeyEncoded
            }).
            then(function(result){
                deferred.resolve(result.data);
            }, function(response){
                console.log(response);
                deferred.reject(response);
            });

            return deferred.promise;
        };

        function getBookVolume(bookVolumeID){
            var deferred =$q.defer();

            var API_KEY = "AIzaSyBe510skYWYxvsEKTSv-GHhIT5mGPefLMk";

            $http({
                method : "get",
                url : "https://www.googleapis.com/books/v1/volumes/"+bookVolumeID+"?key="+API_KEY
            }).
            then(function(result){
                deferred.resolve(result.data);
            }, function(response){
                console.log(response);
                deferred.reject(response);
            });

            return deferred.promise;
        };
    }]);