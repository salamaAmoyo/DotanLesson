(function(){
    
  var app=angular.module("app",[]);
    app.controller("mainCtrl",mainCtrl);
    
    function mainCtrl(){
        var passport=this;
        passport.id={
            firstName:"Salama",
            lastName:"Amoyo",
            gender:"Male",
            src:"img/2.jpg",
    
        }
      passport.toggleFname=function(){
          person.id.firstName="hello"
          
      }
    }
})(); 
