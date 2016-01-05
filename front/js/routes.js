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
            .state('Gruppy', {
                url: "/Gruppy",
                templateUrl: "/templates/templ3.html",
                controller: 'Gruppy'
            })
            .state('Korporativnye_fotografii', {
                url: "/Korporativnye_fotografii",
                templateUrl: "/templates/templ3.html",
                controller: 'KorporativnyeFotografii'
            })
            .state('Bankovskie_scheta', {
                url: "/Bankovskie_scheta",
                templateUrl: "/templates/templ3.html",
                controller: 'BankovskieScheta'
            })
            .state('Korporativnye_novosti', {
                url: "/Korporativnye_novosti",
                templateUrl: "/templates/templ3.html",
                controller: 'KorporativnyeNovosti'
            })
            .state('Rezjume_personalnyj_akkaunt', {
                url: "/Rezjume_personalnyj_akkaunt",
                templateUrl: "/templates/templ1.html",
                controller: 'RezjumePersonalnyjAkkaunt'
            })
            .state('Rezjume_korporativnyj_akkaunt', {
                url: "/Rezjume_korporativnyj_akkaunt",
                templateUrl: "/templates/templ5.html",
                controller: 'RezjumeKorporativnyjAkkaunt'
            })
            .state('Sotrudniki', {
                url: "/Sotrudniki",
                templateUrl: "/templates/templ3.html",
                controller: 'Sotrudniki'
            })
            .state('Vakansii_korporativnyj_akkaunt', {
                url: "/Vakansii_korporativnyj_akkaunt",
                templateUrl: "/templates/templ3.html",
                controller: 'VakansiiKorporativnyjAkkaunt'
            })
            .state('Vakansii_personalnyj_akkaunt', {
                url: "/Vakansii_personalnyj_akkaunt",
                templateUrl: "/templates/templ5.html",
                controller: 'VakansiiPersonalnyjAkkaunt'
            })
            .state('Zajavki_na_rabotu', {
                url: "/Zajavki_na_rabotu",
                templateUrl: "/templates/templ4.html",
                controller: 'ZajavkiNaRabotu'
            })
            .state('Podpisi', {
                url: "/Podpisi",
                templateUrl: "/templates/templ3.html",
                controller: 'Podpisi'
            })
            .state('Administrirovanie', {
                url: "/Administrirovanie",
                templateUrl: "/templates/templ3.html",
                controller: 'Administrirovanie'
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