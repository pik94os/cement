define(['./module'],function(controllers){
    'use strict';
    controllers.controller('Rezoljucii',['$rootScope','$scope', function($rootScope,$scope){
        $rootScope.$broadcast('tobButtons', '0000000111000000010100001111');
    }])
});
/**
 * Created by pik on 04.01.16.
 */
