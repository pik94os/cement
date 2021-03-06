/**
 * Created by pik on 05.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('KorporativnyeFotografii',['$rootScope','$scope', function($rootScope,$scope){
        $scope.tabShow = 0;
        var topButtons = [
            '1110000000110000011100001111',
            '0000010000110000011110101111',
            '0000001000110000011110101111'
        ];
        $rootScope.$broadcast('tobButtons', topButtons[0]);
        $scope.changeTab = function(tab){
            $scope.tabShow = tab;
            $rootScope.$broadcast('tobButtons', topButtons[tab]);
        };
    }])
});