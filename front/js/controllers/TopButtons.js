/**
 * Created by pik on 05.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('TopButtons',['$scope', function($scope){
        $scope.showButton ='';
        $scope.$on('tobButtons', function(event,args){
            $scope.showButton = args;
        });
    }])
});