angular.module('portfolioApp', ['ui.router', 'firebase'])

    .config(function($stateProvider, $urlRouterProvider){
    
        $stateProvider
//            .state('home', {
//                url: '/',
//                templateUrl: '/js/home/home.html',
//                controller: 'homeCtrl'
//            })
//            .state('work', {
//                url: '/work',
//                templateUrl: '/js/work/work.html',
//            })
//            .state('resume', {
//                url: '/resume',
//                template: '<resume-dir></resume-dir>'
//            })
//            .state('about', {
//                url: '/about',
//                template: '<about-dir></about-dir>'
//            })
//            .state('contact', {
//                url: '/contact',
//                template: '<contact-dir></contact-dir>'
//            })
        
        
        $urlRouterProvider
            .otherwise('/');
    
})

    .directive('homeView', function() {
    return {
        templateUrl: '/js/home/home.html',
        restrict: 'E',
        scope: {
           
        },
        controller: ''
    };
})
    .directive('workView', function() {
    return {
        templateUrl: '/js/work/work.html',
        restrict: 'E',
        scope: {
            
        },
        controller: ''
    };
})
    .directive('resumeView', function() {
    return {
        templateUrl: '/js/resume/resume.html',
        restrict: 'E',
        scope: {

        },
        controller: 'resumeCtrl'
    };
})
    .directive('contactView', function() {
    return {
        templateUrl: '/js/contact/contact.html',
        restrict: 'E',
        scope: {

        },
        controller: 'contactCtrl'
    };
})