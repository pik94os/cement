/**
 * Created by pik on 04.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('PersonalnyjAkkaunt',['$rootScope', '$scope', function($rootScope, $scope){
        $rootScope.$broadcast('tobButtons', '1110000000000000000000001111');
    }])
});