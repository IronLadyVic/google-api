//google map


function initialize(){

	var mapLocation = new google.maps.LatLng(-36.875602, 174.757133);
	var mapStyles = [{
		stylers:[
			{hue: "#468C00"},
			{saturation: -50}
			]
	}];

	var markerStyles =[{
		stylers:[
		{hue: "#00205F"},
		{saturation: -50}
		]
	}]
	
	var mapOptions ={
		zoom: 17,
		center: mapLocation,
		styles: mapStyles

	}
	

	var map = new google.maps.Map(document.getElementById('flex-google'), mapOptions);

//geo position

var request = {address: "Mt Eden Swimming Club, Auckland"};
var geocoder = new google.maps.Geocoder();

geocoder.geocode(request,function(results,status){

	console.log(results);
	console.log(status);

	if(status == 'OK'){

		var destination = results[0].geometry.location;
		map.setCenter(destination);

		//desitination marker
		var destinationMarker = new google.maps.Marker({map:map});
		destinationMarker.setPosition(destination);

}


});



	// var logoMarker = 'img/Laser-Mt-Eden.png';

	var marker = new google.maps.Marker({
		position: mapLocation,
		map: map,
		styles: markerStyles,
		animation: google.maps.Animation.DROP,
		position: mapLocation,
		// icon: logoMarker
		// title: 'Laser Mt Eden Swim Club'
		
	});
	google.maps.event.addListener(marker,'click',toggleBounce);
}



//animate the marker

function toggleBounce(){

	if(marker.getAnimation() != null){
		marker.setAnimation(null);
	}else{
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

google.maps.event.addDomListener(window,'load',initialize);



