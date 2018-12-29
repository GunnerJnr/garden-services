$(document).ready(function() {
	$("#home").height($(window).height());

	$(".navbar a, .btn").click(function() {
		$("body,html").animate(
			{ scrollTop: $($.attr(this, "href")).offset().top - 56 },
			1000
		);
		return false;
	});
});

function initMap() {
	// Create a Latitude, Longitude object, this object will contain the co-ordinates for the center of the map.
	// Currently set to Luton in Surrey, UK.
	var latlng = new google.maps.LatLng(51.386776, -0.408538);

	// Define the properties for the map.
	var mapOptions = {
		zoom: 15,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		navigationControl: true,
		mapTypeControl: false,
		scrollwheel: true,
		disableDoubleClickZoom: false
	};

	// Initialise the map object.
	var map = new google.maps.Map(
		document.getElementById("google_map"),
		mapOptions
	);

	// This adds our marker to the map of where we wish to display our location.
	var locationMarker = new google.maps.Marker({
		position: latlng,
		map: map
	});

	// Here add a listener to see if a user clicks on the pin,
	// If they do then we want to display the below information window to them.
	google.maps.event.addListener(locationMarker, "click", function() {
		infowindow.open(map, locationMarker);
	});

	// Finally, we add the information window to display, when the user
	// clicks the location marker pin.
	var infowindow = new google.maps.InfoWindow({
		content:
			'<div class="info"><strong>Gardening Services</strong><br><br>We are located here in <br> Surrey, London</div>'
	});
}
