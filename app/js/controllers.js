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


function MainController($scope) {

    $scope.photos = [
        {title: 'Photo 1', thumbUrl: '//googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains1.jpg'},
        {title: 'Photo 2', thumbUrl: '//googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains2.jpg'},
        {title: 'Photo 3', thumbUrl: '//googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains3.jpg'}
    ];

    $scope.thumbSize = 'small';

    $scope.setThumbSize = function(size) {
        $scope.thumbSize = size;
    };

}