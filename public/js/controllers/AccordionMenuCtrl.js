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
                    { title:'Товары' , state:'' },
                    { title:'Услуги' , state:'' },
                    { title:'Документы' , state:'' },
                    { title:'Прайс-лист' , state:'' }
                ]
            },
            {
                title: 'ТРАНСПОРТ',
                content: [
                    { title:'Автомобильный транспорт' , state:'' },
                    { title:'Транспортные единицы' , state:'' },
                    { title:'Управление АТС' , state:'' },
                    { title:'Табель учета' , state:'' }
                ]
            },
            {
                title: 'КЛИЕНТЫ',
                content: [
                    { title:'Корпоративный каталог' , state:'' },
                    { title:'Проверка контрогента' , state:'' }
                ]
            },
            {
                title: 'ДОГОВОРА',
                content: [
                    { title:'Договор' , state:'' },
                    { title:'Приложения' , state:'' },
                    { title:'Пользовательское соглашение' , state:'' }
                ]
            },
            {
                title: 'ТОВАРООБОРОТ',
                content: [
                    { title:'Заявки на товар' , state:'' },
                    { title:'Заявки на услуги' , state:'' },
                    { title:'Каталог' , state:'' }
                ]
            },
            {
                title: 'ЛОГИСТИКА',
                content: [
                    { title:'Лот на грузоперевозку' , state:'' },
                    { title:'Биржа грузов' , state:'' },
                    { title:'Биржа транспорта' , state:'' },
                    { title:'Заявки на грузоперевозку' , state:'' }
                ]
            },
            {
                title: 'СКЛАД',
                content: [
                    { title:'Склады' , state:'' },
                    { title:'Движение товаров' , state:'' },
                    { title:'Приходный складской ордер' , state:'' },
                    { title:'Расходный складской ордер' , state:'' },
                    { title:'Внутренние заявки' , state:'' },
                    { title:'Инвентаризация' , state:'' }
                ]
            },
            {
                title: 'БУХГАЛТЕРИЯ',
                content: [
                    { title:'Документы (приход/расход)' , state:'' },
                    { title:'Банковские документы' , state:'' },
                    { title:'Кассовые документы' , state:'' },
                    { title:'Иные документы' , state:'' },
                    { title:'Индикаторы' , state:'' },
                    { title:'Отчетность' , state:'' }
                ]
            },
            {
                title: 'ДЕЛОПРОИЗВОДСТВО',
                content: [
                    { title:'Внутренние документы' , state:'' },
                    { title:'Корреспонденция' , state:'' },
                    { title:'Распорядительные' , state:'' }
                ]
            },
            {
                title: 'НАВИГАЦИЯ',
                content: [
                    { title:'Мониторинг' , state:'' },
                    { title:'Объекты' , state:'' },
                    { title:'Зоны' , state:'' },
                    { title:'Треки' , state:'' },
                    { title:'Индикаторы' , state:'' },
                    { title:'План-график' , state:'' }
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