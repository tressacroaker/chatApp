angular.module("chatApp")
.service("mainServ", function($http) {
  this.getChats = function(){
    return $http({
      method: "GET",
      url: "/chat"
    })
    .then(function(response){
      return response.data;
    });
  };
  this.postChat = function(chat){
    return $http({
      method: "POST",
      url: "/chat",
      data: chat
    })
    .then(function(response){
      return response.data;
    });
  };
  this.changeChats = function(chat){
    return $http({
      method: "PUT",
      url: "/chat/" + chat._id,
      data: chat
    })
    .then(function(response){
      return response.data;
    });
  };
  this.deleteChats = function(){
    return $http({
      method: "DELETE",
      url: "/chat"
    })
    .then(function(response){
      return response.data;
    });
  };

});
