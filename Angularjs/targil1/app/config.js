(function () {
	var app = angular.module("app", []);
	app.controller("mainCtrl", mainCtrl);

	function mainCtrl() {
		var main = this;
		main.person={
		   fName:"dotan",
		   lName:"talitman",
		   address:"haifa",
		   img:"dotan.jpg"
			
		}
		
	}
})();