/**
 * Created by pik on 05.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('Novosti',['$rootScope','$scope', function($rootScope,$scope){
        $rootScope.$broadcast('tobButtons', '1110000000000000001000001111');
    }])
});