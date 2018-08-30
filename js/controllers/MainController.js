app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
      $scope.image = data;
    });
    $scope.class_status2 = true;
    $scope.toggleSingleClass = function() {
    $scope.class_status = !$scope.class_status;
    
    $scope.class_status2 = !$scope.class_status2;      
    };
  }]);


  