define(['./app'], function (app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider, $locationProvider ) {
        // Любые неопределенные url перенаправлять на /err404
        $urlRouterProvider.otherwise("/err_404");
        $stateProvider
            //Стартовая страница
            .state('conf', {
                url: "/",
                views: {
                    '':{
                        templateUrl: "/views/conference/search.html",
                        controller: 'SearchCtrl'
                    },
                    'head':{
                        templateUrl: "/views/headForm.html",
                        controller: 'LoginCtrl'
                    }
                }
            })
            .state('design', {
                url: "/design",
                templateUrl: "/views/design/list.html",
                controller: 'DesignCtrl'
            })
            .state('pages', {
                url: "/pages",
                templateUrl: "/views/pages/list.html",
                controller: 'PagesCtrl'
            })
            .state('innovations',{
                url: "/innovations",
                templateUrl: "/views/innovations/innovations.html",
                controller: "InnovationsCtrl"
            })
            .state('help',{
                url: "/help",
                templateUrl: "/views/help/list.html",
                controller: "HelpCtrl"
            })
            .state('token',{
                url:	"/token",
                controller: "TokenAuthCtrl",
                template: "<div>Проверка данных...</div>"
            })
            .state('account',{
                url:'/account',
                templateUrl: "/views/account/list.html",
                controller: "AccountCtrl"
            })
            //Ошибка 404
            .state('err404', {
                url: "/err404",
                templateUrl: "/views/err404.html"
            })
            .state('open', {
                url: "/:sn",
                templateUrl: "/views/conference/open.html",
                controller: 'OpenCtrl'
            })
        //Включаем красивые url(требуется html5)
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
});