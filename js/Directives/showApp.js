app.directive('showApp', function() {
    return { 
        restrict: 'E', 
        scope: { 
         info: '='
        },
        templateUrl: 'js/Directives/showApp.html',
        link: function(scope, element, attrs) { 
      
            scope.rotar = function() { 
              element.toggleClass('rotar'); 
              
        }
        }
  };
  });