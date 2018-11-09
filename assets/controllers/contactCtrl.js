(function(){
    
    "use strict";
    
    angular
        .module("palacePharmacy")
        .controller("contactCtrl",  function($scope) {
            
        
        console.log("In contact controller");
        
      
    
        
        
        $scope.initGoogleMaps = function() {
          
       
        var myLatlng = new google.maps.LatLng(5.566839, -0.179391);
        var mapOptions = {
          zoom: 18,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

        }
        
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
            
        
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Palace Pharmacy"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
            
        console.log("calling initGoogleMaps");
    }
   
        
        // function to submit the form after all validation has occurred            
        $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
        }
            
    };


    
        $scope.initGoogleMaps();
    
});
})();