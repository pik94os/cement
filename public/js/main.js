/**
 * Created by Роман on 07.12.2014.
 */
require.config({
    //baseUrl: '../bower_components',
    //  псевдонимы и пути используемых библиотек и плагинов
    paths: {
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular.min',
        'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router.min',
    },

    // angular не поддерживает AMD из коробки, поэтому экспортируем перменную angular в глобальную область
    shim: {
        'angular': {
            deps: [],
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        }
    },

    // запустить приложение
    deps: ['./bootstrap']
});