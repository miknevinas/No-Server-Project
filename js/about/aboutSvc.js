angular.module('portfolioApp').service('aboutSvc', function($http, $firebaseObject, $firebaseArray) {
    
    var url = 'https://portfoliofaq.firebaseio.com/';
    
    var ref = new Firebase(url);
    
    this.getFaq = function() {
        return $firebaseArray(ref);
    }
     
  /*  this.getFaq = function() {
        return $http.get('js/about/faq.json');
    }*/
})