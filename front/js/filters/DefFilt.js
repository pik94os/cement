define(['./module'], function (filters) {
    'use strict';
    filters.filter('DefFilt', function(){
        return function(input) {
            return 0;
        }
    });
});