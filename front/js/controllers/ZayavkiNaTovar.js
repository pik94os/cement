/**
 * Created by pik on 06.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('ZayavkiNaTovar',['$rootScope','$scope', function($rootScope,$scope){
        $scope.tabShow = 0;
        var topButtons = [
            '1110100000000000011100001111',
            '0000110000000000011110101111',
            '0000110000000000011110101111',
            '0000101000000000011110101111'
        ];
        $rootScope.$broadcast('tobButtons', topButtons[0]);
        $scope.changeTab = function(tab){
            $scope.tabShow = tab;
            $rootScope.$broadcast('tobButtons', topButtons[tab]);
        };
    }])
});