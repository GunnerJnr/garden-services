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

function InitialiseMap() {
	// leaflet map properties
	var myMap = L.map("mapid").setView([51.4034111, -0.460476], 15);

	// use mapbox to display map imagery
	L.tileLayer(
		"https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
		{
			attribution:
				'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: "mapbox.streets",
			accessToken:
				"pk.eyJ1IjoiZ3VubmVyam5yIiwiYSI6ImNqeTA1ZXNyejA5ZmUzY2w0anFzamU0NGkifQ.U62vXv3Ae82zq1GaBWq6jg"
		}
	).addTo(myMap);

	var greenIcon = L.icon({
		iconUrl: "../images/logo-pin-icon.png",
		shadowUrl: "../images/logo-pin-shadow-icon.png",

		iconSize: [64, 64], // size of the icon
		shadowSize: [64, 64], // size of the shadow
		iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62], // the same for the shadow
		popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
	});

	// create a pin marker to show where we are located
	var marker = L.marker([51.4034111, -0.460476], { icon: greenIcon }).addTo(
		myMap
	);

	// the info to be displayed if the user clicks the pin
	marker
		.bindPopup(
			'<div class="info"><strong>Garden Services</strong><br><br>We are located here in <br> Shepperton, Middlesex</div>'
		)
		.openPopup();
}

InitialiseMap();
