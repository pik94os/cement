define(['./app'], function (app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider, $locationProvider ) {
        // Любые неопределенные url перенаправлять на /err404
        $urlRouterProvider.otherwise("/err_404");
        $stateProvider
            //Стартовая страница
            .state('Personalnyj_akkaunt', {
                url: "/",
                templateUrl: "/templates/templ5.html",
                controller: 'PersonalnyjAkkaunt'
            })
            .state('Rezoljucii', {
                url: "/Rezoljucii",
                templateUrl: "/templates/templ1.html",
                controller: 'Rezoljucii'
            })
            .state('Personalnye_dokumenty', {
                url: "/Personalnye_dokumenty",
                templateUrl: "/templates/templ5.html",
                controller: 'PersonalnyeDokumenty'
            })
            .state('Kalendar', {
                url: "/Kalendar",
                templateUrl: "/templates/templ5.html",
                controller: 'Kalendar'
            })
            .state('Druzja', {
                url: "/Druzja",
                templateUrl: "/templates/templ6.html",
                controller: 'Druzja'
            })
            //Ошибка 404
            .state('err_404', {
                url: "/err404",
                templateUrl: "/templates/err404.html"
            })
        //Включаем красивые url(требуется html5)
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
});