angular.module('portfolioApp').service('resumeSvc', function($http) {
    
    this.getResume = function() {
        return $http.get('js/resume/resumeList.json');
    }
})