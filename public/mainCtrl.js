angular.module("chatApp")
  .controller("mainCtrl", function($scope, mainServ) {
    $scope.chats;
    $scope.getChats = function(){
      mainServ.getChats()
      .then(function(response){
        $scope.chats = response;
      });
    };
    setInterval(function(){
      $scope.getChats();
    }, 1000);

    $scope.postChat = function(chat){
      var today = "[" + new Date().toISOString().slice(0, 10) + "] - " + new Date().toISOString().slice(11, 19);
      var newChat = {
        body: chat,
        date: today
      };
      mainServ.postChat(newChat)
      .then(function(response){
        $scope.newChat = "";
        $scope.getChats();
      });
    };
    $scope.changeChats = function(chat){
      mainServ.changeChats(chat)
      .then(function(response){
        $scope.getChats();
      });
    };
    $scope.deleteChats = function(chat){
      mainServ.deleteChats(chat)
      .then(function(response){
        $scope.getChats();
      });
    };

});
