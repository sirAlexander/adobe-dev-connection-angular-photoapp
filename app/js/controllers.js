'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function PhoneDetailCtrl($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];


function MainController($scope, photoSearchService) {

    $scope.photos = [];

    $scope.thumbSize = 'small';

    $scope.setThumbSize = function(size) {
        $scope.thumbSize = size;
    };

    $scope.submitSearch = function() {

        $scope.photos = [];

        var keyword = $scope.searchKeyword;
        photoSearchService.findPhotos(keyword, function(photos) {
            $scope.photos = photos;
        });
    };

}