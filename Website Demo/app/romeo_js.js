var months = ["jan", "feb", "mar", "apr"];

$(document).ready(function(){
  //click doesn't work as a function if the mouse leaves the area of the slider!!

  for(var i = 0; i < months.length; i++){
      $("#date_month_A").html($("#date_month_A").html() + "<option value=\""+i+"\">"+months[i]+"</option>")
      $("#date_month_B").html($("#date_month_B").html() + "<option value=\""+i+"\">"+months[i]+"</option>")
  }

  //2016 should be chnaged to the systems date
  //1990 should be system dtae - X
  //X needs to be defined
  for(var i = 2016; i > 1990; i--){
      $("#date_year_A").html($("#date_year_A").html() + "<option value=\""+i+"\">"+i+"</option>")
      $("#date_year_B").html($("#date_year_B").html() + "<option value=\""+i+"\">"+i+"</option>")
  }

});



angular.module('appMaps', ['uiGmapgoogle-maps'])
    .controller('mainCtrl', function($scope) {
        $scope.map = {center: {latitude: 35.5000, longitude: 39.3000}, zoom: 7, bounds: {}};
        $scope.bounds =  {
            sw: {
                latitude: 35.5000,
                longitude: 35.5000
            },
            ne: {
                latitude: 36.773804,
                longitude: 36.773804
            }
        
	  
		
		};
		$scope.options = {scrollwheel: false};
		$scope.options = {disableDefaultUI: true}; //true removes satellite, hybird, terrain and all extra features
		
		//toggle advanced search
  $scope.advancedSearchToggle = false;
  
 
  $scope.collapseOrExpandAdvancedSearch = function(){
    $scope.advancedSearchToggle = !$scope.advancedSearchToggle;
  }
    });




