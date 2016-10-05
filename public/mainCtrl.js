angular.module("chatApp")
.controller("mainCtrl",
function($scope, mainServ) {

$scope.postChat = function(chat){
  mainServ.postChat(chat)
  .then(function(response){
    $scope.newChat = {};
    $scope.getChats();
  });
};

$scope.getChats = function(){
  mainServ.getChats()
  .then(function(response){
    $scope.data=response;
  })
};
$scope.getChats();


});
