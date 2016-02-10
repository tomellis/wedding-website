    map = new OpenLayers.Map("mapdiv-ceremony");
    map.addLayer(new OpenLayers.Layer.OSM());
    var lonLat = new OpenLayers.LonLat(-0.19098,51.45732)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
    var zoom=17;
    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
//    var size = new OpenLayers.Size(21, 25);
//    var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
//var icon = new OpenLayers.Icon('http://www.thomasandnikki.com/assets/js/maps/marker.png', size, offset);
//    markers.addMarker(new OpenLayers.Marker(lonLat),icon);
    markers.addMarker(new OpenLayers.Marker(lonLat));
    map.setCenter (lonLat, zoom);

    map = new OpenLayers.Map("mapdiv-reception");
    map.addLayer(new OpenLayers.Layer.OSM());
    var lonLat = new OpenLayers.LonLat(-0.1658451,51.4260951)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
    var zoom=18;
    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(lonLat));
    map.setCenter (lonLat, zoom);
