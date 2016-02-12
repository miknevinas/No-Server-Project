angular.module('portfolioApp').directive('resumeDir', function(){
    
    return {
        templateUrl: 'js/resume/resume.html',
        restrict: 'E',
        scope: {
                //This is expecting something from the parent scope to help it function
        },
        controller: function($scope, resumeSvc) {
            resumeSvc.getResume().then(function(response){
                $scope.resume = response.data;
                console.log(response);
            })
        },
        link: function(scope, element, attributes) {
            //jQuery should go here
        }
    }
    
    
    
})