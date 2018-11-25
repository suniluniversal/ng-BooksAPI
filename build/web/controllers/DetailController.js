angular.module('ngBooksAPI')
    .controller('DetailController',['$scope', '$route', 'GoogleBooksAPIService', function($scope, $route, GoogleBooksAPIService){
        var bookVolumeID = $route.current.params.volumeID;

        getBookVolumeResult = function(){
            GoogleBooksAPIService.getBookVolume(bookVolumeID).then(
                function(data){
                    $scope.errorResponse="";
                    $scope.book =data;
                },
                function(error){
                    $scope.errorResponse = error.statusText;
                });
        }

        getBookVolumeResult();
    }]);