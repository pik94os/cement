/**
 * Created by pik on 04.01.16.
 */
define(['./module'],function(controllers){
    'use strict';
    controllers.controller('PersonalnyjAkkaunt',['$rootScrope', '$scope', function($rootScrope, $scope){
        $rootScrope.$broadcast('tobButtons', ['0000000111000000010100001111']);
    }])
});