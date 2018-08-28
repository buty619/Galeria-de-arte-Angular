app.factory('forecast', ['$http', function($http) { 
  return $http.get("https://api.shutterstock.com/v2/images/1029565126/similar?view=full", {headers: { Authorization: "Basic MGM0MTgtMjVkY2UtNjdiNzAtYWIzYzUtNTA2ZjYtZmQyMWI6NzM2NzgtNjE3ZTQtODhmOGYtZGVlZTctYjdjMjAtNDJiMGY="}}) 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);


  /* se debe acualizar en head el codigo de autorizacion pues este se vence en api*/ 