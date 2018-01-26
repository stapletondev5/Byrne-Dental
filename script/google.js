function myMap() {
var mapProp= {
    center:new google.maps.LatLng(53.373562,-6.362797),
    zoom:12,
    mapTypeId: google.maps.MapTypeId.HYBRID
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({
		position:mapProp.center

})
	marker.setMap(map)
}
