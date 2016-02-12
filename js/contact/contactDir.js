angular.module('portfolioApp').directive('contactDir', function(){
    
    return {
        templateUrl: 'js/contact/contact.html',
        restrict: 'E',
    
        controller: function($scope, contactSvc) {
            $scope.submitEmail = function(email, subject, message) {
                    var char = email.search("@");
                    if (char === -1) {
                        alert("Please enter a valid email address.");
                    }
                    else if (!subject) {
                        alert("Please enter a subject.")
                    }
                    else if (!message) {
                        alert("Please enter a message.")
                    }
                
                    else if (email && subject && message) {
                        alert("Your message has been sent.")
                        contactSvc.submitEmail(email, subject, message);
                        $scope.email = '';
                        $scope.subject = '';
                        $scope.message = '';
                }
                
            }
        }
    }
    
})