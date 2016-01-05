/**
 * Created by pik on 06.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('TabelUcheta',['$rootScope', function($rootScope){
        $rootScope.$broadcast('tobButtons', '0000000000000000011110101111');
    }])
});