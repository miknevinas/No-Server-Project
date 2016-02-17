angular.module('portfolioApp').service('contactSvc', function($http){
   
    this.submitEmail = function(email, subject, message) {
         
    return $http({
        method: 'post',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': "l2iyd18i5Iiq0kVu6rDGBg",
            'message': {
              'from_email': 'me@adammcnevin.com',
              'to': [
                  {
                    'email': 'miknevinas@gmail.com',
                    'type': 'to'
                  }
                ],
              'autotext':'true',
              'subject': subject + ' ' + email,
              'text': message 
            }
        }
     })
   } 
})