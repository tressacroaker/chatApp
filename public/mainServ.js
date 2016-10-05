angular.module("chatApp")
.service("mainServ", function($http) {

this.postChat = function(chat) {
  return $http({
    method: "POST",
    url: "/chat",
    data: chat
  }).then(function(response){
    console.log(response)
    return response.data;
  })
};

this.getChats = function() {
  return $http({
    method: "GET",
    url: "/chat"
  }).then(function(response){
    return response.data;
  })
};






});
