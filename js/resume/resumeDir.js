angular.module('portfolioApp').directive('resumeDir', function(){
    
    return {
        templateUrl: 'js/resume/resume.html',
        restrict: 'E',
        scope: {
        },
        controller: function($scope, resumeSvc) {
            resumeSvc.getResume().then(function(response){
                $scope.resume = response.data;
            })
        }
    }      
})