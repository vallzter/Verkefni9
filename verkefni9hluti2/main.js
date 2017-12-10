
$.ajax({                                                                                     
  'url': 'http://apis.is/earthquake/is',//næ í kóða frá apis
  'type': 'GET',
  'dataType': 'json',
  'success': function(data) {
    console.log(data);
    setMarker(data);                                                                         
  }
});

function initMap(){                                                                          
  map = new google.maps.Map(document.getElementById('map'), {                                
    zoom: 7,                                                                                 
    center: new google.maps.LatLng(64.772827,-19.415293)//síðan opnast með þessi hnit sem miðpunktinn                                 
    });
}