/**
 * Created by pik on 04.01.16.
 */
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('AccordionMenuCtrl', ['$rootScope','$scope','$state', function($rootScope,$scope,$state){
        $scope.openIndex = 0;
        $scope.setOpenIndex = function(index){
            $scope.openIndex = index;
        };
        $scope.items = [
            {
                title: 'ПЕРСОНАЛЬНЫЕ ДАННЫЕ',
                content: [
                    { title:'Персональный аккаунт' , state:'Personalnyj_akkaunt' },
                    { title:'Резолюции' , state:'Rezoljucii' },
                    { title:'Персональные документы' , state:'Personalnye_dokumenty' },
                    { title:'Календарь' , state:'Kalendar' },
                    { title:'Друзья' , state:'Druzja' },
                    { title:'Сообщения' , state:'Soobshhenija' },
                    { title:'Органайзер' , state:'Organajzer' },
                    { title:'Фотографии' , state:'Fotografii' },
                    { title:'Новости' , state:'Novosti' },
                    { title:'ГРУППЫ' , state:'Groups' },
                    { title:'Модуль создания документов' , state:'Modul_sozdanija_dokumentov' }
                ]
            },
            {
                title: 'КОРПОРАТИВНЫЕ ДАННЫЕ',
                content: [
                    { title:'Корпоративный аккаунт' , state:'Korporativnyj_akkaunt' },
                    { title:'Филиалы' , state:'Filialy' },
                    { title:'Отделы' , state:'Otdely' },
                    { title:'Корпоративные документы' , state:'Korporativnye_dokumenty' },
                    { title:'Группы' , state:'Gruppy' },
                    { title:'Корпоративные фотографии' , state:'Korporativnye_fotografii' },
                    { title:'Банковские счета' , state:'Bankovskie_scheta' },
                    { title:'Корпоративные новости' , state:'Korporativnye_novosti' }
                ]
            },
            {
                title: 'КАДРЫ',
                content: [
                    { title:'Резюме персональный аккаунт' , state:'Rezjume_personalnyj_akkaunt' },
                    { title:'Резюме корпоративный аккаунт' , state:'Rezjume_korporativnyj_akkaunt' },
                    { title:'Сотрудники' , state:'Sotrudniki' },
                    { title:'Вакансии корпоративный аккаунт' , state:'Vakansii_korporativnyj_akkaunt' },
                    { title:'Вакансии персональный аккаунт' , state:'Vakansii_personalnyj_akkaunt' },
                    { title:'Заявки на работу' , state:'Zajavki_na_rabotu' },
                    { title:'Подписи' , state:'Podpisi' },
                    { title:'Администрирование' , state:'Administrirovanie' }
                ]
            },
            {
                title: 'ТОВАРЫ (УСЛУГИ)',
                content: [
                    { title:'Товары' , state:'Tovary' },
                    { title:'Услуги' , state:'Uslugi' },
                    { title:'Документы' , state:'Dokumenty' },
                    { title:'Прайс-лист' , state:'Prays_list' }
                ]
            },
            {
                title: 'ТРАНСПОРТ',
                content: [
                    { title:'Автомобильный транспорт' , state:'Avtomobilnyy_transport' },
                    { title:'Транспортные единицы' , state:'Transportnye_edinitsy' },
                    { title:'Управление АТС' , state:'Upravlenie_ATS' },
                    { title:'Табель учета' , state:'Tabel_ucheta' }
                ]
            },
            {
                title: 'КЛИЕНТЫ',
                content: [
                    { title:'Корпоративный каталог' , state:'Korporativnyy_katalog' },
                    { title:'Проверка контрогента' , state:'Proverka_kontrogenta' }
                ]
            },
            {
                title: 'ДОГОВОРА',
                content: [
                    { title:'Договор' , state:'Dogovor' },
                    { title:'Приложения' , state:'Prilozheniya' },
                    { title:'Пользовательское соглашение' , state:'Polzovatelskoe_soglashenie' }
                ]
            },
            {
                title: 'ТОВАРООБОРОТ',
                content: [
                    { title:'Заявки на товар' , state:'Zayavki_na_tovar' },
                    { title:'Заявки на услуги' , state:'Zayavki_na_uslugi' },
                    { title:'Каталог' , state:'Katalog' }
                ]
            },
            {
                title: 'ЛОГИСТИКА',
                content: [
                    { title:'Лот на грузоперевозку' , state:'Lot_na_gruzoperevozku' },
                    { title:'Биржа грузов' , state:'Birzha_gruzov' },
                    { title:'Биржа транспорта' , state:'Birzha_transporta' },
                    { title:'Заявки на грузоперевозку' , state:'Zayavki_na_gruzoperevozku' }
                ]
            },
            {
                title: 'СКЛАД',
                content: [
                    { title:'Склады' , state:'Sklady' },
                    { title:'Движение товаров' , state:'Dvizhenie_tovarov' },
                    { title:'Приходный складской ордер' , state:'Prikhodnyy_skladskoy_order' },
                    { title:'Расходный складской ордер' , state:'Raskhodnyy_skladskoy_order' },
                    { title:'Внутренние заявки' , state:'Vnutrennie_zayavki' },
                    { title:'Инвентаризация' , state:'Inventarizatsiya' }
                ]
            },
            {
                title: 'БУХГАЛТЕРИЯ',
                content: [
                    { title:'Документы (приход/расход)' , state:'Dokumenty_prikhod_raskhod' },
                    { title:'Банковские документы' , state:'Bankovskie_dokumenty' },
                    { title:'Кассовые документы' , state:'Kassovye_dokumenty' },
                    { title:'Иные документы' , state:'Inye_dokumenty' },
                    { title:'Индикаторы' , state:'Indikatory' },
                    { title:'Отчетность' , state:'Otchetnost' }
                ]
            },
            {
                title: 'ДЕЛОПРОИЗВОДСТВО',
                content: [
                    { title:'Внутренние документы' , state:'Vnutrennie_dokumenty' },
                    { title:'Корреспонденция' , state:'Korrespondentsiya' },
                    { title:'Распорядительные' , state:'Rasporyaditelnye' }
                ]
            },
            {
                title: 'НАВИГАЦИЯ',
                content: [
                    { title:'Мониторинг' , state:'Monitoring' },
                    { title:'Объекты' , state:'Objects' },
                    { title:'Зоны' , state:'Zony' },
                    { title:'Треки' , state:'Treki' },
                    { title:'Индикаторы' , state:'Indicators' },
                    { title:'План-график' , state:'Plan_grafik' }
                ]
            }
        ];
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                $scope.items.forEach(function(t,num){
                    t.content.forEach(function (con) {
                        if(toState.name==con.state){
                            $scope.openIndex = num;
                        }
                    });
                });
            }
        )
    }]);
});