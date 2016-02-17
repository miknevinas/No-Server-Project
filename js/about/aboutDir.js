angular.module('portfolioApp').directive('aboutDir', function(){
    
    return {
        templateUrl: 'js/about/about.html',
        restrict: 'E',
        scope: {
        },
        controller: function($scope, aboutSvc) {
       
           $scope.faqs = aboutSvc.getFaq();
            
           $scope.coolBox = function(index) {
               $scope.faqs[index].cool += 1;
               $scope.faqs.$save(index);
            }
            $scope.lameBox = function(index) {
               $scope.faqs[index].lame += 1;
               $scope.faqs.$save(index);
            }
        }
    }
})