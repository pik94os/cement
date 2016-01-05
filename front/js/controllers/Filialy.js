/**
 * Created by pik on 05.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('Filialy',['$rootScope', function($rootScope){
        $rootScope.$broadcast('tobButtons', '1110000000111000000000001111');
    }])
});