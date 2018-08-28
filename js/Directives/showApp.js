app.directive('showApp', function() {
    return { 
        restrict: 'E', 
        scope: { 
         info: '='
        },
        templateUrl: 'js/Directives/showApp.html'
  };
  });