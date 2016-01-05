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
            .state('Tovary', {
                url: "/Tovary",
                templateUrl: "/templates/templ3.html",
                controller: 'Tovary'
            })
            .state('Uslugi', {
                url: "/Uslugi",
                templateUrl: "/templates/templ3.html",
                controller: 'Uslugi'
            })
            .state('Dokumenty', {
                url: "/Dokumenty",
                templateUrl: "/templates/templ3.html",
                controller: 'Dokumenty'
            })
            .state('Prays_list', {
                url: "/Prays_list",
                templateUrl: "/templates/templ3.html",
                controller: 'PraysList'
            })
            .state('Avtomobilnyy_transport', {
                url: "/Avtomobilnyy_transport",
                templateUrl: "/templates/templ3.html",
                controller: 'AvtomobilnyyTransport'
            })
            .state('Transportnye_edinitsy', {
                url: "/Transportnye_edinitsy",
                templateUrl: "/templates/templ3.html",
                controller: 'TransportnyeEdinitsy'
            })
            .state('Upravlenie_ATS', {
                url: "/Upravlenie_ATS",
                templateUrl: "/templates/templ3.html",
                controller: 'UpravlenieAts'
            })
            .state('Tabel_ucheta', {
                url: "/Tabel_ucheta",
                templateUrl: "/templates/templ5.html",
                controller: 'TabelUcheta'
            })
            .state('Korporativnyy_katalog', {
                url: "/Korporativnyy_katalog",
                templateUrl: "/templates/templ3.html",
                controller: 'KorporativnyyKatalog'
            })
            .state('Proverka_kontrogenta', {
                url: "/Proverka_kontrogenta",
                templateUrl: "/templates/templ1.html",
                controller: 'ProverkaKontrogenta'
            })
            .state('Dogovor', {
                url: "/Dogovor",
                templateUrl: "/templates/templ4.html",
                controller: 'Dogovor'
            })
            .state('Prilozheniya', {
                url: "/Prilozheniya",
                templateUrl: "/templates/templ4.html",
                controller: 'Prilozheniya'
            })
            .state('Polzovatelskoe_soglashenie', {
                url: "/Polzovatelskoe_soglashenie",
                templateUrl: "/templates/templ4.html",
                controller: 'PolzovatelskoeSoglashenie'
            })
            .state('Zayavki_na_tovar', {
                url: "/Zayavki_na_tovar",
                templateUrl: "/templates/templ4.html",
                controller: 'ZayavkiNaTovar'
            })
            .state('Zayavki_na_uslugi', {
                url: "/Zayavki_na_uslugi",
                templateUrl: "/templates/templ4.html",
                controller: 'ZayavkiNaUslugi'
            })
            .state('Katalog', {
                url: "/Katalog",
                templateUrl: "/templates/templ1.html",
                controller: 'Katalog'
            })
            .state('Lot_na_gruzoperevozku', {
                url: "/Lot_na_gruzoperevozku",
                templateUrl: "/templates/templ4.html",
                controller: 'LotNaGruzoperevozku'
            })
            .state('Birzha_gruzov', {
                url: "/Birzha_gruzov",
                templateUrl: "/templates/templ5.html",
                controller: 'BirzhaGruzov'
            })
            .state('Birzha_transporta', {
                url: "/Birzha_transporta",
                templateUrl: "/templates/templ5.html",
                controller: 'BirzhaTransporta'
            })
            .state('Zayavki_na_gruzoperevozku', {
                url: "/Zayavki_na_gruzoperevozku",
                templateUrl: "/templates/templ4.html",
                controller: 'ZayavkiNaGruzoperevozku'
            })
            .state('Sklady', {
                url: "/Sklady",
                templateUrl: "/templates/templ3.html",
                controller: 'Sklady'
            })
            .state('Dvizhenie_tovarov', {
                url: "/Dvizhenie_tovarov",
                templateUrl: "/templates/templ1.html",
                controller: 'DvizhenieTovarov'
            })
            .state('Prikhodnyy_skladskoy_order', {
                url: "/Prikhodnyy_skladskoy_order",
                templateUrl: "/templates/templ3.html",
                controller: 'PrikhodnyySkladskoyOrder'
            })
            .state('Raskhodnyy_skladskoy_order', {
                url: "/Raskhodnyy_skladskoy_order",
                templateUrl: "/templates/templ3.html",
                controller: 'RaskhodnyySkladskoyOrder'
            })
            .state('Vnutrennie_zayavki', {
                url: "/Vnutrennie_zayavki",
                templateUrl: "/templates/templ3.html",
                controller: 'VnutrennieZayavki'
            })
            .state('Inventarizatsiya', {
                url: "/Inventarizatsiya",
                templateUrl: "/templates/templ3.html",
                controller: 'Inventarizatsiya'
            })
            .state('Dokumenty_prikhod_raskhod', {
                url: "/Dokumenty_prikhod_raskhod",
                templateUrl: "/templates/templ4.html",
                controller: 'DokumentyPrikhodRaskhod'
            })
            .state('Bankovskie_dokumenty', {
                url: "/Bankovskie_dokumenty",
                templateUrl: "/templates/templ4.html",
                controller: 'BankovskieDokumenty'
            })
            .state('Kassovye_dokumenty', {
                url: "/Kassovye_dokumenty",
                templateUrl: "/templates/templ4.html",
                controller: 'KassovyeDokumenty'
            })
            .state('Inye_dokumenty', {
                url: "/Inye_dokumenty",
                templateUrl: "/templates/templ3.html",
                controller: 'InyeDokumenty'
            })
            .state('Indikatory', {
                url: "/Indikatory",
                templateUrl: "/templates/templ1.html",
                controller: 'Indikatory'
            })
            .state('Otchetnost', {
                url: "/Otchetnost",
                templateUrl: "/templates/templ4.html",
                controller: 'Otchetnost'
            })
            .state('Vnutrennie_dokumenty', {
                url: "/Vnutrennie_dokumenty",
                templateUrl: "/templates/templ3.html",
                controller: 'VnutrennieDokumenty'
            })
            .state('Korrespondentsiya', {
                url: "/Korrespondentsiya",
                templateUrl: "/templates/templ4.html",
                controller: 'Korrespondentsiya'
            })
            .state('Rasporyaditelnye', {
                url: "/Rasporyaditelnye",
                templateUrl: "/templates/templ3.html",
                controller: 'Rasporyaditelnye'
            })
            .state('Monitoring', {
                url: "/Monitoring",
                templateUrl: "/templates/templ1.html",
                controller: 'Monitoring'
            })
            .state('Objects', {
                url: "/Objects",
                templateUrl: "/templates/templ3.html",
                controller: 'Objects'
            })
            .state('Zony', {
                url: "/Zony",
                templateUrl: "/templates/templ3.html",
                controller: 'Zony'
            })
            .state('Treki', {
                url: "/Treki",
                templateUrl: "/templates/templ3.html",
                controller: 'Treki'
            })
            .state('Indicators', {
                url: "/Indicators",
                templateUrl: "/templates/templ1.html",
                controller: 'Indicators'
            })
            .state('Plan_grafik', {
                url: "/Plan_grafik",
                templateUrl: "/templates/templ1.html",
                controller: 'PlanGrafik'
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