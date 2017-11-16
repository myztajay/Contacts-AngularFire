'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [ '$scope', '$firebaseArray', function($scope, $firebaseArray) {
  // just for demo purpose this database reference will be replaces to an external private file
  if (!firebase.apps.length) {
    var config = {
    apiKey: "AIzaSyBIGGuU_CsX_wY_1SVye0KVW1EJj4Ha2Vc",
    authDomain: "contacts-angularfire.firebaseapp.com",
    databaseURL: "https://contacts-angularfire.firebaseio.com",
    projectId: "contacts-angularfire",
    storageBucket: "contacts-angularfire.appspot.com",
    messagingSenderId: "470332230879"
    };
    firebase.initializeApp(config);
  }
  $scope.loginFormShow = false;
  $scope.signUpFormShow = true;
  $scope.error = '';
  
  $scope.signUp = function(){
      console.log("this is email field: ",$scope.email);
      firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password)
  }

  
  
  // $scope.login = function(){
  //   firebase.$authWithOAuthPopup("facebook").then(function(authData) {
  //   console.log("Logged in as:", authData.uid);
  // }).catch(function(error) {
  //   console.error("Authentication failed:", error);
  // });
  // }
  
  //reference json that holds contacts
  // var ref = firebase.database().ref().child('contactlist');
  //angularfire provides json to array conversion with $firebaseArray
  // $scope.contacts = $firebaseArray(ref);
  
  // $scope.addFormShow = true;
  // $scope.editFormShow = false;
  //Create
  // $scope.addContact = function(){
  //   ref.push({
  //     name: $scope.name,
  //     email: $scope.email,
  //     phone: $scope.phone
  //   });
  //   $scope.name = '';
  //   $scope.email = '';
  //   $scope.phone= '';
  // };
  // //Delete
  // $scope.removeContact = function(contact){
  //   $scope.contacts.$remove(contact);
  // }
  // // Show Form
  // $scope.showEditForm = function(contact){
  //   // angularfire $id get id of record
  //   $scope.id = contact.$id;
  //   $scope.addFormShow = false;
  //   $scope.editFormShow = true;
  //   $scope.name = contact.name;
  //   $scope.email = contact.email;
  //   $scope.phone = contact.phone;
  // }
  // //Update
  // $scope.editContact = function(contact){
  //   var id = $scope.id
  //   var record = $scope.contacts.$getRecord(id);  
  //   record.name = $scope.name;
  //   record.email = $scope.email;
  //   record.phone = $scope.phone;
  // 
  //   $scope.contacts.$save(record).then(function(ref){  
  //   })
  //   $scope.name = '';
  //   $scope.email = '';
  //   $scope.phone= '';
  // }
}]);