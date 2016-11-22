class locationModule {
     isEnabled(){
    	 if ("geolocation" in navigator) {
              console.log(" geolocation IS available");
        } else {
            console.log(" geolocation IS NOT available");
        }
    }
     location(){

    	navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position.coords.latitude, position.coords.longitude);
            });
    }

}
export = locationModule;