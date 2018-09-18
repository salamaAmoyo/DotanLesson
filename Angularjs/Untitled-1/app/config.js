(function(){
    
  var app=angular.module("app",[]);
    app.controller("mainCtrl",mainCtrl);
    
    function mainCtrl(){
        var main=this;
        main.title="hello guzs!!";
        main.car={
            model:"toyota",
            color:"black",
            year:2011
        }
        main.showColor=function(){
            alert(main.car.model)
        }
        
           main.showModel=function(car){
            alert(main.car.color)
        }
              main.showYear=function(year){
            alert(main.car.year)
              }
    }
})(); 

