function initMap() {
    let location = {lat: 34.618721, lng: -89.964546 };
    let markerOne = {lat: 36.158578, lng: -86.779040 };
    let markerTwo = {lat: 32.325070, lng: -96.626604 };
    let viewMapOne = document.getElementById('view-map-one');
    let viewMapTwo = document.getElementById('view-map-two');
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: location
    });
    const contentStringOne = '<h3 class="dark-blue">Main Office</h3>';
    const infowindowOne = new google.maps.InfoWindow({
        content: contentStringOne,
    });
    const contentStringTwo = '<h3 class="dark-blue">Office II</h3>';
    const infowindowTwo = new google.maps.InfoWindow({
        content: contentStringTwo,
    });
    let markerVarOne = new google.maps.Marker({
        position: markerOne,
        map: map
    });
    let markerVarTwo = new google.maps.Marker({
        position: markerTwo,
        map: map,
    });
    markerVarOne.addListener("click", () => {
        infowindowOne.open(map, markerVarOne);
    });
    markerVarTwo.addListener("click", () => {
        infowindowTwo.open(map, markerVarTwo);
    });
    markerVarOne.addListener("click", () => {
        map.setZoom(16);
        map.setCenter(markerVarOne.getPosition());
    });
    markerVarTwo.addListener("click", () => {
        map.setZoom(16);
        map.setCenter(markerVarTwo.getPosition());
    });
    viewMapOne.addEventListener('click', () => {
        map.setZoom(16);
        map.setCenter(markerVarOne.getPosition());
    });
    viewMapTwo.addEventListener('click', () => {
        map.setZoom(16);
        map.setCenter(markerVarTwo.getPosition());
    });
}