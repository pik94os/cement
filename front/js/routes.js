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
            .state('Soobshhenija', {
                url: "/Soobshhenija",
                templateUrl: "/templates/templ5.html",
                controller: 'Soobshhenija'
            })
            .state('Organajzer', {
                url: "/Organajzer",
                templateUrl: "/templates/templ5.html",
                controller: 'Organajzer'
            })
            .state('Fotografii', {
                url: "/Fotografii",
                templateUrl: "/templates/templ5.html",
                controller: 'Fotografii'
            })
            .state('Novosti', {
                url: "/Novosti",
                templateUrl: "/templates/templ5.html",
                controller: 'Novosti'
            })
            .state('Groups', {
                url: "/Groups",
                templateUrl: "/templates/templ5.html",
                controller: 'Groups'
            })
            .state('Modul_sozdanija_dokumentov', {
                url: "/Modul_sozdanija_dokumentov",
                templateUrl: "/templates/templ9.html",
                controller: 'ModulSozdanijaDokumentov'
            })
            .state('Korporativnyj_akkaunt', {
                url: "/Korporativnyj_akkaunt",
                templateUrl: "/templates/templ1.html",
                controller: 'KorporativnyjAkkaunt'
            })
            .state('Filialy', {
                url: "/Filialy",
                templateUrl: "/templates/templ1.html",
                controller: 'Filialy'
            })
            .state('Otdely', {
                url: "/Otdely",
                templateUrl: "/templates/templ3.html",
                controller: 'Otdely'
            })
            .state('Korporativnye_dokumenty', {
                url: "/Korporativnye_dokumenty",
                templateUrl: "/templates/templ3.html",
                controller: 'KorporativnyeDokumenty'
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