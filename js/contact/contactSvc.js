angular.module('portfolioApp').service('contactSvc', function($http){
   
    this.submitEmail = function(email, subject, message) {
         
    return $http({
        method: 'post',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': "l2iyd18i5Iiq0kVu6rDGBg",//‘YOUR API KEY HERE’
            'message': {
              'from_email': 'me@adammcnevin.com',
              'to': [
                  {
                    'email': 'miknevinas@gmail.com', //‘RECIPIENT_NO_1@EMAIL.HERE’
                    'type': 'to'
                  }
                ],
              'autotext':'true',
              'subject': subject + ' ' + email,//‘YOUR SUBJECT HERE!’
              'text': message //‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
            }
        }
     })
   } 
})