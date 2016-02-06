// $.ajax({
//   headers: { 'X-Auth-Token': 'bc2bce7cbcf746c6a3ed4adf39c8a6c0' },
//   url: 'http://api.football-data.org/v1/soccerseasons',
//   dataType: 'json',
//   type: 'GET',
// }).done(function(response) {
  
//   list_no=response.length;
//   list = '';
//   for(i=0;i<list_no;i++)
//   {
//   		list += '<li> <a>' + response[i].caption + '</a> </li>';
//   }

//   $('#team').html(list);
// }); 

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http({
    method : "GET",
    url : "http://api.football-data.org/v1/soccerseasons",
    headers: {
                'X-Auth-Token': 'bc2bce7cbcf746c6a3ed4adf39c8a6c0'
            }
  }).then(function mySucces(response) {
      console.log(response);
      $scope.myWelcome = response.data;
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
  });
});