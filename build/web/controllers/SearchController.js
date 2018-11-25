angular.module('ngBooksAPI')
    .controller('SearchController', ['$scope', 'GoogleBooksAPIService', function($scope, GoogleBooksAPIService){
        $scope.books = [];
        $scope.count =0;

        $scope.searchBooksByQuery = function(){
            var query = $scope.searchKey;
            if(query) {
                $scope.errorResponse="";
                $scope.books = [];

                GoogleBooksAPIService.searchBookByKey(query).then(
                    function (data) {
                        $scope.books = data.items;
                    }, function (error) {
                        $scope.errorResponse = error.statusText;
                    });
            }else{
                $scope.errorResponse = "Please enter a keyword to search";
            }
        }
    }]);