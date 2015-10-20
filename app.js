(function(app) {

  app.controller('MainCtrl', MainCtrl)
  .config(['$routeProvider', function ($routeProvider) {
           $routeProvider.when('/', {
               templateUrl: 'partials/home.html' ,
               controller: 'MainCtrl',
               controllerAs: 'vm'
           });
           $routeProvider.otherwise({ redirectTo: '/' });
       }
   ]);

  function MainCtrl() {
      var self = this;
      this.name = 'Roubz Electron';
  };

})(angular.module('app', ['ngRoute']));
