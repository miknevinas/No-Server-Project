angular.module('portfolioApp').service('aboutSvc', function($http, $firebaseObject, $firebaseArray) {
    
    var url = 'https://portfoliofaq.firebaseio.com/';
    
    var ref = new Firebase(url);
    
    this.getFaq = function() {
        return $firebaseArray(ref);
    }
})