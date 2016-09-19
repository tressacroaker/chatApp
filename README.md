<img src="http://montanacodeschool.com/wp-content/uploads/2016/08/MCS_LOGO_v1-1.png" width="200" align="right"/>

##Chat App

##Purpose
The purpose of this day project is to introduce students to the basic structure of an Angular framework.

##Directions
Fork and clone this repository. Complete all of the following steps. When you have finished, push your code into GitHub.

* Review the code that is already built in your folder. I have setup the backend server and database for you. Don't forget to do an npm install and run mongod.

* Inside your public folder, create the files necessary to build your Angular app. Be sure to include index.html, app.js, mainCtrl.js, and mainServ.js. Organize these files in whatever folder structure you are most comfortable with.

* Starting with your index.html, be sure to call in the Angular CDN and all of your JavaScript files in script tags.

* Establish your Angular app by associating the index.html file with your ng-app and ng-controller directives. Use the ng-app directive to name your app. Use the ng-controller directive to associate your mainCtrl with your html code.

  * The directives and script files should be setup as such.

  ```
  <html ng-app="chatApp">
    <head></head>
    <body ng-controller="mainCtrl">
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
      <script src="app.js" type="text/javascript"></script>
      <script src="mainCtrl.js" type="text/javascript"></script>
      <script src="mainServ.js" type="text/javascript"></script>
    </body>
  </html>
  ```

* Setup your app.js using the angular.module method. Be sure to use the same name as you used in your ng-app directive. The structure should look like this.

```
angular.module("chatApp", []);
```

* Setup your mainCtrl.js and mainServ.js by associating the app name, controller name, and server name. In your controller, inject in the $scope object and the mainServ service file. In your service, inject in $http. The structure for each should look like this.

```
angular.module("chatApp").controller("mainCtrl", function($scope, mainServ) {
  //code goes here
});
```
```
angular.module("chatApp").service("mainServ", function($http) {
  //code goes here
});
```

* Before we start adding functionality, let's test the controller by plugging in a test value like `$scope.test = "test"`. In your index.html file add the variable in double curly brackets like this `{{test}}`. Make sure that your test value shows up in your view when you run this on live-server or nodemon. If that worked, remove your test code.

* Let's think about what is needed for a chat app to function properly. You need a way to add a chat message. You need a way to display the chat message. You may also want a way to delete or change the messages.

* With that said, lets start by adding messages and displaying them. In the index.html file, create a form with an input tag. Inside the input tag, add the ng-model directive with a value of newChat. Inside the form tag, add the ng-submit directive with a value of a postChat function and the newChat message as your argument to the function. This will associate with a function on your controller that runs on submit.

* In your controller, create a new function with the name $scope.postChat. Inside the function, invoke a function residing in your service file. This might look like this `mainServ.postChat(chat);`. Don't forget to look at your end point on the backend to determine structure of your new message.

* In your service, create a new function with the appropriate name. Remember, a service is essentially a Constructor function. So when creating function variables, be sure to use the 'this' keyword. In the function, return a $http API method with a promise that returns the response. If your API request is working properly, it should come back successful with your most recent message addition.

* In order to see all of the data on the view, we should set up a GET request. Create a function in your controller that associates with a function on your service file. The service file function should run a $http GET request. Return the response in a .then promise.

* In your controller function, setup a promise that associates a $scope variable that represents all of the chat messages with the data in the response. You may need to consider scope when deciding where to establish the $scope variable.

* If your API request is working properly, it should be returning the data from the response back to your controller. In your controller, if you have assigned the response to a $scope variable, you can display your data on the view. You can do so by using double curly brackets and the $scope variable name like this `{{chats}}`. But, this isn't going to work very well, because this will display the entire array of chats. Let's fix that by using the ng-repeat directive. Similar to how a for/in loop works, you will set it up in a parent div by stating it as `ng-repeat="chat in chats"`. Inside that div, you can use double curly brackets and the chat variable to display your data. If you have it set up so that you want to display just the body of the chat, you can use this syntax `{{chat.body}}`. This represents one template of the map function. When this code is rendered, it will show all of your data.

* So far, we have an input for adding new chat messages and a place to display those chats. If you would like to go further, feel free to clear all messages by using a clear all button that runs a function using the ng-click directive. If you would like to change messages or anything else, please dig deeper. However, this is where my instruction will end.

* Congrats! You have just finished your first Angular app.

* You can test your app's functionality by by using your local IP address and share it with a partner. Don't forget to include your port number.

##Continued Practice

If you have more time, style your app or add some new functionality using this link to [Angular Docs](https://docs.angularjs.org/api).

##Copyright

(c) Montana Code School, 2016.
