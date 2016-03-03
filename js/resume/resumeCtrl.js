angular.module('portfolioApp').controller('resumeCtrl', function($scope, resumeSvc){
    
   
            resumeSvc.getResume().then(function(response){
                $scope.resume = response.data;
          
    })  
    
})