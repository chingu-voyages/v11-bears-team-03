class CustomMap {
  constructor(mountPoint, zoom = 20, center = { lat: 0, lng: 0 }) {
    this.googleMap = new google.maps.Map(mountPoint, {
      zoom,
      center
    });
  }

  addMarker({ location = { lat: 0, lng: 0 }, label = '', content = '' }) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: location,
      clickable: true,
      label
    });

    const infoWindow = new google.maps.InfoWindow({
      content
    });

    marker.addEventListner('click', () =>
      infoWindow.open(this.googleMap, marker)
    );
  }
}

export default CustomMap;
