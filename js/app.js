angular.module('portfolioApp', ['ui.router', 'firebase'])

    .config(function($stateProvider, $urlRouterProvider){
    
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/js/home/home.html',
                controller: 'homeCtrl'
            })
            .state('work', {
                url: '/work',
                templateUrl: '/js/work/work.html',
            })
            .state('resume', {
                url: '/resume',
                template: '<resume-dir></resume-dir>'
            })
            .state('about', {
                url: '/about',
                template: '<about-dir></about-dir>'
            })
            .state('contact', {
                url: '/contact',
                template: '<contact-dir></contact-dir>'
            })
        
        
        $urlRouterProvider
            .otherwise('/');
    
})