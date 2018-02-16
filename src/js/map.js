// Map 
ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [61.262039, 73.381467],
        zoom: 14
    });

    myPlacemark = new ymaps.Placemark([61.262209, 73.381537], {     	
    }, {
    	iconLayout: 'default#image',
    	iconImageHref: 'img/svg/map-locate.svg',
    	iconImageSize: [41, 54],
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('rulerControl');
};