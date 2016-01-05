/**
 * Created by pik on 05.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('Fotografii',['$rootScope','$scope', function($rootScope,$scope){
        $rootScope.$broadcast('tobButtons', '1110000000110000001000001111');
    }])
});