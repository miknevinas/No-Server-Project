angular.module('portfolioApp').directive('aboutDir', function(){
    
    return {
        templateUrl: 'js/about/about.html',
        restrict: 'E',
        scope: {
                //This is expecting something from the parent scope to help it function
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
            
            
            
            /*$scope.newThing = function(thing) {
                $scope.faqs.$add(thing);
            };
            $scope.newThing({answer: "yeah", cool: 0, lame: 0, question: "who are you?"})*/
        }
    }
})