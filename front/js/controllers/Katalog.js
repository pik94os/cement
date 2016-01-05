/**
 * Created by pik on 06.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('Katalog',['$rootScope', function($rootScope){
        $rootScope.$broadcast('tobButtons', '1110000000000000000000001111');
    }])
});